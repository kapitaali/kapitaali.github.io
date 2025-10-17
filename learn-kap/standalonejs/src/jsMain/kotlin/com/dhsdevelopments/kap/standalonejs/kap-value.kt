package com.dhsdevelopments.kap.standalonejs

import com.dhsdevelopments.kap.*
import com.dhsdevelopments.kap.builtins.MAX_INT_DOUBLE
import com.dhsdevelopments.kap.builtins.MIN_INT_DOUBLE
import com.dhsdevelopments.mpbignum.rangeInLong
import com.dhsdevelopments.mpbignum.toLong

@ExperimentalJsExport
@JsExport
enum class JsKapValueType {
    INTEGER,
    BIGINT,
    DOUBLE,
    COMPLEX,
    RATIONAL,
    CHAR,
    INTERNAL,
    ARRAY
}

@ExperimentalJsExport
@JsExport
class JsKapValue private constructor(val value: APLValue) {
    fun type(): JsKapValueType = if (value is APLSingleValue) {
        when (value) {
            is APLLong -> {
                if (value.value in MIN_INT_DOUBLE..MAX_INT_DOUBLE) {
                    JsKapValueType.INTEGER
                } else {
                    JsKapValueType.BIGINT
                }
            }
            is APLBigInt -> {
                if (value.value.rangeInLong() && value.value.toLong() in MIN_INT_DOUBLE..MAX_INT_DOUBLE) {
                    JsKapValueType.INTEGER
                } else {
                    JsKapValueType.BIGINT
                }
            }
            is APLDouble -> {
                JsKapValueType.DOUBLE
            }
            is APLComplex -> {
                JsKapValueType.COMPLEX
            }
            is APLRational -> {
                JsKapValueType.RATIONAL
            }
            is APLChar -> {
                JsKapValueType.CHAR
            }
            else -> {
                JsKapValueType.INTERNAL
            }
        }
    } else {
        JsKapValueType.ARRAY
    }

    fun dimensions(): IntArray = value.dimensions.let { d0 -> IntArray(d0.size) { i -> d0[i] } }
    fun valueAt(index: Int): JsKapValue = JsKapValue(value.valueAt(index))
    fun formatted(): String = value.formatted(FormatStyle.PLAIN)

    fun isComplex() = value is APLComplex
    fun isReal() = value is APLLong || value is APLBigInt || value is APLDouble || value is APLRational
    fun isChar() = value is APLChar
    fun isStringValue() = value.isStringValue()

    fun asBigInt() = value.ensureNumber().asBigInt()
    fun asDouble() = value.ensureNumber().asDouble()
    fun asRational() = value.ensureNumber().asRational().let { v -> arrayOf(v.numerator.impl, v.denominator.impl) }
    fun asChar() = charToString(value.ensureChar().value)
    fun asString() = value.toStringValueOrNull()

    companion object {
        @JsExport.Ignore
        fun makeJsKapValue(value: APLValue): JsKapValue {
            return JsKapValue(value)
        }
    }
}
