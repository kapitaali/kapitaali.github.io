package com.dhsdevelopments.kap.standalonejs

import com.dhsdevelopments.kap.registeredFilesRoot
import kotlinx.browser.window
import org.w3c.xhr.XMLHttpRequest
import kotlin.js.Promise

fun main() {
    window.onload = {
        loadLibraries()
    }
}

var numOutstandingRequests = 0

fun loadLibraries() {
    loadLibFiles(
        "standard-lib/standard-lib.kap",
        "standard-lib/structure.kap",
        "standard-lib/base-functions.kap",
        "standard-lib/math.kap",
        "standard-lib/math-kap.kap",
        "standard-lib/io.kap",
        "standard-lib/http.kap",
        "standard-lib/output.kap",
        "standard-lib/output3.kap",
        "standard-lib/time.kap",
        "standard-lib/regex.kap",
        "standard-lib/util.kap",
        "standard-lib/map.kap")
}

private fun loadLibFiles(vararg names: String) {
    numOutstandingRequests = names.size
    names.forEach { name ->
        val http = XMLHttpRequest()
        http.open("GET", name)
        http.onload = {
            if (http.readyState == 4.toShort() && http.status == 200.toShort()) {
                registeredFilesRoot.registerFile(name, http.responseText.encodeToByteArray())
            } else {
                console.log("Error loading library file: ${name}. Code: ${http.status}")
            }
            if (--numOutstandingRequests == 0) {
                renderClient()
            }
        }
        http.send()
    }
}

private val pendingCallbacks = ArrayList<() -> Unit>()
private var clientStarted = false

@OptIn(ExperimentalJsExport::class)
private fun renderClient() {
    if (clientStarted) {
        throw IllegalStateException("Client already started")
    }
    clientStarted = true
    console.log("Engine has been started")
    pendingCallbacks.forEach { callback ->
        callback()
    }
}


@ExperimentalJsExport
@JsExport
fun createEngine(): Promise<EngineJsWrapper> {
    return Promise { resolve, reject ->
        if (clientStarted) {
            resolve(EngineJsWrapper())
        } else {
            waitForLoad {
                resolve(EngineJsWrapper())
            }
        }
    }
}

private fun waitForLoad(fn: () -> Unit) {
    if (clientStarted) {
        throw IllegalStateException("Client already started")
    }
    pendingCallbacks.add(fn)
}
