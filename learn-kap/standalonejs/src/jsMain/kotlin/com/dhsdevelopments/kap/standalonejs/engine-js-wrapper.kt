package com.dhsdevelopments.kap.standalonejs

import com.dhsdevelopments.kap.Engine
import com.dhsdevelopments.kap.StringSourceLocation

@ExperimentalJsExport
@JsExport
class EngineJsWrapper() {
    private val engine: Engine

    init {
        engine = Engine()
        engine.addLibrarySearchPath("/standard-lib")
        engine.parseAndEval(StringSourceLocation("use(\"standard-lib.kap\")"))
    }

    fun close() {
        engine.close()
    }

    fun addLibrarySearchPath(path: String) {
        engine.addLibrarySearchPath(path)
    }

    fun parseAndEval(expr: String): JsKapValue {
        val result = engine.parseAndEval(StringSourceLocation(expr))
        return JsKapValue.makeJsKapValue(result)
    }
}
