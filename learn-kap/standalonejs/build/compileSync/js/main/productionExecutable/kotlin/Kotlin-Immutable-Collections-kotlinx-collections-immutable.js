(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Immutable-Collections-kotlinx-collections-immutable'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-Immutable-Collections-kotlinx-collections-immutable'.");
    }
    globalThis['Kotlin-Immutable-Collections-kotlinx-collections-immutable'] = factory(typeof globalThis['Kotlin-Immutable-Collections-kotlinx-collections-immutable'] === 'undefined' ? {} : globalThis['Kotlin-Immutable-Collections-kotlinx-collections-immutable'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.d7;
  var KtMap = kotlin_kotlin.$_$.p2;
  var initMetadataForInterface = kotlin_kotlin.$_$.r6;
  var VOID = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.fa;
  var isInterface = kotlin_kotlin.$_$.v6;
  var putAll = kotlin_kotlin.$_$.v4;
  var Unit_instance = kotlin_kotlin.$_$.g2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q6;
  var equals = kotlin_kotlin.$_$.i6;
  var AbstractMap = kotlin_kotlin.$_$.h2;
  var hashCode = kotlin_kotlin.$_$.o6;
  var initMetadataForClass = kotlin_kotlin.$_$.p6;
  var AbstractMutableMap = kotlin_kotlin.$_$.j2;
  var KtMutableMap = kotlin_kotlin.$_$.t2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.v;
  var MutableEntry = kotlin_kotlin.$_$.s2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var AbstractMutableSet = kotlin_kotlin.$_$.k2;
  var KtSet = kotlin_kotlin.$_$.u2;
  var MutableCollection = kotlin_kotlin.$_$.q2;
  var Entry = kotlin_kotlin.$_$.o2;
  var toString = kotlin_kotlin.$_$.ua;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var AbstractSet = kotlin_kotlin.$_$.l2;
  var Collection = kotlin_kotlin.$_$.n2;
  var objectCreate = kotlin_kotlin.$_$.c7;
  var copyOf = kotlin_kotlin.$_$.o3;
  var until = kotlin_kotlin.$_$.p7;
  var step = kotlin_kotlin.$_$.o7;
  var countOneBits = kotlin_kotlin.$_$.ia;
  var takeLowestOneBit = kotlin_kotlin.$_$.ra;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var arrayCopy = kotlin_kotlin.$_$.x2;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var initMetadataForObject = kotlin_kotlin.$_$.s6;
  var toString_0 = kotlin_kotlin.$_$.g7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.u;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(PersistentMap, 'PersistentMap', VOID, VOID, [KtMap]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(PersistentHashMap, 'PersistentHashMap', VOID, AbstractMap, [AbstractMap, PersistentMap]);
  initMetadataForClass(PersistentHashMapBuilder, 'PersistentHashMapBuilder', VOID, AbstractMutableMap, [KtMutableMap, AbstractMutableMap]);
  initMetadataForClass(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator');
  initMetadataForClass(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator');
  initMetadataForClass(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', VOID, PersistentHashMapBuilderBaseIterator);
  initMetadataForClass(TrieNodeBaseIterator, 'TrieNodeBaseIterator');
  initMetadataForClass(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', VOID, TrieNodeBaseIterator);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(MutableMapEntry, 'MutableMapEntry', VOID, MapEntry, [MapEntry, MutableEntry]);
  initMetadataForClass(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', VOID, AbstractMutableSet);
  initMetadataForClass(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', VOID, AbstractMapBuilderEntries);
  initMetadataForClass(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', VOID, AbstractMutableSet, [KtSet, MutableCollection, AbstractMutableSet]);
  initMetadataForClass(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(TrieNodeKeysIterator, 'TrieNodeKeysIterator', TrieNodeKeysIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', TrieNodeEntriesIterator, TrieNodeBaseIterator);
  initMetadataForClass(PersistentHashMapKeys, 'PersistentHashMapKeys', VOID, AbstractSet, [Collection, KtSet, AbstractSet]);
  initMetadataForClass(PersistentHashMapEntries, 'PersistentHashMapEntries', VOID, AbstractSet, [Collection, KtSet, AbstractSet]);
  initMetadataForClass(ModificationResult, 'ModificationResult');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(TrieNode, 'TrieNode');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(PersistentOrderedMap, 'PersistentOrderedMap', VOID, AbstractMap, [AbstractMap, PersistentMap]);
  initMetadataForClass(LinkedValue, 'LinkedValue');
  initMetadataForClass(PersistentOrderedMapBuilder, 'PersistentOrderedMapBuilder', VOID, AbstractMutableMap, [AbstractMutableMap, KtMutableMap]);
  initMetadataForClass(PersistentOrderedMapBuilderEntriesIterator, 'PersistentOrderedMapBuilderEntriesIterator');
  initMetadataForClass(PersistentOrderedMapBuilderKeysIterator, 'PersistentOrderedMapBuilderKeysIterator');
  initMetadataForClass(PersistentOrderedMapBuilderLinksIterator, 'PersistentOrderedMapBuilderLinksIterator');
  initMetadataForClass(MutableMapEntry_0, 'MutableMapEntry', VOID, MapEntry, [MapEntry, MutableEntry]);
  initMetadataForClass(PersistentOrderedMapBuilderEntries, 'PersistentOrderedMapBuilderEntries', VOID, AbstractMapBuilderEntries);
  initMetadataForClass(PersistentOrderedMapBuilderKeys, 'PersistentOrderedMapBuilderKeys', VOID, AbstractMutableSet, [KtSet, MutableCollection, AbstractMutableSet]);
  initMetadataForClass(PersistentOrderedMapKeysIterator, 'PersistentOrderedMapKeysIterator');
  initMetadataForClass(PersistentOrderedMapEntriesIterator, 'PersistentOrderedMapEntriesIterator');
  initMetadataForClass(PersistentOrderedMapLinksIterator, 'PersistentOrderedMapLinksIterator');
  initMetadataForClass(PersistentOrderedMapKeys, 'PersistentOrderedMapKeys', VOID, AbstractSet, [Collection, KtSet, AbstractSet]);
  initMetadataForClass(PersistentOrderedMapEntries, 'PersistentOrderedMapEntries', VOID, AbstractSet, [Collection, KtSet, AbstractSet]);
  initMetadataForObject(EndOfChain, 'EndOfChain');
  initMetadataForObject(MapImplementation, 'MapImplementation');
  initMetadataForClass(MutabilityOwnership, 'MutabilityOwnership', MutabilityOwnership);
  initMetadataForClass(DeltaCounter, 'DeltaCounter', DeltaCounter);
  //endregion
  function PersistentMap() {
  }
  function persistentMapOf() {
    return Companion_getInstance_1().r10();
  }
  function persistentHashMapOf(pairs) {
    // Inline function 'kotlinx.collections.immutable.mutate' call
    var this_0 = Companion_getInstance().r10();
    // Inline function 'kotlin.apply' call
    var this_1 = (isInterface(this_0, PersistentMap) ? this_0 : THROW_CCE()).p10();
    // Inline function 'kotlin.collections.plusAssign' call
    putAll(this_1, pairs);
    return this_1.vn();
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion() {
    Companion_instance = this;
    this.s10_1 = new PersistentHashMap(Companion_getInstance_0().t10_1, 0);
  }
  protoOf(Companion).r10 = function () {
    var tmp = this.s10_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PersistentHashMap$equals$lambda(a, b) {
    return equals(a, b.u10_1);
  }
  function PersistentHashMap$equals$lambda_0(a, b) {
    return equals(a, b.u10_1);
  }
  function PersistentHashMap$equals$lambda_1(a, b) {
    return equals(a, b);
  }
  function PersistentHashMap$equals$lambda_2(a, b) {
    return equals(a, b);
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance();
    AbstractMap.call(this);
    this.z10_1 = node;
    this.a11_1 = size;
  }
  protoOf(PersistentHashMap).n = function () {
    return this.a11_1;
  };
  protoOf(PersistentHashMap).b2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).c2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).y1 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.z10_1.f11(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).a2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.z10_1.g11(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).j2 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.z10_1.h11(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.i11_1, this.a11_1 + newNodeResult.j11_1 | 0);
  };
  protoOf(PersistentHashMap).k2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.z10_1.k11(tmp$ret$0, key, 0);
    if (this.z10_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance().r10();
    }
    return new PersistentHashMap(newNode, this.a11_1 - 1 | 0);
  };
  protoOf(PersistentHashMap).o10 = function (m) {
    if (m.o())
      return this;
    // Inline function 'kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = (isInterface(this, PersistentMap) ? this : THROW_CCE()).p10();
    this_0.l2(m);
    return this_0.vn();
  };
  protoOf(PersistentHashMap).p10 = function () {
    return new PersistentHashMapBuilder(this);
  };
  protoOf(PersistentHashMap).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtMap) : false))
      return false;
    if (!(this.a11_1 === other.n()))
      return false;
    var tmp;
    if (other instanceof PersistentOrderedMap) {
      tmp = this.z10_1.v11(other.i12_1.z10_1, PersistentHashMap$equals$lambda);
    } else {
      if (other instanceof PersistentOrderedMapBuilder) {
        var tmp_0 = other.d12_1.r11_1;
        tmp = this.z10_1.v11(tmp_0, PersistentHashMap$equals$lambda_0);
      } else {
        if (other instanceof PersistentHashMap) {
          tmp = this.z10_1.v11(other.z10_1, PersistentHashMap$equals$lambda_1);
        } else {
          if (other instanceof PersistentHashMapBuilder) {
            var tmp_1 = other.r11_1;
            tmp = this.z10_1.v11(tmp_1, PersistentHashMap$equals$lambda_2);
          } else {
            tmp = protoOf(AbstractMap).equals.call(this, other);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(PersistentHashMap).hashCode = function () {
    return protoOf(AbstractMap).hashCode.call(this);
  };
  function PersistentHashMapBuilder$equals$lambda(a, b) {
    return equals(a, b);
  }
  function PersistentHashMapBuilder$equals$lambda_0(a, b) {
    return equals(a, b);
  }
  function PersistentHashMapBuilder$equals$lambda_1(a, b) {
    return equals(a, b.u10_1);
  }
  function PersistentHashMapBuilder$equals$lambda_2(a, b) {
    return equals(a, b.u10_1);
  }
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.p11_1 = map;
    this.q11_1 = new MutabilityOwnership();
    this.r11_1 = map.z10_1;
    this.s11_1 = null;
    this.t11_1 = 0;
    this.u11_1 = map.a11_1;
  }
  protoOf(PersistentHashMapBuilder).j12 = function (value) {
    if (!(value === this.r11_1)) {
      this.r11_1 = value;
      this.p11_1 = null;
    }
  };
  protoOf(PersistentHashMapBuilder).k12 = function (value) {
    this.u11_1 = value;
    this.t11_1 = this.t11_1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).n = function () {
    return this.u11_1;
  };
  protoOf(PersistentHashMapBuilder).vn = function () {
    var tmp0_elvis_lhs = this.p11_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      var newlyBuiltMap = new PersistentHashMap(this.r11_1, this.u11_1);
      this.p11_1 = newlyBuiltMap;
      this.q11_1 = new MutabilityOwnership();
      tmp = newlyBuiltMap;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PersistentHashMapBuilder).c2 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).b2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).y1 = function (key) {
    var tmp = this.r11_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.f11(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).a2 = function (key) {
    var tmp = this.r11_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.g11(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).j2 = function (key, value) {
    this.s11_1 = null;
    var tmp = this.r11_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    this.j12(tmp.l12(tmp$ret$0, key, value, 0, this));
    return this.s11_1;
  };
  protoOf(PersistentHashMapBuilder).l2 = function (from) {
    if (from.o())
      return Unit_instance;
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vn();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.u11_1;
      var tmp_0 = this.r11_1;
      var tmp_1 = map.z10_1;
      this.j12(tmp_0.m12(tmp_1 instanceof TrieNode ? tmp_1 : THROW_CCE(), 0, intersectionCounter, this));
      var newSize = (oldSize + map.a11_1 | 0) - intersectionCounter.n12_1 | 0;
      if (!(oldSize === newSize)) {
        this.k12(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).l2.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).k2 = function (key) {
    this.s11_1 = null;
    var tmp = this.r11_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp.o12(tmp$ret$0, key, 0, this);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp_1 = Companion_getInstance_0().t10_1;
      tmp_0 = tmp_1 instanceof TrieNode ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    this.j12(tmp_0);
    return this.s11_1;
  };
  protoOf(PersistentHashMapBuilder).p12 = function (key, value) {
    var oldSize = this.u11_1;
    var tmp = this.r11_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp.q12(tmp$ret$0, key, value, 0, this);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp_1 = Companion_getInstance_0().t10_1;
      tmp_0 = tmp_1 instanceof TrieNode ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    this.j12(tmp_0);
    return !(oldSize === this.u11_1);
  };
  protoOf(PersistentHashMapBuilder).f2 = function () {
    var tmp = Companion_getInstance_0().t10_1;
    this.j12(tmp instanceof TrieNode ? tmp : THROW_CCE());
    this.k12(0);
  };
  protoOf(PersistentHashMapBuilder).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtMap) : false))
      return false;
    if (!(this.u11_1 === other.n()))
      return false;
    var tmp;
    if (other instanceof PersistentHashMap) {
      var tmp_0 = this.r11_1;
      tmp = tmp_0.v11(other.z10_1, PersistentHashMapBuilder$equals$lambda);
    } else {
      if (other instanceof PersistentHashMapBuilder) {
        var tmp_1 = this.r11_1;
        var tmp_2 = other.r11_1;
        tmp = tmp_1.v11(tmp_2, PersistentHashMapBuilder$equals$lambda_0);
      } else {
        if (other instanceof PersistentOrderedMap) {
          var tmp_3 = this.r11_1;
          tmp = tmp_3.v11(other.i12_1.z10_1, PersistentHashMapBuilder$equals$lambda_1);
        } else {
          if (other instanceof PersistentOrderedMapBuilder) {
            var tmp_4 = this.r11_1;
            var tmp_5 = other.d12_1.r11_1;
            tmp = tmp_4.v11(tmp_5, PersistentHashMapBuilder$equals$lambda_2);
          } else {
            tmp = MapImplementation_instance.r12(this, other);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(PersistentHashMapBuilder).hashCode = function () {
    return MapImplementation_instance.s12(this);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(8);
    while (tmp_0 < 8) {
      tmp_1[tmp_0] = new TrieNodeMutableEntriesIterator(this);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.t12_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_1);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).l = function () {
    return this.t12_1.l();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).m = function () {
    return this.t12_1.m();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).f4 = function () {
    return this.t12_1.f4();
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_0);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, 5);
    if (shift > 30) {
      $this.u12_1[pathIndex].i13(node.e11_1, node.e11_1.length, 0);
      while (!equals($this.u12_1[pathIndex].e13(), key)) {
        $this.u12_1[pathIndex].j13();
      }
      $this.v12_1 = pathIndex;
      return Unit_instance;
    }
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (node.m13(keyPositionMask)) {
      var keyIndex = node.k13(keyPositionMask);
      $this.u12_1[pathIndex].i13(node.e11_1, imul(2, node.l13()), keyIndex);
      $this.v12_1 = pathIndex;
      return Unit_instance;
    }
    var nodeIndex = node.n13(keyPositionMask);
    var targetNode = node.o13(nodeIndex);
    $this.u12_1[pathIndex].i13(node.e11_1, imul(2, node.l13()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.c13_1)
      throw IllegalStateException_init_$Create$();
  }
  function checkForComodification($this) {
    if (!($this.a13_1.t11_1 === $this.d13_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.r11_1, path);
    this.a13_1 = builder;
    this.b13_1 = null;
    this.c13_1 = false;
    this.d13_1 = this.a13_1.t11_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).m = function () {
    checkForComodification(this);
    this.b13_1 = this.e13();
    this.c13_1 = true;
    return protoOf(PersistentHashMapBaseIterator).m.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).f4 = function () {
    checkNextWasInvoked(this);
    if (this.l()) {
      var currentKey = this.e13();
      var tmp0 = this.a13_1;
      // Inline function 'kotlin.collections.remove' call
      var key = this.b13_1;
      (isInterface(tmp0, KtMutableMap) ? tmp0 : THROW_CCE()).k2(key);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.a13_1.r11_1, currentKey, 0);
    } else {
      var tmp3 = this.a13_1;
      // Inline function 'kotlin.collections.remove' call
      var key_0 = this.b13_1;
      (isInterface(tmp3, KtMutableMap) ? tmp3 : THROW_CCE()).k2(key_0);
    }
    this.b13_1 = null;
    this.c13_1 = false;
    this.d13_1 = this.a13_1.t11_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.s13_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).m = function () {
    assert(this.t13());
    this.h13_1 = this.h13_1 + 2 | 0;
    var tmp = this.f13_1[this.h13_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.f13_1[this.h13_1 - 1 | 0];
    return new MutableMapEntry(this.s13_1, tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.a14_1 = parentIterator;
    this.b14_1 = value;
  }
  protoOf(MutableMapEntry).x1 = function () {
    return this.b14_1;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.e14_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).f14 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).h = function (element) {
    return this.f14((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).f2 = function () {
    this.e14_1.f2();
  };
  protoOf(PersistentHashMapBuilderEntries).k = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.e14_1);
  };
  protoOf(PersistentHashMapBuilderEntries).n6 = function (element) {
    return this.e14_1.p12(element.w1(), element.x1());
  };
  protoOf(PersistentHashMapBuilderEntries).n = function () {
    return this.e14_1.u11_1;
  };
  protoOf(PersistentHashMapBuilderEntries).m6 = function (element) {
    return MapImplementation_instance.g14(this.e14_1, element);
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.h14_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).r6 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).h = function (element) {
    return this.r6((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).f2 = function () {
    this.h14_1.f2();
  };
  protoOf(PersistentHashMapBuilderKeys).k = function () {
    return new PersistentHashMapBuilderKeysIterator(this.h14_1);
  };
  protoOf(PersistentHashMapBuilderKeys).k2 = function (element) {
    if (this.h14_1.y1(element)) {
      this.h14_1.k2(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).d2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.k2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).n = function () {
    return this.h14_1.u11_1;
  };
  protoOf(PersistentHashMapBuilderKeys).u5 = function (element) {
    return this.h14_1.y1(element);
  };
  protoOf(PersistentHashMapBuilderKeys).s1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.u5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).j6 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.m6(element);
  };
  protoOf(AbstractMapBuilderEntries).s1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.j6((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(AbstractMapBuilderEntries).l6 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.n6(element);
  };
  protoOf(AbstractMapBuilderEntries).d2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.l6((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function MapEntry(key, value) {
    this.c14_1 = key;
    this.d14_1 = value;
  }
  protoOf(MapEntry).w1 = function () {
    return this.c14_1;
  };
  protoOf(MapEntry).x1 = function () {
    return this.d14_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.w1();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.x1();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = (equals(tmp0_safe_receiver.w1(), this.w1()) && equals(tmp0_safe_receiver.x1(), this.x1()));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString(this.w1()) + '=' + toString(this.x1());
  };
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.u12_1[pathIndex].t13()) {
      return pathIndex;
    }
    if ($this.u12_1[pathIndex].v13()) {
      var node = $this.u12_1[pathIndex].w13();
      if (pathIndex === 6) {
        $this.u12_1[pathIndex + 1 | 0].u13(node.e11_1, node.e11_1.length);
      } else {
        $this.u12_1[pathIndex + 1 | 0].u13(node.e11_1, imul(2, node.l13()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.u12_1[$this.v12_1].t13()) {
      return Unit_instance;
    }
    var inductionVariable = $this.v12_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 && $this.u12_1[i].v13()) {
          $this.u12_1[i].x13();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.v12_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.u12_1[i - 1 | 0].x13();
        }
        $this.u12_1[i].u13(Companion_getInstance_0().t10_1.e11_1, 0);
      }
       while (0 <= inductionVariable);
    $this.w12_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.l())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.u12_1 = path;
    this.v12_1 = 0;
    this.w12_1 = true;
    this.u12_1[0].u13(node.e11_1, imul(2, node.l13()));
    this.v12_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).e13 = function () {
    checkHasNext(this);
    return this.u12_1[this.v12_1].e13();
  };
  protoOf(PersistentHashMapBaseIterator).l = function () {
    return this.w12_1;
  };
  protoOf(PersistentHashMapBaseIterator).m = function () {
    checkHasNext(this);
    var result = this.u12_1[this.v12_1].m();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.f13_1 = Companion_getInstance_0().t10_1.e11_1;
    this.g13_1 = 0;
    this.h13_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).i13 = function (buffer, dataSize, index) {
    this.f13_1 = buffer;
    this.g13_1 = dataSize;
    this.h13_1 = index;
  };
  protoOf(TrieNodeBaseIterator).u13 = function (buffer, dataSize) {
    this.i13(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).t13 = function () {
    return this.h13_1 < this.g13_1;
  };
  protoOf(TrieNodeBaseIterator).e13 = function () {
    assert(this.t13());
    var tmp = this.f13_1[this.h13_1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).j13 = function () {
    assert(this.t13());
    this.h13_1 = this.h13_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).v13 = function () {
    assert(this.h13_1 >= this.g13_1);
    return this.h13_1 < this.f13_1.length;
  };
  protoOf(TrieNodeBaseIterator).w13 = function () {
    assert(this.v13());
    var tmp = this.f13_1[this.h13_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).x13 = function () {
    assert(this.v13());
    this.h13_1 = this.h13_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).l = function () {
    return this.t13();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).m = function () {
    assert(this.t13());
    this.h13_1 = this.h13_1 + 2 | 0;
    var tmp = this.f13_1[this.h13_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).m = function () {
    assert(this.t13());
    this.h13_1 = this.h13_1 + 2 | 0;
    var tmp = this.f13_1[this.h13_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.f13_1[this.h13_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.o14_1 = map;
  }
  protoOf(PersistentHashMapKeys).n = function () {
    return this.o14_1.a11_1;
  };
  protoOf(PersistentHashMapKeys).u5 = function (element) {
    return this.o14_1.y1(element);
  };
  protoOf(PersistentHashMapKeys).s1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.u5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).k = function () {
    return new PersistentHashMapKeysIterator(this.o14_1.z10_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.p14_1 = map;
  }
  protoOf(PersistentHashMapEntries).n = function () {
    return this.p14_1.a11_1;
  };
  protoOf(PersistentHashMapEntries).q14 = function (element) {
    return MapImplementation_instance.g14(this.p14_1, element);
  };
  protoOf(PersistentHashMapEntries).s1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.q14((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).k = function () {
    return new PersistentHashMapEntriesIterator(this.p14_1.z10_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.i11_1 = node;
    this.j11_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.c11_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.e11_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.e11_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.k13(positionMask);
    var newBuffer = insertEntryAtIndex($this.e11_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.b11_1 | positionMask, $this.c11_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.k13(positionMask);
    if ($this.d11_1 === owner) {
      $this.e11_1 = insertEntryAtIndex($this.e11_1, keyIndex, key, value);
      $this.b11_1 = $this.b11_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.e11_1, keyIndex, key, value);
    return new TrieNode($this.b11_1 | positionMask, $this.c11_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.e11_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.b11_1, $this.c11_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.d11_1 === mutator.q11_1) {
      $this.e11_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    mutator.t11_1 = mutator.t11_1 + 1 | 0;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.e11_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.b11_1, $this.c11_1, newBuffer, mutator.q11_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.e11_1;
    if (newNodeBuffer.length === 2 && newNode.c11_1 === 0) {
      if ($this.e11_1.length === 1) {
        newNode.b11_1 = $this.c11_1;
        return newNode;
      }
      var keyIndex = $this.k13(positionMask);
      var newBuffer = replaceNodeWithEntry($this.e11_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.b11_1 ^ positionMask, $this.c11_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf($this.e11_1, $this.e11_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.b11_1, $this.c11_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    assert(newNode.d11_1 === owner);
    if ($this.e11_1.length === 1 && newNode.e11_1.length === 2 && newNode.c11_1 === 0) {
      newNode.b11_1 = $this.c11_1;
      return newNode;
    }
    if ($this.d11_1 === owner) {
      $this.e11_1[nodeIndex] = newNode;
      return $this;
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.e11_1.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.b11_1, $this.c11_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.e11_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.e11_1, nodeIndex);
    return TrieNode_init_$Create$($this.b11_1, $this.c11_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.e11_1.length === 1)
      return null;
    if ($this.d11_1 === owner) {
      $this.e11_1 = removeNodeAtIndex_0($this.e11_1, nodeIndex);
      $this.c11_1 = $this.c11_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.e11_1, nodeIndex);
    return new TrieNode($this.b11_1, $this.c11_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.n13(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.e11_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.b11_1 ^ positionMask, $this.c11_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.d11_1 === owner) {
      $this.e11_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.b11_1 = $this.b11_1 ^ positionMask;
      $this.c11_1 = $this.c11_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.b11_1 ^ positionMask, $this.c11_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment(keyHash1, shift);
    var setBit2 = indexSegment(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.e11_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.e11_1, keyIndex);
    return TrieNode_init_$Create$($this.b11_1 ^ positionMask, $this.c11_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp1 = mutator.u11_1;
    mutator.k12(tmp1 - 1 | 0);
    mutator.s11_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.e11_1.length === 2)
      return null;
    if ($this.d11_1 === mutator.q11_1) {
      $this.e11_1 = removeEntryAtIndex_0($this.e11_1, keyIndex);
      $this.b11_1 = $this.b11_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.e11_1, keyIndex);
    return new TrieNode($this.b11_1 ^ positionMask, $this.c11_1, newBuffer, mutator.q11_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.e11_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.e11_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp1 = mutator.u11_1;
    mutator.k12(tmp1 - 1 | 0);
    mutator.s11_1 = valueAtKeyIndex($this, i);
    if ($this.e11_1.length === 2)
      return null;
    if ($this.d11_1 === mutator.q11_1) {
      $this.e11_1 = removeEntryAtIndex_0($this.e11_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.e11_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.q11_1);
  }
  function collisionKeyIndex($this, key) {
    var progression = step(until(0, $this.e11_1.length), 2);
    var inductionVariable = progression.u_1;
    var last = progression.v_1;
    var step_0 = progression.w_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)))
          return i;
      }
       while (!(i === last));
    return -1;
  }
  function collisionContainsKey($this, key) {
    return !(collisionKeyIndex($this, key) === -1);
  }
  function collisionGet($this, key) {
    var keyIndex = collisionKeyIndex($this, key);
    return !(keyIndex === -1) ? valueAtKeyIndex($this, keyIndex) : null;
  }
  function collisionPut($this, key, value) {
    var keyIndex = collisionKeyIndex($this, key);
    if (!(keyIndex === -1)) {
      if (value === valueAtKeyIndex($this, keyIndex)) {
        return null;
      }
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      var newBuffer = $this.e11_1.slice();
      newBuffer[keyIndex + 1 | 0] = value;
      return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
    }
    var newBuffer_0 = insertEntryAtIndex($this.e11_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var keyIndex = collisionKeyIndex($this, key);
    if (!(keyIndex === -1)) {
      mutator.s11_1 = valueAtKeyIndex($this, keyIndex);
      if ($this.d11_1 === mutator.q11_1) {
        $this.e11_1[keyIndex + 1 | 0] = value;
        return $this;
      }
      mutator.t11_1 = mutator.t11_1 + 1 | 0;
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      var newBuffer = $this.e11_1.slice();
      newBuffer[keyIndex + 1 | 0] = value;
      return new TrieNode(0, 0, newBuffer, mutator.q11_1);
    }
    var tmp3 = mutator.u11_1;
    mutator.k12(tmp3 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.e11_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.q11_1);
  }
  function collisionRemove($this, key) {
    var keyIndex = collisionKeyIndex($this, key);
    if (!(keyIndex === -1)) {
      return collisionRemoveEntryAtIndex($this, keyIndex);
    }
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var keyIndex = collisionKeyIndex($this, key);
    if (!(keyIndex === -1)) {
      return mutableCollisionRemoveEntryAtIndex($this, keyIndex, mutator);
    }
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var keyIndex = collisionKeyIndex($this, key);
    if (!(keyIndex === -1) && equals(value, valueAtKeyIndex($this, keyIndex))) {
      return mutableCollisionRemoveEntryAtIndex($this, keyIndex, mutator);
    }
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.c11_1 === 0);
    assert($this.b11_1 === 0);
    assert(otherNode.c11_1 === 0);
    assert(otherNode.b11_1 === 0);
    var tempBuffer = copyOf($this.e11_1, $this.e11_1.length + otherNode.e11_1.length | 0);
    var i = $this.e11_1.length;
    var progression = step(until(0, otherNode.e11_1.length), 2);
    var inductionVariable = progression.u_1;
    var last = progression.v_1;
    var step_0 = progression.w_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.e11_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.e11_1[j];
          tempBuffer[i + 1 | 0] = otherNode.e11_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          intersectionCounter.n12_1 = intersectionCounter.n12_1 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.e11_1.length ? $this : newSize === otherNode.e11_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.o13($this.n13(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.o13(otherNode.n13(positionMask));
        tmp_0 = targetNode.m12(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.m13(positionMask)) {
        var keyIndex = otherNode.k13(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.u11_1;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = key == null ? null : hashCode(key);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        // Inline function 'kotlin.also' call
        var this_0 = targetNode.l12(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        if (mutator.u11_1 === oldSize) {
          intersectionCounter.n12_1 = intersectionCounter.n12_1 + 1 | 0;
        }
        tmp_0 = this_0;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.o13(otherNode.n13(positionMask));
      var tmp_1;
      if ($this.m13(positionMask)) {
        var keyIndex_0 = $this.k13(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs_0 = key_0 == null ? null : hashCode(key_0);
        var tmp$ret$3 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.f11(tmp$ret$3, key_0, shift + 5 | 0)) {
          intersectionCounter.n12_1 = intersectionCounter.n12_1 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs_1 = key_0 == null ? null : hashCode(key_0);
          var tmp$ret$4 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.l12(tmp$ret$4, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.k13(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.k13(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_2 = thisKey == null ? null : hashCode(thisKey);
      var tmp_3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_3 = otherKey == null ? null : hashCode(otherKey);
      var tmp$ret$6 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$6, otherKey, otherValue, shift + 5 | 0, mutator.q11_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.c11_1 === 0)
      return $this.e11_1.length / 2 | 0;
    var numValues = countOneBits($this.b11_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.e11_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.o13(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.c11_1 === otherNode.c11_1))
      return false;
    if (!($this.b11_1 === otherNode.b11_1))
      return false;
    var inductionVariable = 0;
    var last = $this.e11_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.e11_1[i] === otherNode.e11_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : !(targetNode === newNode) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.t10_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_0();
    this.b11_1 = dataMap;
    this.c11_1 = nodeMap;
    this.d11_1 = ownedBy;
    this.e11_1 = buffer;
  }
  protoOf(TrieNode).l13 = function () {
    return countOneBits(this.b11_1);
  };
  protoOf(TrieNode).m13 = function (positionMask) {
    return !((this.b11_1 & positionMask) === 0);
  };
  protoOf(TrieNode).k13 = function (positionMask) {
    return imul(2, countOneBits(this.b11_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).n13 = function (positionMask) {
    return (this.e11_1.length - 1 | 0) - countOneBits(this.c11_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).o13 = function (nodeIndex) {
    var tmp = this.e11_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).f11 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.m13(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.k13(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o13(this.n13(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.f11(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).g11 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.m13(keyPositionMask)) {
      var keyIndex = this.k13(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o13(this.n13(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.g11(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).m12 = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.r14(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.q11_1);
    }
    var newNodeMap = this.c11_1 | otherNode.c11_1;
    var newDataMap = (this.b11_1 ^ otherNode.b11_1) & ~newNodeMap;
    // Inline function 'kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask = this.b11_1 & otherNode.b11_1;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      var leftKey = keyAtIndex(this, this.k13(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.k13(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      index = index + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    if (!((newNodeMap & newDataMap) === 0)) {
      throw IllegalStateException_init_$Create$_0('Check failed.');
    }
    var tmp;
    if (equals(this.d11_1, mutator.q11_1) && this.b11_1 === newDataMap && this.c11_1 === newNodeMap) {
      tmp = this;
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      var newBuffer = Array(size);
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_0 = newNodeMap;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      var index_1 = index_0;
      var newNodeIndex = (mutableNode.e11_1.length - 1 | 0) - index_1 | 0;
      mutableNode.e11_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      index_0 = index_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_1 = newDataMap;
    var index_2 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      var index_3 = index_2;
      var newKeyIndex = imul(index_3, 2);
      if (!otherNode.m13(bit_1)) {
        var oldKeyIndex = this.k13(bit_1);
        mutableNode.e11_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.e11_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.k13(bit_1);
        mutableNode.e11_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.e11_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.m13(bit_1)) {
          intersectionCounter.n12_1 = intersectionCounter.n12_1 + 1 | 0;
        }
      }
      index_2 = index_2 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).h11 = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.m13(keyPositionMask)) {
      var keyIndex = this.k13(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n13(keyPositionMask);
      var targetNode = this.o13(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.h11(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      var tmp_2 = putResult;
      var node = putResult.i11_1;
      tmp_2.i11_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).l12 = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.m13(keyPositionMask)) {
      var keyIndex = this.k13(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.s11_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp1 = mutator.u11_1;
      mutator.k12(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.q11_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n13(keyPositionMask);
      var targetNode = this.o13(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.l12(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.q11_1);
    }
    var tmp3 = mutator.u11_1;
    mutator.k12(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.q11_1);
  };
  protoOf(TrieNode).k11 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.m13(keyPositionMask)) {
      var keyIndex = this.k13(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n13(keyPositionMask);
      var targetNode = this.o13(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.k11(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).o12 = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.m13(keyPositionMask)) {
      var keyIndex = this.k13(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n13(keyPositionMask);
      var targetNode = this.o13(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.o12(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.q11_1);
    }
    return this;
  };
  protoOf(TrieNode).q12 = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.m13(keyPositionMask)) {
      var keyIndex = this.k13(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) && equals(value, valueAtKeyIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n13(keyPositionMask);
      var targetNode = this.o13(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.q12(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.q11_1);
    }
    return this;
  };
  protoOf(TrieNode).v11 = function (that, equalityComparator) {
    if (this === that)
      return true;
    if (!(this.b11_1 === that.b11_1) || !(this.c11_1 === that.c11_1))
      return false;
    if (this.b11_1 === 0 && this.c11_1 === 0) {
      if (!(this.e11_1.length === that.e11_1.length))
        return false;
      var tmp0 = step(until(0, this.e11_1.length), 2);
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.o();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var inductionVariable = tmp0.u_1;
        var last = tmp0.v_1;
        var step_0 = tmp0.w_1;
        if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
          do {
            var element = inductionVariable;
            inductionVariable = inductionVariable + step_0 | 0;
            var i = element;
            var thatKey = keyAtIndex(that, i);
            var thatValue = valueAtKeyIndex(that, i);
            var keyIndex = collisionKeyIndex(this, thatKey);
            var tmp_0;
            if (!(keyIndex === -1)) {
              var value = valueAtKeyIndex(this, keyIndex);
              tmp_0 = equalityComparator(value, thatValue);
            } else {
              tmp_0 = false;
            }
            if (!tmp_0) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
          }
           while (!(element === last));
        tmp$ret$0 = true;
      }
      return tmp$ret$0;
    }
    var valueSize = imul(countOneBits(this.b11_1), 2);
    var progression = step(until(0, valueSize), 2);
    var inductionVariable_0 = progression.u_1;
    var last_0 = progression.v_1;
    var step_1 = progression.w_1;
    if (step_1 > 0 && inductionVariable_0 <= last_0 || (step_1 < 0 && last_0 <= inductionVariable_0))
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + step_1 | 0;
        if (!equals(keyAtIndex(this, i_0), keyAtIndex(that, i_0)))
          return false;
        if (!equalityComparator(valueAtKeyIndex(this, i_0), valueAtKeyIndex(that, i_0)))
          return false;
      }
       while (!(i_0 === last_0));
    var inductionVariable_1 = valueSize;
    var last_1 = this.e11_1.length;
    if (inductionVariable_1 < last_1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        if (!this.o13(i_1).v11(that.o13(i_1), equalityComparator))
          return false;
      }
       while (inductionVariable_1 < last_1);
    return true;
  };
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    var tmp8 = keyIndex + 2 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp8, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    var tmp2 = nodeIndex + 2 | 0;
    var tmp3 = nodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp2, tmp3, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    var tmp9 = nodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp9, endIndex);
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    var tmp13 = newNodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp13, nodeIndex, endIndex);
    return newBuffer;
  }
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    var tmp9 = keyIndex + 2 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp9, endIndex);
    return newBuffer;
  }
  function createEntries_0($this) {
    return new PersistentOrderedMapEntries($this);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.q10_1 = new PersistentOrderedMap(EndOfChain_instance, EndOfChain_instance, Companion_getInstance().r10());
  }
  protoOf(Companion_1).r10 = function () {
    var tmp = this.q10_1;
    return tmp instanceof PersistentOrderedMap ? tmp : THROW_CCE();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function PersistentOrderedMap$equals$lambda(a, b) {
    return equals(a.u10_1, b.u10_1);
  }
  function PersistentOrderedMap$equals$lambda_0(a, b) {
    return equals(a.u10_1, b.u10_1);
  }
  function PersistentOrderedMap$equals$lambda_1(a, b) {
    return equals(a.u10_1, b);
  }
  function PersistentOrderedMap$equals$lambda_2(a, b) {
    return equals(a.u10_1, b);
  }
  function PersistentOrderedMap(firstKey, lastKey, hashMap) {
    Companion_getInstance_1();
    AbstractMap.call(this);
    this.g12_1 = firstKey;
    this.h12_1 = lastKey;
    this.i12_1 = hashMap;
  }
  protoOf(PersistentOrderedMap).n = function () {
    return this.i12_1.a11_1;
  };
  protoOf(PersistentOrderedMap).b2 = function () {
    return new PersistentOrderedMapKeys(this);
  };
  protoOf(PersistentOrderedMap).c2 = function () {
    return createEntries_0(this);
  };
  protoOf(PersistentOrderedMap).y1 = function (key) {
    return this.i12_1.y1(key);
  };
  protoOf(PersistentOrderedMap).a2 = function (key) {
    var tmp0_safe_receiver = this.i12_1.a2(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u10_1;
  };
  protoOf(PersistentOrderedMap).j2 = function (key, value) {
    if (this.o()) {
      var newMap = this.i12_1.j2(key, LinkedValue_init_$Create$(value));
      return new PersistentOrderedMap(key, key, newMap);
    }
    var links = this.i12_1.a2(key);
    if (!(links == null)) {
      if (links.u10_1 === value) {
        return this;
      }
      var newMap_0 = this.i12_1.j2(key, links.s14(value));
      return new PersistentOrderedMap(this.g12_1, this.h12_1, newMap_0);
    }
    var tmp = this.h12_1;
    var lastKey = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.i12_1.a2(lastKey));
    var newMap_1 = this.i12_1.j2(lastKey, lastLinks.t14(key)).j2(key, LinkedValue_init_$Create$_0(value, lastKey));
    return new PersistentOrderedMap(this.g12_1, key, newMap_1);
  };
  protoOf(PersistentOrderedMap).k2 = function (key) {
    var tmp0_elvis_lhs = this.i12_1.a2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.i12_1.k2(key);
    if (links.u14()) {
      var tmp0 = newMap;
      // Inline function 'kotlin.collections.get' call
      var key_0 = links.v10_1;
      var tmp$ret$0 = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).a2(key_0);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.v10_1;
      newMap = tmp_0.j2((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.t14(links.w10_1));
    }
    if (links.w14()) {
      var tmp2 = newMap;
      // Inline function 'kotlin.collections.get' call
      var key_1 = links.w10_1;
      var tmp$ret$1 = (isInterface(tmp2, KtMap) ? tmp2 : THROW_CCE()).a2(key_1);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.w10_1;
      newMap = tmp_2.j2((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.v14(links.v10_1));
    }
    var newFirstKey = !links.u14() ? links.w10_1 : this.g12_1;
    var newLastKey = !links.w14() ? links.v10_1 : this.h12_1;
    return new PersistentOrderedMap(newFirstKey, newLastKey, newMap);
  };
  protoOf(PersistentOrderedMap).o10 = function (m) {
    if (m.o())
      return this;
    // Inline function 'kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = (isInterface(this, PersistentMap) ? this : THROW_CCE()).p10();
    this_0.l2(m);
    return this_0.vn();
  };
  protoOf(PersistentOrderedMap).p10 = function () {
    return new PersistentOrderedMapBuilder(this);
  };
  protoOf(PersistentOrderedMap).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtMap) : false))
      return false;
    if (!(this.n() === other.n()))
      return false;
    var tmp;
    if (other instanceof PersistentOrderedMap) {
      tmp = this.i12_1.z10_1.v11(other.i12_1.z10_1, PersistentOrderedMap$equals$lambda);
    } else {
      if (other instanceof PersistentOrderedMapBuilder) {
        var tmp_0 = other.d12_1.r11_1;
        tmp = this.i12_1.z10_1.v11(tmp_0, PersistentOrderedMap$equals$lambda_0);
      } else {
        if (other instanceof PersistentHashMap) {
          tmp = this.i12_1.z10_1.v11(other.z10_1, PersistentOrderedMap$equals$lambda_1);
        } else {
          if (other instanceof PersistentHashMapBuilder) {
            var tmp_1 = other.r11_1;
            tmp = this.i12_1.z10_1.v11(tmp_1, PersistentOrderedMap$equals$lambda_2);
          } else {
            tmp = protoOf(AbstractMap).equals.call(this, other);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(PersistentOrderedMap).hashCode = function () {
    return protoOf(AbstractMap).hashCode.call(this);
  };
  function LinkedValue_init_$Init$(value, $this) {
    LinkedValue.call($this, value, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function LinkedValue_init_$Create$(value) {
    return LinkedValue_init_$Init$(value, objectCreate(protoOf(LinkedValue)));
  }
  function LinkedValue_init_$Init$_0(value, previous, $this) {
    LinkedValue.call($this, value, previous, EndOfChain_instance);
    return $this;
  }
  function LinkedValue_init_$Create$_0(value, previous) {
    return LinkedValue_init_$Init$_0(value, previous, objectCreate(protoOf(LinkedValue)));
  }
  function LinkedValue(value, previous, next) {
    this.u10_1 = value;
    this.v10_1 = previous;
    this.w10_1 = next;
  }
  protoOf(LinkedValue).s14 = function (newValue) {
    return new LinkedValue(newValue, this.v10_1, this.w10_1);
  };
  protoOf(LinkedValue).v14 = function (newPrevious) {
    return new LinkedValue(this.u10_1, newPrevious, this.w10_1);
  };
  protoOf(LinkedValue).t14 = function (newNext) {
    return new LinkedValue(this.u10_1, this.v10_1, newNext);
  };
  protoOf(LinkedValue).w14 = function () {
    return !(this.w10_1 === EndOfChain_instance);
  };
  protoOf(LinkedValue).u14 = function () {
    return !(this.v10_1 === EndOfChain_instance);
  };
  function PersistentOrderedMapBuilder$equals$lambda(a, b) {
    return equals(a.u10_1, b.u10_1);
  }
  function PersistentOrderedMapBuilder$equals$lambda_0(a, b) {
    return equals(a.u10_1, b.u10_1);
  }
  function PersistentOrderedMapBuilder$equals$lambda_1(a, b) {
    return equals(a.u10_1, b);
  }
  function PersistentOrderedMapBuilder$equals$lambda_2(a, b) {
    return equals(a.u10_1, b);
  }
  function PersistentOrderedMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.a12_1 = map;
    this.b12_1 = map.g12_1;
    this.c12_1 = map.h12_1;
    this.d12_1 = map.i12_1.p10();
  }
  protoOf(PersistentOrderedMapBuilder).n = function () {
    return this.d12_1.u11_1;
  };
  protoOf(PersistentOrderedMapBuilder).vn = function () {
    var tmp0_safe_receiver = this.a12_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      assert(!(this.d12_1.p11_1 == null));
      assert(this.b12_1 === tmp0_safe_receiver.g12_1);
      assert(this.c12_1 === tmp0_safe_receiver.h12_1);
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      assert(this.d12_1.p11_1 == null);
      var newHashMap = this.d12_1.vn();
      var newOrdered = new PersistentOrderedMap(this.b12_1, this.c12_1, newHashMap);
      this.a12_1 = newOrdered;
      tmp_0 = newOrdered;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(PersistentOrderedMapBuilder).c2 = function () {
    return new PersistentOrderedMapBuilderEntries(this);
  };
  protoOf(PersistentOrderedMapBuilder).b2 = function () {
    return new PersistentOrderedMapBuilderKeys(this);
  };
  protoOf(PersistentOrderedMapBuilder).y1 = function (key) {
    return this.d12_1.y1(key);
  };
  protoOf(PersistentOrderedMapBuilder).a2 = function (key) {
    var tmp0_safe_receiver = this.d12_1.a2(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u10_1;
  };
  protoOf(PersistentOrderedMapBuilder).j2 = function (key, value) {
    var links = this.d12_1.a2(key);
    var tmp;
    if (!(links == null)) {
      var tmp_0;
      if (links.u10_1 === value) {
        tmp_0 = value;
      } else {
        this.a12_1 = null;
        var tmp0 = this.d12_1;
        // Inline function 'kotlin.collections.set' call
        var value_0 = links.s14(value);
        tmp0.j2(key, value_0);
        tmp_0 = links.u10_1;
      }
      tmp = tmp_0;
    } else {
      this.a12_1 = null;
      if (this.o()) {
        this.b12_1 = key;
        this.c12_1 = key;
        var tmp3 = this.d12_1;
        // Inline function 'kotlin.collections.set' call
        var value_1 = LinkedValue_init_$Create$(value);
        tmp3.j2(key, value_1);
      } else {
        var tmp_1 = this.c12_1;
        var lastKey = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        var lastLinks = ensureNotNull(this.d12_1.a2(lastKey));
        assert(!lastLinks.w14());
        var tmp6 = this.d12_1;
        // Inline function 'kotlin.collections.set' call
        var value_2 = lastLinks.t14(key);
        tmp6.j2(lastKey, value_2);
        var tmp9 = this.d12_1;
        // Inline function 'kotlin.collections.set' call
        var value_3 = LinkedValue_init_$Create$_0(value, lastKey);
        tmp9.j2(key, value_3);
        this.c12_1 = key;
      }
      tmp = null;
    }
    return tmp;
  };
  protoOf(PersistentOrderedMapBuilder).k2 = function (key) {
    var tmp0_elvis_lhs = this.d12_1.k2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    this.a12_1 = null;
    if (links.u14()) {
      var tmp0 = this.d12_1;
      // Inline function 'kotlin.collections.get' call
      var key_0 = links.v10_1;
      var tmp$ret$0 = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).a2(key_0);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp2 = this.d12_1;
      var tmp_0 = links.v10_1;
      var tmp3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.collections.set' call
      var value = previousLinks.t14(links.w10_1);
      tmp2.j2(tmp3, value);
    } else {
      this.b12_1 = links.w10_1;
    }
    if (links.w14()) {
      var tmp5 = this.d12_1;
      // Inline function 'kotlin.collections.get' call
      var key_1 = links.w10_1;
      var tmp$ret$2 = (isInterface(tmp5, KtMap) ? tmp5 : THROW_CCE()).a2(key_1);
      var nextLinks = ensureNotNull(tmp$ret$2);
      var tmp7 = this.d12_1;
      var tmp_1 = links.w10_1;
      var tmp8 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      // Inline function 'kotlin.collections.set' call
      var value_0 = nextLinks.v14(links.v10_1);
      tmp7.j2(tmp8, value_0);
    } else {
      this.c12_1 = links.v10_1;
    }
    return links.u10_1;
  };
  protoOf(PersistentOrderedMapBuilder).p12 = function (key, value) {
    var tmp0_elvis_lhs = this.d12_1.a2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var tmp_0;
    if (!equals(links.u10_1, value)) {
      tmp_0 = false;
    } else {
      this.k2(key);
      tmp_0 = true;
    }
    return tmp_0;
  };
  protoOf(PersistentOrderedMapBuilder).f2 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.d12_1.o()) {
      this.a12_1 = null;
    }
    this.d12_1.f2();
    this.b12_1 = EndOfChain_instance;
    this.c12_1 = EndOfChain_instance;
  };
  protoOf(PersistentOrderedMapBuilder).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtMap) : false))
      return false;
    if (!(this.n() === other.n()))
      return false;
    var tmp;
    if (other instanceof PersistentOrderedMap) {
      var tmp_0 = this.d12_1.r11_1;
      tmp = tmp_0.v11(other.i12_1.z10_1, PersistentOrderedMapBuilder$equals$lambda);
    } else {
      if (other instanceof PersistentOrderedMapBuilder) {
        var tmp_1 = this.d12_1.r11_1;
        var tmp_2 = other.d12_1.r11_1;
        tmp = tmp_1.v11(tmp_2, PersistentOrderedMapBuilder$equals$lambda_0);
      } else {
        if (other instanceof PersistentHashMap) {
          var tmp_3 = this.d12_1.r11_1;
          tmp = tmp_3.v11(other.z10_1, PersistentOrderedMapBuilder$equals$lambda_1);
        } else {
          if (other instanceof PersistentHashMapBuilder) {
            var tmp_4 = this.d12_1.r11_1;
            var tmp_5 = other.r11_1;
            tmp = tmp_4.v11(tmp_5, PersistentOrderedMapBuilder$equals$lambda_2);
          } else {
            tmp = MapImplementation_instance.r12(this, other);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(PersistentOrderedMapBuilder).hashCode = function () {
    return MapImplementation_instance.s12(this);
  };
  function PersistentOrderedMapBuilderEntriesIterator(map) {
    this.x14_1 = new PersistentOrderedMapBuilderLinksIterator(map.b12_1, map);
  }
  protoOf(PersistentOrderedMapBuilderEntriesIterator).l = function () {
    return this.x14_1.l();
  };
  protoOf(PersistentOrderedMapBuilderEntriesIterator).m = function () {
    var links = this.x14_1.m();
    var tmp = this.x14_1.a15_1;
    return new MutableMapEntry_0(this.x14_1.z14_1.d12_1, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE(), links);
  };
  protoOf(PersistentOrderedMapBuilderEntriesIterator).f4 = function () {
    this.x14_1.f4();
  };
  function PersistentOrderedMapBuilderKeysIterator(map) {
    this.e15_1 = new PersistentOrderedMapBuilderLinksIterator(map.b12_1, map);
  }
  protoOf(PersistentOrderedMapBuilderKeysIterator).l = function () {
    return this.e15_1.l();
  };
  protoOf(PersistentOrderedMapBuilderKeysIterator).m = function () {
    this.e15_1.m();
    var tmp = this.e15_1.a15_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentOrderedMapBuilderKeysIterator).f4 = function () {
    this.e15_1.f4();
  };
  function checkHasNext_0($this) {
    if (!$this.l())
      throw NoSuchElementException_init_$Create$();
  }
  function checkNextWasInvoked_0($this) {
    if (!$this.b15_1)
      throw IllegalStateException_init_$Create$();
  }
  function checkForComodification_0($this) {
    if (!($this.z14_1.d12_1.t11_1 === $this.c15_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentOrderedMapBuilderLinksIterator(nextKey, builder) {
    this.y14_1 = nextKey;
    this.z14_1 = builder;
    this.a15_1 = EndOfChain_instance;
    this.b15_1 = false;
    this.c15_1 = this.z14_1.d12_1.t11_1;
    this.d15_1 = 0;
  }
  protoOf(PersistentOrderedMapBuilderLinksIterator).l = function () {
    return this.d15_1 < this.z14_1.n();
  };
  protoOf(PersistentOrderedMapBuilderLinksIterator).m = function () {
    checkForComodification_0(this);
    checkHasNext_0(this);
    this.a15_1 = this.y14_1;
    this.b15_1 = true;
    this.d15_1 = this.d15_1 + 1 | 0;
    var tmp0 = this.z14_1.d12_1;
    var tmp = this.y14_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = tmp0.a2(key);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of a key (' + toString(this.y14_1) + ') has changed after it was added to the persistent map.');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var result = tmp_0;
    this.y14_1 = result.w10_1;
    return result;
  };
  protoOf(PersistentOrderedMapBuilderLinksIterator).f4 = function () {
    checkNextWasInvoked_0(this);
    var tmp0 = this.z14_1;
    // Inline function 'kotlin.collections.remove' call
    var key = this.a15_1;
    (isInterface(tmp0, KtMutableMap) ? tmp0 : THROW_CCE()).k2(key);
    this.a15_1 = null;
    this.b15_1 = false;
    this.c15_1 = this.z14_1.d12_1.t11_1;
    this.d15_1 = this.d15_1 - 1 | 0;
  };
  function MutableMapEntry_0(mutableMap, key, links) {
    MapEntry.call(this, key, links.u10_1);
    this.h15_1 = mutableMap;
    this.i15_1 = links;
  }
  protoOf(MutableMapEntry_0).x1 = function () {
    return this.i15_1.u10_1;
  };
  function PersistentOrderedMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.j15_1 = builder;
  }
  protoOf(PersistentOrderedMapBuilderEntries).f14 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentOrderedMapBuilderEntries).h = function (element) {
    return this.f14((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentOrderedMapBuilderEntries).f2 = function () {
    this.j15_1.f2();
  };
  protoOf(PersistentOrderedMapBuilderEntries).k = function () {
    return new PersistentOrderedMapBuilderEntriesIterator(this.j15_1);
  };
  protoOf(PersistentOrderedMapBuilderEntries).n6 = function (element) {
    return this.j15_1.p12(element.w1(), element.x1());
  };
  protoOf(PersistentOrderedMapBuilderEntries).n = function () {
    return this.j15_1.n();
  };
  protoOf(PersistentOrderedMapBuilderEntries).m6 = function (element) {
    return MapImplementation_instance.g14(this.j15_1, element);
  };
  function PersistentOrderedMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.k15_1 = builder;
  }
  protoOf(PersistentOrderedMapBuilderKeys).r6 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentOrderedMapBuilderKeys).h = function (element) {
    return this.r6((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentOrderedMapBuilderKeys).f2 = function () {
    this.k15_1.f2();
  };
  protoOf(PersistentOrderedMapBuilderKeys).k = function () {
    return new PersistentOrderedMapBuilderKeysIterator(this.k15_1);
  };
  protoOf(PersistentOrderedMapBuilderKeys).k2 = function (element) {
    if (this.k15_1.y1(element)) {
      this.k15_1.k2(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentOrderedMapBuilderKeys).d2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.k2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentOrderedMapBuilderKeys).n = function () {
    return this.k15_1.n();
  };
  protoOf(PersistentOrderedMapBuilderKeys).u5 = function (element) {
    return this.k15_1.y1(element);
  };
  protoOf(PersistentOrderedMapBuilderKeys).s1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.u5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function PersistentOrderedMapKeysIterator(map) {
    this.l15_1 = new PersistentOrderedMapLinksIterator(map.g12_1, map.i12_1);
  }
  protoOf(PersistentOrderedMapKeysIterator).l = function () {
    return this.l15_1.l();
  };
  protoOf(PersistentOrderedMapKeysIterator).m = function () {
    var tmp = this.l15_1.m15_1;
    var nextKey = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.l15_1.m();
    return nextKey;
  };
  function PersistentOrderedMapEntriesIterator(map) {
    this.p15_1 = new PersistentOrderedMapLinksIterator(map.g12_1, map.i12_1);
  }
  protoOf(PersistentOrderedMapEntriesIterator).l = function () {
    return this.p15_1.l();
  };
  protoOf(PersistentOrderedMapEntriesIterator).m = function () {
    var tmp = this.p15_1.m15_1;
    var nextKey = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var nextValue = this.p15_1.m().u10_1;
    return new MapEntry(nextKey, nextValue);
  };
  function PersistentOrderedMapLinksIterator(nextKey, hashMap) {
    this.m15_1 = nextKey;
    this.n15_1 = hashMap;
    this.o15_1 = 0;
  }
  protoOf(PersistentOrderedMapLinksIterator).l = function () {
    return this.o15_1 < this.n15_1.n();
  };
  protoOf(PersistentOrderedMapLinksIterator).m = function () {
    if (!this.l()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0 = this.n15_1;
    var tmp = this.m15_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = tmp0.a2(key);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of a key (' + toString(this.m15_1) + ') has changed after it was added to the persistent map.');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var result = tmp_0;
    this.o15_1 = this.o15_1 + 1 | 0;
    this.m15_1 = result.w10_1;
    return result;
  };
  function PersistentOrderedMapKeys(map) {
    AbstractSet.call(this);
    this.q15_1 = map;
  }
  protoOf(PersistentOrderedMapKeys).n = function () {
    return this.q15_1.n();
  };
  protoOf(PersistentOrderedMapKeys).u5 = function (element) {
    return this.q15_1.y1(element);
  };
  protoOf(PersistentOrderedMapKeys).s1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.u5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentOrderedMapKeys).k = function () {
    return new PersistentOrderedMapKeysIterator(this.q15_1);
  };
  function PersistentOrderedMapEntries(map) {
    AbstractSet.call(this);
    this.r15_1 = map;
  }
  protoOf(PersistentOrderedMapEntries).n = function () {
    return this.r15_1.n();
  };
  protoOf(PersistentOrderedMapEntries).q14 = function (element) {
    return MapImplementation_instance.g14(this.r15_1, element);
  };
  protoOf(PersistentOrderedMapEntries).s1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.q14((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentOrderedMapEntries).k = function () {
    return new PersistentOrderedMapEntriesIterator(this.r15_1);
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function MapImplementation() {
  }
  protoOf(MapImplementation).g14 = function (map, element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = map.a2(element.w1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = equals(tmp0_safe_receiver, element.x1());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.x1() == null && map.y1(element.w1()) : tmp1_elvis_lhs;
  };
  protoOf(MapImplementation).r12 = function (thisMap, otherMap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(thisMap.n() === otherMap.n())) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var tmp1 = isInterface(otherMap, KtMap) ? otherMap : THROW_CCE();
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      if (tmp1.o()) {
        tmp$ret$3 = true;
        break $l$block_0;
      }
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp1.c2().k();
      while (_iterator__ex2g4s.l()) {
        var element = _iterator__ex2g4s.m();
        if (!MapImplementation_instance.g14(thisMap, element)) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
      }
      tmp$ret$3 = true;
    }
    return tmp$ret$3;
  };
  protoOf(MapImplementation).s12 = function (map) {
    return hashCode(map.c2());
  };
  var MapImplementation_instance;
  function MapImplementation_getInstance() {
    return MapImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.n12_1 = count;
  }
  protoOf(DeltaCounter).r14 = function (that) {
    this.n12_1 = this.n12_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.n12_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.n12_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.n12_1 === tmp0_other_with_cast.n12_1))
      return false;
    return true;
  };
  function assert(condition) {
    if (!condition) {
      throw AssertionError_init_$Create$('Assertion failed');
    }
  }
  //region block: init
  EndOfChain_instance = new EndOfChain();
  MapImplementation_instance = new MapImplementation();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = persistentHashMapOf;
  _.$_$.b = persistentMapOf;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-Immutable-Collections-kotlinx-collections-immutable.js.map
