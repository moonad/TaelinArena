module.exports = (function (){
  var F64 = new Float64Array(1);
  var U32 = new Uint32Array(F64.buffer);
  var F64_get = (x,i)=>((F64[0]=x),(i<32?(U32[0]>>>i)&1:(U32[1]>>>(i-32)&1)));
  var F64_set = (x,i)=>((F64[0]=x),(i<32?(U32[0]=U32[0]|(1<<i)):(U32[1]=U32[1]|(1<<(i-32)))),F64[0]);
  var inst_unit = x=>x(1);
  var elim_unit = x=>v=>v;
  var inst_bool = x=>x(true)(false);
  var elim_bool = x=>t=>f=>x?t:f;
  var inst_nat = x=>x(0n)(p=>1n+p);
  var elim_nat = x=>z=>s=>x===0n?z:s(x-1n);
  var inst_bits = x=>x('')(p=>p+'0')(p=>p+'1');
  var elim_bits = x=>be=>b0=>b1=>(x.length?(x[x.length-1]==='0'?b0(x.slice(0,-1)):b1(x.slice(0,-1))):be);
  var inst_u16 = x=>x(w=>(function R(x,k){return x(0)(p=>R(p,k*2))(p=>k+R(p,k*2))})(w,1));
  var elim_u16 = x=>u=>u((function R(i){return we=>w0=>w1=>i===16?we:((x>>>i)&1?w1:w0)(R(i+1))})(0));
  var inst_u32 = x=>x(w=>(function R(x,k){return x(0)(p=>R(p,k*2))(p=>k+R(p,k*2))})(w,1));
  var elim_u32 = x=>u=>u((function R(i){return we=>w0=>w1=>i===32?we:((x>>>i)&1?w1:w0)(R(i+1))})(0));
  var inst_u64 = x=>x(w=>(function R(x,k){return x(0n)(p=>R(p,k*2n))(p=>k+R(p,k*2n))})(w,1n));
  var elim_u64 = x=>u=>u((function R(i){return we=>w0=>w1=>i===64n?we:((x>>i)&1n?w1:w0)(R(i+1n))})(0n));
  var inst_f64 = x=>x(w=>(function R(x,i){return x(0)(p=>R(p,i+1))(p=>F64_set(R(p,i+1),i))})(w,0));
  var elim_f64 = x=>u=>u((function R(i){return we=>w0=>w1=>i===64?we:(F64_get(x,i)?w1:w0)(R(i+1))})(0));
  var inst_string = x=>x('')(h=>t=>String.fromCharCode(h)+t);
  var elim_string = x=>n=>c=>x===''?n:c(x.charCodeAt(0))(x.slice(1));
  var $Exports$add = ($x=>($xs=>($new=>($add=>$add($x)($xs($new)($add))))));
  var $Newtype = ($A=>($tag=>null));
  var $Word = ($size=>null);
  var $Nat$succ = ($n=>inst_nat(($z=>($s=>$s($n)))));
  var $Nat$zero = inst_nat(($z=>($s=>$z)));
  var $Nat$0 = $Nat$zero;
  var $Nat$1 = $Nat$succ($Nat$0);
  var $Nat$2 = $Nat$succ($Nat$1);
  var $Nat$3 = $Nat$succ($Nat$2);
  var $Nat$4 = $Nat$succ($Nat$3);
  var $Nat$5 = $Nat$succ($Nat$4);
  var $Nat$6 = $Nat$succ($Nat$5);
  var $Nat$7 = $Nat$succ($Nat$6);
  var $Nat$8 = $Nat$succ($Nat$7);
  var $Nat$9 = $Nat$succ($Nat$8);
  var $Nat$10 = $Nat$succ($Nat$9);
  var $Nat$11 = $Nat$succ($Nat$10);
  var $Nat$12 = $Nat$succ($Nat$11);
  var $Nat$13 = $Nat$succ($Nat$12);
  var $Nat$14 = $Nat$succ($Nat$13);
  var $Nat$15 = $Nat$succ($Nat$14);
  var $Nat$16 = $Nat$succ($Nat$15);
  var $Nat$17 = $Nat$succ($Nat$16);
  var $Nat$18 = $Nat$succ($Nat$17);
  var $Nat$19 = $Nat$succ($Nat$18);
  var $Nat$20 = $Nat$succ($Nat$19);
  var $Nat$21 = $Nat$succ($Nat$20);
  var $Nat$22 = $Nat$succ($Nat$21);
  var $Nat$23 = $Nat$succ($Nat$22);
  var $Nat$24 = $Nat$succ($Nat$23);
  var $Nat$25 = $Nat$succ($Nat$24);
  var $Nat$26 = $Nat$succ($Nat$25);
  var $Nat$27 = $Nat$succ($Nat$26);
  var $Nat$28 = $Nat$succ($Nat$27);
  var $Nat$29 = $Nat$succ($Nat$28);
  var $Nat$30 = $Nat$succ($Nat$29);
  var $Nat$31 = $Nat$succ($Nat$30);
  var $Nat$32 = $Nat$succ($Nat$31);
  var $Nat$33 = $Nat$succ($Nat$32);
  var $Nat$34 = $Nat$succ($Nat$33);
  var $Nat$35 = $Nat$succ($Nat$34);
  var $Nat$36 = $Nat$succ($Nat$35);
  var $Nat$37 = $Nat$succ($Nat$36);
  var $Nat$38 = $Nat$succ($Nat$37);
  var $Nat$39 = $Nat$succ($Nat$38);
  var $Nat$40 = $Nat$succ($Nat$39);
  var $Nat$41 = $Nat$succ($Nat$40);
  var $Nat$42 = $Nat$succ($Nat$41);
  var $Nat$43 = $Nat$succ($Nat$42);
  var $Nat$44 = $Nat$succ($Nat$43);
  var $Nat$45 = $Nat$succ($Nat$44);
  var $Nat$46 = $Nat$succ($Nat$45);
  var $Nat$47 = $Nat$succ($Nat$46);
  var $Nat$48 = $Nat$succ($Nat$47);
  var $Nat$49 = $Nat$succ($Nat$48);
  var $Nat$50 = $Nat$succ($Nat$49);
  var $Nat$51 = $Nat$succ($Nat$50);
  var $Nat$52 = $Nat$succ($Nat$51);
  var $Nat$53 = $Nat$succ($Nat$52);
  var $Nat$54 = $Nat$succ($Nat$53);
  var $Nat$55 = $Nat$succ($Nat$54);
  var $Nat$56 = $Nat$succ($Nat$55);
  var $Nat$57 = $Nat$succ($Nat$56);
  var $Nat$58 = $Nat$succ($Nat$57);
  var $Nat$59 = $Nat$succ($Nat$58);
  var $Nat$60 = $Nat$succ($Nat$59);
  var $Nat$61 = $Nat$succ($Nat$60);
  var $Nat$62 = $Nat$succ($Nat$61);
  var $Nat$63 = $Nat$succ($Nat$62);
  var $Nat$64 = $Nat$succ($Nat$63);
  var $String$cons = ($head=>($tail=>inst_string(($nil=>($cons=>$cons($head)($tail))))));
  var $Word$0 = ($wo=>($we=>($w0=>($w1=>$w0($wo)))));
  var $Word$1 = ($wo=>($we=>($w0=>($w1=>$w1($wo)))));
  var $Word$nil = ($we=>($w0=>($w1=>$we)));
  var $U16$new = ($a=>inst_u16(($u16=>$u16($a))));
  var $Char$new = ($b0=>($b1=>($b2=>($b3=>($b4=>($b5=>($b6=>($b7=>($b8=>($b9=>($bA=>($bB=>($bC=>($bD=>($bE=>($bF=>($kF=>($kE=>($kD=>($kC=>($kB=>($kA=>($k9=>($k8=>($k7=>($k6=>($k5=>($k4=>($k3=>($k2=>($k1=>($k0=>($k_=>$U16$new($k0($k1($k2($k3($k4($k5($k6($k7($k8($k9($kA($kB($kC($kD($kE($kF($k_))))))))))))))))))($Word$nil))($bF($Word$0)($Word$1)))($bE($Word$0)($Word$1)))($bD($Word$0)($Word$1)))($bC($Word$0)($Word$1)))($bB($Word$0)($Word$1)))($bA($Word$0)($Word$1)))($b9($Word$0)($Word$1)))($b8($Word$0)($Word$1)))($b7($Word$0)($Word$1)))($b6($Word$0)($Word$1)))($b5($Word$0)($Word$1)))($b4($Word$0)($Word$1)))($b3($Word$0)($Word$1)))($b2($Word$0)($Word$1)))($b1($Word$0)($Word$1)))($b0($Word$0)($Word$1))))))))))))))))));
  var $Bit$0 = ($o=>($i=>$o));
  var $Bit$1 = ($o=>($i=>$i));
  var $String$nil = inst_string(($nil=>($cons=>$nil)));
  var $F64$parse = $F64$parse;
  var $Arelin$Constants$ONE_SEC = $F64$parse(`24`);
  var $Bits$nil = inst_bits(($be=>($b0=>($b1=>$be))));
  var $Cmp$ltn = ($ltn=>($eql=>($gtn=>$ltn)));
  var $Cmp$gtn = ($ltn=>($eql=>($gtn=>$gtn)));
  var $Word$cmp$aux = ($a=>($b=>($c=>$a(($b=>$c))(($a$pred=>($b=>$b(($a$pred=>$c))(($b$pred=>($a$pred=>$Word$cmp$aux($a$pred)($b$pred)($c))))(($b$pred=>($a$pred=>$Word$cmp$aux($a$pred)($b$pred)($Cmp$ltn))))($a$pred))))(($a$pred=>($b=>$b(($a$pred=>$c))(($b$pred=>($a$pred=>$Word$cmp$aux($a$pred)($b$pred)($Cmp$gtn))))(($b$pred=>($a$pred=>$Word$cmp$aux($a$pred)($b$pred)($c))))($a$pred))))($b))));
  var $Cmp$eql = ($ltn=>($eql=>($gtn=>$eql)));
  var $Word$cmp = ($a=>($b=>$Word$cmp$aux($a)($b)($Cmp$eql)));
  var $Bool$false = inst_bool(($true=>($false=>$false)));
  var $Bool$true = inst_bool(($true=>($false=>$true)));
  var $Word$eql = ($a=>($b=>$Word$cmp($a)($b)($Bool$false)($Bool$true)($Bool$false)));
  var $U16$eql = a=>b=>a===b;
  var $Char$parse$type = ($str=>null);
  var $Unit$new = inst_unit(($unit=>$unit));
  var $Char$parse = ($str=>elim_string($str)($Unit$new)(($str$head=>($str$tail=>$str$head))));
  var $Bits$1 = ($bs=>inst_bits(($be=>($b0=>($b1=>$b1($bs))))));
  var $Bits$0 = ($bs=>inst_bits(($be=>($b0=>($b1=>$b0($bs))))));
  var $Bits$from_string = ($str=>elim_string($str)($Bits$nil)(($str$head=>($str$tail=>elim_bool($U16$eql($str$head)($Char$parse(`1`)))(($=>$Bits$1($Bits$from_string($str$tail))))(($=>$Bits$0($Bits$from_string($str$tail))))($Unit$new)))));
  var $Arelin$Constants$POS_X_KEY = $Bits$from_string(`01011101b`);
  var $Arelin$Constants$POS_Y_KEY = $Bits$from_string(`01110101b`);
  var $Arelin$Constants$DARTH_VADER_USING_FORCE = $Bits$from_string(`0101100001`);
  var $Arelin$Constants$FORCE_AWAKENS_KEY = $Bits$from_string(`01101101`);
  var $Arelin$Constants$GON_AFTER_ULT = $Bits$from_string(`001101111010`);
  var $Arelin$Constants$MANDO_WEAPON_KEY = $Bits$from_string(`001101111010`);
  var $Arelin$Constants$STEVE_BLOCK_TIMER = $Bits$from_string(`000`);
  var $Arelin$Constants$STEVE_TNT_TIMER = $Bits$from_string(`001`);
  var $Arelin$Constants$ULT_TIME = $Bits$from_string(`1001010110`);
  var $F64$new = ($a=>inst_f64(($f64=>$f64($a))));
  var $Word$from_bits = ($size=>($bits=>elim_nat($size)($Word$nil)(($size$pred=>elim_bits($bits)($Word$0($Word$from_bits($size$pred)($Bits$nil)))(($bits$pred=>$Word$0($Word$from_bits($size$pred)($bits$pred))))(($bits$pred=>$Word$1($Word$from_bits($size$pred)($bits$pred))))))));
  var $F64$parse_binary = ($str=>$F64$new($Word$from_bits($Nat$64)($Bits$from_string($str))));
  var $F64$1 = $F64$parse_binary(`0000000000000000000000000000000000000000000000000000111111111100`);
  var $Arelin$Constants$DMG_LV_1 = $F64$1;
  var $Arelin$Constants$DMG_LV_2 = $F64$parse(`2`);
  var $Arelin$Constants$DMG_LV_3 = $F64$parse(`3`);
  var $Arelin$Constants$DMG_LV_4 = $F64$parse(`4`);
  var $Arelin$Constants$DMG_LV_5 = $F64$parse(`5`);
  var $Arelin$Constants$DMG_LV_6 = $F64$parse(`6`);
  var $Arelin$Thing$new = ($fun=>($pid=>($mid=>($act=>($sid=>($stt=>($nam=>($lit=>($tik=>($pos=>($mov=>($bst=>($pad=>($dir=>($trg=>($vel=>($box=>($wei=>($mhp=>($dmg=>($knk=>($buf=>($chi=>($hit=>($rst=>($die=>($new=>$new($fun)($pid)($mid)($act)($sid)($stt)($nam)($lit)($tik)($pos)($mov)($bst)($pad)($dir)($trg)($vel)($box)($wei)($mhp)($dmg)($knk)($buf)($chi)($hit)($rst)($die))))))))))))))))))))))))))));
  var $Arelin$Thing$set_mov = ($thi=>($new_mov=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($new_mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$set_mhp = ($thi=>($new_mhp=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($new_mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$get_act = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$act))))))))))))))))))))))))))));
  var $Arelin$Thing$get_dir = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$dir))))))))))))))))))))))))))));
  var $Arelin$Thing$get_pos = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$pos))))))))))))))))))))))))))));
  var $Bool$eql = ($a=>($b=>elim_bool($a)(elim_bool($b)($Bool$true)($Bool$false))(elim_bool($b)($Bool$false)($Bool$true))));
  var $Bool$if = x=>ct=>cf=>x?ct:cf;
  var $F64$eql = ($x=>($y=>elim_f64($x)(($x$word=>elim_f64($y)(($y$word=>$Word$eql($x$word)($y$word)))))));
  var $F64$0 = $F64$parse_binary(`0000000000000000000000000000000000000000000000000000000000000000`);
  var $Arelin$Thing$get_pad = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$pad))))))))))))))))))))))))))));
  var $F64$cmp = $F64$cmp;
  var $F64$gtn = ($a=>($b=>$F64$cmp($a)($b)($Bool$false)($Bool$false)($Bool$true)));
  var $F64$add = a=>b=>a+b;
  var $F64$mul = a=>b=>a*b;
  var $F64$div = a=>b=>a/b;
  var $F64$pow = a=>b=>a**b;
  var $F64$V3$len = ($v=>$v(($v$x=>($v$y=>($v$z=>($sqr=>($sqr=>($sqr=>($sqr=>($expo=>($sqr=>$sqr)($F64$pow($sqr)($expo)))($F64$div($F64$1)($F64$add($F64$1)($F64$1))))($F64$add($sqr)($F64$mul($v$z)($v$z))))($F64$add($sqr)($F64$mul($v$y)($v$y))))($F64$add($sqr)($F64$mul($v$x)($v$x))))($F64$0))))));
  var $Arelin$Thing$is_walking = ($self=>($this$pad=>$F64$gtn($F64$V3$len($this$pad))($F64$0))($Arelin$Thing$get_pad($self)));
  var $Arelin$Thing$get_tik = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$tik))))))))))))))))))))))))))));
  var $F64$ltn = ($a=>($b=>$F64$cmp($a)($b)($Bool$true)($Bool$false)($Bool$false)));
  var $Bool$or = a=>b=>a||b;
  var $Bool$and = a=>b=>a&&b;
  var $F64$is_between = ($a=>($b=>($x=>($a_eql_x=>($a_ltn_x=>($x_ltn_b=>$Bool$or($a_eql_x)($Bool$and($a_ltn_x)($x_ltn_b)))($F64$ltn($x)($b)))($F64$ltn($a)($x)))($F64$eql($a)($x)))));
  var $Arelin$Thing$get_trg = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$trg))))))))))))))))))))))))))));
  var $F64$V3$eql = ($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($same_x=>($same_y=>($same_z=>$Bool$and($same_x)($Bool$and($same_y)($same_z)))($F64$eql($a$z)($b$z)))($F64$eql($a$y)($b$y)))($F64$eql($a$x)($b$x))))))))))));
  var $F64$sub = a=>b=>a-b;
  var $F64$V3$new = ($x=>($y=>($z=>($new=>$new($x)($y)($z)))));
  var $F64$V3$sub = ($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($c$x=>($c$y=>($c$z=>$F64$V3$new($c$x)($c$y)($c$z))($F64$sub($a$z)($b$z)))($F64$sub($a$y)($b$y)))($F64$sub($a$x)($a$x))))))))))));
  var $F64$V3$norm = ($v=>$v(($v$x=>($v$y=>($v$z=>($len=>($new_x=>($new_y=>($new_z=>$F64$V3$new($new_x)($new_y)($new_z))($F64$div($v$z)($len)))($F64$div($v$y)($len)))($F64$div($v$x)($len)))($F64$V3$len($v)))))));
  var $F64$V3$look_at = ($a=>($b=>($c=>$a(($a$x=>($a$y=>($a$z=>$b(($a$x=>($a$y=>($a$z=>$c(($a$x=>($a$y=>($a$z=>($a_eql_b=>($diff=>($normdiff=>elim_bool($a_eql_b)($normdiff)($c))($F64$V3$norm($diff)))($F64$V3$sub($b)($a)))($F64$V3$eql($a)($b)))))))))))))))));
  var $Arelin$Thing$targ_dir = ($self=>($pos=>($trg=>($dir=>$F64$V3$look_at($pos)($trg)($dir))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_trg($self)))($Arelin$Thing$get_pos($self)));
  var $F64$mod = a=>b=>a%b;
  var $F64$if = ($x=>($ct=>($cf=>($bool=>elim_bool($bool)($cf)($ct))($F64$eql($x)($F64$0)))));
  var $F64$from_bool = ($b=>elim_bool($b)($F64$1)($F64$0));
  var $F64$floor = ($x=>($ltn_zero=>$F64$sub($F64$sub($x)($F64$mod($x)($F64$1)))($ltn_zero))($F64$if($F64$from_bool($F64$ltn($x)($F64$0)))($F64$1)($F64$0)));
  var $Arelin$Thing$set_bst = ($thi=>($new_bst=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($new_bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$set_dir = ($thi=>($new_dir=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($new_dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$set_mid = ($thi=>($new_mid=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($new_mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$animate_between = ($self=>($boost=>($model=>($count=>($from=>($til=>($self$tik=>($self$pad=>($self$act=>($self$dir=>elim_bool($F64$is_between($from)($til)($self$tik))(($pad_len=>($new_dir=>($new_mid=>($self=>($self=>($self=>$self)($Arelin$Thing$set_mid($self)($new_mid)))($Arelin$Thing$set_dir($self)($new_dir)))($Arelin$Thing$set_bst($self)($boost)))(($duration=>($curr_tik=>($curr_tim=>$F64$add($model)($F64$mod($F64$floor($F64$mul($curr_tim)($count)))($count)))($F64$div($curr_tik)($duration)))($F64$sub($self$tik)($from)))($F64$sub($til)($from))))(elim_bool($Bool$and($F64$gtn($self$act)($F64$0))($F64$eql($pad_len)($F64$0)))($Arelin$Thing$targ_dir($self))(elim_bool($F64$gtn($pad_len)($F64$0))($F64$V3$norm($self$pad))($self$dir))))($F64$V3$len($self$pad)))($self))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$get_pad($self)))($Arelin$Thing$get_tik($self))))))));
  var $Arelin$Thing$set_rst = ($thi=>($new_rst=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($new_rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$reset = ($self=>($at_tik=>($curr_tik=>elim_bool($F64$gtn($curr_tik)($F64$sub($at_tik)($F64$1)))($Arelin$Thing$set_rst($self)($Bool$true))($self))($Arelin$Thing$get_tik($self))));
  var $Arelin$Thing$animate = ($self=>($boost=>($model=>($count=>($durat=>($self=>($self=>$self)($Arelin$Thing$reset($self)($F64$sub($durat)($F64$1))))($Arelin$Thing$animate_between($self)($boost)($model)($count)($F64$0)($durat)))))));
  var $BLESKAPE_WALK_000 = $F64$parse(`673`);
  var $BLESKAPE_IDLE_000 = $F64$parse(`607`);
  var $BLESKAPE_SHOCK_BALL_000 = $F64$parse(`611`);
  var $List$cons = ($head=>($tail=>($nil=>($cons=>$cons($head)($tail)))));
  var $Arelin$Game$Effect$damage = ($dmg=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$damage($dmg)))))))))))));
  var $Arelin$Game$Effect$impulse = ($mag=>($dir=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$impulse($mag)($dir))))))))))))));
  var $List$nil = ($nil=>($cons=>$nil));
  var $Arelin$Game$Hit$new = ($eff=>($pos=>($dir=>($box=>($new=>$new($eff)($pos)($dir)($box))))));
  var $F64$V3$add = ($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($c$x=>($c$y=>($c$z=>$F64$V3$new($c$x)($c$y)($c$z))($F64$add($a$z)($b$z)))($F64$add($a$y)($b$y)))($F64$add($a$x)($a$x))))))))))));
  var $F64$V3$scale = ($k=>($v=>$v(($v$x=>($v$y=>($v$z=>($new_x=>($new_y=>($new_z=>$F64$V3$new($new_x)($new_y)($new_z))($F64$mul($k)($v$z)))($F64$mul($k)($v$y)))($F64$mul($k)($v$x))))))));
  var $Arelin$Thing$at_dist = ($self=>($dist=>($dir=>($pos=>$F64$V3$add($pos)($F64$V3$scale($dist)($dir)))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self))));
  var $Arelin$Game$Hitbox$cbox = ($rad=>($nbox=>($cbox=>($pbox=>$cbox($rad)))));
  var $Arelin$Thing$set_hit = ($thi=>($new_hit=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($new_hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$cast = ($self=>($at_tik=>($do_hit=>($self$tik=>elim_bool($F64$eql($self$tik)($at_tik))($Arelin$Thing$set_hit($self)($do_hit))($self))($Arelin$Thing$get_tik($self)))));
  var $BLESKAPE_DEFENSE_MODE_000 = $F64$parse(`603`);
  var $BLESKAPE_DEFENSE_MODE_002 = $F64$parse(`605`);
  var $BLESKAPE_SHOCK_GROUND_WAVE_000 = $F64$parse(`626`);
  var $BLESKAPE_SUPREME_PUNCH_SEQUENCE_000 = $F64$parse(`638`);
  var $BLESKAPE_DASH_000 = $F64$parse(`588`);
  var $List = ($A=>null);
  var $Arelin$Thing$get_buf = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$buf))))))))))))))))))))))))))));
  var $Maybe = ($A=>null);
  var $Maybe$none = ($none=>($some=>$none));
  var $Maybe$some = ($value=>($none=>($some=>$some($value))));
  var $List$find = ($cond=>($xs=>$xs($Maybe$none)(($head=>($tail=>elim_bool($cond($head))($Maybe$some($head))($List$find($cond)($tail)))))));
  var $Arelin$Thing$is_rooted = ($self=>($self$buf=>($is_root_buff=>$List$find($is_root_buff)($self$buf)($Bool$false)(($some=>$Bool$true)))(($buff=>$buff(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$true))(($buff$dur=>$Bool$true)))))($Arelin$Thing$get_buf($self)));
  var $Arelin$Thing$set_vel = ($thi=>($new_vel=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($new_vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$dash = ($self=>($speed=>($from_tik=>($til_tik=>elim_bool($Arelin$Thing$is_rooted($self))($self)(($self$tik=>($self$pos=>($self$trg=>($self$dir=>($new_vel=>$Arelin$Thing$set_vel($self)($new_vel))(elim_bool($F64$is_between($from_tik)($til_tik)($self$tik))($F64$V3$scale($speed)($F64$V3$look_at($self$pos)($self$trg)($self$dir)))($F64$V3$new($F64$0)($F64$0)($F64$0))))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_trg($self)))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_tik($self)))))));
  var $Arelin$Game$Effect$repulse = ($mag=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$repulse($mag)))))))))))));
  var $BLESKAPE_TAUNT_000 = $F64$parse(`663`);
  var $Arelin$Thing$bleskape_fun = ($self=>($self=>($self=>($self$act=>($self$dir=>($self$pos=>$Bool$if($F64$eql($self$act)($F64$0))($Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($BLESKAPE_WALK_000)($F64$parse(`4`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$1)($BLESKAPE_IDLE_000)($F64$parse(`4`))($F64$parse(`16`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($effs=>($hits=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`18`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($Arelin$Thing$at_dist($self)($F64$parse(`40`)))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`20`))))($List$cons($Arelin$Game$Hit$new($effs)($Arelin$Thing$at_dist($self)($F64$parse(`40`)))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`20`))))($List$nil))))($List$cons($Arelin$Game$Effect$damage($F64$parse(`3`)))($List$cons($Arelin$Game$Effect$impulse($F64$parse(`12`))($self$dir))($List$nil))))($Arelin$Thing$animate($self)($F64$0)($BLESKAPE_SHOCK_BALL_000)($F64$parse(`15`))($F64$parse(`30`))))($Bool$if($F64$eql($self$act)($F64$parse(`2`)))(($self=>($self=>($self=>$self)($Arelin$Thing$reset($self)($F64$parse(`12`))))($Arelin$Thing$animate_between($self)($F64$1)($BLESKAPE_DEFENSE_MODE_002)($F64$1)($F64$parse(`3`))($F64$parse(`12`))))($Arelin$Thing$animate_between($self)($F64$1)($BLESKAPE_DEFENSE_MODE_000)($F64$parse(`3`))($F64$0)($F64$parse(`3`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>($effs=>($hits=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`20`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`58`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($F64$parse(`5`)))($List$nil)))($Arelin$Thing$animate($self)($F64$0)($BLESKAPE_SHOCK_GROUND_WAVE_000)($F64$parse(`12`))($F64$parse(`24`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))(($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>($self=>($effes=>($hits=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`46`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($Arelin$Thing$at_dist($self)($F64$parse(`32`)))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`32`))))($List$nil)))($List$cons($Arelin$Game$Effect$impulse($F64$parse(`18`))($self$dir))($List$cons($Arelin$Game$Effect$impulse($F64$parse(`18`))($self$dir))($List$nil))))($Arelin$Thing$cast($self)($F64$parse(`42`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`38`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`34`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`30`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`26`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($Arelin$Thing$at_dist($self)($F64$parse(`32`)))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`32`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($F64$parse(`1`)))($List$nil)))($Arelin$Thing$animate($self)($F64$0)($BLESKAPE_SUPREME_PUNCH_SEQUENCE_000)($F64$parse(`25`))($F64$parse(`50`))))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))(($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`23`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`20`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`17`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($Arelin$Thing$at_dist($self)($F64$parse(`32`)))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`32`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($F64$parse(`1`)))($List$cons($Arelin$Game$Effect$repulse($F64$parse(`8`)))($List$nil))))($Arelin$Thing$dash($self)($F64$parse(`8`))($F64$parse(`15`))($F64$parse(`25`))))($Arelin$Thing$animate($self)($F64$0)($BLESKAPE_DASH_000)($F64$parse(`15`))($F64$parse(`30`))))($Arelin$Thing$animate($self)($F64$0)($BLESKAPE_TAUNT_000)($F64$parse(`10`))($F64$parse(`20`)))))))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mhp($self)($F64$parse(`24`))))($Arelin$Thing$set_mov($self)($F64$parse(`2`))));
  var $Map = ($A=>null);
  var $Arelin$Thing$get_stt = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$stt))))))))))))))))))))))))))));
  var $Map$get = ($bits=>($map=>elim_bits($bits)($map($Maybe$none)(($map$val=>($map$lft=>($map$rgt=>$map$val)))))(($bits$pred=>$map($Maybe$none)(($map$val=>($map$lft=>($map$rgt=>$Map$get($bits$pred)($map$lft)))))))(($bits$pred=>$map($Maybe$none)(($map$val=>($map$lft=>($map$rgt=>$Map$get($bits$pred)($map$rgt)))))))));
  var $Map$tie = ($val=>($lft=>($rgt=>($new=>($tie=>$tie($val)($lft)($rgt))))));
  var $Map$new = ($new=>($tie=>$new));
  var $Map$set = ($bits=>($val=>($map=>elim_bits($bits)($map($Map$tie($Maybe$some($val))($Map$new)($Map$new))(($map$val=>($map$lft=>($map$rgt=>$Map$tie($Maybe$some($val))($map$lft)($map$rgt))))))(($bits$pred=>$map($Map$tie($Maybe$none)($Map$set($bits$pred)($val)($Map$new))($Map$new))(($map$val=>($map$lft=>($map$rgt=>$Map$tie($map$val)($Map$set($bits$pred)($val)($map$lft))($map$rgt)))))))(($bits$pred=>$map($Map$tie($Maybe$none)($Map$new)($Map$set($bits$pred)($val)($Map$new)))(($map$val=>($map$lft=>($map$rgt=>$Map$tie($map$val)($map$lft)($Map$set($bits$pred)($val)($map$rgt)))))))))));
  var $Arelin$Thing$set_stt = ($thi=>($new_stt=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($new_stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$update_buff = ($self=>($stt_key=>($stt=>$Map$get($stt_key)($stt)($self)(($value=>elim_bool($F64$eql($value)($F64$0))(($new_tik=>($new_stt=>$Arelin$Thing$set_stt($self)($new_stt))($Map$set($stt_key)($new_tik)($stt)))($F64$sub($value)($F64$1)))($self))))($Arelin$Thing$get_stt($self))));
  var $Arelin$Thing$is_using_buff = ($self=>($stt_key=>($stt=>$Map$get($stt_key)($stt)($Bool$false)(($current_tik=>elim_bool($F64$eql($current_tik)($F64$0))($Bool$false)($Bool$true))))($Arelin$Thing$get_stt($self))));
  var $DARTH_VADER_WALK_CYCLE_000 = $F64$parse(`1011`);
  var $DARTH_VADER_IDLE_000 = $F64$parse(`922`);
  var $Arelin$Thing$get_stt_value = ($self=>($stt_key=>($stt=>$Map$get($stt_key)($stt)($F64$0)(($value=>$value)))($Arelin$Thing$get_stt($self))));
  var $Arelin$Thing$map_stt_key = ($self=>($stt_key=>($fn=>($stt=>$Map$get($stt_key)($stt)($Arelin$Thing$set_stt($self)($Map$set($stt_key)($F64$0)($stt)))(($value=>$Arelin$Thing$set_stt($self)($Map$set($stt_key)($fn($value))($stt)))))($Arelin$Thing$get_stt($self)))));
  var $DARTH_VADER_THE_FORCE_AWAKENS_VAR_1_000 = $F64$parse(`953`);
  var $DARTH_VADER_THE_FORCE_AWAKENS_VAR_2_000 = $F64$parse(`961`);
  var $DARTH_VADER_THE_FORCE_AWAKENS_VAR_3_000 = $F64$parse(`969`);
  var $F64$2 = $F64$parse_binary(`0000000000000000000000000000000000000000000000000000000000000010`);
  var $DARTH_VADER_THE_RISE_OF_SKYWALKER_CAST_ANIMATION_000 = $F64$parse(`996`);
  var $DARTH_VADER_THE_RISE_OF_SKYWALKER_CAST_ANIMATION_002 = $F64$parse(`998`);
  var $F64$_1 = $F64$parse_binary(`0000000000000000000000000000000000000000000000000000111111111101`);
  var $Arelin$Game$Hitbox$nbox = ($nbox=>($cbox=>($pbox=>$nbox)));
  var $Arelin$Thing$new_thing = $Arelin$Thing$new(($x=>$x))($F64$0)($F64$0)($F64$0)($F64$0)($Map$new)($List$nil)($List$nil)($F64$0)($F64$V3$new($F64$0)($F64$0)($F64$0))($F64$parse(`8`))($F64$1)($F64$V3$new($F64$0)($F64$0)($F64$0))($F64$V3$new($F64$0)($F64$_1)($F64$0))($F64$V3$new($F64$0)($F64$0)($F64$0))($F64$V3$new($F64$0)($F64$0)($F64$0))($Arelin$Game$Hitbox$nbox)($F64$1)($F64$parse(`24`))($F64$0)($F64$V3$new($F64$0)($F64$0)($F64$0))($List$nil)($List$nil)($List$nil)($Bool$false)($Bool$false);
  var $Arelin$Thing$set_fun = ($thi=>($new_fun=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($new_fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$set_die = ($thi=>($new_die=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($new_die))))))))))))))))))))))))))))));
  var $Arelin$Thing$die = ($self=>($at_tik=>($curr_tik=>elim_bool($F64$gtn($curr_tik)($F64$sub($at_tik)($F64$1)))($Arelin$Thing$set_die($self)($Bool$true))($self))($Arelin$Thing$get_tik($self))));
  var $Arelin$Thing$animate_die = ($self=>($boost=>($model=>($count=>($durat=>($self=>($self=>$self)($Arelin$Thing$die($self)($F64$sub($durat)($F64$1))))($Arelin$Thing$animate_between($self)($boost)($model)($count)($F64$0)($durat)))))));
  var $DARTH_VADER_THE_RISE_OF_SKYWALKER_EFFECT_ANIMATION_000 = $F64$parse(`999`);
  var $Arelin$Thing$darth_vader$rise_skywalker_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($DARTH_VADER_THE_RISE_OF_SKYWALKER_EFFECT_ANIMATION_000)($F64$parse(`4`))($F64$parse(`12`)));
  var $Arelin$Thing$get_sid = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$sid))))))))))))))))))))))))))));
  var $Arelin$Thing$set_sid = ($thi=>($new_sid=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($new_sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$set_chi = ($thi=>($new_chi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($new_chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$spawn = ($self=>($at_tik=>($children=>elim_bool($F64$eql($Arelin$Thing$get_tik($self))($at_tik))($Arelin$Thing$set_chi($self)($children))($self))));
  var $Arelin$Thing$set_pos = ($thi=>($new_pos=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($new_pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$move = ($self=>($to_pos=>$Arelin$Thing$set_pos($self)($to_pos)));
  var $F64$sqrt = ($n=>$F64$pow($n)($F64$div($F64$1)($F64$2)));
  var $F64$V3$sqr_dist = ($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($two=>($x_diff=>($y_diff=>($z_diff=>$F64$add($x_diff)($F64$add($y_diff)($z_diff)))($F64$pow($F64$sub($a$z)($b$z))($two)))($F64$pow($F64$sub($a$y)($b$y))($two)))($F64$pow($F64$sub($a$x)($b$x))($two)))($F64$add($F64$1)($F64$1))))))))))));
  var $F64$V3$dist = ($a=>($b=>$F64$sqrt($F64$V3$sqr_dist($a)($b))));
  var $Arelin$Thing$at_max_dist = ($self=>($max_range=>($pos=>($trg=>($dist_max=>($dist_trg=>elim_bool($F64$ltn($dist_trg)($dist_max))($Arelin$Thing$at_dist($self)($dist_trg))($Arelin$Thing$at_dist($self)($max_range)))($F64$V3$dist($pos)($trg)))($F64$V3$dist($pos)($Arelin$Thing$at_dist($self)($max_range))))($Arelin$Thing$get_trg($self)))($Arelin$Thing$get_pos($self))));
  var $DARTH_VADER_THE_PHANTOM_MENACE_CAST_ANIMATION_000 = $F64$parse(`977`);
  var $DARTH_VADER_THE_PHANTOM_MENACE_CAST_ANIMATION_004 = $F64$parse(`981`);
  var $DARTH_VADER_THE_PHANTOM_MENACE_SABER_TWISTING_000 = $F64$parse(`988`);
  var $Arelin$Thing$darth_vader$phanton_menace_twisting_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($DARTH_VADER_THE_PHANTOM_MENACE_SABER_TWISTING_000)($F64$parse(`5`))($F64$parse(`30`)));
  var $Arelin$Thing$set_box = ($thi=>($new_box=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($new_box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$animate_with_blink = ($self=>($boost=>($model_atk=>($model_idle=>($count=>($from=>($til=>($self=>($self=>($self=>$self)($Arelin$Thing$reset($self)($til)))($Arelin$Thing$animate_between($self)($boost)($model_idle)($F64$1)($til)($F64$add($til)($F64$1))))($Arelin$Thing$animate_between($self)($boost)($model_atk)($count)($from)($til)))))))));
  var $DARTH_VADER_ROGUE_ONE_000 = $F64$parse(`927`);
  var $Arelin$Thing$blink = ($self=>($at_tik=>($to_pos=>elim_bool($Arelin$Thing$is_rooted($self))($self)(elim_bool($F64$eql($at_tik)($Arelin$Thing$get_tik($self)))($Arelin$Thing$set_pos($self)($to_pos))($self)))));
  var $Arelin$Thing$darth_vader_fun = ($self=>($self=>($self=>($self$act=>($self$dir=>($self$pos=>($self=>elim_bool($F64$eql($self$act)($F64$0))(elim_bool($Arelin$Thing$is_walking($self))(($is_using_buff=>elim_bool($is_using_buff)($Arelin$Thing$animate($self)($F64$parse(`1.6`))($DARTH_VADER_WALK_CYCLE_000)($F64$parse(`8`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$1)($DARTH_VADER_WALK_CYCLE_000)($F64$parse(`8`))($F64$parse(`16`))))($Arelin$Thing$is_using_buff($self)($Arelin$Constants$DARTH_VADER_USING_FORCE)))($Arelin$Thing$animate($self)($F64$1)($DARTH_VADER_IDLE_000)($F64$parse(`5`))($F64$parse(`10`))))(elim_bool($F64$eql($self$act)($F64$1))(($value=>($inc=>($tik=>($self=>($self=>($self=>$self)($Arelin$Thing$dash($self)($F64$parse(`2`))($F64$0)($F64$parse(`20`))))(elim_bool($F64$eql($F64$mod($value)($F64$parse(`2`)))($F64$0))($Arelin$Thing$animate($self)($F64$0)($DARTH_VADER_THE_FORCE_AWAKENS_VAR_1_000)($F64$parse(`8`))($F64$parse(`16`)))(elim_bool($F64$eql($F64$mod($value)($F64$parse(`3`)))($F64$0))($Arelin$Thing$animate($self)($F64$0)($DARTH_VADER_THE_FORCE_AWAKENS_VAR_2_000)($F64$parse(`8`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$0)($DARTH_VADER_THE_FORCE_AWAKENS_VAR_3_000)($F64$parse(`8`))($F64$parse(`24`))))))(elim_bool($F64$eql($tik)($F64$0))($Arelin$Thing$map_stt_key($self)($Arelin$Constants$FORCE_AWAKENS_KEY)($inc))($self)))($Arelin$Thing$get_tik($self)))(($x=>$F64$add($F64$1)($x))))($Arelin$Thing$get_stt_value($self)($Arelin$Constants$DARTH_VADER_USING_FORCE)))(elim_bool($F64$eql($self$act)($F64$2))(($set_timer=>($self=>($self=>$self)($Arelin$Thing$animate($self)($F64$1)($DARTH_VADER_IDLE_000)($F64$parse(`5`))($F64$parse(`10`))))($Arelin$Thing$map_stt_key($self)($Arelin$Constants$DARTH_VADER_USING_FORCE)($set_timer)))(($=>$F64$mul($F64$parse(`5`))($Arelin$Constants$ONE_SEC))))(elim_bool($F64$eql($self$act)($F64$parse(`3`)))(($self=>($self=>($self=>($force=>($force=>($self$sid=>($force=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`10`))($List$cons($Arelin$Thing$move($force)($Arelin$Thing$at_max_dist($self)($F64$parse(`150`))))($List$nil))))($Arelin$Thing$set_sid($force)($self$sid)))($Arelin$Thing$get_sid($self)))($Arelin$Thing$set_fun($force)($Arelin$Thing$darth_vader$rise_skywalker_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$reset($self)($F64$parse(`17`))))($Arelin$Thing$animate_between($self)($F64$0)($DARTH_VADER_THE_RISE_OF_SKYWALKER_CAST_ANIMATION_002)($F64$1)($F64$parse(`12`))($F64$parse(`18`))))($Arelin$Thing$animate_between($self)($F64$0)($DARTH_VADER_THE_RISE_OF_SKYWALKER_CAST_ANIMATION_000)($F64$parse(`3`))($F64$0)($F64$parse(`12`))))(elim_bool($F64$eql($self$act)($F64$parse(`4`)))(($self=>($self=>($self=>($self$sid=>($targ_dir=>($saber=>($saber=>($saber=>($saber=>($saber=>($saber=>($saber=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`14`))($List$cons($saber)($List$nil))))($Arelin$Thing$set_box($saber)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($saber)($F64$V3$scale($F64$parse(`10`))($targ_dir))))($Arelin$Thing$set_dir($saber)($targ_dir)))($Arelin$Thing$set_pos($saber)($self$pos)))($Arelin$Thing$set_fun($saber)($Arelin$Thing$darth_vader$phanton_menace_twisting_fun)))($Arelin$Thing$set_sid($saber)($self$sid)))($Arelin$Thing$new_thing))($Arelin$Thing$targ_dir($self)))($Arelin$Thing$get_sid($self)))($Arelin$Thing$reset($self)($F64$parse(`17`))))($Arelin$Thing$animate_between($self)($F64$0)($DARTH_VADER_THE_PHANTOM_MENACE_CAST_ANIMATION_004)($F64$1)($F64$parse(`12`))($F64$parse(`18`))))($Arelin$Thing$animate_between($self)($F64$0)($DARTH_VADER_THE_PHANTOM_MENACE_CAST_ANIMATION_000)($F64$parse(`4`))($F64$0)($F64$parse(`12`))))(elim_bool($F64$eql($self$act)($F64$parse(`5`)))(($self=>($self=>($self=>$self)($Arelin$Thing$blink($self)($F64$parse(`20`))($Arelin$Thing$at_dist($self)($F64$parse(`75`)))))($Arelin$Thing$reset($self)($F64$parse(`20`))))($Arelin$Thing$animate_with_blink($self)($F64$0)($DARTH_VADER_ROGUE_ONE_000)($DARTH_VADER_IDLE_000)($F64$parse(`10`))($F64$0)($F64$parse(`20`))))($Arelin$Thing$animate($self)($F64$1)($DARTH_VADER_IDLE_000)($F64$parse(`5`))($F64$parse(`10`)))))))))($Arelin$Thing$update_buff($self)($Arelin$Constants$DARTH_VADER_USING_FORCE)))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mhp($self)($F64$parse(`24`))))($Arelin$Thing$set_mov($self)($F64$parse(`2`))));
  var $DILMA_WALK_000 = $F64$parse(`1150`);
  var $DILMA_IDLE_000 = $F64$parse(`1095`);
  var $DILMA_PROTECTION_000 = $F64$parse(`1099`);
  var $DILMA_PROTECTION_007 = $F64$parse(`1106`);
  var $DILMA_CONFUSION_CASTING_000 = $F64$parse(`1076`);
  var $DILMA_CONFUSION_CASTING_016 = $F64$parse(`1092`);
  var $DILMA_CONFUSION_ANIM_000 = $F64$parse(`1072`);
  var $Arelin$Thing$dilma$confusion_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($DILMA_CONFUSION_ANIM_000)($F64$parse(`4`))($F64$parse(`40`)));
  var $DILMA_SALUTING_THE_CASSAVA_000 = $F64$parse(`1113`);
  var $DILMA_STOCKING_WIND_CASTING_000 = $F64$parse(`1134`);
  var $DILMA_STOCKING_WIND_ANIM_000 = $F64$parse(`1131`);
  var $Arelin$Thing$dilma$stocking_wind_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($DILMA_STOCKING_WIND_ANIM_000)($F64$parse(`3`))($F64$parse(`15`)));
  var $DILMA_TAUNT_000 = $F64$parse(`1144`);
  var $Arelin$Thing$dilma_fun = ($self=>($self=>($self$act=>($self$dir=>($self$pos=>$Bool$if($F64$eql($self$act)($F64$0))($Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($DILMA_WALK_000)($F64$parse(`8`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$1)($DILMA_IDLE_000)($F64$parse(`4`))($F64$parse(`16`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($self=>($self=>$self)($Arelin$Thing$reset($self)($F64$parse(`27`))))($Arelin$Thing$animate_between($self)($F64$0)($DILMA_PROTECTION_007)($F64$parse(`5`))($F64$parse(`28`))($F64$parse(`14`))))($Arelin$Thing$animate_between($self)($F64$0)($DILMA_PROTECTION_000)($F64$parse(`6`))($F64$parse(`3`))($F64$parse(`7`))))($Bool$if($F64$eql($self$act)($F64$2))(($self=>($self=>($self=>($speech=>($speech=>($speech=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`34`))($List$cons($Arelin$Thing$move($speech)($Arelin$Thing$at_max_dist($self)($F64$parse(`100`))))($List$nil))))($Arelin$Thing$set_dir($speech)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_fun($speech)($Arelin$Thing$dilma$confusion_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$reset($self)($F64$parse(`63`))))($Arelin$Thing$animate_between($self)($F64$0)($DILMA_CONFUSION_CASTING_016)($F64$parse(`3`))($F64$parse(`34`))($F64$parse(`64`))))($Arelin$Thing$animate_between($self)($F64$0)($DILMA_CONFUSION_CASTING_000)($F64$parse(`17`))($F64$parse(`0`))($F64$parse(`34`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>$self)($Arelin$Thing$animate($self)($F64$0)($DILMA_SALUTING_THE_CASSAVA_000)($F64$parse(`18`))($F64$parse(`54`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))(($self=>($wind=>($wind=>($wind=>($wind=>($wind=>($wind=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`8`))($List$cons($wind)($List$nil))))($Arelin$Thing$set_box($wind)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($wind)($F64$V3$scale($F64$parse(`6`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($wind)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($wind)($self$pos)))($Arelin$Thing$set_fun($wind)($Arelin$Thing$dilma$stocking_wind_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($DILMA_STOCKING_WIND_CASTING_000)($F64$parse(`10`))($F64$parse(`30`))))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))($Arelin$Thing$animate($self)($F64$1)($DILMA_IDLE_000)($F64$parse(`4`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$0)($DILMA_TAUNT_000)($F64$parse(`6`))($F64$parse(`18`)))))))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mov($self)($F64$parse(`2`))));
  var $DORIME_WALK_CYCLE_000 = $F64$parse(`1328`);
  var $DORIME_IDLE_000 = $F64$parse(`1250`);
  var $DORIME_BLESSING_FOR_WHO_DESERVE_000 = $F64$parse(`1166`);
  var $DORIME_BLESSING_FOR_WHO_DESERVE_PROJECTILE_000 = $F64$parse(`1165`);
  var $Arelin$Thing$dorime$blessing_fun = ($self=>($self$pos=>($self$dir=>($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`14`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`12`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`10`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`8`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`6`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`4`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`2`))($hits)))($Arelin$Thing$cast($self)($F64$0)($hits)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`4`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($F64$1))($List$nil)))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$animate_die($self)($F64$0)($DORIME_BLESSING_FOR_WHO_DESERVE_PROJECTILE_000)($F64$1)($F64$parse(`16`))))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_pos($self)));
  var $DORIME_LEPTOSPIROSE_CURSE_CAST_ANIMATION_000 = $F64$parse(`1276`);
  var $DORIME_LEPTOSPIROSE_CURSE_POT_000 = $F64$parse(`1281`);
  var $DORIME_LEPTOSPIROSE_CURSE_PUDDLE_000 = $F64$parse(`1311`);
  var $DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000 = $F64$parse(`1282`);
  var $Arelin$Thing$dorime$leptospirose_puddle_fun = ($self=>($self$pos=>($self$dir=>($self=>($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$die($self)($F64$parse(`39`))))($Arelin$Thing$cast($self)($F64$parse(`38`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`34`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`30`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`26`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`22`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`18`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`14`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`10`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`48`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($F64$parse(`1`)))($List$nil)))($Arelin$Thing$animate_between($self)($F64$0)($DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000)($F64$parse(`29`))($F64$parse(`10`))($F64$parse(`39`))))($Arelin$Thing$animate_between($self)($F64$0)($DORIME_LEPTOSPIROSE_CURSE_PUDDLE_000)($F64$parse(`10`))($F64$parse(`0`))($F64$parse(`10`))))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_pos($self)));
  var $Arelin$Thing$dorime$leptospirose_puddle_pot_fun = ($self=>($self$sid=>($self$pos=>($self=>($self=>($pudd=>($pudd=>($pudd=>($pudd=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`9`))($List$cons($pudd)($List$nil))))($Arelin$Thing$set_pos($pudd)($self$pos)))($Arelin$Thing$set_fun($pudd)($Arelin$Thing$dorime$leptospirose_puddle_fun)))($Arelin$Thing$set_sid($pudd)($self$sid)))($Arelin$Thing$new_thing))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$cbox($F64$parse(`10`)))))($Arelin$Thing$animate_die($self)($F64$0)($DORIME_LEPTOSPIROSE_CURSE_POT_000)($F64$1)($F64$parse(`10`))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_sid($self)));
  var $DORIME_HOLY_FLAME_CAST_ANIMATION_000 = $F64$parse(`1236`);
  var $DORIME_HOLY_FLAME_PILLAR_000 = $F64$parse(`1244`);
  var $Arelin$Thing$dorime$holy_flame_fun = ($self=>($self$pos=>($self$dir=>($self=>($self=>($effs=>($hits=>($self=>$self)($Arelin$Thing$cast($self)($F64$0)($hits)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`20`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($F64$parse(`3`)))($List$nil)))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$animate_die($self)($F64$0)($DORIME_HOLY_FLAME_PILLAR_000)($F64$parse(`5`))($F64$parse(`15`))))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_pos($self)));
  var $DORIME_JESUS_POWER_000 = $F64$parse(`1255`);
  var $Arelin$Game$Effect$heal = ($lif=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$heal($lif)))))))))))));
  var $Arelin$Thing$dorime$jesus_power = ($self=>($self$pos=>($self$dir=>($self=>($effs=>($hits=>($self=>($self=>$self)($Arelin$Thing$die($self)($F64$parse(`6`))))($Arelin$Thing$cast($self)($F64$0)($hits)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`20`))))($List$nil)))($List$cons($Arelin$Game$Effect$heal($F64$parse(`5`)))($List$nil)))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_pos($self)));
  var $DORIME_GODS_CHAMBER_CAST_ANIMATION_000 = $F64$parse(`1180`);
  var $DORIME_GODS_CHAMBER_HEAL_CIRCLE_000 = $F64$parse(`1218`);
  var $DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_000 = $F64$parse(`1189`);
  var $Arelin$Thing$dorime$gods_chamber_fun = ($self=>($self$pos=>($self$dir=>($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$die($self)($F64$parse(`92`))))($Arelin$Thing$cast($self)($F64$parse(`90`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`86`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`82`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`78`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`74`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`70`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`66`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`62`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`54`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`50`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`46`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`42`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`38`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`34`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`52`))))($List$nil)))($List$cons($Arelin$Game$Effect$heal($F64$1))($List$nil)))($Arelin$Thing$animate_between($self)($F64$0)($DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_000)($F64$parse(`29`))($F64$parse(`34`))($F64$parse(`92`))))($Arelin$Thing$animate_between($self)($F64$0)($DORIME_GODS_CHAMBER_HEAL_CIRCLE_000)($F64$parse(`17`))($F64$parse(`0`))($F64$parse(`34`))))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_pos($self)));
  var $DORIME_TAUNT_000 = $F64$parse(`1325`);
  var $DORIME_TAUNT_002 = $F64$parse(`1327`);
  var $Arelin$Thing$dorime_fun = ($self=>($self$pos=>($self$sid=>($self=>($self=>($self=>($self$act=>($self$dir=>$Bool$if($F64$eql($self$act)($F64$0))($Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($DORIME_WALK_CYCLE_000)($F64$parse(`8`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$1)($DORIME_IDLE_000)($F64$parse(`5`))($F64$parse(`15`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($fire=>($fire=>($fire=>($fire=>($fire=>($fire=>($self=>($self=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`22`))($List$cons($fire)($List$nil))))($Arelin$Thing$spawn($self)($F64$parse(`16`))($List$cons($fire)($List$nil))))($Arelin$Thing$spawn($self)($F64$parse(`8`))($List$cons($fire)($List$nil))))($Arelin$Thing$set_pos($fire)($self$pos)))($Arelin$Thing$set_dir($fire)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_vel($fire)($F64$V3$scale($F64$parse(`8`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_fun($fire)($Arelin$Thing$dorime$blessing_fun)))($Arelin$Thing$set_sid($fire)($self$sid)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($DORIME_BLESSING_FOR_WHO_DESERVE_000)($F64$parse(`14`))($F64$parse(`28`))))($Bool$if($F64$eql($self$act)($F64$parse(`2`)))(($self=>($pot=>($pot=>($pot=>($pot=>($pot=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`14`))($List$cons($pot)($List$nil))))($Arelin$Thing$set_vel($pot)($F64$V3$scale($F64$parse(`14`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_pos($pot)($self$pos)))($Arelin$Thing$set_fun($pot)($Arelin$Thing$dorime$leptospirose_puddle_pot_fun)))($Arelin$Thing$set_sid($pot)($self$sid)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($DORIME_LEPTOSPIROSE_CURSE_CAST_ANIMATION_000)($F64$parse(`5`))($F64$parse(`15`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>($flame=>($flame=>($flame=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`5`))($List$cons($Arelin$Thing$move($flame)($Arelin$Thing$at_max_dist($self)($F64$parse(`128`))))($List$nil))))($Arelin$Thing$set_fun($flame)($Arelin$Thing$dorime$holy_flame_fun)))($Arelin$Thing$set_sid($flame)($self$sid)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($DORIME_HOLY_FLAME_CAST_ANIMATION_000)($F64$parse(`8`))($F64$parse(`16`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))(($self=>($hit=>($hit=>($hit=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`18`))($List$cons($Arelin$Thing$move($hit)($Arelin$Thing$at_dist($self)($F64$parse(`30`))))($List$nil))))($Arelin$Thing$set_fun($hit)($Arelin$Thing$dorime$jesus_power)))($Arelin$Thing$set_sid($hit)($self$sid)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($DORIME_JESUS_POWER_000)($F64$parse(`21`))($F64$parse(`21`))))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))(($self=>($heal=>($heal=>($heal=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`9`))($List$cons($Arelin$Thing$move($heal)($Arelin$Thing$at_max_dist($self)($F64$parse(`128`))))($List$nil))))($Arelin$Thing$set_fun($heal)($Arelin$Thing$dorime$gods_chamber_fun)))($Arelin$Thing$set_sid($heal)($self$sid)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($DORIME_GODS_CHAMBER_CAST_ANIMATION_000)($F64$parse(`9`))($F64$parse(`27`))))(($self=>($self=>($self=>$self)($Arelin$Thing$reset($self)($F64$parse(`36`))))($Arelin$Thing$animate_between($self)($F64$0)($DORIME_TAUNT_002)($F64$parse(`1`))($F64$parse(`6`))($F64$parse(`36`))))($Arelin$Thing$animate_between($self)($F64$0)($DORIME_TAUNT_000)($F64$parse(`3`))($F64$parse(`0`))($F64$parse(`6`))))))))))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mhp($self)($F64$parse(`32`))))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$cbox($F64$parse(`8`)))))($Arelin$Thing$set_mov($self)($F64$parse(`2.2`))))($Arelin$Thing$get_sid($self)))($Arelin$Thing$get_pos($self)));
  var $DR_STRANGE_WALK_000 = $F64$parse(`1472`);
  var $DR_STRANGE_IDLE_000 = $F64$parse(`1373`);
  var $DR_STRANGE_MYSTIC_BEAM_CAST_000 = $F64$parse(`1378`);
  var $DR_STRANGE_MYSTIC_BEAM_EFFECT_000 = $F64$parse(`1388`);
  var $Arelin$Thing$drstrange$mystic_beam_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($DR_STRANGE_MYSTIC_BEAM_EFFECT_000)($F64$parse(`9`))($F64$parse(`18`)));
  var $DR_STRANGE_TIME_STONE_POWER_CAST_000 = $F64$parse(`1434`);
  var $DR_STRANGE_TIME_STONE_POWER_EFFECT_000 = $F64$parse(`1443`);
  var $Arelin$Thing$drstrange$time_stone_power_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($DR_STRANGE_TIME_STONE_POWER_EFFECT_000)($F64$parse(`29`))($F64$parse(`58`)));
  var $DR_STRANGE_PORTAL_CAST_000 = $F64$parse(`1397`);
  var $DR_STRANGE_PORTAL_EFFECT_000 = $F64$parse(`1403`);
  var $Arelin$Thing$drstrange$portal_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($DR_STRANGE_PORTAL_EFFECT_000)($F64$parse(`31`))($F64$parse(`31`)));
  var $DR_STRANGE_CHRONOSTASIS_CAST_000 = $F64$parse(`1336`);
  var $DR_STRANGE_CHRONOSTASIS_EFFECT_000 = $F64$parse(`1346`);
  var $Arelin$POS_X_KEY = $Bits$0($Bits$0($Bits$0($Bits$1($Bits$1($Bits$1($Bits$0($Bits$1($Bits$nil))))))));
  var $Arelin$POS_Y_KEY = $Bits$0($Bits$1($Bits$1($Bits$1($Bits$0($Bits$1($Bits$0($Bits$1($Bits$nil))))))));
  var $Arelin$Thing$get_stt_value_v3 = ($self=>($x=>($y=>$F64$V3$new($x)($y)($F64$0))($Arelin$Thing$get_stt_value($self)($Arelin$POS_Y_KEY)))($Arelin$Thing$get_stt_value($self)($Arelin$POS_X_KEY)));
  var $Arelin$Game$Effect$teleport_to = ($to_pos=>($all=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$teleport_to($to_pos)($all))))))))))))));
  var $Arelin$Thing$drstrange$chronostasis_p0_fun = ($self=>($self$tik=>($self$pos=>($self$dir=>($self=>$Bool$if($F64$eql($self$tik)($F64$parse(`51`)))($Arelin$Thing$set_die($self)($Bool$true))(($p1_pos=>($effs=>($telep=>($self=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`70`))($telep)))($Arelin$Thing$cast($self)($F64$parse(`50`))($telep)))($Arelin$Thing$cast($self)($F64$parse(`26`))($telep)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`25`))))($List$nil)))($List$cons($Arelin$Game$Effect$teleport_to($p1_pos)($F64$0))($List$nil)))($Arelin$Thing$get_stt_value_v3($self))))($Arelin$Thing$animate($self)($F64$0)($DR_STRANGE_CHRONOSTASIS_EFFECT_000)($F64$parse(`26`))($F64$parse(`78`))))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_tik($self)));
  var $Arelin$Thing$drstrange$chronostasis_p1_fun = ($self=>($self$tik=>($self$pos=>($self$dir=>($self=>$Bool$if($F64$eql($self$tik)($F64$parse(`51`)))($Arelin$Thing$set_die($self)($Bool$true))(($p0_pos=>($effs=>($telep=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`50`))($telep)))($Arelin$Thing$cast($self)($F64$parse(`15`))($telep)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`25`))))($List$nil)))($List$cons($Arelin$Game$Effect$teleport_to($p0_pos)($F64$0))($List$nil)))($Arelin$Thing$get_stt_value_v3($self))))($Arelin$Thing$animate($self)($F64$0)($DR_STRANGE_CHRONOSTASIS_EFFECT_000)($F64$parse(`26`))($F64$parse(`78`))))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_tik($self)));
  var $Arelin$Thing$drstrange_fun = ($self=>($self=>($self$act=>($self$dir=>($self$stt=>($self$sid=>$Bool$if($F64$eql($self$act)($F64$0))($Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($DR_STRANGE_WALK_000)($F64$parse(`4`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$1)($DR_STRANGE_IDLE_000)($F64$parse(`5`))($F64$parse(`15`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($portal=>($portal=>($portal=>($portal=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`16`))($List$cons($Arelin$Thing$move($portal)($Arelin$Thing$at_dist($self)($F64$parse(`100`))))($List$nil))))($Arelin$Thing$set_dir($portal)($self$dir)))($Arelin$Thing$set_fun($portal)($Arelin$Thing$drstrange$mystic_beam_fun)))($Arelin$Thing$set_sid($portal)($self$sid)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($DR_STRANGE_MYSTIC_BEAM_CAST_000)($F64$parse(`10`))($F64$parse(`30`))))($Bool$if($F64$eql($self$act)($F64$2))(($self=>($portal=>($portal=>($portal=>($portal=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`11`))($List$cons($Arelin$Thing$move($portal)($Arelin$Thing$at_max_dist($self)($F64$parse(`150`))))($List$nil))))($Arelin$Thing$set_dir($portal)($self$dir)))($Arelin$Thing$set_fun($portal)($Arelin$Thing$drstrange$time_stone_power_fun)))($Arelin$Thing$set_sid($portal)($self$sid)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($DR_STRANGE_TIME_STONE_POWER_CAST_000)($F64$parse(`9`))($F64$parse(`18`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>($portal=>($portal=>($portal=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`10`))($List$cons($Arelin$Thing$move($portal)($Arelin$Thing$at_max_dist($self)($F64$parse(`150`))))($List$nil))))($Arelin$Thing$set_fun($portal)($Arelin$Thing$drstrange$portal_fun)))($Arelin$Thing$set_sid($portal)($self$sid)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($DR_STRANGE_PORTAL_CAST_000)($F64$parse(`6`))($F64$parse(`24`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))(($self=>($pos_p0=>($pos_p1=>($portal_0=>($portal_1=>($self=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`21`))($List$cons($Arelin$Thing$move($portal_1)($pos_p1))($List$nil))))($Arelin$Thing$spawn($self)($F64$parse(`20`))($List$cons($Arelin$Thing$move($portal_0)($pos_p0))($List$nil))))($pos_p0(($pos_p0$x=>($pos_p0$y=>($pos_p0$z=>($portal_1=>($portal_1=>($portal_1=>($portal_1=>($portal_1=>($portal_1=>($portal_1$stt=>$Arelin$Thing$set_stt($portal_1)($Map$set($Arelin$Constants$POS_Y_KEY)($pos_p0$y)($portal_1$stt)))($Arelin$Thing$get_stt($portal_1)))($Arelin$Thing$set_stt($portal_1)($Map$set($Arelin$Constants$POS_X_KEY)($pos_p0$x)($self$stt))))($Arelin$Thing$set_box($portal_1)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_dir($portal_1)($self$dir)))($Arelin$Thing$set_fun($portal_1)($Arelin$Thing$drstrange$chronostasis_p1_fun)))($Arelin$Thing$set_sid($portal_1)($self$sid)))($Arelin$Thing$new_thing)))))))($pos_p1(($pos_p1$x=>($pos_p1$y=>($pos_p1$z=>($portal_0=>($portal_0=>($portal_0=>($portal_0=>($portal_0=>($portal_0=>($portal_0$stt=>$Arelin$Thing$set_stt($portal_0)($Map$set($Arelin$Constants$POS_Y_KEY)($pos_p1$y)($portal_0$stt)))($Arelin$Thing$get_stt($portal_0)))($Arelin$Thing$set_stt($portal_0)($Map$set($Arelin$Constants$POS_X_KEY)($pos_p1$x)($self$stt))))($Arelin$Thing$set_box($portal_0)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_dir($portal_0)($self$dir)))($Arelin$Thing$set_fun($portal_0)($Arelin$Thing$drstrange$chronostasis_p0_fun)))($Arelin$Thing$set_sid($portal_0)($self$sid)))($Arelin$Thing$new_thing)))))))($Arelin$Thing$at_dist($self)($F64$parse(`-120`))))($Arelin$Thing$at_dist($self)($F64$parse(`70`))))($Arelin$Thing$animate($self)($F64$0)($DR_STRANGE_CHRONOSTASIS_CAST_000)($F64$parse(`10`))($F64$parse(`30`))))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))($self)($self)))))))($Arelin$Thing$get_sid($self)))($Arelin$Thing$get_stt($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mov($self)($F64$parse(`4`))));
  var $FINN_WALK_CYCLE_000 = $F64$parse(`2651`);
  var $FINN_IDLE_000 = $F64$parse(`2585`);
  var $FINN_TRIPLE_TAKE_000 = $F64$parse(`2634`);
  var $FINN_BMO_S_FLASH_000 = $F64$parse(`2549`);
  var $FINN_BOW_CAST_ANIMATION_000 = $F64$parse(`2562`);
  var $FINN_BOW_PROJECTILE_000 = $F64$parse(`2569`);
  var $Arelin$Thing$finn$arrow_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($FINN_BOW_PROJECTILE_000)($F64$parse(`1`))($F64$parse(`10`)));
  var $FINN_TAUNT_000 = $F64$parse(`2616`);
  var $FINN_JAKE_S_FURY_000 = $F64$parse(`2590`);
  var $Arelin$Thing$finn$jakes_fury_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($FINN_JAKE_S_FURY_000)($F64$parse(`26`))($F64$parse(`26`)));
  var $FINN_EVADE_000 = $F64$parse(`2578`);
  var $Arelin$Thing$finn_fun = ($self=>($self=>($self$act=>($self$dir=>($self$pos=>$Bool$if($F64$eql($self$act)($F64$0))($Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($FINN_WALK_CYCLE_000)($F64$parse(`8`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$1)($FINN_IDLE_000)($F64$parse(`5`))($F64$parse(`10`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($effs=>($eff_crit=>($hits=>($self=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`30`))($hits($eff_crit))))($Arelin$Thing$cast($self)($F64$parse(`10`))($hits($effs))))($Arelin$Thing$cast($self)($F64$0)($hits($effs))))(($effs=>$List$cons($Arelin$Game$Hit$new($effs)($Arelin$Thing$at_dist($self)($F64$parse(`35`)))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`20`))))($List$nil))))($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_4))($List$nil)))($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil)))($Arelin$Thing$animate($self)($F64$1)($FINN_TRIPLE_TAKE_000)($F64$parse(`17`))($F64$parse(`34`))))($Bool$if($F64$eql($self$act)($F64$2))(($self=>($effs=>($hits=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`16`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($Arelin$Thing$at_dist($self)($F64$parse(`45`)))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`25`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil)))($Arelin$Thing$animate($self)($F64$0)($FINN_BMO_S_FLASH_000)($F64$parse(`13`))($F64$parse(`26`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>($effs=>($hits=>($proj=>($proj=>($proj=>($proj=>($proj=>($proj=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`3`))($List$cons($proj)($List$nil))))($Arelin$Thing$set_box($proj)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($proj)($F64$V3$scale($F64$parse(`15`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_pos($proj)($self$pos)))($Arelin$Thing$set_dir($proj)($self$dir)))($Arelin$Thing$set_fun($proj)($Arelin$Thing$finn$arrow_fun)))($Arelin$Thing$new_thing))($List$cons($Arelin$Game$Hit$new($effs)($Arelin$Thing$at_dist($self)($F64$parse(`140`)))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`10`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_3))($List$nil)))($Arelin$Thing$animate($self)($F64$0)($FINN_BOW_CAST_ANIMATION_000)($F64$parse(`7`))($F64$parse(`14`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))(($self=>($jake=>($jake=>($jake=>($self=>($effs=>($eff_crit=>($hits=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`30`))($hits($eff_crit)($F64$parse(`80`)))))($Arelin$Thing$cast($self)($F64$parse(`25`))($hits($effs)($F64$parse(`60`)))))($Arelin$Thing$cast($self)($F64$parse(`20`))($hits($effs)($F64$parse(`45`)))))($Arelin$Thing$cast($self)($F64$parse(`15`))($hits($effs)($F64$parse(`35`)))))(($effs=>($dist=>$List$cons($Arelin$Game$Hit$new($effs)($Arelin$Thing$at_dist($self)($dist))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`15`))))($List$nil)))))($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_4))($List$cons($Arelin$Game$Effect$impulse($F64$parse(`10`))($self$dir))($List$nil))))($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil)))($Arelin$Thing$spawn($self)($F64$parse(`14`))($List$cons($Arelin$Thing$move($jake)($Arelin$Thing$at_dist($self)($F64$parse(`35`))))($List$nil))))($Arelin$Thing$set_dir($jake)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_fun($jake)($Arelin$Thing$finn$jakes_fury_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($FINN_TAUNT_000)($F64$parse(`17`))($F64$parse(`34`))))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))(($self=>($self=>$self)($Arelin$Thing$dash($self)($F64$parse(`4`))($F64$0)($F64$parse(`12`))))($Arelin$Thing$animate($self)($F64$1)($FINN_EVADE_000)($F64$parse(`6`))($F64$parse(`12`))))($Arelin$Thing$animate($self)($F64$0)($FINN_TAUNT_000)($F64$parse(`17`))($F64$parse(`34`)))))))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mov($self)($F64$parse(`4`))));
  var $GASTLY_WALK_000 = $F64$parse(`2753`);
  var $GASTLY_IDLE_000 = $F64$parse(`2708`);
  var $GASTLY_ATTACK_LICK_000 = $F64$parse(`2669`);
  var $GASTLY_ATTACK_MEAN_LOOK_000 = $F64$parse(`2680`);
  var $GASTLY_ATTACK_DREAM_EATER_000 = $F64$parse(`2659`);
  var $GASTLY_ULTIMATE_INVISIBILITY_000 = $F64$parse(`2739`);
  var $GASTLY_EVOLUTION_000 = $F64$parse(`2696`);
  var $Arelin$Thing$get_pid = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$pid))))))))))))))))))))))))))));
  var $Arelin$Thing$set_pid = ($thi=>($new_pid=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($new_pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$create_at = ($self=>($at_tik=>($new_thing=>($self$tik=>elim_bool($F64$eql($self$tik)($at_tik))(($self$pid=>($self$pos=>($self=>($self=>($self=>$self)($Arelin$Thing$set_pos($self)($self$pos)))($Arelin$Thing$set_pid($self)($self$pid)))($Arelin$Thing$set_fun($self)($new_thing)))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_pid($self)))($self))($Arelin$Thing$get_tik($self)))));
  var $HAUNTER_WALK_000 = $F64$parse(`3802`);
  var $HAUNTER_IDLE_000 = $F64$parse(`3769`);
  var $HAUNTER_ATTACK_LICK_000 = $F64$parse(`3732`);
  var $HAUNTER_ATTACK_MEAN_LOOK_000 = $F64$parse(`3741`);
  var $HAUNTER_ATTACK_DREAM_EATER_000 = $F64$parse(`3721`);
  var $HAUNTER_ULTIMATE_INVISIBILITY_000 = $F64$parse(`3792`);
  var $HAUNTER_EVOLUTION_000 = $F64$parse(`3755`);
  var $GENGAR_WALK_000 = $F64$parse(`2832`);
  var $GENGAR_IDLE_000 = $F64$parse(`2795`);
  var $GENGAR_ATTACK_LICK_000 = $F64$parse(`2785`);
  var $GENGAR_ATTACK_HYPNOSIS_000 = $F64$parse(`2771`);
  var $GENGAR_ATTACK_DREAM_EATER_000 = $F64$parse(`2759`);
  var $GENGAR_ULTIMATE_INVISIBILITY_000 = $F64$parse(`2820`);
  var $GENGAR_TAUNT_000 = $F64$parse(`2802`);
  var $Arelin$Thing$gengar_fun = ($self=>($self=>($self$act=>($self$dir=>($self$pos=>elim_bool($F64$eql($self$act)($F64$0))(elim_bool($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($GENGAR_WALK_000)($F64$parse(`3`))($F64$parse(`6`)))($Arelin$Thing$animate($self)($F64$1)($GENGAR_IDLE_000)($F64$parse(`7`))($F64$parse(`21`))))(elim_bool($F64$eql($self$act)($F64$1))($Arelin$Thing$animate($self)($F64$0)($GENGAR_ATTACK_LICK_000)($F64$parse(`9`))($F64$parse(`18`)))(elim_bool($F64$eql($self$act)($F64$2))($Arelin$Thing$animate($self)($F64$0)($GENGAR_ATTACK_HYPNOSIS_000)($F64$parse(`14`))($F64$parse(`28`)))(elim_bool($F64$eql($self$act)($F64$parse(`3`)))($Arelin$Thing$animate($self)($F64$0)($GENGAR_ATTACK_DREAM_EATER_000)($F64$parse(`12`))($F64$parse(`24`)))(elim_bool($F64$eql($self$act)($F64$parse(`4`)))($Arelin$Thing$animate($self)($F64$1)($GENGAR_ULTIMATE_INVISIBILITY_000)($F64$parse(`10`))($F64$parse(`30`)))(elim_bool($F64$eql($self$act)($F64$parse(`5`)))($Arelin$Thing$animate($self)($F64$1)($GENGAR_IDLE_000)($F64$parse(`7`))($F64$parse(`14`)))($Arelin$Thing$animate($self)($F64$1)($GENGAR_TAUNT_000)($F64$parse(`18`))($F64$parse(`40`)))))))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mov($self)($F64$parse(`3`))));
  var $HAUNTER_TAUNT_000 = $F64$parse(`3774`);
  var $Arelin$Thing$haunter_fun = ($self=>($self=>($self$act=>($self$dir=>($self$pos=>elim_bool($F64$eql($self$act)($F64$0))(elim_bool($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($HAUNTER_WALK_000)($F64$parse(`4`))($F64$parse(`8`)))($Arelin$Thing$animate($self)($F64$1)($HAUNTER_IDLE_000)($F64$parse(`5`))($F64$parse(`15`))))(elim_bool($F64$eql($self$act)($F64$1))($Arelin$Thing$animate($self)($F64$0)($HAUNTER_ATTACK_LICK_000)($F64$parse(`9`))($F64$parse(`18`)))(elim_bool($F64$eql($self$act)($F64$2))($Arelin$Thing$animate($self)($F64$0)($HAUNTER_ATTACK_MEAN_LOOK_000)($F64$parse(`14`))($F64$parse(`28`)))(elim_bool($F64$eql($self$act)($F64$parse(`3`)))($Arelin$Thing$animate($self)($F64$0)($HAUNTER_ATTACK_DREAM_EATER_000)($F64$parse(`10`))($F64$parse(`20`)))(elim_bool($F64$eql($self$act)($F64$parse(`4`)))($Arelin$Thing$animate($self)($F64$1)($HAUNTER_ULTIMATE_INVISIBILITY_000)($F64$parse(`12`))($F64$parse(`40`)))(elim_bool($F64$eql($self$act)($F64$parse(`5`)))(($self=>($self=>$self)($Arelin$Thing$create_at($self)($F64$parse(`25`))($Arelin$Thing$gengar_fun)))($Arelin$Thing$animate($self)($F64$1)($HAUNTER_EVOLUTION_000)($F64$parse(`13`))($F64$parse(`26`))))($Arelin$Thing$animate($self)($F64$1)($HAUNTER_TAUNT_000)($F64$parse(`18`))($F64$parse(`36`)))))))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mov($self)($F64$parse(`3`))));
  var $GASTLY_TAUNT_000 = $F64$parse(`2721`);
  var $Arelin$Thing$gastly_fun = ($self=>($self=>($self=>($self$act=>($self$dir=>($self$pos=>elim_bool($F64$eql($self$act)($F64$0))(elim_bool($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($GASTLY_WALK_000)($F64$parse(`6`))($F64$parse(`12`)))($Arelin$Thing$animate($self)($F64$1)($GASTLY_IDLE_000)($F64$parse(`13`))($F64$parse(`39`))))(elim_bool($F64$eql($self$act)($F64$1))($Arelin$Thing$animate($self)($F64$0)($GASTLY_ATTACK_LICK_000)($F64$parse(`10`))($F64$parse(`20`)))(elim_bool($F64$eql($self$act)($F64$2))($Arelin$Thing$animate($self)($F64$0)($GASTLY_ATTACK_MEAN_LOOK_000)($F64$parse(`16`))($F64$parse(`32`)))(elim_bool($F64$eql($self$act)($F64$parse(`3`)))($Arelin$Thing$animate($self)($F64$0)($GASTLY_ATTACK_DREAM_EATER_000)($F64$parse(`10`))($F64$parse(`20`)))(elim_bool($F64$eql($self$act)($F64$parse(`4`)))($Arelin$Thing$animate($self)($F64$1)($GASTLY_ULTIMATE_INVISIBILITY_000)($F64$parse(`12`))($F64$parse(`50`)))(elim_bool($F64$eql($self$act)($F64$parse(`5`)))(($self=>($self=>$self)($Arelin$Thing$create_at($self)($F64$parse(`21`))($Arelin$Thing$haunter_fun)))($Arelin$Thing$animate($self)($F64$1)($GASTLY_EVOLUTION_000)($F64$parse(`11`))($F64$parse(`22`))))($Arelin$Thing$animate($self)($F64$1)($GASTLY_TAUNT_000)($F64$parse(`18`))($F64$parse(`36`)))))))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mhp($self)($F64$parse(`24`))))($Arelin$Thing$set_mov($self)($F64$parse(`3`))));
  var $GON_FREECS_WALK_000 = $F64$parse(`3076`);
  var $GON_FREECS_IDLE_000 = $F64$parse(`2864`);
  var $GON_FREECS_JAJANKEN_STONE_000 = $F64$parse(`2942`);
  var $GON_FREECS_JAJANKEN_PAPER_CASTING_000 = $F64$parse(`2899`);
  var $GON_FREECS_JAJANKEN_PAPER_PROJECTILE_000 = $F64$parse(`2916`);
  var $Arelin$Thing$gon$paper_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($GON_FREECS_JAJANKEN_PAPER_PROJECTILE_000)($F64$parse(`8`))($F64$parse(`16`)));
  var $GON_FREECS_JAJANKEN_SCISSORS_000 = $F64$parse(`2924`);
  var $GON_FREECS_JAJANKEN_SCISSORS_012 = $F64$parse(`2936`);
  var $GON_FREECS_ULTIMATE_TRANSFORMATION_000 = $F64$parse(`3060`);
  var $Arelin$Thing$end_thing = ($self=>($tx=>($after_tiks=>($stt_key=>($self$stt=>($current_tik=>($empty_stt=>$current_tik($Arelin$Thing$set_stt($self)($empty_stt))(($current_tik$value=>elim_bool($F64$eql($current_tik$value)($F64$0))(($self$pid=>($self$pos=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$set_stt($self)($empty_stt)))($Arelin$Thing$set_pos($self)($self$pos)))($Arelin$Thing$set_pid($self)($self$pid)))($Arelin$Thing$set_fun($self)($tx)))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_pid($self)))(($new_stt=>$Arelin$Thing$set_stt($self)($new_stt))($Map$set($stt_key)(elim_bool($F64$gtn($current_tik$value)($F64$0))($F64$sub($current_tik$value)($F64$1))($F64$0))($self$stt))))))($Map$set($stt_key)($after_tiks)($self$stt)))($Map$get($stt_key)($self$stt)))($Arelin$Thing$get_stt($self))))));
  var $GON_FREECS_AFTER_ULTIMATE_WALK_000 = $F64$parse(`2843`);
  var $GON_FREECS_AFTER_ULTIMATE_IDLE_000 = $F64$parse(`2835`);
  var $Arelin$Thing$gon$tired_fun = ($self=>($self=>($self=>$Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($GON_FREECS_AFTER_ULTIMATE_WALK_000)($F64$parse(`12`))($F64$parse(`24`)))($Arelin$Thing$animate($self)($F64$1)($GON_FREECS_AFTER_ULTIMATE_IDLE_000)($F64$parse(`8`))($F64$parse(`16`))))($Arelin$Thing$end_thing($self)($Arelin$Thing$gon_fun)($F64$mul($Arelin$Constants$ONE_SEC)($F64$parse(`5`)))($Arelin$Constants$GON_AFTER_ULT)))($Arelin$Thing$set_mov($self)($F64$parse(`2`))));
  var $GON_FREECS_TRANSFORMED_WALK_000 = $F64$parse(`3052`);
  var $GON_FREECS_TRANFORMED_IDLE_000 = $F64$parse(`2983`);
  var $GON_FREECS_TRANSFORMED_JAJANKEN_STONE_000 = $F64$parse(`3035`);
  var $GON_FREECS_TRANSFORMED_JAJANKEN_PAPER_000 = $F64$parse(`3019`);
  var $GON_FREECS_TRANSFORMED_JAJANKEN_PAPER_PROJETIL_000 = $F64$parse(`3011`);
  var $Arelin$Thing$gon$t_paper_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($GON_FREECS_TRANSFORMED_JAJANKEN_PAPER_PROJETIL_000)($F64$parse(`8`))($F64$parse(`16`)));
  var $GON_FREECS_TRANFORMED_JAJANKEN_SCISSOR_000 = $F64$parse(`2992`);
  var $GON_FREECS_TRANFORMED_JAJANKEN_SCISSOR_012 = $F64$parse(`3004`);
  var $Arelin$Thing$gon$transformed_fun = ($self=>($self=>($self$act=>($self$dir=>($self=>$Bool$if($F64$eql($self$act)($F64$0))($Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($GON_FREECS_TRANSFORMED_WALK_000)($F64$parse(`8`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$1)($GON_FREECS_TRANFORMED_IDLE_000)($F64$parse(`9`))($F64$parse(`27`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($self=>($self=>$self)($Arelin$Thing$blink($self)($F64$parse(`34`))($Arelin$Thing$at_max_dist($self)($F64$parse(`78`)))))($Arelin$Thing$reset($self)($F64$parse(`34`))))($Arelin$Thing$animate_with_blink($self)($F64$0)($GON_FREECS_TRANSFORMED_JAJANKEN_STONE_000)($GON_FREECS_TRANFORMED_IDLE_000)($F64$parse(`17`))($F64$0)($F64$parse(`34`))))($Bool$if($F64$eql($self$act)($F64$2))(($self=>($fire=>($fire=>($fire=>($fire=>($fire=>($fire=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`28`))($List$cons($fire)($List$nil))))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($fire)($F64$V3$scale($F64$parse(`12`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($fire)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($fire)($Arelin$Thing$at_dist($self)($F64$parse(`20`)))))($Arelin$Thing$set_fun($fire)($Arelin$Thing$gon$t_paper_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($GON_FREECS_TRANSFORMED_JAJANKEN_PAPER_000)($F64$parse(`17`))($F64$parse(`34`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>($self=>($self=>$self)($Arelin$Thing$reset($self)($F64$parse(`25`))))($Arelin$Thing$animate_between($self)($F64$0)($GON_FREECS_TRANFORMED_JAJANKEN_SCISSOR_012)($F64$parse(`7`))($F64$parse(`13`))($F64$parse(`26`))))($Arelin$Thing$animate_between($self)($F64$0)($GON_FREECS_TRANFORMED_JAJANKEN_SCISSOR_000)($F64$parse(`12`))($F64$parse(`0`))($F64$parse(`13`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))($Arelin$Thing$animate($self)($F64$1)($GON_FREECS_TRANFORMED_IDLE_000)($F64$parse(`9`))($F64$parse(`27`)))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))($Arelin$Thing$animate($self)($F64$1)($GON_FREECS_TRANFORMED_IDLE_000)($F64$parse(`9`))($F64$parse(`18`)))($Arelin$Thing$animate($self)($F64$1)($GON_FREECS_TRANFORMED_IDLE_000)($F64$parse(`9`))($F64$parse(`18`)))))))))($Arelin$Thing$end_thing($self)($Arelin$Thing$gon$tired_fun)($F64$mul($Arelin$Constants$ONE_SEC)($F64$parse(`30`)))($Arelin$Constants$ULT_TIME)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mov($self)($F64$parse(`3`))));
  var $GON_FREECS_INTENSIFICATION_000 = $F64$parse(`2889`);
  var $GON_FREECS_TAUNT_000 = $F64$parse(`2966`);
  var $GON_FREECS_TAUNT_TEXT_000 = $F64$parse(`2965`);
  var $Arelin$Thing$gon$taunt_text_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($GON_FREECS_TAUNT_TEXT_000)($F64$parse(`1`))($F64$parse(`10`)));
  var $Arelin$Thing$gon_fun = ($self=>($self=>($self$act=>($self$dir=>($self$sid=>($self$pos=>$Bool$if($F64$eql($self$act)($F64$0))($Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($GON_FREECS_WALK_000)($F64$parse(`6`))($F64$parse(`12`)))($Arelin$Thing$animate($self)($F64$1)($GON_FREECS_IDLE_000)($F64$parse(`16`))($F64$parse(`32`))))($Bool$if($F64$eql($self$act)($F64$1))($Arelin$Thing$animate($self)($F64$0)($GON_FREECS_JAJANKEN_STONE_000)($F64$parse(`23`))($F64$parse(`46`)))($Bool$if($F64$eql($self$act)($F64$2))(($self=>($fire=>($fire=>($fire=>($fire=>($fire=>($fire=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`12`))($List$cons($fire)($List$nil))))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($fire)($F64$V3$scale($F64$parse(`12`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($fire)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($fire)($Arelin$Thing$at_dist($self)($F64$parse(`20`)))))($Arelin$Thing$set_fun($fire)($Arelin$Thing$gon$paper_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($GON_FREECS_JAJANKEN_PAPER_CASTING_000)($F64$parse(`17`))($F64$parse(`17`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>($self=>($self=>$self)($Arelin$Thing$reset($self)($F64$parse(`21`))))($Arelin$Thing$animate_between($self)($F64$0)($GON_FREECS_JAJANKEN_SCISSORS_012)($F64$parse(`5`))($F64$parse(`12`))($F64$parse(`22`))))($Arelin$Thing$animate_between($self)($F64$0)($GON_FREECS_JAJANKEN_SCISSORS_000)($F64$parse(`12`))($F64$parse(`0`))($F64$parse(`12`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))(($self=>($self=>$self)($Arelin$Thing$create_at($self)($F64$parse(`31`))($Arelin$Thing$gon$transformed_fun)))($Arelin$Thing$animate($self)($F64$0)($GON_FREECS_ULTIMATE_TRANSFORMATION_000)($F64$parse(`16`))($F64$parse(`32`))))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))($Arelin$Thing$animate($self)($F64$1)($GON_FREECS_INTENSIFICATION_000)($F64$parse(`10`))($F64$parse(`30`)))(($self=>($text=>($text=>($text=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`20`))($List$cons($Arelin$Thing$move($text)($self$pos))($List$nil))))($Arelin$Thing$set_sid($text)($self$sid)))($Arelin$Thing$set_fun($text)($Arelin$Thing$gon$taunt_text_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($GON_FREECS_TAUNT_000)($F64$parse(`16`))($F64$parse(`32`))))))))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_sid($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mov($self)($F64$parse(`3`))));
  var $Arelin$Thing$grimer$base_earth_ball_dmg = $Arelin$Constants$DMG_LV_2;
  var $Arelin$Thing$grimer$base_mud_tsunami_dmg = $Arelin$Constants$DMG_LV_3;
  var $GRIMER_WALK_000 = $F64$parse(`3570`);
  var $GRIMER_IDLE_000 = $F64$parse(`3469`);
  var $GRIMER_EARTH_BALL_CAST_000 = $F64$parse(`3448`);
  var $GRIMER_EARTH_BALL_EFFECT_000 = $F64$parse(`3459`);
  var $Arelin$Thing$grimer$earth_ball_fun = ($self=>($self$dir=>($self$pos=>($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`20`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`16`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`12`))($hits)))($Arelin$Thing$cast($self)($F64$parse(` 8`))($hits)))($Arelin$Thing$cast($self)($F64$parse(` 4`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`20`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($Arelin$Thing$grimer$base_earth_ball_dmg))($List$nil)))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$animate_die($self)($F64$0)($GRIMER_EARTH_BALL_EFFECT_000)($F64$parse(`7`))($F64$parse(`14`))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)));
  var $Arelin$Game$Buff$shielded = ($dur=>($val=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stunned=>$shielded($dur)($val)))))))));
  var $Arelin$Thing$set_buf = ($thi=>($new_buf=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($new_buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $GRIMER_INVINCIBLE_MUD_000 = $F64$parse(`3476`);
  var $GRIMER_INVINCIBLE_MUD_006 = $F64$parse(`3482`);
  var $GRIMER_INVINCIBLE_MUD_012 = $F64$parse(`3488`);
  var $GRIMER_MUD_SHIELD_000 = $F64$parse(`3495`);
  var $Arelin$Game$Hitbox$pbox = ($pts=>($nbox=>($cbox=>($pbox=>$pbox($pts)))));
  var $GRIMER_MUD_TSUNAMI_000 = $F64$parse(`3525`);
  var $Arelin$Thing$grimer$mud_tsunami_fun = ($self=>($self$dir=>($self$pos=>($self=>($effs=>($hits=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`20`))($hits($F64$parse(`40`)))))($Arelin$Thing$cast($self)($F64$parse(`10`))($hits($F64$parse(`30`)))))(($size=>$List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($size)))($List$nil))))($List$cons($Arelin$Game$Effect$damage($Arelin$Thing$grimer$base_mud_tsunami_dmg))($List$nil)))($Arelin$Thing$animate($self)($F64$1)($GRIMER_MUD_TSUNAMI_000)($F64$parse(`17`))($F64$parse(`34`))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)));
  var $GRIMER_TRANSFORMATION_000 = $F64$parse(`3557`);
  var $MUK_WALK_000 = $F64$parse(`7282`);
  var $MUK_IDLE_000 = $F64$parse(`7187`);
  var $MUK_EARTH_BALL_CAST_000 = $F64$parse(`7165`);
  var $MUK_EARTH_BALL_EFFECT_000 = $F64$parse(`7177`);
  var $Arelin$Thing$muk$earth_ball_fun = ($self=>($self$dir=>($self$pos=>($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`20`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`16`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`12`))($hits)))($Arelin$Thing$cast($self)($F64$parse(` 8`))($hits)))($Arelin$Thing$cast($self)($F64$parse(` 4`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`20`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($F64$mul($Arelin$Thing$grimer$base_earth_ball_dmg)($F64$parse(`2`))))($List$nil)))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$animate_die($self)($F64$0)($MUK_EARTH_BALL_EFFECT_000)($F64$parse(`7`))($F64$parse(`14`))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)));
  var $MUK_INVINCIBLE_MUD_000 = $F64$parse(`7195`);
  var $MUK_MUD_SHIELD_000 = $F64$parse(`7221`);
  var $MUK_MUD_TSUNAMI_000 = $F64$parse(`7245`);
  var $Arelin$Thing$muk$mud_tsunami_fun = ($self=>($self$dir=>($self$pos=>($self=>($effs=>($hits=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`20`))($hits($F64$parse(`60`)))))($Arelin$Thing$cast($self)($F64$parse(`10`))($hits($F64$parse(`30`)))))(($size=>$List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($size)))($List$nil))))($List$cons($Arelin$Game$Effect$damage($F64$mul($Arelin$Thing$grimer$base_mud_tsunami_dmg)($F64$parse(`2`))))($List$nil)))($Arelin$Thing$animate($self)($F64$1)($MUK_MUD_TSUNAMI_000)($F64$parse(`19`))($F64$parse(`38`))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)));
  var $MUK_TAUNT_000 = $F64$parse(`7264`);
  var $Arelin$Thing$muk_fun = ($self=>($self=>($self=>($self$act=>($self$dir=>($self$pos=>($self$buf=>$Bool$if($F64$eql($self$act)($F64$0))($Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($MUK_WALK_000)($F64$parse(`8`))($F64$parse(`24`)))($Arelin$Thing$animate($self)($F64$1)($MUK_IDLE_000)($F64$parse(`8`))($F64$parse(`24`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($ball=>($ball=>($ball=>($ball=>($ball=>($ball=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`8`))($List$cons($ball)($List$nil))))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($ball)($F64$V3$scale($F64$parse(`10`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($ball)($self$dir)))($Arelin$Thing$set_pos($ball)($self$pos)))($Arelin$Thing$set_fun($ball)($Arelin$Thing$muk$earth_ball_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$1)($MUK_EARTH_BALL_CAST_000)($F64$parse(`12`))($F64$parse(`24`))))($Bool$if($F64$eql($self$act)($F64$2))(($shield_buff=>($self=>($self=>$self)($Arelin$Thing$animate($self)($F64$0)($MUK_INVINCIBLE_MUD_000)($F64$parse(`26`))($F64$parse(`52`))))($Arelin$Thing$set_buf($self)($List$cons($shield_buff)($self$buf))))($Arelin$Game$Buff$shielded($F64$parse(`26`))($F64$parse(`1000`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($shield_buff=>($self=>($self=>($shield_box=>($self=>($self=>$self)($Arelin$Thing$reset($self)($F64$parse(`60`))))($Arelin$Thing$set_box($self)($shield_box)))($Arelin$Game$Hitbox$pbox($List$cons($F64$V3$new($F64$0)($F64$0)($F64$0))($List$cons($F64$V3$new($F64$parse(`15`))($F64$parse(`45`))($F64$0))($List$cons($F64$V3$new($F64$parse(`25`))($F64$parse(`45`))($F64$0))($List$cons($F64$V3$new($F64$parse(`25`))($F64$parse(`-45`))($F64$0))($List$cons($F64$V3$new($F64$parse(`15`))($F64$parse(`-45`))($F64$0))($List$nil))))))))($Arelin$Thing$animate($self)($F64$0)($MUK_MUD_SHIELD_000)($F64$parse(`24`))($F64$parse(`48`))))($Arelin$Thing$set_buf($self)($List$cons($shield_buff)($self$buf))))($Arelin$Game$Buff$shielded($F64$parse(`30`))($F64$parse(`1000`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))($Arelin$Thing$muk$mud_tsunami_fun($self))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))($Arelin$Thing$animate($self)($F64$1)($MUK_IDLE_000)($F64$parse(`8`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$0)($MUK_TAUNT_000)($F64$parse(`18`))($F64$parse(`36`)))))))))($Arelin$Thing$get_buf($self)))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mhp($self)($F64$parse(`24`))))($Arelin$Thing$set_mov($self)($F64$parse(`2`))));
  var $Arelin$Thing$set_nam = ($thi=>($new_nam=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($new_nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $GRIMER_TAUNT_000 = $F64$parse(`3542`);
  var $Arelin$Thing$grimer_fun = ($self=>($self=>($self=>($self$act=>($self$dir=>($self$pos=>($self$buf=>$Bool$if($F64$eql($self$act)($F64$0))($Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($GRIMER_WALK_000)($F64$parse(`7`))($F64$parse(`14`)))($Arelin$Thing$animate($self)($F64$1)($GRIMER_IDLE_000)($F64$parse(`7`))($F64$parse(`14`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($ball=>($ball=>($ball=>($ball=>($ball=>($ball=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`8`))($List$cons($ball)($List$nil))))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($ball)($F64$V3$scale($F64$parse(`10`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($ball)($self$dir)))($Arelin$Thing$set_pos($ball)($self$pos)))($Arelin$Thing$set_fun($ball)($Arelin$Thing$grimer$earth_ball_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$1)($GRIMER_EARTH_BALL_CAST_000)($F64$parse(`11`))($F64$parse(`22`))))($Bool$if($F64$eql($self$act)($F64$2))(($shield_buff=>($self=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$reset($self)($F64$parse(`31`))))($Arelin$Thing$animate_between($self)($F64$0)($GRIMER_INVINCIBLE_MUD_012)($F64$parse(`7`))($F64$parse(`24`))($F64$parse(`31`))))($Arelin$Thing$animate_between($self)($F64$0)($GRIMER_INVINCIBLE_MUD_006)($F64$parse(`7`))($F64$parse(`6`))($F64$parse(`24`))))($Arelin$Thing$animate_between($self)($F64$0)($GRIMER_INVINCIBLE_MUD_000)($F64$parse(`6`))($F64$parse(`0`))($F64$parse(`6`))))($Arelin$Thing$set_buf($self)($List$cons($shield_buff)($self$buf))))($Arelin$Game$Buff$shielded($F64$parse(`31`))($F64$parse(`1000`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($shield_buff=>($self=>($self=>($shield_box=>($self=>($self=>$self)($Arelin$Thing$reset($self)($F64$parse(`60`))))($Arelin$Thing$set_box($self)($shield_box)))($Arelin$Game$Hitbox$pbox($List$cons($F64$V3$new($F64$0)($F64$0)($F64$0))($List$cons($F64$V3$new($F64$parse(`15`))($F64$parse(`45`))($F64$0))($List$cons($F64$V3$new($F64$parse(`25`))($F64$parse(`45`))($F64$0))($List$cons($F64$V3$new($F64$parse(`25`))($F64$parse(`-45`))($F64$0))($List$cons($F64$V3$new($F64$parse(`15`))($F64$parse(`-45`))($F64$0))($List$nil))))))))($Arelin$Thing$animate($self)($F64$0)($GRIMER_MUD_SHIELD_000)($F64$parse(`30`))($F64$parse(`60`))))($Arelin$Thing$set_buf($self)($List$cons($shield_buff)($self$buf))))($Arelin$Game$Buff$shielded($F64$parse(`30`))($F64$parse(`1000`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))($Arelin$Thing$grimer$mud_tsunami_fun($self))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))(($self=>($self=>($evolved=>$evolved)($Arelin$Thing$set_nam($self)(`Muk`)))($Arelin$Thing$create_at($self)($F64$parse(`25`))($Arelin$Thing$muk_fun)))($Arelin$Thing$animate($self)($F64$1)($GRIMER_TRANSFORMATION_000)($F64$parse(`13`))($F64$parse(`26`))))($Arelin$Thing$animate($self)($F64$1)($GRIMER_TAUNT_000)($F64$parse(`15`))($F64$parse(`30`)))))))))($Arelin$Thing$get_buf($self)))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mhp($self)($F64$parse(`24`))))($Arelin$Thing$set_mov($self)($F64$parse(`2.5`))));
  var $ERIC_JACQUIN_WALK_000 = $F64$parse(`1883`);
  var $ERIC_JACQUIN_IDLE_000 = $F64$parse(`1691`);
  var $ERIC_JACQUIN_SHAME_OF_THE_PROFESSION_CASTING_000 = $F64$parse(`1786`);
  var $ERIC_JACQUIN_SHAME_OF_THE_PROFESSION_EFFECT_000 = $F64$parse(`1808`);
  var $Arelin$Thing$jacquin$shame_of_the_profession_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($ERIC_JACQUIN_SHAME_OF_THE_PROFESSION_EFFECT_000)($F64$parse(`5`))($F64$parse(`10`)));
  var $ERIC_JACQUIN_TURN_OFF_THE_NIGHT_FREEZER_CASTING_000 = $F64$parse(`1851`);
  var $ERIC_JACQUIN_TURN_OFF_THE_NIGHT_FREEZER_EFFECT_000 = $F64$parse(`1880`);
  var $Arelin$Thing$jacquin$freezer_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($ERIC_JACQUIN_TURN_OFF_THE_NIGHT_FREEZER_EFFECT_000)($F64$parse(`3`))($F64$parse(`18`)));
  var $ERIC_JACQUIN_SHUT_YOUR_MOUTH_CASTING_000 = $F64$parse(`1813`);
  var $ERIC_JACQUIN_JACQUIN_WRATH_CASTING_ONE_000 = $F64$parse(`1705`);
  var $ERIC_JACQUIN_JACQUIN_WRATH_CASTING_TWO_000 = $F64$parse(`1735`);
  var $ERIC_JACQUIN_JACQUIN_WRATH_WALK_000 = $F64$parse(`1778`);
  var $ERIC_JACQUIN_JACQUIN_WRATH_IDLE_000 = $F64$parse(`1764`);
  var $Arelin$Thing$jacquin$giant_jacquin_fun = ($self=>($self=>($self=>$Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($ERIC_JACQUIN_JACQUIN_WRATH_WALK_000)($F64$parse(`8`))($F64$parse(`16`)))($Arelin$Thing$animate($self)($F64$1)($ERIC_JACQUIN_JACQUIN_WRATH_IDLE_000)($F64$parse(`14`))($F64$parse(`28`))))($Arelin$Thing$end_thing($self)($Arelin$Thing$jacquin_fun)($F64$mul($Arelin$Constants$ONE_SEC)($F64$parse(`7`)))($Arelin$Constants$ULT_TIME)))($Arelin$Thing$set_mov($self)($F64$parse(`1.5`))));
  var $ERIC_JACQUIN_DASH_000 = $F64$parse(`1673`);
  var $ERIC_JACQUIN_TAUNT_000 = $F64$parse(`1843`);
  var $Arelin$Thing$jacquin_fun = ($self=>($self=>($self=>($self$act=>($self$dir=>$Bool$if($F64$eql($self$act)($F64$0))($Bool$if($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($ERIC_JACQUIN_WALK_000)($F64$parse(`7`))($F64$parse(`14`)))($Arelin$Thing$animate($self)($F64$1)($ERIC_JACQUIN_IDLE_000)($F64$parse(`14`))($F64$parse(`14`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($shame=>($shame=>($shame=>($shame=>($shame=>($shame=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`16`))($List$cons($shame)($List$nil))))($Arelin$Thing$set_box($shame)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($shame)($F64$V3$scale($F64$parse(`10`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($shame)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($shame)($Arelin$Thing$at_dist($self)($F64$parse(`30`)))))($Arelin$Thing$set_fun($shame)($Arelin$Thing$jacquin$shame_of_the_profession_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($ERIC_JACQUIN_SHAME_OF_THE_PROFESSION_CASTING_000)($F64$parse(`22`))($F64$parse(`22`))))($Bool$if($F64$eql($self$act)($F64$2))(($self=>($freezer=>($freezer=>($freezer=>($freezer=>($freezer=>($freezer=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`28`))($List$cons($freezer)($List$nil))))($Arelin$Thing$set_box($freezer)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($freezer)($F64$V3$scale($F64$parse(`10`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($freezer)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($freezer)($Arelin$Thing$at_dist($self)($F64$parse(`140`)))))($Arelin$Thing$set_fun($freezer)($Arelin$Thing$jacquin$freezer_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$1)($ERIC_JACQUIN_TURN_OFF_THE_NIGHT_FREEZER_CASTING_000)($F64$parse(`29`))($F64$parse(`29`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>$self)($Arelin$Thing$animate($self)($F64$0)($ERIC_JACQUIN_SHUT_YOUR_MOUTH_CASTING_000)($F64$parse(`30`))($F64$parse(`60`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))(($self=>($self=>($self=>($self=>$self)($Arelin$Thing$create_at($self)($F64$parse(`57`))($Arelin$Thing$jacquin$giant_jacquin_fun)))($Arelin$Thing$reset($self)($F64$parse(`57`))))($Arelin$Thing$animate_between($self)($F64$0)($ERIC_JACQUIN_JACQUIN_WRATH_CASTING_TWO_000)($F64$parse(`28`))($F64$parse(`30`))($F64$parse(`58`))))($Arelin$Thing$animate_between($self)($F64$0)($ERIC_JACQUIN_JACQUIN_WRATH_CASTING_ONE_000)($F64$parse(`30`))($F64$parse(`0`))($F64$parse(`30`))))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))(($self=>($self=>$self)($Arelin$Thing$dash($self)($F64$parse(`4`))($F64$parse(`0`))($F64$parse(`17`))))($Arelin$Thing$animate($self)($F64$0)($ERIC_JACQUIN_DASH_000)($F64$parse(`18`))($F64$parse(`18`))))(($self=>$self)($Arelin$Thing$animate($self)($F64$0)($ERIC_JACQUIN_TAUNT_000)($F64$parse(`8`))($F64$parse(`16`))))))))))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mhp($self)($F64$parse(`24`))))($Arelin$Thing$set_mov($self)($F64$parse(`2`))));
  var $JINX_WALK_000 = $F64$parse(`4236`);
  var $JINX_IDLE_000 = $F64$parse(`4178`);
  var $JINX_GATLING_CAST_ANIMATION_000 = $F64$parse(`4170`);
  var $JINX_GATLING_PROJECTILE_000 = $F64$parse(`4174`);
  var $Arelin$Thing$jinx$gatling_fun = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($JINX_GATLING_PROJECTILE_000)($F64$parse(`3`))($F64$parse(`6`)));
  var $JINX_FLAMING_BITE_CAST_ANIMATION_000 = $F64$parse(`4150`);
  var $JINX_FLAMING_BITE_TRAP_HITTING_THE_FLOOR_000 = $F64$parse(`4162`);
  var $Arelin$Thing$jinx$flaming_bite = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($JINX_FLAMING_BITE_TRAP_HITTING_THE_FLOOR_000)($F64$parse(`4`))($F64$parse(`8`)));
  var $JINX_FLAMING_BITE_TRAP_IDLE_000 = $F64$parse(`4167`);
  var $Arelin$Thing$jinx$flaming_bite_idle = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($JINX_FLAMING_BITE_TRAP_IDLE_000)($F64$parse(`3`))($F64$parse(`18`)));
  var $JINX_FLAMING_BITE_TRAP_END_000 = $F64$parse(`4156`);
  var $Arelin$Thing$jinx$flaming_bite_end = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($JINX_FLAMING_BITE_TRAP_END_000)($F64$parse(`6`))($F64$parse(`12`)));
  var $JINX_POW_CAST_ANIMATION_000 = $F64$parse(`4183`);
  var $JINX_POW_PROJECTILE_000 = $F64$parse(`4192`);
  var $Arelin$Thing$jinx$pow_proj = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($JINX_POW_PROJECTILE_000)($F64$parse(`3`))($F64$parse(`9`)));
  var $JINX_POW_EXPLOSION_000 = $F64$parse(`4188`);
  var $Arelin$Thing$jinx$pow_explosion = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($JINX_POW_EXPLOSION_000)($F64$parse(`4`))($F64$parse(`8`)));
  var $JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_CAST_ANIMATION_000 = $F64$parse(`4195`);
  var $JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_PROJECTILE_000 = $F64$parse(`4216`);
  var $Arelin$Thing$jinx$ulti_proj = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_PROJECTILE_000)($F64$parse(`8`))($F64$parse(`16`)));
  var $JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_COLISSION_000 = $F64$parse(`4207`);
  var $Arelin$Thing$jinx$ulti_explosion = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_COLISSION_000)($F64$parse(`9`))($F64$parse(`18`)));
  var $JINX_ZAP_CAST_ANIMATION_000 = $F64$parse(`4243`);
  var $JINX_ZAP_PROJECTILE_000 = $F64$parse(`4259`);
  var $Arelin$Thing$jinx$zap_proj = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($JINX_ZAP_PROJECTILE_000)($F64$parse(`3`))($F64$parse(`12`)));
  var $JINX_ZAP_PATH_000 = $F64$parse(`4254`);
  var $Arelin$Thing$jinx$zap_path = ($self=>$Arelin$Thing$animate_die($self)($F64$0)($JINX_ZAP_PATH_000)($F64$parse(`5`))($F64$parse(`5`)));
  var $JINX_TAUNT_000 = $F64$parse(`4224`);
  var $Arelin$Thing$jinx_fun = ($self=>($self=>($self=>($self$act=>($self$dir=>($self$pos=>elim_bool($F64$eql($self$act)($F64$0))(elim_bool($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($JINX_WALK_000)($F64$parse(`7`))($F64$parse(`14`)))($Arelin$Thing$animate($self)($F64$1)($JINX_IDLE_000)($F64$parse(`4`))($F64$parse(`16`))))(elim_bool($F64$eql($self$act)($F64$1))(($self=>($proj=>($proj=>($proj=>($proj=>($proj=>($proj=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`8`))($List$cons($proj)($List$nil))))($Arelin$Thing$set_box($proj)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($proj)($F64$V3$scale($F64$parse(`15`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($proj)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($proj)($self$pos)))($Arelin$Thing$set_fun($proj)($Arelin$Thing$jinx$gatling_fun)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($JINX_GATLING_CAST_ANIMATION_000)($F64$parse(`4`))($F64$parse(`12`))))(elim_bool($F64$eql($self$act)($F64$2))(($self=>($self=>($self=>($trap0=>($trap0=>($trap0=>($trap0=>($trap0=>($trap1=>($trap1=>($trap1=>($trap1=>($trap1=>($trap2=>($trap2=>($trap2=>($trap2=>($trap2=>($self=>($self=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`23`))($List$cons($trap2)($List$nil))))($Arelin$Thing$spawn($self)($F64$parse(`10`))($List$cons($trap1)($List$nil))))($Arelin$Thing$spawn($self)($F64$parse(`3`))($List$cons($trap0)($List$nil))))($Arelin$Thing$set_box($trap1)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_dir($trap1)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($trap2)($Arelin$Thing$at_dist($self)($F64$parse(`60`)))))($Arelin$Thing$set_fun($trap1)($Arelin$Thing$jinx$flaming_bite_end)))($Arelin$Thing$new_thing))($Arelin$Thing$set_box($trap1)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_dir($trap1)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($trap1)($Arelin$Thing$at_dist($self)($F64$parse(`60`)))))($Arelin$Thing$set_fun($trap1)($Arelin$Thing$jinx$flaming_bite_idle)))($Arelin$Thing$new_thing))($Arelin$Thing$set_box($trap0)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_dir($trap0)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($trap0)($Arelin$Thing$at_dist($self)($F64$parse(`60`)))))($Arelin$Thing$set_fun($trap0)($Arelin$Thing$jinx$flaming_bite)))($Arelin$Thing$new_thing))($Arelin$Thing$reset($self)($F64$parse(`23`))))($Arelin$Thing$animate_between($self)($F64$0)($JINX_IDLE_000)($F64$parse(`4`))($F64$parse(`10`))($F64$parse(`24`))))($Arelin$Thing$animate_between($self)($F64$0)($JINX_FLAMING_BITE_CAST_ANIMATION_000)($F64$parse(`6`))($F64$parse(`0`))($F64$parse(`10`))))(elim_bool($F64$eql($self$act)($F64$parse(`3`)))(($self=>($proj=>($proj=>($proj=>($proj=>($proj=>($proj=>($explo=>($explo=>($explo=>($explo=>($explo=>($self=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`14`))($List$cons($explo)($List$nil))))($Arelin$Thing$spawn($self)($F64$parse(`5`))($List$cons($proj)($List$nil))))($Arelin$Thing$set_box($explo)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_dir($explo)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($explo)($self$pos)))($Arelin$Thing$set_fun($explo)($Arelin$Thing$jinx$pow_explosion)))($Arelin$Thing$new_thing))($Arelin$Thing$set_box($proj)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($proj)($F64$V3$scale($F64$parse(`12`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($proj)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($proj)($self$pos)))($Arelin$Thing$set_fun($proj)($Arelin$Thing$jinx$pow_proj)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($JINX_POW_CAST_ANIMATION_000)($F64$parse(`5`))($F64$parse(`15`))))(elim_bool($F64$eql($self$act)($F64$parse(`4`)))(($self=>($proj=>($proj=>($proj=>($proj=>($proj=>($proj=>($explo=>($explo=>($explo=>($explo=>($explo=>($self=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`35`))($List$cons($explo)($List$nil))))($Arelin$Thing$spawn($self)($F64$parse(`22`))($List$cons($proj)($List$nil))))($Arelin$Thing$set_box($explo)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_dir($explo)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($explo)($Arelin$Thing$at_dist($self)($F64$parse(`10`)))))($Arelin$Thing$set_fun($explo)($Arelin$Thing$jinx$ulti_explosion)))($Arelin$Thing$new_thing))($Arelin$Thing$set_box($proj)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($proj)($F64$V3$scale($F64$parse(`10`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($proj)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($proj)($self$pos)))($Arelin$Thing$set_fun($proj)($Arelin$Thing$jinx$ulti_proj)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_CAST_ANIMATION_000)($F64$parse(`12`))($F64$parse(`36`))))(elim_bool($F64$eql($self$act)($F64$parse(`5`)))(($self=>($proj=>($proj=>($proj=>($proj=>($proj=>($proj=>($path=>($path=>($path=>($path=>($path=>($self=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`13`))($List$cons($path)($List$nil))))($Arelin$Thing$spawn($self)($F64$parse(`6`))($List$cons($proj)($List$nil))))($Arelin$Thing$set_box($path)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_dir($path)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($path)($Arelin$Thing$at_dist($self)($F64$parse(`30`)))))($Arelin$Thing$set_fun($path)($Arelin$Thing$jinx$zap_path)))($Arelin$Thing$new_thing))($Arelin$Thing$set_box($proj)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($proj)($F64$V3$scale($F64$parse(`15`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($proj)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($proj)($self$pos)))($Arelin$Thing$set_fun($proj)($Arelin$Thing$jinx$zap_proj)))($Arelin$Thing$new_thing))($Arelin$Thing$animate($self)($F64$0)($JINX_ZAP_CAST_ANIMATION_000)($F64$parse(`11`))($F64$parse(`22`))))($Arelin$Thing$animate($self)($F64$0)($JINX_TAUNT_000)($F64$parse(`12`))($F64$parse(`24`)))))))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mhp($self)($F64$parse(`24`))))($Arelin$Thing$set_mov($self)($F64$parse(`3`))));
  var $KAKASHI_RUN_000 = $F64$parse(`4354`);
  var $KAKASHI_IDLE_000 = $F64$parse(`4299`);
  var $KAKASHI_TELEPORT_000 = $F64$parse(`4378`);
  var $KAKASHI_FIREBALL_CASTING_000 = $F64$parse(`4277`);
  var $KAKASHI_FIREBALL_EFFECT_000 = $F64$parse(`4286`);
  var $Arelin$Thing$kakashi$fire_ball_effect = ($self=>$Arelin$Thing$animate($self)($F64$0)($KAKASHI_FIREBALL_EFFECT_000)($F64$parse(`11`))($F64$parse(`22`)));
  var $KAKASHI_RAIKIRI_000 = $F64$parse(`4330`);
  var $KAKASHI_BLOCK_000 = $F64$parse(`4262`);
  var $KAKASHI_TAUNT_000 = $F64$parse(`4360`);
  var $Arelin$Thing$kakashi_fun = ($self=>($self=>($self=>($self$act=>($self$dir=>($self$pos=>elim_bool($F64$eql($self$act)($F64$0))(elim_bool($Arelin$Thing$is_walking($self))($Arelin$Thing$animate($self)($F64$1)($KAKASHI_RUN_000)($F64$parse(`6`))($F64$parse(`12`)))($Arelin$Thing$animate($self)($F64$1)($KAKASHI_IDLE_000)($F64$parse(`13`))($F64$parse(`39`))))(elim_bool($F64$eql($self$act)($F64$1))(($self=>($max_dist=>($hits0=>($hits1=>($hits2=>($self=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`42`))($hits2)))($Arelin$Thing$cast($self)($F64$parse(`40`))($hits1)))($Arelin$Thing$cast($self)($F64$parse(`36`))($hits0)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_4))($List$nil))($Arelin$Thing$at_dist($self)($max_dist))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`15`))))($List$nil)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil))($Arelin$Thing$at_dist($self)($F64$mul($max_dist)($F64$parse(`0.7`))))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`10`))))($List$nil)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil))($Arelin$Thing$at_dist($self)($F64$mul($max_dist)($F64$parse(`0.5`))))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`10`))))($List$nil)))($F64$parse(`90`)))($Arelin$Thing$animate($self)($F64$0)($GASTLY_ATTACK_LICK_000)($F64$parse(`10`))($F64$parse(`20`))))(elim_bool($F64$eql($self$act)($F64$2))(($self=>($self=>$self)($Arelin$Thing$blink($self)($F64$parse(`18`))($Arelin$Thing$at_max_dist($self)($F64$parse(`100`)))))($Arelin$Thing$animate($self)($F64$1)($KAKASHI_TELEPORT_000)($F64$parse(`14`))($F64$parse(`28`))))(elim_bool($F64$eql($self$act)($F64$parse(`3`)))(($self=>($hits0=>($hits1=>($self=>($self=>($fire=>($fire=>($fire=>($fire=>($fire=>($fire=>($self=>$self)($Arelin$Thing$spawn($self)($F64$parse(`5`))($List$cons($fire)($List$nil))))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_vel($self)($F64$V3$scale($F64$parse(`4`))($Arelin$Thing$targ_dir($self)))))($Arelin$Thing$set_dir($self)($Arelin$Thing$targ_dir($self))))($Arelin$Thing$set_pos($self)($Arelin$Thing$at_dist($self)($F64$parse(`35`)))))($Arelin$Thing$set_fun($fire)($Arelin$Thing$kakashi$fire_ball_effect)))($Arelin$Thing$new_thing))($Arelin$Thing$cast($self)($F64$parse(`16`))($hits1)))($Arelin$Thing$cast($self)($F64$parse(`9`))($hits0)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_3))($List$cons($Arelin$Game$Effect$repulse($F64$parse(`10`)))($List$nil)))($Arelin$Thing$at_dist($self)($F64$parse(`90`)))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`30`))))($List$nil)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_3))($List$nil))($Arelin$Thing$at_dist($self)($F64$parse(`45`)))($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`15`))))($List$nil)))($Arelin$Thing$animate($self)($F64$0)($KAKASHI_FIREBALL_CASTING_000)($F64$parse(`9`))($F64$parse(`18`))))(elim_bool($F64$eql($self$act)($F64$parse(`4`)))(($self=>($self=>($dist0=>($dist1=>($dist2=>($dist3=>($dist4=>($dist5=>($dist6=>($hits0=>($hits1=>($hits2=>($hits3=>($hits4=>($hits5=>($hits6=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$blink($self)($F64$parse(`48`))($Arelin$Thing$at_dist($self)($F64$parse(`90`)))))($Arelin$Thing$cast($self)($F64$parse(`40`))($hits6)))($Arelin$Thing$cast($self)($F64$parse(`39`))($hits5)))($Arelin$Thing$cast($self)($F64$parse(`38`))($hits4)))($Arelin$Thing$cast($self)($F64$parse(`37`))($hits3)))($Arelin$Thing$cast($self)($F64$parse(`36`))($hits2)))($Arelin$Thing$cast($self)($F64$parse(`35`))($hits1)))($Arelin$Thing$cast($self)($F64$parse(`34`))($hits0)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil))($dist6)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`15`))))($List$nil)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil))($dist5)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`10`))))($List$nil)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil))($dist4)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`10`))))($List$nil)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil))($dist3)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`10`))))($List$nil)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil))($dist2)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`10`))))($List$nil)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil))($dist1)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`10`))))($List$nil)))($List$cons($Arelin$Game$Hit$new($List$cons($Arelin$Game$Effect$damage($Arelin$Constants$DMG_LV_2))($List$nil))($dist0)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`10`))))($List$nil)))($Arelin$Thing$at_dist($self)($F64$parse(`100`))))($Arelin$Thing$at_dist($self)($F64$mul($F64$parse(`90`))($F64$div($F64$parse(`11`))($F64$parse(`12`))))))($Arelin$Thing$at_dist($self)($F64$mul($F64$parse(`90`))($F64$div($F64$parse(`9`))($F64$parse(`12`))))))($Arelin$Thing$at_dist($self)($F64$mul($F64$parse(`90`))($F64$div($F64$parse(`7`))($F64$parse(`12`))))))($Arelin$Thing$at_dist($self)($F64$mul($F64$parse(`90`))($F64$div($F64$parse(`5`))($F64$parse(`12`))))))($Arelin$Thing$at_dist($self)($F64$mul($F64$parse(`90`))($F64$div($F64$parse(`3`))($F64$parse(`12`))))))($Arelin$Thing$at_dist($self)($F64$mul($F64$parse(`90`))($F64$div($F64$1)($F64$parse(`12`))))))($Arelin$Thing$reset($self)($F64$parse(`48`))))($Arelin$Thing$animate_with_blink($self)($F64$0)($KAKASHI_RAIKIRI_000)($KAKASHI_IDLE_000)($F64$parse(`24`))($F64$0)($F64$parse(`48`))))(elim_bool($F64$eql($self$act)($F64$parse(`5`)))($Arelin$Thing$animate($self)($F64$0)($KAKASHI_BLOCK_000)($F64$parse(`15`))($F64$parse(`30`)))($Arelin$Thing$animate($self)($F64$0)($KAKASHI_TAUNT_000)($F64$parse(`19`))($F64$parse(`19`)))))))))($Arelin$Thing$get_pos($self)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_act($self)))($Arelin$Thing$set_mhp($self)($F64$parse(`24`))))($Arelin$Thing$set_mov($self)($F64$parse(`3`))));
  var $POSTE_IDLE_000 = $F64$parse(`7889`);
  var $Arelin$Game$Light$new = ($pos=>($rad=>($rng=>($sub=>($add=>($new=>$new($pos)($rad)($rng)($sub)($add)))))));
  var $Arelin$Thing$set_lit = ($thi=>($new_lit=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($new_lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$illumine = ($self=>($from_tik=>($to_tik=>($lights=>elim_bool($F64$is_between($from_tik)($to_tik)($Arelin$Thing$get_tik($self)))($Arelin$Thing$set_lit($self)($lights))($Arelin$Thing$set_lit($self)($List$nil))))));
  var $Arelin$Thing$poste_fun = ($self=>($self$pos=>($new_pos=>($self=>($self=>($lpos=>($lrng=>($lrad=>($lsub=>($ladd=>($lght=>($self=>$self)($Arelin$Thing$illumine($self)($F64$0)($F64$parse(`2147483648`))($List$cons($lght)($List$nil))))($Arelin$Game$Light$new($lpos)($lrad)($lrng)($lsub)($ladd)))($F64$V3$new($F64$parse(`0.72`))($F64$parse(`0.60`))($F64$parse(`0.24`))))($F64$V3$new($F64$0)($F64$0)($F64$0)))($F64$parse(`12`)))($F64$parse(`32.0`)))($self$pos(($self$pos$x=>($self$pos$y=>($self$pos$z=>$F64$V3$new($self$pos$x)($self$pos$y)($F64$parse(`52`))))))))($Arelin$Thing$set_mid($self)($POSTE_IDLE_000)))($Arelin$Thing$set_pos($self)($new_pos)))($F64$V3$new($F64$0)($F64$0)($F64$0)))($Arelin$Thing$get_pos($self)));
  var $Arelin$Game$Effect$slow = ($dur=>($val=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$slow($dur)($val))))))))))))));
  var $Arelin$Thing$puddledmg_fun = ($self=>($self$pos=>($self$dir=>($new_pos=>($self=>($new_dir=>($self=>($self=>($self=>($self=>($effs=>($hits=>($eff_slow=>($slow=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`52`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`44`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`38`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`30`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`26`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`18`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`10`))($slow)))($List$cons($Arelin$Game$Hit$new($eff_slow)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`48`))))($List$nil)))($List$cons($Arelin$Game$Effect$slow($F64$mul($Arelin$Constants$ONE_SEC)($F64$parse(`3`)))($F64$parse(`0.7`)))($List$nil)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`48`))))($List$nil)))($List$cons($Arelin$Game$Effect$damage($F64$1))($List$nil)))($Arelin$Thing$animate($self)($F64$0)($DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000)($F64$parse(`29`))($F64$parse(`58`))))($Arelin$Thing$set_mid($self)($DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000)))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_dir($self)($new_dir)))($F64$V3$new($F64$parse(`0.7071`))($F64$parse(`0.7071`))($F64$0)))($Arelin$Thing$set_pos($self)($new_pos)))($F64$V3$new($F64$parse(`100`))($F64$parse(`-100`))($F64$0)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_pos($self)));
  var $DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_015 = $F64$parse(`1204`);
  var $Arelin$Thing$puddleheal_fun = ($self=>($self$pos=>($self$dir=>($new_pos=>($self=>($new_dir=>($self=>($self=>($self=>($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>$self)($Arelin$Thing$cast($self)($F64$parse(`10`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`10`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`10`))($hits)))($Arelin$Thing$cast($self)($F64$parse(`10`))($hits)))($List$cons($Arelin$Game$Hit$new($effs)($self$pos)($self$dir)($Arelin$Game$Hitbox$cbox($F64$parse(`42`))))($List$nil)))($List$cons($Arelin$Game$Effect$heal($F64$parse(`2`)))($List$nil)))($Arelin$Thing$animate($self)($F64$0)($DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_015)($F64$parse(`9`))($F64$parse(`36`))))($Arelin$Thing$set_mid($self)($DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_015)))($Arelin$Thing$set_box($self)($Arelin$Game$Hitbox$nbox)))($Arelin$Thing$set_sid($self)($F64$0)))($Arelin$Thing$set_dir($self)($new_dir)))($F64$V3$new($F64$parse(`0.7071`))($F64$parse(`0.7071`))($F64$0)))($Arelin$Thing$set_pos($self)($new_pos)))($F64$V3$new($F64$parse(`130`))($F64$parse(`80`))($F64$0)))($Arelin$Thing$get_dir($self)))($Arelin$Thing$get_pos($self)));
  var $Arelin$Thing$get_dmg = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$dmg))))))))))))))))))))))))))));
  var $Arelin$Thing$set_dmg = ($thi=>($new_dmg=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($new_dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $F64$max = $F64$max;
  var $F64$min = $F64$min;
  var $F64$sin = a=>Math.sin(a);
  var $PUNCHINGBAG_IDLE_000 = $F64$parse(`8052`);
  var $Arelin$Thing$punchingbag_fun = ($self=>($self$dmg=>($self$tik=>($smhp=>($self=>($self=>($div_aux=>($self=>($self=>$self)($Arelin$Thing$set_mid($self)(($pow=>($sin=>($re0=>($re1=>($ang=>$F64$add($PUNCHINGBAG_IDLE_000)($F64$floor($ang)))($F64$mod($re1)($F64$parse(`24`))))($F64$add($F64$add($re0)($F64$parse(`24`)))($F64$parse(`0.5`))))($F64$mul($F64$mul($sin)($F64$parse(`12`)))($pow)))($F64$sin($F64$div($self$tik)($F64$parse(`6`)))))($F64$max($F64$0)($F64$min($F64$1)($F64$div($self$dmg)($smhp)))))))($Arelin$Thing$set_dmg($self)($F64$sub($self$dmg)($div_aux))))($F64$div($F64$parse(`2`))($F64$parse(`24`))))($Arelin$Thing$set_dir($self)($F64$V3$new($F64$parse(`0.707`))($F64$parse(`-0.707`))($F64$0))))($Arelin$Thing$set_mhp($self)($smhp)))($F64$parse(`32`)))($Arelin$Thing$get_tik($self)))($Arelin$Thing$get_dmg($self)));
  var $Arelin$Game$Effect$haste = ($dur=>($val=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$haste($dur)($val))))))))))))));
  var $Arelin$Game$Effect$shield = ($dur=>($val=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$shield($dur)($val))))))))))))));
  var $Arelin$Game$Effect$silence = ($dur=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$silence($dur)))))))))))));
  var $Arelin$Game$Effect$root = ($dur=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$root($dur)))))))))))));
  var $Arelin$Game$Effect$stun = ($dur=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport_to=>$stun($dur)))))))))))));
  var $Arelin$Game$Buff$slowed = ($dur=>($val=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stunned=>$slowed($dur)($val)))))))));
  var $Arelin$Game$Buff$hasted = ($dur=>($val=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stunned=>$hasted($dur)($val)))))))));
  var $Arelin$Game$Buff$silenced = ($dur=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stunned=>$silenced($dur))))))));
  var $Arelin$Game$Buff$rooted = ($dur=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stunned=>$rooted($dur))))))));
  var $Arelin$Game$Buff$stunned = ($dur=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stunned=>$stunned($dur))))))));
  var $Arelin$Game$new = ($stage=>($new=>$new($stage)));
  var $Arelin$Game$Input$sdir = ($dir=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$sdir($dir))))))))));
  var $Arelin$Game$Input$key0 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key0($pos))))))))));
  var $Arelin$Game$Input$key1 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key1($pos))))))))));
  var $Arelin$Game$Input$key2 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key2($pos))))))))));
  var $Arelin$Game$Input$key3 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key3($pos))))))))));
  var $Arelin$Game$Input$key4 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key4($pos))))))))));
  var $Arelin$Game$Input$key5 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key5($pos))))))))));
  var $Arelin$Game$Input$cmsg = ($txt=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$cmsg($txt))))))))));
  var $Arelin$Game$Command$new = ($pid=>($inp=>($new=>$new($pid)($inp))));
  var $Arelin$Thing$get_fun = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$fun))))))))))))))))))))))))))));
  var $Arelin$Thing$get_mid = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$mid))))))))))))))))))))))))))));
  var $Arelin$Thing$set_act = ($thi=>($new_act=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($new_act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$get_nam = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$nam))))))))))))))))))))))))))));
  var $Arelin$Thing$get_lit = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$lit))))))))))))))))))))))))))));
  var $Arelin$Thing$set_tik = ($thi=>($new_tik=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($new_tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$get_mov = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$mov))))))))))))))))))))))))))));
  var $Arelin$Thing$get_bst = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$bst))))))))))))))))))))))))))));
  var $Arelin$Thing$set_pad = ($thi=>($new_pad=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($new_pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$set_trg = ($thi=>($new_trg=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($new_trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$get_vel = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$vel))))))))))))))))))))))))))));
  var $Arelin$Thing$get_box = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$box))))))))))))))))))))))))))));
  var $Arelin$Thing$get_wei = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$wei))))))))))))))))))))))))))));
  var $Arelin$Thing$set_wei = ($thi=>($new_wei=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($new_wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$get_mhp = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$mhp))))))))))))))))))))))))))));
  var $Arelin$Thing$get_knk = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$knk))))))))))))))))))))))))))));
  var $Arelin$Thing$set_knk = ($thi=>($new_knk=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$Arelin$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($new_knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Arelin$Thing$get_chi = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$chi))))))))))))))))))))))))))));
  var $Arelin$Thing$get_hit = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$hit))))))))))))))))))))))))))));
  var $Arelin$Thing$get_rst = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$rst))))))))))))))))))))))))))));
  var $Arelin$Thing$get_die = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$die))))))))))))))))))))))))))));
  var $Arelin$Thing$get_by_pid = ($pid=>($gm=>($cond=>$gm(($stage=>$List$find($cond($pid))($stage))))(($pid=>($thi=>($thi$pid=>$F64$eql($pid)($thi$pid))($Arelin$Thing$get_pid($thi)))))));
  var $Arelin$Game$get_position_by_pid = ($pid=>($gm=>$Arelin$Thing$get_by_pid($pid)($gm)($F64$V3$new($F64$0)($F64$0)($F64$0))(($thi=>$Arelin$Thing$get_pos($thi)))));
  var $List$map = ($fn=>($list=>$list($List$nil)(($list$head=>($list$tail=>$List$cons($fn($list$head))($List$map($fn)($list$tail)))))));
  var $Arelin$Game$map_stage = ($fn=>($gm=>$gm(($stage=>($new_stage=>$Arelin$Game$new($new_stage))($List$map($fn)($stage))))));
  var $Arelin$Game$with_thing = ($pid=>($fn=>($gm=>($effect=>$Arelin$Game$map_stage($effect)($gm))(($thi=>($thi$pid=>elim_bool($F64$eql($thi$pid)($pid))($fn($thi))($thi))($Arelin$Thing$get_pid($thi)))))));
  var $Arelin$Thing$at_min_dist = ($self=>($min_range=>($pos=>($trg=>($dist_min=>($dist_trg=>elim_bool($F64$gtn($dist_trg)($dist_min))($Arelin$Thing$at_dist($self)($dist_trg))($Arelin$Thing$at_dist($self)($min_range)))($F64$V3$dist($pos)($trg)))($F64$V3$dist($pos)($Arelin$Thing$at_dist($self)($min_range))))($Arelin$Thing$get_trg($self)))($Arelin$Thing$get_pos($self))));
  var $Arelin$Thing$between_dist = ($self=>($min_range=>($max_range=>($pos=>($trg=>($dist_trg=>$Arelin$Thing$at_dist($self)($F64$max($min_range)($F64$min($max_range)($dist_trg))))($F64$V3$dist($pos)($trg)))($Arelin$Thing$get_trg($self)))($Arelin$Thing$get_pos($self)))));
  var $Arelin$Thing$init_act = ($self=>($new_act=>($new_trg=>($act=>($trg=>($tik=>($act=>($trg=>($tik=>($self=>($self=>($self=>$self)($Arelin$Thing$set_tik($self)($tik)))($Arelin$Thing$set_trg($self)($trg)))($Arelin$Thing$set_act($self)($act)))(elim_bool($F64$eql($act)($F64$0))($F64$0)($tik)))(elim_bool($F64$eql($act)($F64$0))($new_trg)($trg)))(elim_bool($F64$eql($act)($F64$0))($new_act)($act)))($Arelin$Thing$get_tik($self)))($Arelin$Thing$get_trg($self)))($Arelin$Thing$get_act($self)))));
  var $Arelin$Game$combine_mov_buffs = ($buff=>($i=>$buff(($buff$dur=>($buff$val=>$i)))(($buff$dur=>($buff$val=>$F64$mul($i)($buff$val))))(($buff$dur=>($buff$val=>$F64$mul($i)($buff$val))))(($buff$dur=>$i))(($buff$dur=>$F64$0))(($buff$dur=>$F64$0))));
  var $List$fold = ($nil=>($cons=>($list=>$list($nil)(($x=>($xs=>$cons($x)($List$fold($nil)($cons)($xs))))))));
  var $Arelin$Thing$speed_multiplier_of = ($self=>($self$bst=>($self$buf=>$List$fold($self$bst)($Arelin$Game$combine_mov_buffs)($self$buf))($Arelin$Thing$get_buf($self)))($Arelin$Thing$get_bst($self)));
  var $Arelin$Thing$is_silenced = ($self=>($self$buf=>($is_silence_buff=>$List$find($is_silence_buff)($self$buf)($Bool$false)(($some=>$Bool$true)))(($buff=>$buff(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>$Bool$true))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$true)))))($Arelin$Thing$get_buf($self)));
  var $Arelin$Thing$is_stunned = ($self=>($self$buf=>($is_stun_buff=>$List$find($is_stun_buff)($self$buf)($Bool$false)(($some=>$Bool$true)))(($buff=>$buff(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$true)))))($Arelin$Thing$get_buf($self)));
  var $Arelin$Thing$has_shield = ($self=>($self$buf=>($is_shield_buff=>$List$find($is_shield_buff)($self$buf)($Bool$false)(($some=>$Bool$true)))(($buff=>$buff(($buff$dur=>($buff$val=>$Bool$true)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$false)))))($Arelin$Thing$get_buf($self)));
  var $Pair$fst = ($pair=>$pair(($a=>($b=>$a))));
  var $Pair$snd = ($pair=>$pair(($a=>($b=>$b))));
  var $Pair = ($A=>($B=>null));
  var $F64$Ordering$EQ = ($F64$Ordering$LT=>($F64$Ordering$EQ=>($F64$Ordering$GT=>$F64$Ordering$EQ)));
  var $F64$Ordering$GT = ($F64$Ordering$LT=>($F64$Ordering$EQ=>($F64$Ordering$GT=>$F64$Ordering$GT)));
  var $F64$Ordering$LT = ($F64$Ordering$LT=>($F64$Ordering$EQ=>($F64$Ordering$GT=>$F64$Ordering$LT)));
  var $F64$compare_numbers = ($a=>($b=>$Bool$if($F64$eql($a)($b))($F64$Ordering$EQ)($Bool$if($F64$ltn($b)($a))($F64$Ordering$GT)($F64$Ordering$LT))));
  var $Pair$new = ($a=>($b=>($new=>$new($a)($b))));
  var $Arelin$Game$use_shields = ($buff=>($acc=>($curr_dmg=>($curr_buf=>$buff(($buff$dur=>($buff$val=>elim_bool($F64$eql($curr_dmg)($F64$0))($acc)($F64$compare_numbers($curr_dmg)($buff$val)(($remaining_shield=>($remaining_buf=>$Pair$new($F64$0)($remaining_buf))($List$cons($Arelin$Game$Buff$shielded($buff$dur)($remaining_shield))($curr_buf)))($F64$sub($buff$val)($curr_dmg)))($Pair$new($F64$0)($curr_buf))(($remaining_dmg=>$Pair$new($remaining_dmg)($curr_buf))($F64$sub($curr_dmg)($buff$val)))))))(($buff$dur=>($buff$val=>$Pair$new($curr_dmg)($List$cons($buff)($curr_buf)))))(($buff$dur=>($buff$val=>$Pair$new($curr_dmg)($List$cons($buff)($curr_buf)))))(($buff$dur=>$Pair$new($curr_dmg)($List$cons($buff)($curr_buf))))(($buff$dur=>$Pair$new($curr_dmg)($List$cons($buff)($curr_buf))))(($buff$dur=>$Pair$new($curr_dmg)($List$cons($buff)($curr_buf)))))($Pair$snd($acc)))($Pair$fst($acc))));
  var $Arelin$Thing$handle_shields = ($hit_dmg=>($self=>($self$buf=>($self$dmg=>($init_val=>($res=>($remaining_dmg=>($remaining_buf=>($self=>($self=>$self)($Arelin$Thing$set_buf($self)($remaining_buf)))($Arelin$Thing$set_dmg($self)($remaining_dmg)))($Pair$snd($res)))($F64$add($Pair$fst($res))($self$dmg)))($List$fold($init_val)($Arelin$Game$use_shields)($self$buf)))($Pair$new($hit_dmg)($List$nil)))($Arelin$Thing$get_dmg($self)))($Arelin$Thing$get_buf($self))));
  var $Arelin$Thing$update_buff_dur = ($self=>($self$buf=>($fn=>($new_buf=>$Arelin$Thing$set_buf($self)($new_buf))($List$fold($List$nil)($fn)($self$buf)))(($buff=>($acc=>$buff(($buff$dur=>($buff$val=>elim_bool($F64$eql($buff$dur)($F64$0))($acc)($List$cons($Arelin$Game$Buff$shielded($F64$sub($buff$dur)($F64$1))($buff$val))($acc)))))(($buff$dur=>($buff$val=>elim_bool($F64$eql($buff$dur)($F64$0))($acc)($List$cons($Arelin$Game$Buff$slowed($F64$sub($buff$dur)($F64$1))($buff$val))($acc)))))(($buff$dur=>($buff$val=>elim_bool($F64$eql($buff$dur)($F64$0))($acc)($List$cons($Arelin$Game$Buff$hasted($F64$sub($buff$dur)($F64$1))($buff$val))($acc)))))(($buff$dur=>elim_bool($F64$eql($buff$dur)($F64$0))($acc)($List$cons($Arelin$Game$Buff$silenced($F64$sub($buff$dur)($F64$1)))($acc))))(($buff$dur=>elim_bool($F64$eql($buff$dur)($F64$0))($acc)($List$cons($Arelin$Game$Buff$rooted($F64$sub($buff$dur)($F64$1)))($acc))))(($buff$dur=>elim_bool($F64$eql($buff$dur)($F64$0))($acc)($List$cons($Arelin$Game$Buff$stunned($F64$sub($buff$dur)($F64$1)))($acc))))))))($Arelin$Thing$get_buf($self)));
  var $Arelin$Thing$set_stt_value_v3 = ($self=>($v3=>($self$stt=>$v3(($v3$x=>($v3$y=>($v3$z=>($insert_x=>($insert_y=>($self=>($self=>$self)($Arelin$Thing$set_stt($self)($insert_y)))($Arelin$Thing$set_stt($self)($insert_x)))($Map$set($Arelin$POS_Y_KEY)($v3$x)($self$stt)))($Map$set($Arelin$POS_X_KEY)($v3$x)($self$stt)))))))($Arelin$Thing$get_stt($self))));
  var $Arelin$exec_command = ($cmd=>($gm=>$cmd(($cmd$pid=>($cmd$inp=>($fn=>$Arelin$Game$with_thing($cmd$pid)($fn)($gm))(($this=>($silenced=>($stunned=>elim_bool($stunned)($cmd$inp(($dir=>$Arelin$Thing$init_act($this)($F64$0)($dir)))(($pos=>$this))(($pos=>$this))(($pos=>$this))(($pos=>$this))(($pos=>$this))(($pos=>$this))(($txt=>$this)))(elim_bool($silenced)($cmd$inp(($dir=>$Arelin$Thing$set_pad($this)($dir)))(($pos=>$this))(($pos=>$this))(($pos=>$this))(($pos=>$this))(($pos=>$this))(($pos=>$this))(($txt=>$this)))($cmd$inp(($dir=>$Arelin$Thing$set_pad($this)($dir)))(($pos=>$Arelin$Thing$init_act($this)($F64$1)($pos)))(($pos=>$Arelin$Thing$init_act($this)($F64$parse(`2`))($pos)))(($pos=>$Arelin$Thing$init_act($this)($F64$parse(`3`))($pos)))(($pos=>$Arelin$Thing$init_act($this)($F64$parse(`4`))($pos)))(($pos=>$Arelin$Thing$init_act($this)($F64$parse(`5`))($pos)))(($pos=>$Arelin$Thing$init_act($this)($F64$parse(`6`))($pos)))(($txt=>$this)))))($Arelin$Thing$is_stunned($this)))($Arelin$Thing$is_silenced($this)))))))));
  var $F64$V3$point_segment_sqrdist = ($p=>($s=>$p(($p$x=>($p$y=>($p$z=>$s(($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($ab_x_diff_sqrd=>($ab_y_diff_sqrd=>($pa_x_diff=>($pa_y_diff=>($ba_x_diff=>($ba_y_diff=>($l=>($t=>($t=>($t=>($d=>($t_times_ba_x_diff=>($t_times_ba_y_diff=>($k=>($d=>($k=>($d=>$d)($F64$add($d)($k)))($F64$pow($F64$sub($p$y)($F64$add($a$y)($t_times_ba_y_diff)))($F64$2)))($F64$add($d)($k)))($F64$pow($F64$sub($p$x)($F64$add($a$x)($t_times_ba_x_diff)))($F64$2)))($F64$mul($t)($ba_y_diff)))($F64$mul($t)($ba_x_diff)))($F64$0))($F64$max($F64$0)($F64$min($F64$1)($t))))($F64$div($t)($l)))($F64$add($F64$mul($pa_x_diff)($ba_x_diff))($F64$mul($pa_y_diff)($ba_y_diff))))($F64$add($ab_x_diff_sqrd)($ab_y_diff_sqrd)))($F64$sub($b$y)($a$y)))($F64$sub($b$x)($a$x)))($F64$sub($p$y)($a$y)))($F64$sub($p$x)($a$x)))($F64$pow($F64$sub($a$y)($b$y))($F64$2)))($F64$pow($F64$sub($a$x)($b$x))($F64$2)))))))))))))))))));
  var $F64$V3$point_segment_dist = ($p=>($s=>$F64$sqrt($F64$V3$point_segment_sqrdist($p)($s))));
  var $F64$V3$rot_90 = ($v=>$v(($v$x=>($v$y=>($v$z=>$F64$V3$new($v$y)($F64$sub($F64$0)($v$x))($v$z))))));
  var $F64$atan = a=>Math.atan(a);
  var $F64$cos = a=>Math.cos(a);
  var $F64$V3$polygon_to_segments$transform = ($pos=>($dir=>($pnt=>$pnt(($pnt$x=>($pnt$y=>($pnt$z=>$dir(($dir$x=>($dir$y=>($dir$z=>($a=>($pnt_x_times_cos_a=>($pnt_y_times_sin_a=>($pnt_x_times_sin_a=>($pnt_y_times_cos_a=>($x=>($y=>$F64$V3$add($pos)($F64$V3$new($x)($y)($pnt$z)))($F64$add($pnt_x_times_sin_a)($pnt_y_times_cos_a)))($F64$sub($pnt_x_times_cos_a)($pnt_y_times_sin_a)))($F64$mul($pnt$y)($F64$cos($a))))($F64$mul($pnt$x)($F64$sin($a))))($F64$mul($pnt$y)($F64$sin($a))))($F64$mul($pnt$x)($F64$cos($a))))($F64$atan($dir$y)($dir$x)))))))))))));
  var $F64$Segment$new = ($a=>($b=>($new=>$new($a)($b))));
  var $F64$V3$polygon_to_segments$nil = ($pos=>($dir=>($pt_a=>($pt_0=>$pt_0($List$nil)(($pt_0$value=>$pt_a($List$nil)(($pt_a$value=>($p0=>($p1=>($sg=>$List$cons($sg)($List$nil))($F64$Segment$new($p0)($p1)))($F64$V3$polygon_to_segments$transform($pos)($dir)($pt_0$value)))($F64$V3$polygon_to_segments$transform($pos)($dir)($pt_a$value))))))))));
  var $F64$V3$polygon_to_segments$cons = ($pos=>($dir=>($pt_b=>($segs=>($pt_a=>($pt_0=>$pt_a($segs($Maybe$some($pt_b))($Maybe$some($pt_b)))(($pt_a$value=>($pt_0=>($p0=>($p1=>($sg=>$List$cons($sg)($segs($Maybe$some($pt_b))($pt_0)))($F64$Segment$new($p0)($p1)))($F64$V3$polygon_to_segments$transform($pos)($dir)($pt_b)))($F64$V3$polygon_to_segments$transform($pos)($dir)($pt_a$value)))($pt_0($Maybe$some($pt_b))(($pt_0$value=>$pt_0)))))))))));
  var $F64$V3$polygon_to_segments = ($pos=>($dir=>($pts=>$List$fold($F64$V3$polygon_to_segments$nil($pos)($dir))($F64$V3$polygon_to_segments$cons($pos)($dir))($pts)($Maybe$none)($Maybe$none))));
  var $Arelin$collide_with = ($a_pos=>($a_dir=>($a_box=>($b_pos=>($b_dir=>($b_box=>$a_box($Maybe$none)(($a_box$rad=>$b_box($Maybe$none)(($b_box$rad=>($dst=>($rad=>elim_bool($Bool$and($F64$gtn($dst)($F64$0))($F64$ltn($dst)($rad)))(($out_dir=>($out_vec=>$Maybe$some($out_vec))($F64$V3$scale($F64$sub($rad)($dst))($out_dir)))($F64$V3$norm($F64$V3$sub($a_pos)($b_pos))))($Maybe$none))($F64$add($a_box$rad)($b_box$rad)))($F64$V3$dist($a_pos)($b_pos))))(($b_box$pts=>($nil=>($cons=>($segs=>$List$fold($nil)($cons)($segs))($F64$V3$polygon_to_segments($b_pos)($b_dir)($b_box$pts)))(($segment=>($result=>$result($segment(($segment$a=>($segment$b=>($dst=>($rad=>elim_bool($F64$ltn($dst)($rad))(($out_dir=>($out_vec=>$Maybe$some($out_vec))($F64$V3$scale($F64$sub($rad)($dst))($out_dir)))($F64$V3$rot_90($F64$V3$norm($F64$V3$sub($segment$a)($segment$b)))))($Maybe$none))($a_box$rad))($F64$V3$point_segment_dist($a_pos)($segment))))))(($value=>$Maybe$some($value)))))))($Maybe$none)))))(($a_box$pts=>$Maybe$none))))))));
  var $Arelin$interact_with = ($this=>($that=>($this$pos=>($this$dir=>($this$box=>($this$buf=>($this$sid=>($that$pos=>($that$dir=>($that$box=>($that$hit=>($that$sid=>($out_vec=>($this=>($this=>$this)(($apply_hit=>$List$fold($this)($apply_hit)($that$hit))(($hit=>($this=>$hit(($hit$eff=>($hit$pos=>($hit$dir=>($hit$box=>($out_vec=>$out_vec($this)(($value=>($compare_sid=>($apply_eff=>$List$fold($this)($apply_eff)($hit$eff))(($eff=>($this=>$eff(($eff$lif=>($this$dmg=>elim_bool($compare_sid)($this)($Arelin$Thing$set_dmg($this)($F64$sub($this$dmg)($eff$lif))))($Arelin$Thing$get_dmg($this))))(($eff$dmg=>elim_bool($compare_sid)($this)($Arelin$Thing$handle_shields($eff$dmg)($this))))(($eff$mag=>elim_bool($compare_sid)($this)(($v3=>($dir=>($vec=>$Arelin$Thing$set_knk($this)($vec))($F64$V3$scale($eff$mag)($dir)))($F64$V3$look_at($hit$pos)($this$pos)($v3)))($F64$V3$new($F64$1)($F64$0)($F64$0)))))(($eff$mag=>($eff$dir=>elim_bool($compare_sid)($this)(($vec=>$Arelin$Thing$set_knk($this)($vec))($F64$V3$scale($eff$mag)($eff$dir))))))(($eff$dur=>($eff$val=>elim_bool($compare_sid)($this)(($updated_buffs=>$Arelin$Thing$set_buf($this)($updated_buffs))($List$cons($Arelin$Game$Buff$slowed($eff$dur)($eff$val))($this$buf))))))(($eff$dur=>($eff$val=>elim_bool($compare_sid)($this)(($updated_buffs=>$Arelin$Thing$set_buf($this)($updated_buffs))($List$cons($Arelin$Game$Buff$hasted($eff$dur)($eff$val))($this$buf))))))(($eff$dur=>($eff$val=>elim_bool($compare_sid)($this)(($updated_buffs=>$Arelin$Thing$set_buf($this)($updated_buffs))($List$cons($Arelin$Game$Buff$shielded($eff$dur)($eff$val))($this$buf))))))(($eff$dur=>elim_bool($compare_sid)($this)(($updated_buffs=>$Arelin$Thing$set_buf($this)($updated_buffs))($List$cons($Arelin$Game$Buff$silenced($eff$dur))($this$buf)))))(($eff$dur=>elim_bool($compare_sid)($this)(($updated_buffs=>$Arelin$Thing$set_buf($this)($updated_buffs))($List$cons($Arelin$Game$Buff$rooted($eff$dur))($this$buf)))))(($eff$dur=>elim_bool($compare_sid)($this)(($updated_buffs=>$Arelin$Thing$set_buf($this)($updated_buffs))($List$cons($Arelin$Game$Buff$stunned($eff$dur))($this$buf)))))(($eff$to_pos=>($eff$all=>elim_bool($F64$eql($eff$all)($F64$1))($Arelin$Thing$move($this)($eff$to_pos))($this))))))))($F64$eql($this$sid)($that$sid)))))($Arelin$collide_with($this$pos)($this$dir)($this$box)($hit$pos)($hit$dir)($hit$box))))))))))))($out_vec($this)(($out_vec$value=>($new_pos=>$Arelin$Thing$set_pos($this)($new_pos))($F64$V3$add($this$pos)($out_vec$value))))))($Arelin$collide_with($this$pos)($this$dir)($this$box)($that$pos)($that$dir)($that$box)))($Arelin$Thing$get_sid($this)))($Arelin$Thing$get_hit($that)))($Arelin$Thing$get_box($that)))($Arelin$Thing$get_dir($that)))($Arelin$Thing$get_pos($that)))($Arelin$Thing$get_sid($this)))($Arelin$Thing$get_buf($this)))($Arelin$Thing$get_box($this)))($Arelin$Thing$get_dir($this)))($Arelin$Thing$get_pos($this))));
  var $Arelin$fold_with_context = ($i=>($f=>($xs=>($ys=>$xs($i)(($xs$head=>($xs$tail=>($ys2=>($rest=>$f($xs$head)($ys($xs$tail))($rest))($Arelin$fold_with_context($i)($f)($xs$tail)($ys2)))(($x=>$ys($List$cons($xs$head)($xs)))))))))));
  var $F64$V3$get_z = ($v=>$v(($v$x=>($v$y=>($v$z=>$v$z)))));
  var $F64$V3$get_y = ($v=>$v(($v$x=>($v$y=>($v$z=>$v$y)))));
  var $List$concat = ($as=>($bs=>$as($bs)(($head=>($tail=>$List$cons($head)($List$concat($tail)($bs)))))));
  var $Arelin$exec_turn = ($gm=>($intr=>($tick=>($things_id=>$gm(($stage=>($stage_nil=>($new_stage=>$Arelin$Game$new($new_stage))($Arelin$fold_with_context($stage_nil)($tick)($stage)($things_id)))($List$nil))))(($x=>$x)))(($this=>($others=>($res=>($this=>($rst=>($this=>($boost=>($pos=>($mov=>($pad=>($this=>($this=>($pos=>($knk=>($wei=>($new_pos=>($knk_len=>($new_knk=>($this=>($this=>($fun=>($this=>($this=>($tik=>($this=>($this_chi=>($chi_init=>($chi_list=>($this=>($this_pos=>($pos_x=>($pos_y=>($pos_z=>($new_x=>($new_y=>($new_z=>($this=>($dmg=>($mhp=>($new_dmg=>($this=>($sid=>($dmg=>($mhp=>($no_hp=>($die=>($xs=>$List$concat($chi_list)($xs))(elim_bool($Bool$or($die)($no_hp))($res)($List$cons($this)($res))))($Arelin$Thing$get_die($this)))($Bool$false))($Arelin$Thing$get_mhp($this)))($Arelin$Thing$get_dmg($this)))($Arelin$Thing$get_sid($this)))($Arelin$Thing$set_dmg($this)($new_dmg)))($F64$max($F64$0)($F64$min($mhp)($dmg))))($Arelin$Thing$get_mhp($this)))($Arelin$Thing$get_dmg($this)))($Arelin$Thing$set_pos($this)($F64$V3$new($new_x)($new_y)($new_z))))($F64$min($F64$max($F64$0)($pos_z))($F64$parse(`256`))))($F64$min($F64$max($F64$parse(`-160`))($pos_y))($F64$parse(`160`))))($F64$min($F64$max($F64$parse(`-256`))($pos_x))($F64$parse(`256`))))($F64$V3$get_z($this_pos)))($F64$V3$get_y($this_pos)))($F64$V3$get_z($this_pos)))($Arelin$Thing$get_pos($this)))($Arelin$Thing$set_chi($this)($List$nil)))($List$map($chi_init)($this_chi)))(($chi=>$Arelin$Thing$get_fun($chi)($chi))))($Arelin$Thing$get_chi($this)))($Arelin$Thing$set_tik($this)($F64$add($tik)($F64$1))))($Arelin$Thing$get_tik($this)))($List$fold($this)($intr)($others)))($fun($this)))($Arelin$Thing$get_fun($this)))($Arelin$Thing$set_knk($this)($new_knk)))($Arelin$Thing$set_pos($this)($new_pos)))(elim_bool($F64$gtn($knk_len)($F64$0))(($force=>$F64$V3$scale($force)($F64$V3$norm($knk)))($F64$max($F64$sub($knk_len)($wei))($F64$0)))($knk)))($F64$V3$len($knk)))($F64$V3$add($pos)($knk)))($Arelin$Thing$get_wei($this)))($Arelin$Thing$get_knk($this)))($Arelin$Thing$get_pos($this)))($Arelin$Thing$update_buff_dur($this)))($Arelin$Thing$set_pos($this)($F64$V3$add($pos)($F64$V3$scale($F64$mul($mov)($boost))($pad)))))($Arelin$Thing$get_pad($this)))($Arelin$Thing$get_mov($this)))($Arelin$Thing$get_pos($this)))($Arelin$Thing$speed_multiplier_of($this)))(elim_bool($rst)(($new_vel=>($new_bst=>($new_box=>($new_act=>($new_tik=>($new_lit=>($new_rst=>($this=>($this=>($this=>($this=>($this=>($this=>($this=>$this)($Arelin$Thing$set_rst($this)($new_rst)))($Arelin$Thing$set_lit($this)($new_lit)))($Arelin$Thing$set_tik($this)($new_tik)))($Arelin$Thing$set_act($this)($new_act)))($Arelin$Thing$set_box($this)($new_box)))($Arelin$Thing$set_bst($this)($new_bst)))($Arelin$Thing$set_vel($this)($new_vel)))($Bool$false))($List$nil))($F64$0))($F64$0))($Arelin$Game$Hitbox$cbox($F64$mul($F64$parse(`3`))($F64$parse(`4`)))))($F64$1))($F64$V3$new($F64$0)($F64$0)($F64$0)))($this)))($Arelin$Thing$get_rst($this)))($Arelin$Thing$set_hit($this)($List$nil)))))))(($that=>($this=>$Arelin$interact_with($this)($that)))));
  var $Exports$new = ($new=>($add=>$new));
  var $Arelin$Exports = $Exports$add($Arelin$Constants$ONE_SEC)($Exports$add($Arelin$Constants$POS_X_KEY)($Exports$add($Arelin$Constants$POS_Y_KEY)($Exports$add($Arelin$Constants$DARTH_VADER_USING_FORCE)($Exports$add($Arelin$Constants$FORCE_AWAKENS_KEY)($Exports$add($Arelin$Constants$GON_AFTER_ULT)($Exports$add($Arelin$Constants$MANDO_WEAPON_KEY)($Exports$add($Arelin$Constants$STEVE_BLOCK_TIMER)($Exports$add($Arelin$Constants$STEVE_TNT_TIMER)($Exports$add($Arelin$Constants$ULT_TIME)($Exports$add($Arelin$Constants$DMG_LV_1)($Exports$add($Arelin$Constants$DMG_LV_2)($Exports$add($Arelin$Constants$DMG_LV_3)($Exports$add($Arelin$Constants$DMG_LV_4)($Exports$add($Arelin$Constants$DMG_LV_5)($Exports$add($Arelin$Constants$DMG_LV_6)($Exports$add($Arelin$Thing$bleskape_fun)($Exports$add($Arelin$Thing$darth_vader_fun)($Exports$add($Arelin$Thing$darth_vader$phanton_menace_twisting_fun)($Exports$add($Arelin$Thing$darth_vader$rise_skywalker_fun)($Exports$add($Arelin$Thing$dilma_fun)($Exports$add($Arelin$Thing$dilma$stocking_wind_fun)($Exports$add($Arelin$Thing$dilma$confusion_fun)($Exports$add($Arelin$Thing$dorime_fun)($Exports$add($Arelin$Thing$dorime$blessing_fun)($Exports$add($Arelin$Thing$dorime$gods_chamber_fun)($Exports$add($Arelin$Thing$dorime$holy_flame_fun)($Exports$add($Arelin$Thing$dorime$jesus_power)($Exports$add($Arelin$Thing$dorime$leptospirose_puddle_fun)($Exports$add($Arelin$Thing$dorime$leptospirose_puddle_pot_fun)($Exports$add($Arelin$Thing$drstrange_fun)($Exports$add($Arelin$Thing$drstrange$mystic_beam_fun)($Exports$add($Arelin$Thing$drstrange$portal_fun)($Exports$add($Arelin$Thing$drstrange$time_stone_power_fun)($Exports$add($Arelin$Thing$drstrange$chronostasis_p0_fun)($Exports$add($Arelin$Thing$drstrange$chronostasis_p1_fun)($Exports$add($Arelin$Thing$finn_fun)($Exports$add($Arelin$Thing$finn$arrow_fun)($Exports$add($Arelin$Thing$finn$jakes_fury_fun)($Exports$add($Arelin$Thing$gastly_fun)($Exports$add($Arelin$Thing$haunter_fun)($Exports$add($Arelin$Thing$gengar_fun)($Exports$add($Arelin$Thing$gon_fun)($Exports$add($Arelin$Thing$gon$paper_fun)($Exports$add($Arelin$Thing$gon$taunt_text_fun)($Exports$add($Arelin$Thing$gon$transformed_fun)($Exports$add($Arelin$Thing$gon$t_paper_fun)($Exports$add($Arelin$Thing$gon$tired_fun)($Exports$add($Arelin$Thing$grimer$base_earth_ball_dmg)($Exports$add($Arelin$Thing$grimer$base_mud_tsunami_dmg)($Exports$add($Arelin$Thing$grimer_fun)($Exports$add($Arelin$Thing$grimer$earth_ball_fun)($Exports$add($Arelin$Thing$grimer$mud_tsunami_fun)($Exports$add($Arelin$Thing$muk_fun)($Exports$add($Arelin$Thing$muk$earth_ball_fun)($Exports$add($Arelin$Thing$muk$mud_tsunami_fun)($Exports$add($Arelin$Thing$jacquin_fun)($Exports$add($Arelin$Thing$jacquin$shame_of_the_profession_fun)($Exports$add($Arelin$Thing$jacquin$freezer_fun)($Exports$add($Arelin$Thing$jacquin$giant_jacquin_fun)($Exports$add($Arelin$Thing$jinx_fun)($Exports$add($Arelin$Thing$jinx$gatling_fun)($Exports$add($Arelin$Thing$jinx$flaming_bite)($Exports$add($Arelin$Thing$jinx$flaming_bite_idle)($Exports$add($Arelin$Thing$jinx$flaming_bite_end)($Exports$add($Arelin$Thing$jinx$pow_proj)($Exports$add($Arelin$Thing$jinx$pow_explosion)($Exports$add($Arelin$Thing$jinx$zap_proj)($Exports$add($Arelin$Thing$jinx$zap_path)($Exports$add($Arelin$Thing$jinx$ulti_proj)($Exports$add($Arelin$Thing$jinx$ulti_explosion)($Exports$add($Arelin$Thing$kakashi_fun)($Exports$add($Arelin$Thing$kakashi$fire_ball_effect)($Exports$add($Arelin$Thing$poste_fun)($Exports$add($Arelin$Thing$puddledmg_fun)($Exports$add($Arelin$Thing$puddleheal_fun)($Exports$add($Arelin$Thing$punchingbag_fun)($Exports$add(null)($Exports$add(null)($Exports$add(null)($Exports$add(null)($Exports$add(null)($Exports$add($Arelin$Game$Hitbox$nbox)($Exports$add($Arelin$Game$Hitbox$cbox)($Exports$add($Arelin$Game$Hitbox$pbox)($Exports$add(null)($Exports$add($Arelin$Game$Effect$heal)($Exports$add($Arelin$Game$Effect$damage)($Exports$add($Arelin$Game$Effect$repulse)($Exports$add($Arelin$Game$Effect$impulse)($Exports$add($Arelin$Game$Effect$slow)($Exports$add($Arelin$Game$Effect$haste)($Exports$add($Arelin$Game$Effect$shield)($Exports$add($Arelin$Game$Effect$silence)($Exports$add($Arelin$Game$Effect$root)($Exports$add($Arelin$Game$Effect$stun)($Exports$add($Arelin$Game$Effect$teleport_to)($Exports$add(null)($Exports$add($Arelin$Game$Buff$shielded)($Exports$add($Arelin$Game$Buff$slowed)($Exports$add($Arelin$Game$Buff$hasted)($Exports$add($Arelin$Game$Buff$silenced)($Exports$add($Arelin$Game$Buff$rooted)($Exports$add($Arelin$Game$Buff$stunned)($Exports$add(null)($Exports$add($Arelin$Game$Hit$new)($Exports$add(null)($Exports$add($Arelin$Game$Light$new)($Exports$add(null)($Exports$add($Arelin$Thing$new)($Exports$add(null)($Exports$add(null)($Exports$add($Arelin$Game$new)($Exports$add(null)($Exports$add($Arelin$Game$Input$sdir)($Exports$add($Arelin$Game$Input$key0)($Exports$add($Arelin$Game$Input$key1)($Exports$add($Arelin$Game$Input$key2)($Exports$add($Arelin$Game$Input$key3)($Exports$add($Arelin$Game$Input$key4)($Exports$add($Arelin$Game$Input$key5)($Exports$add($Arelin$Game$Input$cmsg)($Exports$add(null)($Exports$add($Arelin$Game$Command$new)($Exports$add($Arelin$Thing$new_thing)($Exports$add($Arelin$Thing$get_fun)($Exports$add($Arelin$Thing$set_fun)($Exports$add($Arelin$Thing$get_pid)($Exports$add($Arelin$Thing$set_pid)($Exports$add($Arelin$Thing$get_mid)($Exports$add($Arelin$Thing$set_mid)($Exports$add($Arelin$Thing$get_act)($Exports$add($Arelin$Thing$set_act)($Exports$add($Arelin$Thing$get_sid)($Exports$add($Arelin$Thing$set_sid)($Exports$add($Arelin$Thing$get_stt)($Exports$add($Arelin$Thing$set_stt)($Exports$add($Arelin$Thing$get_nam)($Exports$add($Arelin$Thing$set_nam)($Exports$add($Arelin$Thing$get_lit)($Exports$add($Arelin$Thing$set_lit)($Exports$add($Arelin$Thing$get_tik)($Exports$add($Arelin$Thing$set_tik)($Exports$add($Arelin$Thing$get_pos)($Exports$add($Arelin$Thing$set_pos)($Exports$add($Arelin$Thing$get_mov)($Exports$add($Arelin$Thing$set_mov)($Exports$add($Arelin$Thing$get_bst)($Exports$add($Arelin$Thing$set_bst)($Exports$add($Arelin$Thing$get_pad)($Exports$add($Arelin$Thing$set_pad)($Exports$add($Arelin$Thing$get_dir)($Exports$add($Arelin$Thing$set_dir)($Exports$add($Arelin$Thing$get_trg)($Exports$add($Arelin$Thing$set_trg)($Exports$add($Arelin$Thing$get_vel)($Exports$add($Arelin$Thing$set_vel)($Exports$add($Arelin$Thing$get_box)($Exports$add($Arelin$Thing$set_box)($Exports$add($Arelin$Thing$get_wei)($Exports$add($Arelin$Thing$set_wei)($Exports$add($Arelin$Thing$get_mhp)($Exports$add($Arelin$Thing$set_mhp)($Exports$add($Arelin$Thing$get_dmg)($Exports$add($Arelin$Thing$set_dmg)($Exports$add($Arelin$Thing$get_knk)($Exports$add($Arelin$Thing$set_knk)($Exports$add($Arelin$Thing$get_buf)($Exports$add($Arelin$Thing$set_buf)($Exports$add($Arelin$Thing$get_chi)($Exports$add($Arelin$Thing$set_chi)($Exports$add($Arelin$Thing$get_hit)($Exports$add($Arelin$Thing$set_hit)($Exports$add($Arelin$Thing$get_rst)($Exports$add($Arelin$Thing$set_rst)($Exports$add($Arelin$Thing$get_die)($Exports$add($Arelin$Thing$set_die)($Exports$add($Arelin$Thing$get_by_pid)($Exports$add($Arelin$Game$get_position_by_pid)($Exports$add($Arelin$Game$map_stage)($Exports$add($Arelin$Game$with_thing)($Exports$add($Arelin$Thing$targ_dir)($Exports$add($Arelin$Thing$at_dist)($Exports$add($Arelin$Thing$at_max_dist)($Exports$add($Arelin$Thing$at_min_dist)($Exports$add($Arelin$Thing$between_dist)($Exports$add($Arelin$Thing$init_act)($Exports$add($Arelin$Thing$is_walking)($Exports$add($Arelin$Thing$create_at)($Exports$add($Arelin$Thing$reset)($Exports$add($Arelin$Thing$die)($Exports$add($Arelin$Thing$animate_between)($Exports$add($Arelin$Thing$animate)($Exports$add($Arelin$Thing$animate_die)($Exports$add($Arelin$Thing$animate_with_blink)($Exports$add($Arelin$Thing$dash)($Exports$add($Arelin$Thing$move)($Exports$add($Arelin$Thing$blink)($Exports$add($Arelin$Thing$cast)($Exports$add($Arelin$Thing$spawn)($Exports$add($Arelin$Thing$illumine)($Exports$add($Arelin$Game$combine_mov_buffs)($Exports$add($Arelin$Thing$speed_multiplier_of)($Exports$add($Arelin$Thing$is_silenced)($Exports$add($Arelin$Thing$is_stunned)($Exports$add($Arelin$Thing$is_rooted)($Exports$add($Arelin$Thing$has_shield)($Exports$add($Arelin$Game$use_shields)($Exports$add($Arelin$Thing$handle_shields)($Exports$add($Arelin$Thing$update_buff_dur)($Exports$add($Arelin$Thing$end_thing)($Exports$add($Arelin$Thing$get_stt_value)($Exports$add($Arelin$POS_X_KEY)($Exports$add($Arelin$POS_Y_KEY)($Exports$add($Arelin$Thing$get_stt_value_v3)($Exports$add($Arelin$Thing$set_stt_value_v3)($Exports$add($Arelin$Thing$is_using_buff)($Exports$add($Arelin$Thing$map_stt_key)($Exports$add($Arelin$Thing$update_buff)($Exports$add($Arelin$exec_command)($Exports$add($Arelin$collide_with)($Exports$add($Arelin$interact_with)($Exports$add($Arelin$fold_with_context)($Exports$add($Arelin$exec_turn)($Exports$new))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
  return {
    'Exports.add': $Exports$add,
    'Newtype': $Newtype,
    'Word': $Word,
    'Nat.succ': $Nat$succ,
    'Nat.zero': $Nat$zero,
    'Nat.0': $Nat$0,
    'Nat.1': $Nat$1,
    'Nat.2': $Nat$2,
    'Nat.3': $Nat$3,
    'Nat.4': $Nat$4,
    'Nat.5': $Nat$5,
    'Nat.6': $Nat$6,
    'Nat.7': $Nat$7,
    'Nat.8': $Nat$8,
    'Nat.9': $Nat$9,
    'Nat.10': $Nat$10,
    'Nat.11': $Nat$11,
    'Nat.12': $Nat$12,
    'Nat.13': $Nat$13,
    'Nat.14': $Nat$14,
    'Nat.15': $Nat$15,
    'Nat.16': $Nat$16,
    'Nat.17': $Nat$17,
    'Nat.18': $Nat$18,
    'Nat.19': $Nat$19,
    'Nat.20': $Nat$20,
    'Nat.21': $Nat$21,
    'Nat.22': $Nat$22,
    'Nat.23': $Nat$23,
    'Nat.24': $Nat$24,
    'Nat.25': $Nat$25,
    'Nat.26': $Nat$26,
    'Nat.27': $Nat$27,
    'Nat.28': $Nat$28,
    'Nat.29': $Nat$29,
    'Nat.30': $Nat$30,
    'Nat.31': $Nat$31,
    'Nat.32': $Nat$32,
    'Nat.33': $Nat$33,
    'Nat.34': $Nat$34,
    'Nat.35': $Nat$35,
    'Nat.36': $Nat$36,
    'Nat.37': $Nat$37,
    'Nat.38': $Nat$38,
    'Nat.39': $Nat$39,
    'Nat.40': $Nat$40,
    'Nat.41': $Nat$41,
    'Nat.42': $Nat$42,
    'Nat.43': $Nat$43,
    'Nat.44': $Nat$44,
    'Nat.45': $Nat$45,
    'Nat.46': $Nat$46,
    'Nat.47': $Nat$47,
    'Nat.48': $Nat$48,
    'Nat.49': $Nat$49,
    'Nat.50': $Nat$50,
    'Nat.51': $Nat$51,
    'Nat.52': $Nat$52,
    'Nat.53': $Nat$53,
    'Nat.54': $Nat$54,
    'Nat.55': $Nat$55,
    'Nat.56': $Nat$56,
    'Nat.57': $Nat$57,
    'Nat.58': $Nat$58,
    'Nat.59': $Nat$59,
    'Nat.60': $Nat$60,
    'Nat.61': $Nat$61,
    'Nat.62': $Nat$62,
    'Nat.63': $Nat$63,
    'Nat.64': $Nat$64,
    'String.cons': $String$cons,
    'Word.0': $Word$0,
    'Word.1': $Word$1,
    'Word.nil': $Word$nil,
    'U16.new': $U16$new,
    'Char.new': $Char$new,
    'Bit.0': $Bit$0,
    'Bit.1': $Bit$1,
    'String.nil': $String$nil,
    'F64.parse': $F64$parse,
    'Arelin.Constants.ONE_SEC': $Arelin$Constants$ONE_SEC,
    'Bits.nil': $Bits$nil,
    'Cmp.ltn': $Cmp$ltn,
    'Cmp.gtn': $Cmp$gtn,
    'Word.cmp.aux': $Word$cmp$aux,
    'Cmp.eql': $Cmp$eql,
    'Word.cmp': $Word$cmp,
    'Bool.false': $Bool$false,
    'Bool.true': $Bool$true,
    'Word.eql': $Word$eql,
    'U16.eql': $U16$eql,
    'Char.parse.type': $Char$parse$type,
    'Unit.new': $Unit$new,
    'Char.parse': $Char$parse,
    'Bits.1': $Bits$1,
    'Bits.0': $Bits$0,
    'Bits.from_string': $Bits$from_string,
    'Arelin.Constants.POS_X_KEY': $Arelin$Constants$POS_X_KEY,
    'Arelin.Constants.POS_Y_KEY': $Arelin$Constants$POS_Y_KEY,
    'Arelin.Constants.DARTH_VADER_USING_FORCE': $Arelin$Constants$DARTH_VADER_USING_FORCE,
    'Arelin.Constants.FORCE_AWAKENS_KEY': $Arelin$Constants$FORCE_AWAKENS_KEY,
    'Arelin.Constants.GON_AFTER_ULT': $Arelin$Constants$GON_AFTER_ULT,
    'Arelin.Constants.MANDO_WEAPON_KEY': $Arelin$Constants$MANDO_WEAPON_KEY,
    'Arelin.Constants.STEVE_BLOCK_TIMER': $Arelin$Constants$STEVE_BLOCK_TIMER,
    'Arelin.Constants.STEVE_TNT_TIMER': $Arelin$Constants$STEVE_TNT_TIMER,
    'Arelin.Constants.ULT_TIME': $Arelin$Constants$ULT_TIME,
    'F64.new': $F64$new,
    'Word.from_bits': $Word$from_bits,
    'F64.parse_binary': $F64$parse_binary,
    'F64.1': $F64$1,
    'Arelin.Constants.DMG_LV_1': $Arelin$Constants$DMG_LV_1,
    'Arelin.Constants.DMG_LV_2': $Arelin$Constants$DMG_LV_2,
    'Arelin.Constants.DMG_LV_3': $Arelin$Constants$DMG_LV_3,
    'Arelin.Constants.DMG_LV_4': $Arelin$Constants$DMG_LV_4,
    'Arelin.Constants.DMG_LV_5': $Arelin$Constants$DMG_LV_5,
    'Arelin.Constants.DMG_LV_6': $Arelin$Constants$DMG_LV_6,
    'Arelin.Thing.new': $Arelin$Thing$new,
    'Arelin.Thing.set_mov': $Arelin$Thing$set_mov,
    'Arelin.Thing.set_mhp': $Arelin$Thing$set_mhp,
    'Arelin.Thing.get_act': $Arelin$Thing$get_act,
    'Arelin.Thing.get_dir': $Arelin$Thing$get_dir,
    'Arelin.Thing.get_pos': $Arelin$Thing$get_pos,
    'Bool.eql': $Bool$eql,
    'Bool.if': $Bool$if,
    'F64.eql': $F64$eql,
    'F64.0': $F64$0,
    'Arelin.Thing.get_pad': $Arelin$Thing$get_pad,
    'F64.cmp': $F64$cmp,
    'F64.gtn': $F64$gtn,
    'F64.add': $F64$add,
    'F64.mul': $F64$mul,
    'F64.div': $F64$div,
    'F64.pow': $F64$pow,
    'F64.V3.len': $F64$V3$len,
    'Arelin.Thing.is_walking': $Arelin$Thing$is_walking,
    'Arelin.Thing.get_tik': $Arelin$Thing$get_tik,
    'F64.ltn': $F64$ltn,
    'Bool.or': $Bool$or,
    'Bool.and': $Bool$and,
    'F64.is_between': $F64$is_between,
    'Arelin.Thing.get_trg': $Arelin$Thing$get_trg,
    'F64.V3.eql': $F64$V3$eql,
    'F64.sub': $F64$sub,
    'F64.V3.new': $F64$V3$new,
    'F64.V3.sub': $F64$V3$sub,
    'F64.V3.norm': $F64$V3$norm,
    'F64.V3.look_at': $F64$V3$look_at,
    'Arelin.Thing.targ_dir': $Arelin$Thing$targ_dir,
    'F64.mod': $F64$mod,
    'F64.if': $F64$if,
    'F64.from_bool': $F64$from_bool,
    'F64.floor': $F64$floor,
    'Arelin.Thing.set_bst': $Arelin$Thing$set_bst,
    'Arelin.Thing.set_dir': $Arelin$Thing$set_dir,
    'Arelin.Thing.set_mid': $Arelin$Thing$set_mid,
    'Arelin.Thing.animate_between': $Arelin$Thing$animate_between,
    'Arelin.Thing.set_rst': $Arelin$Thing$set_rst,
    'Arelin.Thing.reset': $Arelin$Thing$reset,
    'Arelin.Thing.animate': $Arelin$Thing$animate,
    'BLESKAPE_WALK_000': $BLESKAPE_WALK_000,
    'BLESKAPE_IDLE_000': $BLESKAPE_IDLE_000,
    'BLESKAPE_SHOCK_BALL_000': $BLESKAPE_SHOCK_BALL_000,
    'List.cons': $List$cons,
    'Arelin.Game.Effect.damage': $Arelin$Game$Effect$damage,
    'Arelin.Game.Effect.impulse': $Arelin$Game$Effect$impulse,
    'List.nil': $List$nil,
    'Arelin.Game.Hit.new': $Arelin$Game$Hit$new,
    'F64.V3.add': $F64$V3$add,
    'F64.V3.scale': $F64$V3$scale,
    'Arelin.Thing.at_dist': $Arelin$Thing$at_dist,
    'Arelin.Game.Hitbox.cbox': $Arelin$Game$Hitbox$cbox,
    'Arelin.Thing.set_hit': $Arelin$Thing$set_hit,
    'Arelin.Thing.cast': $Arelin$Thing$cast,
    'BLESKAPE_DEFENSE_MODE_000': $BLESKAPE_DEFENSE_MODE_000,
    'BLESKAPE_DEFENSE_MODE_002': $BLESKAPE_DEFENSE_MODE_002,
    'BLESKAPE_SHOCK_GROUND_WAVE_000': $BLESKAPE_SHOCK_GROUND_WAVE_000,
    'BLESKAPE_SUPREME_PUNCH_SEQUENCE_000': $BLESKAPE_SUPREME_PUNCH_SEQUENCE_000,
    'BLESKAPE_DASH_000': $BLESKAPE_DASH_000,
    'List': $List,
    'Arelin.Thing.get_buf': $Arelin$Thing$get_buf,
    'Maybe': $Maybe,
    'Maybe.none': $Maybe$none,
    'Maybe.some': $Maybe$some,
    'List.find': $List$find,
    'Arelin.Thing.is_rooted': $Arelin$Thing$is_rooted,
    'Arelin.Thing.set_vel': $Arelin$Thing$set_vel,
    'Arelin.Thing.dash': $Arelin$Thing$dash,
    'Arelin.Game.Effect.repulse': $Arelin$Game$Effect$repulse,
    'BLESKAPE_TAUNT_000': $BLESKAPE_TAUNT_000,
    'Arelin.Thing.bleskape_fun': $Arelin$Thing$bleskape_fun,
    'Map': $Map,
    'Arelin.Thing.get_stt': $Arelin$Thing$get_stt,
    'Map.get': $Map$get,
    'Map.tie': $Map$tie,
    'Map.new': $Map$new,
    'Map.set': $Map$set,
    'Arelin.Thing.set_stt': $Arelin$Thing$set_stt,
    'Arelin.Thing.update_buff': $Arelin$Thing$update_buff,
    'Arelin.Thing.is_using_buff': $Arelin$Thing$is_using_buff,
    'DARTH_VADER_WALK_CYCLE_000': $DARTH_VADER_WALK_CYCLE_000,
    'DARTH_VADER_IDLE_000': $DARTH_VADER_IDLE_000,
    'Arelin.Thing.get_stt_value': $Arelin$Thing$get_stt_value,
    'Arelin.Thing.map_stt_key': $Arelin$Thing$map_stt_key,
    'DARTH_VADER_THE_FORCE_AWAKENS_VAR_1_000': $DARTH_VADER_THE_FORCE_AWAKENS_VAR_1_000,
    'DARTH_VADER_THE_FORCE_AWAKENS_VAR_2_000': $DARTH_VADER_THE_FORCE_AWAKENS_VAR_2_000,
    'DARTH_VADER_THE_FORCE_AWAKENS_VAR_3_000': $DARTH_VADER_THE_FORCE_AWAKENS_VAR_3_000,
    'F64.2': $F64$2,
    'DARTH_VADER_THE_RISE_OF_SKYWALKER_CAST_ANIMATION_000': $DARTH_VADER_THE_RISE_OF_SKYWALKER_CAST_ANIMATION_000,
    'DARTH_VADER_THE_RISE_OF_SKYWALKER_CAST_ANIMATION_002': $DARTH_VADER_THE_RISE_OF_SKYWALKER_CAST_ANIMATION_002,
    'F64._1': $F64$_1,
    'Arelin.Game.Hitbox.nbox': $Arelin$Game$Hitbox$nbox,
    'Arelin.Thing.new_thing': $Arelin$Thing$new_thing,
    'Arelin.Thing.set_fun': $Arelin$Thing$set_fun,
    'Arelin.Thing.set_die': $Arelin$Thing$set_die,
    'Arelin.Thing.die': $Arelin$Thing$die,
    'Arelin.Thing.animate_die': $Arelin$Thing$animate_die,
    'DARTH_VADER_THE_RISE_OF_SKYWALKER_EFFECT_ANIMATION_000': $DARTH_VADER_THE_RISE_OF_SKYWALKER_EFFECT_ANIMATION_000,
    'Arelin.Thing.darth_vader.rise_skywalker_fun': $Arelin$Thing$darth_vader$rise_skywalker_fun,
    'Arelin.Thing.get_sid': $Arelin$Thing$get_sid,
    'Arelin.Thing.set_sid': $Arelin$Thing$set_sid,
    'Arelin.Thing.set_chi': $Arelin$Thing$set_chi,
    'Arelin.Thing.spawn': $Arelin$Thing$spawn,
    'Arelin.Thing.set_pos': $Arelin$Thing$set_pos,
    'Arelin.Thing.move': $Arelin$Thing$move,
    'F64.sqrt': $F64$sqrt,
    'F64.V3.sqr_dist': $F64$V3$sqr_dist,
    'F64.V3.dist': $F64$V3$dist,
    'Arelin.Thing.at_max_dist': $Arelin$Thing$at_max_dist,
    'DARTH_VADER_THE_PHANTOM_MENACE_CAST_ANIMATION_000': $DARTH_VADER_THE_PHANTOM_MENACE_CAST_ANIMATION_000,
    'DARTH_VADER_THE_PHANTOM_MENACE_CAST_ANIMATION_004': $DARTH_VADER_THE_PHANTOM_MENACE_CAST_ANIMATION_004,
    'DARTH_VADER_THE_PHANTOM_MENACE_SABER_TWISTING_000': $DARTH_VADER_THE_PHANTOM_MENACE_SABER_TWISTING_000,
    'Arelin.Thing.darth_vader.phanton_menace_twisting_fun': $Arelin$Thing$darth_vader$phanton_menace_twisting_fun,
    'Arelin.Thing.set_box': $Arelin$Thing$set_box,
    'Arelin.Thing.animate_with_blink': $Arelin$Thing$animate_with_blink,
    'DARTH_VADER_ROGUE_ONE_000': $DARTH_VADER_ROGUE_ONE_000,
    'Arelin.Thing.blink': $Arelin$Thing$blink,
    'Arelin.Thing.darth_vader_fun': $Arelin$Thing$darth_vader_fun,
    'DILMA_WALK_000': $DILMA_WALK_000,
    'DILMA_IDLE_000': $DILMA_IDLE_000,
    'DILMA_PROTECTION_000': $DILMA_PROTECTION_000,
    'DILMA_PROTECTION_007': $DILMA_PROTECTION_007,
    'DILMA_CONFUSION_CASTING_000': $DILMA_CONFUSION_CASTING_000,
    'DILMA_CONFUSION_CASTING_016': $DILMA_CONFUSION_CASTING_016,
    'DILMA_CONFUSION_ANIM_000': $DILMA_CONFUSION_ANIM_000,
    'Arelin.Thing.dilma.confusion_fun': $Arelin$Thing$dilma$confusion_fun,
    'DILMA_SALUTING_THE_CASSAVA_000': $DILMA_SALUTING_THE_CASSAVA_000,
    'DILMA_STOCKING_WIND_CASTING_000': $DILMA_STOCKING_WIND_CASTING_000,
    'DILMA_STOCKING_WIND_ANIM_000': $DILMA_STOCKING_WIND_ANIM_000,
    'Arelin.Thing.dilma.stocking_wind_fun': $Arelin$Thing$dilma$stocking_wind_fun,
    'DILMA_TAUNT_000': $DILMA_TAUNT_000,
    'Arelin.Thing.dilma_fun': $Arelin$Thing$dilma_fun,
    'DORIME_WALK_CYCLE_000': $DORIME_WALK_CYCLE_000,
    'DORIME_IDLE_000': $DORIME_IDLE_000,
    'DORIME_BLESSING_FOR_WHO_DESERVE_000': $DORIME_BLESSING_FOR_WHO_DESERVE_000,
    'DORIME_BLESSING_FOR_WHO_DESERVE_PROJECTILE_000': $DORIME_BLESSING_FOR_WHO_DESERVE_PROJECTILE_000,
    'Arelin.Thing.dorime.blessing_fun': $Arelin$Thing$dorime$blessing_fun,
    'DORIME_LEPTOSPIROSE_CURSE_CAST_ANIMATION_000': $DORIME_LEPTOSPIROSE_CURSE_CAST_ANIMATION_000,
    'DORIME_LEPTOSPIROSE_CURSE_POT_000': $DORIME_LEPTOSPIROSE_CURSE_POT_000,
    'DORIME_LEPTOSPIROSE_CURSE_PUDDLE_000': $DORIME_LEPTOSPIROSE_CURSE_PUDDLE_000,
    'DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000': $DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000,
    'Arelin.Thing.dorime.leptospirose_puddle_fun': $Arelin$Thing$dorime$leptospirose_puddle_fun,
    'Arelin.Thing.dorime.leptospirose_puddle_pot_fun': $Arelin$Thing$dorime$leptospirose_puddle_pot_fun,
    'DORIME_HOLY_FLAME_CAST_ANIMATION_000': $DORIME_HOLY_FLAME_CAST_ANIMATION_000,
    'DORIME_HOLY_FLAME_PILLAR_000': $DORIME_HOLY_FLAME_PILLAR_000,
    'Arelin.Thing.dorime.holy_flame_fun': $Arelin$Thing$dorime$holy_flame_fun,
    'DORIME_JESUS_POWER_000': $DORIME_JESUS_POWER_000,
    'Arelin.Game.Effect.heal': $Arelin$Game$Effect$heal,
    'Arelin.Thing.dorime.jesus_power': $Arelin$Thing$dorime$jesus_power,
    'DORIME_GODS_CHAMBER_CAST_ANIMATION_000': $DORIME_GODS_CHAMBER_CAST_ANIMATION_000,
    'DORIME_GODS_CHAMBER_HEAL_CIRCLE_000': $DORIME_GODS_CHAMBER_HEAL_CIRCLE_000,
    'DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_000': $DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_000,
    'Arelin.Thing.dorime.gods_chamber_fun': $Arelin$Thing$dorime$gods_chamber_fun,
    'DORIME_TAUNT_000': $DORIME_TAUNT_000,
    'DORIME_TAUNT_002': $DORIME_TAUNT_002,
    'Arelin.Thing.dorime_fun': $Arelin$Thing$dorime_fun,
    'DR_STRANGE_WALK_000': $DR_STRANGE_WALK_000,
    'DR_STRANGE_IDLE_000': $DR_STRANGE_IDLE_000,
    'DR_STRANGE_MYSTIC_BEAM_CAST_000': $DR_STRANGE_MYSTIC_BEAM_CAST_000,
    'DR_STRANGE_MYSTIC_BEAM_EFFECT_000': $DR_STRANGE_MYSTIC_BEAM_EFFECT_000,
    'Arelin.Thing.drstrange.mystic_beam_fun': $Arelin$Thing$drstrange$mystic_beam_fun,
    'DR_STRANGE_TIME_STONE_POWER_CAST_000': $DR_STRANGE_TIME_STONE_POWER_CAST_000,
    'DR_STRANGE_TIME_STONE_POWER_EFFECT_000': $DR_STRANGE_TIME_STONE_POWER_EFFECT_000,
    'Arelin.Thing.drstrange.time_stone_power_fun': $Arelin$Thing$drstrange$time_stone_power_fun,
    'DR_STRANGE_PORTAL_CAST_000': $DR_STRANGE_PORTAL_CAST_000,
    'DR_STRANGE_PORTAL_EFFECT_000': $DR_STRANGE_PORTAL_EFFECT_000,
    'Arelin.Thing.drstrange.portal_fun': $Arelin$Thing$drstrange$portal_fun,
    'DR_STRANGE_CHRONOSTASIS_CAST_000': $DR_STRANGE_CHRONOSTASIS_CAST_000,
    'DR_STRANGE_CHRONOSTASIS_EFFECT_000': $DR_STRANGE_CHRONOSTASIS_EFFECT_000,
    'Arelin.POS_X_KEY': $Arelin$POS_X_KEY,
    'Arelin.POS_Y_KEY': $Arelin$POS_Y_KEY,
    'Arelin.Thing.get_stt_value_v3': $Arelin$Thing$get_stt_value_v3,
    'Arelin.Game.Effect.teleport_to': $Arelin$Game$Effect$teleport_to,
    'Arelin.Thing.drstrange.chronostasis_p0_fun': $Arelin$Thing$drstrange$chronostasis_p0_fun,
    'Arelin.Thing.drstrange.chronostasis_p1_fun': $Arelin$Thing$drstrange$chronostasis_p1_fun,
    'Arelin.Thing.drstrange_fun': $Arelin$Thing$drstrange_fun,
    'FINN_WALK_CYCLE_000': $FINN_WALK_CYCLE_000,
    'FINN_IDLE_000': $FINN_IDLE_000,
    'FINN_TRIPLE_TAKE_000': $FINN_TRIPLE_TAKE_000,
    'FINN_BMO_S_FLASH_000': $FINN_BMO_S_FLASH_000,
    'FINN_BOW_CAST_ANIMATION_000': $FINN_BOW_CAST_ANIMATION_000,
    'FINN_BOW_PROJECTILE_000': $FINN_BOW_PROJECTILE_000,
    'Arelin.Thing.finn.arrow_fun': $Arelin$Thing$finn$arrow_fun,
    'FINN_TAUNT_000': $FINN_TAUNT_000,
    'FINN_JAKE_S_FURY_000': $FINN_JAKE_S_FURY_000,
    'Arelin.Thing.finn.jakes_fury_fun': $Arelin$Thing$finn$jakes_fury_fun,
    'FINN_EVADE_000': $FINN_EVADE_000,
    'Arelin.Thing.finn_fun': $Arelin$Thing$finn_fun,
    'GASTLY_WALK_000': $GASTLY_WALK_000,
    'GASTLY_IDLE_000': $GASTLY_IDLE_000,
    'GASTLY_ATTACK_LICK_000': $GASTLY_ATTACK_LICK_000,
    'GASTLY_ATTACK_MEAN_LOOK_000': $GASTLY_ATTACK_MEAN_LOOK_000,
    'GASTLY_ATTACK_DREAM_EATER_000': $GASTLY_ATTACK_DREAM_EATER_000,
    'GASTLY_ULTIMATE_INVISIBILITY_000': $GASTLY_ULTIMATE_INVISIBILITY_000,
    'GASTLY_EVOLUTION_000': $GASTLY_EVOLUTION_000,
    'Arelin.Thing.get_pid': $Arelin$Thing$get_pid,
    'Arelin.Thing.set_pid': $Arelin$Thing$set_pid,
    'Arelin.Thing.create_at': $Arelin$Thing$create_at,
    'HAUNTER_WALK_000': $HAUNTER_WALK_000,
    'HAUNTER_IDLE_000': $HAUNTER_IDLE_000,
    'HAUNTER_ATTACK_LICK_000': $HAUNTER_ATTACK_LICK_000,
    'HAUNTER_ATTACK_MEAN_LOOK_000': $HAUNTER_ATTACK_MEAN_LOOK_000,
    'HAUNTER_ATTACK_DREAM_EATER_000': $HAUNTER_ATTACK_DREAM_EATER_000,
    'HAUNTER_ULTIMATE_INVISIBILITY_000': $HAUNTER_ULTIMATE_INVISIBILITY_000,
    'HAUNTER_EVOLUTION_000': $HAUNTER_EVOLUTION_000,
    'GENGAR_WALK_000': $GENGAR_WALK_000,
    'GENGAR_IDLE_000': $GENGAR_IDLE_000,
    'GENGAR_ATTACK_LICK_000': $GENGAR_ATTACK_LICK_000,
    'GENGAR_ATTACK_HYPNOSIS_000': $GENGAR_ATTACK_HYPNOSIS_000,
    'GENGAR_ATTACK_DREAM_EATER_000': $GENGAR_ATTACK_DREAM_EATER_000,
    'GENGAR_ULTIMATE_INVISIBILITY_000': $GENGAR_ULTIMATE_INVISIBILITY_000,
    'GENGAR_TAUNT_000': $GENGAR_TAUNT_000,
    'Arelin.Thing.gengar_fun': $Arelin$Thing$gengar_fun,
    'HAUNTER_TAUNT_000': $HAUNTER_TAUNT_000,
    'Arelin.Thing.haunter_fun': $Arelin$Thing$haunter_fun,
    'GASTLY_TAUNT_000': $GASTLY_TAUNT_000,
    'Arelin.Thing.gastly_fun': $Arelin$Thing$gastly_fun,
    'GON_FREECS_WALK_000': $GON_FREECS_WALK_000,
    'GON_FREECS_IDLE_000': $GON_FREECS_IDLE_000,
    'GON_FREECS_JAJANKEN_STONE_000': $GON_FREECS_JAJANKEN_STONE_000,
    'GON_FREECS_JAJANKEN_PAPER_CASTING_000': $GON_FREECS_JAJANKEN_PAPER_CASTING_000,
    'GON_FREECS_JAJANKEN_PAPER_PROJECTILE_000': $GON_FREECS_JAJANKEN_PAPER_PROJECTILE_000,
    'Arelin.Thing.gon.paper_fun': $Arelin$Thing$gon$paper_fun,
    'GON_FREECS_JAJANKEN_SCISSORS_000': $GON_FREECS_JAJANKEN_SCISSORS_000,
    'GON_FREECS_JAJANKEN_SCISSORS_012': $GON_FREECS_JAJANKEN_SCISSORS_012,
    'GON_FREECS_ULTIMATE_TRANSFORMATION_000': $GON_FREECS_ULTIMATE_TRANSFORMATION_000,
    'Arelin.Thing.end_thing': $Arelin$Thing$end_thing,
    'GON_FREECS_AFTER_ULTIMATE_WALK_000': $GON_FREECS_AFTER_ULTIMATE_WALK_000,
    'GON_FREECS_AFTER_ULTIMATE_IDLE_000': $GON_FREECS_AFTER_ULTIMATE_IDLE_000,
    'Arelin.Thing.gon.tired_fun': $Arelin$Thing$gon$tired_fun,
    'GON_FREECS_TRANSFORMED_WALK_000': $GON_FREECS_TRANSFORMED_WALK_000,
    'GON_FREECS_TRANFORMED_IDLE_000': $GON_FREECS_TRANFORMED_IDLE_000,
    'GON_FREECS_TRANSFORMED_JAJANKEN_STONE_000': $GON_FREECS_TRANSFORMED_JAJANKEN_STONE_000,
    'GON_FREECS_TRANSFORMED_JAJANKEN_PAPER_000': $GON_FREECS_TRANSFORMED_JAJANKEN_PAPER_000,
    'GON_FREECS_TRANSFORMED_JAJANKEN_PAPER_PROJETIL_000': $GON_FREECS_TRANSFORMED_JAJANKEN_PAPER_PROJETIL_000,
    'Arelin.Thing.gon.t_paper_fun': $Arelin$Thing$gon$t_paper_fun,
    'GON_FREECS_TRANFORMED_JAJANKEN_SCISSOR_000': $GON_FREECS_TRANFORMED_JAJANKEN_SCISSOR_000,
    'GON_FREECS_TRANFORMED_JAJANKEN_SCISSOR_012': $GON_FREECS_TRANFORMED_JAJANKEN_SCISSOR_012,
    'Arelin.Thing.gon.transformed_fun': $Arelin$Thing$gon$transformed_fun,
    'GON_FREECS_INTENSIFICATION_000': $GON_FREECS_INTENSIFICATION_000,
    'GON_FREECS_TAUNT_000': $GON_FREECS_TAUNT_000,
    'GON_FREECS_TAUNT_TEXT_000': $GON_FREECS_TAUNT_TEXT_000,
    'Arelin.Thing.gon.taunt_text_fun': $Arelin$Thing$gon$taunt_text_fun,
    'Arelin.Thing.gon_fun': $Arelin$Thing$gon_fun,
    'Arelin.Thing.grimer.base_earth_ball_dmg': $Arelin$Thing$grimer$base_earth_ball_dmg,
    'Arelin.Thing.grimer.base_mud_tsunami_dmg': $Arelin$Thing$grimer$base_mud_tsunami_dmg,
    'GRIMER_WALK_000': $GRIMER_WALK_000,
    'GRIMER_IDLE_000': $GRIMER_IDLE_000,
    'GRIMER_EARTH_BALL_CAST_000': $GRIMER_EARTH_BALL_CAST_000,
    'GRIMER_EARTH_BALL_EFFECT_000': $GRIMER_EARTH_BALL_EFFECT_000,
    'Arelin.Thing.grimer.earth_ball_fun': $Arelin$Thing$grimer$earth_ball_fun,
    'Arelin.Game.Buff.shielded': $Arelin$Game$Buff$shielded,
    'Arelin.Thing.set_buf': $Arelin$Thing$set_buf,
    'GRIMER_INVINCIBLE_MUD_000': $GRIMER_INVINCIBLE_MUD_000,
    'GRIMER_INVINCIBLE_MUD_006': $GRIMER_INVINCIBLE_MUD_006,
    'GRIMER_INVINCIBLE_MUD_012': $GRIMER_INVINCIBLE_MUD_012,
    'GRIMER_MUD_SHIELD_000': $GRIMER_MUD_SHIELD_000,
    'Arelin.Game.Hitbox.pbox': $Arelin$Game$Hitbox$pbox,
    'GRIMER_MUD_TSUNAMI_000': $GRIMER_MUD_TSUNAMI_000,
    'Arelin.Thing.grimer.mud_tsunami_fun': $Arelin$Thing$grimer$mud_tsunami_fun,
    'GRIMER_TRANSFORMATION_000': $GRIMER_TRANSFORMATION_000,
    'MUK_WALK_000': $MUK_WALK_000,
    'MUK_IDLE_000': $MUK_IDLE_000,
    'MUK_EARTH_BALL_CAST_000': $MUK_EARTH_BALL_CAST_000,
    'MUK_EARTH_BALL_EFFECT_000': $MUK_EARTH_BALL_EFFECT_000,
    'Arelin.Thing.muk.earth_ball_fun': $Arelin$Thing$muk$earth_ball_fun,
    'MUK_INVINCIBLE_MUD_000': $MUK_INVINCIBLE_MUD_000,
    'MUK_MUD_SHIELD_000': $MUK_MUD_SHIELD_000,
    'MUK_MUD_TSUNAMI_000': $MUK_MUD_TSUNAMI_000,
    'Arelin.Thing.muk.mud_tsunami_fun': $Arelin$Thing$muk$mud_tsunami_fun,
    'MUK_TAUNT_000': $MUK_TAUNT_000,
    'Arelin.Thing.muk_fun': $Arelin$Thing$muk_fun,
    'Arelin.Thing.set_nam': $Arelin$Thing$set_nam,
    'GRIMER_TAUNT_000': $GRIMER_TAUNT_000,
    'Arelin.Thing.grimer_fun': $Arelin$Thing$grimer_fun,
    'ERIC_JACQUIN_WALK_000': $ERIC_JACQUIN_WALK_000,
    'ERIC_JACQUIN_IDLE_000': $ERIC_JACQUIN_IDLE_000,
    'ERIC_JACQUIN_SHAME_OF_THE_PROFESSION_CASTING_000': $ERIC_JACQUIN_SHAME_OF_THE_PROFESSION_CASTING_000,
    'ERIC_JACQUIN_SHAME_OF_THE_PROFESSION_EFFECT_000': $ERIC_JACQUIN_SHAME_OF_THE_PROFESSION_EFFECT_000,
    'Arelin.Thing.jacquin.shame_of_the_profession_fun': $Arelin$Thing$jacquin$shame_of_the_profession_fun,
    'ERIC_JACQUIN_TURN_OFF_THE_NIGHT_FREEZER_CASTING_000': $ERIC_JACQUIN_TURN_OFF_THE_NIGHT_FREEZER_CASTING_000,
    'ERIC_JACQUIN_TURN_OFF_THE_NIGHT_FREEZER_EFFECT_000': $ERIC_JACQUIN_TURN_OFF_THE_NIGHT_FREEZER_EFFECT_000,
    'Arelin.Thing.jacquin.freezer_fun': $Arelin$Thing$jacquin$freezer_fun,
    'ERIC_JACQUIN_SHUT_YOUR_MOUTH_CASTING_000': $ERIC_JACQUIN_SHUT_YOUR_MOUTH_CASTING_000,
    'ERIC_JACQUIN_JACQUIN_WRATH_CASTING_ONE_000': $ERIC_JACQUIN_JACQUIN_WRATH_CASTING_ONE_000,
    'ERIC_JACQUIN_JACQUIN_WRATH_CASTING_TWO_000': $ERIC_JACQUIN_JACQUIN_WRATH_CASTING_TWO_000,
    'ERIC_JACQUIN_JACQUIN_WRATH_WALK_000': $ERIC_JACQUIN_JACQUIN_WRATH_WALK_000,
    'ERIC_JACQUIN_JACQUIN_WRATH_IDLE_000': $ERIC_JACQUIN_JACQUIN_WRATH_IDLE_000,
    'Arelin.Thing.jacquin.giant_jacquin_fun': $Arelin$Thing$jacquin$giant_jacquin_fun,
    'ERIC_JACQUIN_DASH_000': $ERIC_JACQUIN_DASH_000,
    'ERIC_JACQUIN_TAUNT_000': $ERIC_JACQUIN_TAUNT_000,
    'Arelin.Thing.jacquin_fun': $Arelin$Thing$jacquin_fun,
    'JINX_WALK_000': $JINX_WALK_000,
    'JINX_IDLE_000': $JINX_IDLE_000,
    'JINX_GATLING_CAST_ANIMATION_000': $JINX_GATLING_CAST_ANIMATION_000,
    'JINX_GATLING_PROJECTILE_000': $JINX_GATLING_PROJECTILE_000,
    'Arelin.Thing.jinx.gatling_fun': $Arelin$Thing$jinx$gatling_fun,
    'JINX_FLAMING_BITE_CAST_ANIMATION_000': $JINX_FLAMING_BITE_CAST_ANIMATION_000,
    'JINX_FLAMING_BITE_TRAP_HITTING_THE_FLOOR_000': $JINX_FLAMING_BITE_TRAP_HITTING_THE_FLOOR_000,
    'Arelin.Thing.jinx.flaming_bite': $Arelin$Thing$jinx$flaming_bite,
    'JINX_FLAMING_BITE_TRAP_IDLE_000': $JINX_FLAMING_BITE_TRAP_IDLE_000,
    'Arelin.Thing.jinx.flaming_bite_idle': $Arelin$Thing$jinx$flaming_bite_idle,
    'JINX_FLAMING_BITE_TRAP_END_000': $JINX_FLAMING_BITE_TRAP_END_000,
    'Arelin.Thing.jinx.flaming_bite_end': $Arelin$Thing$jinx$flaming_bite_end,
    'JINX_POW_CAST_ANIMATION_000': $JINX_POW_CAST_ANIMATION_000,
    'JINX_POW_PROJECTILE_000': $JINX_POW_PROJECTILE_000,
    'Arelin.Thing.jinx.pow_proj': $Arelin$Thing$jinx$pow_proj,
    'JINX_POW_EXPLOSION_000': $JINX_POW_EXPLOSION_000,
    'Arelin.Thing.jinx.pow_explosion': $Arelin$Thing$jinx$pow_explosion,
    'JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_CAST_ANIMATION_000': $JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_CAST_ANIMATION_000,
    'JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_PROJECTILE_000': $JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_PROJECTILE_000,
    'Arelin.Thing.jinx.ulti_proj': $Arelin$Thing$jinx$ulti_proj,
    'JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_COLISSION_000': $JINX_SUPER_ULTRA_MEGA_MISSILE_OF_DEATH_COLISSION_000,
    'Arelin.Thing.jinx.ulti_explosion': $Arelin$Thing$jinx$ulti_explosion,
    'JINX_ZAP_CAST_ANIMATION_000': $JINX_ZAP_CAST_ANIMATION_000,
    'JINX_ZAP_PROJECTILE_000': $JINX_ZAP_PROJECTILE_000,
    'Arelin.Thing.jinx.zap_proj': $Arelin$Thing$jinx$zap_proj,
    'JINX_ZAP_PATH_000': $JINX_ZAP_PATH_000,
    'Arelin.Thing.jinx.zap_path': $Arelin$Thing$jinx$zap_path,
    'JINX_TAUNT_000': $JINX_TAUNT_000,
    'Arelin.Thing.jinx_fun': $Arelin$Thing$jinx_fun,
    'KAKASHI_RUN_000': $KAKASHI_RUN_000,
    'KAKASHI_IDLE_000': $KAKASHI_IDLE_000,
    'KAKASHI_TELEPORT_000': $KAKASHI_TELEPORT_000,
    'KAKASHI_FIREBALL_CASTING_000': $KAKASHI_FIREBALL_CASTING_000,
    'KAKASHI_FIREBALL_EFFECT_000': $KAKASHI_FIREBALL_EFFECT_000,
    'Arelin.Thing.kakashi.fire_ball_effect': $Arelin$Thing$kakashi$fire_ball_effect,
    'KAKASHI_RAIKIRI_000': $KAKASHI_RAIKIRI_000,
    'KAKASHI_BLOCK_000': $KAKASHI_BLOCK_000,
    'KAKASHI_TAUNT_000': $KAKASHI_TAUNT_000,
    'Arelin.Thing.kakashi_fun': $Arelin$Thing$kakashi_fun,
    'POSTE_IDLE_000': $POSTE_IDLE_000,
    'Arelin.Game.Light.new': $Arelin$Game$Light$new,
    'Arelin.Thing.set_lit': $Arelin$Thing$set_lit,
    'Arelin.Thing.illumine': $Arelin$Thing$illumine,
    'Arelin.Thing.poste_fun': $Arelin$Thing$poste_fun,
    'Arelin.Game.Effect.slow': $Arelin$Game$Effect$slow,
    'Arelin.Thing.puddledmg_fun': $Arelin$Thing$puddledmg_fun,
    'DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_015': $DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_015,
    'Arelin.Thing.puddleheal_fun': $Arelin$Thing$puddleheal_fun,
    'Arelin.Thing.get_dmg': $Arelin$Thing$get_dmg,
    'Arelin.Thing.set_dmg': $Arelin$Thing$set_dmg,
    'F64.max': $F64$max,
    'F64.min': $F64$min,
    'F64.sin': $F64$sin,
    'PUNCHINGBAG_IDLE_000': $PUNCHINGBAG_IDLE_000,
    'Arelin.Thing.punchingbag_fun': $Arelin$Thing$punchingbag_fun,
    'Arelin.Game.Effect.haste': $Arelin$Game$Effect$haste,
    'Arelin.Game.Effect.shield': $Arelin$Game$Effect$shield,
    'Arelin.Game.Effect.silence': $Arelin$Game$Effect$silence,
    'Arelin.Game.Effect.root': $Arelin$Game$Effect$root,
    'Arelin.Game.Effect.stun': $Arelin$Game$Effect$stun,
    'Arelin.Game.Buff.slowed': $Arelin$Game$Buff$slowed,
    'Arelin.Game.Buff.hasted': $Arelin$Game$Buff$hasted,
    'Arelin.Game.Buff.silenced': $Arelin$Game$Buff$silenced,
    'Arelin.Game.Buff.rooted': $Arelin$Game$Buff$rooted,
    'Arelin.Game.Buff.stunned': $Arelin$Game$Buff$stunned,
    'Arelin.Game.new': $Arelin$Game$new,
    'Arelin.Game.Input.sdir': $Arelin$Game$Input$sdir,
    'Arelin.Game.Input.key0': $Arelin$Game$Input$key0,
    'Arelin.Game.Input.key1': $Arelin$Game$Input$key1,
    'Arelin.Game.Input.key2': $Arelin$Game$Input$key2,
    'Arelin.Game.Input.key3': $Arelin$Game$Input$key3,
    'Arelin.Game.Input.key4': $Arelin$Game$Input$key4,
    'Arelin.Game.Input.key5': $Arelin$Game$Input$key5,
    'Arelin.Game.Input.cmsg': $Arelin$Game$Input$cmsg,
    'Arelin.Game.Command.new': $Arelin$Game$Command$new,
    'Arelin.Thing.get_fun': $Arelin$Thing$get_fun,
    'Arelin.Thing.get_mid': $Arelin$Thing$get_mid,
    'Arelin.Thing.set_act': $Arelin$Thing$set_act,
    'Arelin.Thing.get_nam': $Arelin$Thing$get_nam,
    'Arelin.Thing.get_lit': $Arelin$Thing$get_lit,
    'Arelin.Thing.set_tik': $Arelin$Thing$set_tik,
    'Arelin.Thing.get_mov': $Arelin$Thing$get_mov,
    'Arelin.Thing.get_bst': $Arelin$Thing$get_bst,
    'Arelin.Thing.set_pad': $Arelin$Thing$set_pad,
    'Arelin.Thing.set_trg': $Arelin$Thing$set_trg,
    'Arelin.Thing.get_vel': $Arelin$Thing$get_vel,
    'Arelin.Thing.get_box': $Arelin$Thing$get_box,
    'Arelin.Thing.get_wei': $Arelin$Thing$get_wei,
    'Arelin.Thing.set_wei': $Arelin$Thing$set_wei,
    'Arelin.Thing.get_mhp': $Arelin$Thing$get_mhp,
    'Arelin.Thing.get_knk': $Arelin$Thing$get_knk,
    'Arelin.Thing.set_knk': $Arelin$Thing$set_knk,
    'Arelin.Thing.get_chi': $Arelin$Thing$get_chi,
    'Arelin.Thing.get_hit': $Arelin$Thing$get_hit,
    'Arelin.Thing.get_rst': $Arelin$Thing$get_rst,
    'Arelin.Thing.get_die': $Arelin$Thing$get_die,
    'Arelin.Thing.get_by_pid': $Arelin$Thing$get_by_pid,
    'Arelin.Game.get_position_by_pid': $Arelin$Game$get_position_by_pid,
    'List.map': $List$map,
    'Arelin.Game.map_stage': $Arelin$Game$map_stage,
    'Arelin.Game.with_thing': $Arelin$Game$with_thing,
    'Arelin.Thing.at_min_dist': $Arelin$Thing$at_min_dist,
    'Arelin.Thing.between_dist': $Arelin$Thing$between_dist,
    'Arelin.Thing.init_act': $Arelin$Thing$init_act,
    'Arelin.Game.combine_mov_buffs': $Arelin$Game$combine_mov_buffs,
    'List.fold': $List$fold,
    'Arelin.Thing.speed_multiplier_of': $Arelin$Thing$speed_multiplier_of,
    'Arelin.Thing.is_silenced': $Arelin$Thing$is_silenced,
    'Arelin.Thing.is_stunned': $Arelin$Thing$is_stunned,
    'Arelin.Thing.has_shield': $Arelin$Thing$has_shield,
    'Pair.fst': $Pair$fst,
    'Pair.snd': $Pair$snd,
    'Pair': $Pair,
    'F64.Ordering.EQ': $F64$Ordering$EQ,
    'F64.Ordering.GT': $F64$Ordering$GT,
    'F64.Ordering.LT': $F64$Ordering$LT,
    'F64.compare_numbers': $F64$compare_numbers,
    'Pair.new': $Pair$new,
    'Arelin.Game.use_shields': $Arelin$Game$use_shields,
    'Arelin.Thing.handle_shields': $Arelin$Thing$handle_shields,
    'Arelin.Thing.update_buff_dur': $Arelin$Thing$update_buff_dur,
    'Arelin.Thing.set_stt_value_v3': $Arelin$Thing$set_stt_value_v3,
    'Arelin.exec_command': $Arelin$exec_command,
    'F64.V3.point_segment_sqrdist': $F64$V3$point_segment_sqrdist,
    'F64.V3.point_segment_dist': $F64$V3$point_segment_dist,
    'F64.V3.rot_90': $F64$V3$rot_90,
    'F64.atan': $F64$atan,
    'F64.cos': $F64$cos,
    'F64.V3.polygon_to_segments.transform': $F64$V3$polygon_to_segments$transform,
    'F64.Segment.new': $F64$Segment$new,
    'F64.V3.polygon_to_segments.nil': $F64$V3$polygon_to_segments$nil,
    'F64.V3.polygon_to_segments.cons': $F64$V3$polygon_to_segments$cons,
    'F64.V3.polygon_to_segments': $F64$V3$polygon_to_segments,
    'Arelin.collide_with': $Arelin$collide_with,
    'Arelin.interact_with': $Arelin$interact_with,
    'Arelin.fold_with_context': $Arelin$fold_with_context,
    'F64.V3.get_z': $F64$V3$get_z,
    'F64.V3.get_y': $F64$V3$get_y,
    'List.concat': $List$concat,
    'Arelin.exec_turn': $Arelin$exec_turn,
    'Exports.new': $Exports$new,
    'Arelin.Exports': $Arelin$Exports,
  };
})();
console.log(module.exports['Arelin.Exports']);
