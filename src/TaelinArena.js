module.exports = (function(){
  var _Pair$pair = (_0=>(_1=>(_2=>_2(_0)(_1))));
  var _TaelinArena$game_state = (_0=>(_1=>_1(_0)));
  var _List$cons = (_0=>(_1=>(_2=>(_3=>_3(_0)(_1)))));
  var _TaelinArena$game_object = (_0=>(_1=>(_2=>_2(_0)(_1))));
  var _Maybe$some = (_0=>(_1=>(_2=>_2(_0))));
  var _TaelinArena$srpx = _TaelinArena$game_object(_Maybe$some(70))(_Pair$pair(10)(10));
  var _TaelinArena$stanci = _TaelinArena$game_object(_Maybe$some(80))(_Pair$pair(30)(30));
  var _List$nil = (_0=>(_1=>_0));
  var _TaelinArena$demo_game_state = _TaelinArena$game_state(_List$cons(_TaelinArena$srpx)(_List$cons(_TaelinArena$stanci)(_List$nil)));
  var _TaelinArena$tick_game_object = (_5=>_5((_6=>(_7=>_7((_8=>(_9=>_TaelinArena$game_object(_6)(_Pair$pair(_8)(_9)))))))));
  var _TaelinArena$tick_game_map = (_2=>_2(_List$nil)((_3=>(_4=>_List$cons(_TaelinArena$tick_game_object(_3))(_TaelinArena$tick_game_map(_4))))));
  var _TaelinArena$tick_game_state = (_0=>_0((_1=>_TaelinArena$game_state(_TaelinArena$tick_game_map(_1)))));
  var _TaelinArena$ball = (_8=>(_9=>(_10=>_10(_8)(_9))));
  var _TaelinArena$render_game_object = (_5=>_5((_6=>(_7=>_TaelinArena$ball(_7)(12)))));
  var _TaelinArena$render_game_map = (_2=>_2(_List$nil)((_3=>(_4=>_List$cons(_TaelinArena$render_game_object(_3))(_TaelinArena$render_game_map(_4))))));
  var _TaelinArena$render_game_state = (_0=>_0((_1=>_TaelinArena$render_game_map(_1))));
  var _TaelinArena$map_list = (_4=>(_5=>_5(_List$nil)((_6=>(_7=>_List$cons(_4(_6))(_TaelinArena$map_list(_4)(_7)))))));
  var _TaelinArena$W_KEY = 119;
  var _TaelinArena$mut_snd = (_8=>(_9=>_9((_10=>(_11=>_Pair$pair(_10)(_8(_11)))))));
  var _TaelinArena$A_KEY = 97;
  var _TaelinArena$mut_fst = (_8=>(_9=>_9((_10=>(_11=>_Pair$pair(_8(_10))(_11))))));
  var _TaelinArena$S_KEY = 115;
  var _TaelinArena$D_KEY = 100;
  var _TaelinArena$apply_input_to_game_object = (_4=>(_5=>_5((_6=>(_7=>_TaelinArena$game_object(_6)(((_4===_TaelinArena$W_KEY? 1 : 0)?_TaelinArena$mut_snd((_8=>(_8-10)))(_7):((_4===_TaelinArena$A_KEY? 1 : 0)?_TaelinArena$mut_fst((_8=>(_8-10)))(_7):((_4===_TaelinArena$S_KEY? 1 : 0)?_TaelinArena$mut_snd((_8=>(_9=>(_8+_9)))(10))(_7):((_4===_TaelinArena$D_KEY? 1 : 0)?_TaelinArena$mut_fst((_8=>(_9=>(_8+_9)))(10))(_7):_7))))))))));
  var _TaelinArena$apply_input_to_game_state = (_0=>(_1=>_0((_2=>_1((_3=>_TaelinArena$game_state(_TaelinArena$map_list(_TaelinArena$apply_input_to_game_object(_2))(_3))))))));
  var _TaelinArena$main = _Pair$pair(_TaelinArena$demo_game_state)(_Pair$pair(_TaelinArena$tick_game_state)(_Pair$pair(_TaelinArena$render_game_state)(_TaelinArena$apply_input_to_game_state)));
  return _TaelinArena$main;
})()