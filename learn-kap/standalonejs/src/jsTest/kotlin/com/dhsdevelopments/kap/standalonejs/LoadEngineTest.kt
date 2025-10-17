package com.dhsdevelopments.kap.standalonejs

import com.dhsdevelopments.kap.APLTest
import com.dhsdevelopments.kap.StringSourceLocation
import com.dhsdevelopments.kap.jsNativeData
import kotlin.test.Test
import kotlin.test.assertNull

class LoadEngineTest : APLTest() {
    @Test
    fun simpleEvalTest() {
        val engine = makeEngine()
        val nativeData = engine.jsNativeData()
        // We don't use a transfer queue in standalone mode
        assertNull(nativeData.jsTransferQueue)
        val result = engine.parseAndEval(StringSourceLocation("1+2+3+4"))
        assertSimpleNumber(10, result)
    }
}
