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
  var $List$nil = ($nil=>($cons=>$nil));
  var $List$cons = ($head=>($tail=>($nil=>($cons=>$cons($head)($tail)))));
  var $List$fold = ($nil=>($cons=>($list=>$list($nil)(($x=>($xs=>$cons($x)($List$fold($nil)($cons)($xs))))))));
  var $List = ($A=>null);
  var $F64$atan = a=>Math.atan(a);
  var $F64$mul = a=>b=>a*b;
  var $F64$cos = a=>Math.cos(a);
  var $F64$sin = a=>Math.sin(a);
  var $F64$sub = a=>b=>a-b;
  var $F64$add = a=>b=>a+b;
  var $F64$V3$new = ($x=>($y=>($z=>($new=>$new($x)($y)($z)))));
  var $F64$V3$add = ($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($c$x=>($c$y=>($c$z=>$F64$V3$new($c$x)($c$y)($c$z))($F64$add($a$z)($b$z)))($F64$add($a$y)($b$y)))($F64$add($a$x)($a$x))))))))))));
  var $F64$V3$polygon_to_segments$transform = ($pos=>($dir=>($pnt=>$pnt(($pnt$x=>($pnt$y=>($pnt$z=>$dir(($dir$x=>($dir$y=>($dir$z=>($a=>($pnt_x_times_cos_a=>($pnt_y_times_sin_a=>($pnt_x_times_sin_a=>($pnt_y_times_cos_a=>($x=>($y=>$F64$V3$add($pos)($F64$V3$new($x)($y)($pnt$z)))($F64$add($pnt_x_times_sin_a)($pnt_y_times_cos_a)))($F64$sub($pnt_x_times_cos_a)($pnt_y_times_sin_a)))($F64$mul($pnt$y)($F64$cos($a))))($F64$mul($pnt$x)($F64$sin($a))))($F64$mul($pnt$y)($F64$sin($a))))($F64$mul($pnt$x)($F64$cos($a))))($F64$atan($dir$y)($dir$x)))))))))))));
  var $F64$Segment$new = ($a=>($b=>($new=>$new($a)($b))));
  var $F64$V3$polygon_to_segments$nil = ($pos=>($dir=>($pt_a=>($pt_0=>$pt_0($List$nil)(($pt_0$value=>$pt_a($List$nil)(($pt_a$value=>($p0=>($p1=>($sg=>$List$cons($sg)($List$nil))($F64$Segment$new($p0)($p1)))($F64$V3$polygon_to_segments$transform($pos)($dir)($pt_0$value)))($F64$V3$polygon_to_segments$transform($pos)($dir)($pt_a$value))))))))));
  var $Maybe$some = ($value=>($=>($some=>$some($value))));
  var $Maybe = ($A=>null);
  var $F64$V3$polygon_to_segments$cons = ($pos=>($dir=>($pt_b=>($segs=>($pt_a=>($pt_0=>$pt_a($segs($Maybe$some($pt_b))($Maybe$some($pt_b)))(($pt_a$value=>($pt_0=>($p0=>($p1=>($sg=>$List$cons($sg)($segs($Maybe$some($pt_b))($pt_0)))($F64$Segment$new($p0)($p1)))($F64$V3$polygon_to_segments$transform($pos)($dir)($pt_b)))($F64$V3$polygon_to_segments$transform($pos)($dir)($pt_a$value)))($pt_0($Maybe$some($pt_b))(($pt_0$value=>$pt_0)))))))))));
  var $Maybe$none = ($none=>($=>$none));
  var $F64$V3$polygon_to_segments = ($pos=>($dir=>($pts=>$List$fold($F64$V3$polygon_to_segments$nil($pos)($dir))($F64$V3$polygon_to_segments$cons($pos)($dir))($pts)($Maybe$none)($Maybe$none))));
  var $Cmp$ltn = ($ltn=>($eql=>($gtn=>$ltn)));
  var $Cmp$gtn = ($ltn=>($eql=>($gtn=>$gtn)));
  var $Word$cmp$aux = ($a=>($b=>($c=>$a(($b=>$c))(($a$pred=>($b=>$b(($a$pred=>$c))(($b$pred=>($a$pred=>$Word$cmp$aux($a$pred)($b$pred)($c))))(($b$pred=>($a$pred=>$Word$cmp$aux($a$pred)($b$pred)($Cmp$ltn))))($a$pred))))(($a$pred=>($b=>$b(($a$pred=>$c))(($b$pred=>($a$pred=>$Word$cmp$aux($a$pred)($b$pred)($Cmp$gtn))))(($b$pred=>($a$pred=>$Word$cmp$aux($a$pred)($b$pred)($c))))($a$pred))))($b))));
  var $Cmp$eql = ($ltn=>($eql=>($gtn=>$eql)));
  var $Word$cmp = ($a=>($b=>$Word$cmp$aux($a)($b)($Cmp$eql)));
  var $Bool$false = inst_bool(($t=>($f=>$f)));
  var $Bool$true = inst_bool(($t=>($f=>$t)));
  var $Word$eql = ($a=>($b=>$Word$cmp($a)($b)($Bool$false)($Bool$true)($Bool$false)));
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
  var $F64$eql = ($x=>($y=>elim_f64($x)(($x$word=>elim_f64($y)(($y$word=>$Word$eql($x$word)($y$word)))))));
  var $Bool$and = a=>b=>a&&b;
  var $F64$V3$eql = ($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($same_x=>($same_y=>($same_z=>$Bool$and($same_x)($Bool$and($same_y)($same_z)))($F64$eql($a$z)($b$z)))($F64$eql($a$y)($b$y)))($F64$eql($a$x)($b$x))))))))))));
  var $F64$V3$sub = ($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($c$x=>($c$y=>($c$z=>$F64$V3$new($c$x)($c$y)($c$z))($F64$sub($a$z)($b$z)))($F64$sub($a$y)($b$y)))($F64$sub($a$x)($a$x))))))))))));
  var $Newtype = ($A=>($tag=>null));
  var $Word = ($size=>null);
  var $String$cons = ($head=>($tail=>inst_string(($strnil=>($strcons=>$strcons($head)($tail))))));
  var $Word$0 = ($wo=>($we=>($w0=>($w1=>$w0($wo)))));
  var $Word$1 = ($wo=>($we=>($w0=>($w1=>$w1($wo)))));
  var $Word$nil = ($we=>($w0=>($w1=>$we)));
  var $U16$new = ($a=>inst_u16(($u16=>$u16($a))));
  var $Char$new = ($b0=>($b1=>($b2=>($b3=>($b4=>($b5=>($b6=>($b7=>($b8=>($b9=>($bA=>($bB=>($bC=>($bD=>($bE=>($bF=>($kF=>($kE=>($kD=>($kC=>($kB=>($kA=>($k9=>($k8=>($k7=>($k6=>($k5=>($k4=>($k3=>($k2=>($k1=>($k0=>($k_=>$U16$new($k0($k1($k2($k3($k4($k5($k6($k7($k8($k9($kA($kB($kC($kD($kE($kF($k_))))))))))))))))))($Word$nil))(elim_bool($bF)($Word$0)($Word$1)))(elim_bool($bE)($Word$0)($Word$1)))(elim_bool($bD)($Word$0)($Word$1)))(elim_bool($bC)($Word$0)($Word$1)))(elim_bool($bB)($Word$0)($Word$1)))(elim_bool($bA)($Word$0)($Word$1)))(elim_bool($b9)($Word$0)($Word$1)))(elim_bool($b8)($Word$0)($Word$1)))(elim_bool($b7)($Word$0)($Word$1)))(elim_bool($b6)($Word$0)($Word$1)))(elim_bool($b5)($Word$0)($Word$1)))(elim_bool($b4)($Word$0)($Word$1)))(elim_bool($b3)($Word$0)($Word$1)))(elim_bool($b2)($Word$0)($Word$1)))(elim_bool($b1)($Word$0)($Word$1)))(elim_bool($b0)($Word$0)($Word$1))))))))))))))))));
  var $Bit$0 = inst_bool(($o=>($i=>$o)));
  var $Bit$1 = inst_bool(($o=>($i=>$i)));
  var $String$nil = inst_string(($strnil=>($strcons=>$strnil)));
  var $F64$new = ($a=>inst_f64(($f64=>$f64($a))));
  var $Bits$nil = inst_bits(($be=>($b0=>($b1=>$be))));
  var $Word$from_bits = ($size=>($bits=>elim_nat($size)($Word$nil)(($size$pred=>elim_bits($bits)($Word$0($Word$from_bits($size$pred)($Bits$nil)))(($bits$pred=>$Word$0($Word$from_bits($size$pred)($bits$pred))))(($bits$pred=>$Word$1($Word$from_bits($size$pred)($bits$pred))))))));
  var $U16$eql = a=>b=>a===b;
  var $Char$parse$type = ($str=>null);
  var $Unit$new = inst_unit(($unit=>$unit));
  var $Char$parse = ($str=>elim_string($str)($Unit$new)(($str$head=>($str$tail=>$str$head))));
  var $Bits$1 = ($bs=>inst_bits(($be=>($b0=>($b1=>$b1($bs))))));
  var $Bits$0 = ($bs=>inst_bits(($be=>($b0=>($b1=>$b0($bs))))));
  var $Bits$from_string = ($str=>elim_string($str)($Bits$nil)(($str$head=>($str$tail=>elim_bool($U16$eql($str$head)($Char$parse(`1`)))(($=>$Bits$1($Bits$from_string($str$tail))))(($=>$Bits$0($Bits$from_string($str$tail))))($Unit$new)))));
  var $F64$parse_binary = ($str=>$F64$new($Word$from_bits($Nat$64)($Bits$from_string($str))));
  var $F64$0 = $F64$parse_binary(`0000000000000000000000000000000000000000000000000000000000000000`);
  var $F64$div = a=>b=>a/b;
  var $F64$1 = $F64$parse_binary(`0000000000000000000000000000000000000000000000000000111111111100`);
  var $F64$pow = a=>b=>a**b;
  var $F64$V3$len = ($v=>$v(($v$x=>($v$y=>($v$z=>($sqr=>($sqr=>($sqr=>($sqr=>($expo=>($sqr=>$sqr)($F64$pow($sqr)($expo)))($F64$div($F64$1)($F64$add($F64$1)($F64$1))))($F64$add($sqr)($F64$mul($v$z)($v$z))))($F64$add($sqr)($F64$mul($v$y)($v$y))))($F64$add($sqr)($F64$mul($v$x)($v$x))))($F64$0))))));
  var $F64$V3$norm = ($v=>$v(($v$x=>($v$y=>($v$z=>($len=>($new_x=>($new_y=>($new_z=>$F64$V3$new($new_x)($new_y)($new_z))($F64$div($v$z)($len)))($F64$div($v$y)($len)))($F64$div($v$x)($len)))($F64$V3$len($v)))))));
  var $F64$V3$look_at = ($a=>($b=>($c=>$a(($a$x=>($a$y=>($a$z=>$b(($a$x=>($a$y=>($a$z=>$c(($a$x=>($a$y=>($a$z=>($a_eql_b=>($diff=>($normdiff=>elim_bool($a_eql_b)($normdiff)($c))($F64$V3$norm($diff)))($F64$V3$sub($b)($a)))($F64$V3$eql($a)($b)))))))))))))))));
  var $List$find = ($cond=>($xs=>$xs($Maybe$none)(($head=>($tail=>elim_bool($cond($head))($Maybe$some($head))($List$find($cond)($tail)))))));
  var $TA$Thing$get_pid = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$pid))))))))))))))))))))))))))));
  var $TA$Thing$get_by_pid$cond = ($pid=>($thi=>($thi$pid=>$F64$eql($pid)($thi$pid))($TA$Thing$get_pid($thi))));
  var $TA$Thing$get_by_pid = ($pid=>($gm=>$gm(($gm$stage=>$List$find($TA$Thing$get_by_pid$cond($pid))($gm$stage)))));
  var $TA$Thing$get_pos = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$pos))))))))))))))))))))))))))));
  var $TA$Game$get_position_by_pid = ($pid=>($gm=>$TA$Thing$get_by_pid($pid)($gm)($F64$V3$new($F64$0)($F64$0)($F64$0))(($found=>$TA$Thing$get_pos($found)))));
  var $List$map = ($fn=>($list=>$list($List$nil)(($list$head=>($list$tail=>$List$cons($fn($list$head))($List$map($fn)($list$tail)))))));
  var $TA$Game$Game$new = ($stage=>($new=>$new($stage)));
  var $TA$Game$map_stage = ($fn=>($gm=>$gm(($gm$stage=>($new_stage=>$TA$Game$Game$new($new_stage))($List$map($fn)($gm$stage))))));
  var $TA$Game$Command$new = ($pid=>($inp=>($new=>$new($pid)($inp))));
  var $TA$Game$Input$sdir = ($dir=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$sdir($dir))))))))));
  var $TA$Game$Input$key0 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key0($pos))))))))));
  var $TA$Game$Input$key1 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key1($pos))))))))));
  var $TA$Game$Input$key2 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key2($pos))))))))));
  var $TA$Game$Input$key3 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key3($pos))))))))));
  var $TA$Game$Input$key4 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key4($pos))))))))));
  var $TA$Game$Input$key5 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key5($pos))))))))));
  var $TA$Thing$get_buf = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$buf))))))))))))))))))))))))))));
  var $TA$Thing$is_silenced = ($self=>($self$buf=>($is_silenced=>($found_buf=>$found_buf($Bool$false)(($value=>$Bool$true)))($List$find($is_silenced)($self$buf)))(($buff=>$buff(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>$Bool$true))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$true)))))($TA$Thing$get_buf($self)));
  var $TA$Thing$is_stunned = ($self=>($self$buf=>($is_stunned=>($found_buf=>$found_buf($Bool$false)(($value=>$Bool$true)))($List$find($is_stunned)($self$buf)))(($buff=>$buff(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$true)))))($TA$Thing$get_buf($self)));
  var $TA$Thing$get_act = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$act))))))))))))))))))))))))))));
  var $TA$Thing$get_trg = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$trg))))))))))))))))))))))))))));
  var $TA$Thing$get_tik = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$tik))))))))))))))))))))))))))));
  var $TA$Thing$new = ($fun=>($pid=>($mid=>($act=>($sid=>($stt=>($nam=>($lit=>($tik=>($pos=>($mov=>($bst=>($pad=>($dir=>($trg=>($vel=>($box=>($wei=>($mhp=>($dmg=>($knk=>($buf=>($chi=>($hit=>($rst=>($die=>($new=>$new($fun)($pid)($mid)($act)($sid)($stt)($nam)($lit)($tik)($pos)($mov)($bst)($pad)($dir)($trg)($vel)($box)($wei)($mhp)($dmg)($knk)($buf)($chi)($hit)($rst)($die))))))))))))))))))))))))))));
  var $TA$Thing$set_act = ($thi=>($new_act=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($new_act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Bool$eql = ($a=>($b=>elim_bool($a)(elim_bool($b)($Bool$true)($Bool$false))(elim_bool($b)($Bool$false)($Bool$true))));
  var $Bool$if = x=>ct=>cf=>x?ct:cf;
  var $TA$Thing$set_trg = ($thi=>($new_trg=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($new_trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$set_tik = ($thi=>($new_tik=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($new_tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Game$init_act = ($self=>($new_act=>($new_trg=>($self$act=>($self$trg=>($self$tik=>($act_eql_0=>($self=>($self=>($self=>$self)($TA$Thing$set_tik($self)($Bool$if($act_eql_0)($F64$0)($self$tik))))($TA$Thing$set_trg($self)($Bool$if($act_eql_0)($new_trg)($self$trg))))($TA$Thing$set_act($self)($Bool$if($act_eql_0)($new_act)($self$act))))($F64$eql($self$act)($F64$0)))($TA$Thing$get_tik($self)))($TA$Thing$get_trg($self)))($TA$Thing$get_act($self)))));
  var $TA$Thing$set_pad = ($thi=>($new_pad=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($new_pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $F64$2 = $F64$parse_binary(`0000000000000000000000000000000000000000000000000000000000000010`);
  var $F64$parse = $F64$parse;
  var $TA$Game$with_thing$effect = ($pid=>($fn=>($thi=>($thi$pid=>elim_bool($F64$eql($pid)($thi$pid))($fn($thi))($thi))($TA$Thing$get_pid($thi)))));
  var $TA$Game$with_thing = ($pid=>($fn=>($gm=>$TA$Game$map_stage($TA$Game$with_thing$effect($pid)($fn))($gm))));
  var $TA$exec_command = ($cmd=>($gm=>$cmd(($cmd$pid=>($cmd$inp=>($fn=>$TA$Game$with_thing($cmd$pid)($fn)($gm))(($this=>($inp=>($is_silenced=>($is_stunned=>elim_bool($is_stunned)($inp(($sdir$dir=>$TA$Game$init_act($this)($F64$0)($sdir$dir)))(($key0$pos=>$this))(($key1$pos=>$this))(($key2$pos=>$this))(($key3$pos=>$this))(($key4$pos=>$this))(($key5$pos=>$this))(($cmsg$txt=>$this)))(elim_bool($is_silenced)($inp(($sdir$dir=>$TA$Thing$set_pad($this)($sdir$dir)))(($key0$pos=>$this))(($key1$pos=>$this))(($key2$pos=>$this))(($key3$pos=>$this))(($key4$pos=>$this))(($key5$pos=>$this))(($cmsg$txt=>$this)))($inp(($sdir$dir=>$TA$Thing$set_pad($this)($sdir$dir)))(($key0$pos=>$TA$Game$init_act($this)($F64$1)($key0$pos)))(($key1$pos=>$TA$Game$init_act($this)($F64$2)($key1$pos)))(($key2$pos=>$TA$Game$init_act($this)($F64$parse(`3`))($key2$pos)))(($key3$pos=>$TA$Game$init_act($this)($F64$parse(`4`))($key3$pos)))(($key4$pos=>$TA$Game$init_act($this)($F64$parse(`5`))($key4$pos)))(($key5$pos=>$TA$Game$init_act($this)($F64$parse(`6`))($key5$pos)))(($cmsg$txt=>$this)))))($TA$Thing$is_stunned($this)))($TA$Thing$is_silenced($this)))($cmd$inp))))))));
  var $TA$Thing$set_fun = ($thi=>($new_fun=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($new_fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$set_sid = ($thi=>($new_sid=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($new_sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$set_pid = ($thi=>($new_pid=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($new_pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$set_pos = ($thi=>($new_pos=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($new_pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$set_nam = ($thi=>($new_nam=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($new_nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$get_dir = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$dir))))))))))))))))))))))))))));
  var $TA$Thing$get_box = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$box))))))))))))))))))))))))))));
  var $TA$Thing$get_sid = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$sid))))))))))))))))))))))))))));
  var $TA$Thing$get_hit = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$hit))))))))))))))))))))))))))));
  var $F64$sqrt = ($n=>$F64$pow($n)($F64$div($F64$1)($F64$2)));
  var $F64$V3$sqr_dist = ($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($two=>($x_diff=>($y_diff=>($z_diff=>$F64$add($x_diff)($F64$add($y_diff)($z_diff)))($F64$pow($F64$sub($a$z)($b$z))($two)))($F64$pow($F64$sub($a$y)($b$y))($two)))($F64$pow($F64$sub($a$x)($b$x))($two)))($F64$add($F64$1)($F64$1))))))))))));
  var $F64$V3$dist = ($a=>($b=>$F64$sqrt($F64$V3$sqr_dist($a)($b))));
  var $F64$cmp = $F64$cmp;
  var $F64$ltn = ($a=>($b=>$F64$cmp($a)($b)($Bool$true)($Bool$false)($Bool$false)));
  var $F64$V3$scale = ($k=>($v=>$v(($v$x=>($v$y=>($v$z=>($new_x=>($new_y=>($new_z=>$F64$V3$new($new_x)($new_y)($new_z))($F64$mul($k)($v$z)))($F64$mul($k)($v$y)))($F64$mul($k)($v$x))))))));
  var $F64$max = $F64$max;
  var $F64$min = $F64$min;
  var $F64$V3$point_segment_sqrdist = ($p=>($s=>$p(($p$x=>($p$y=>($p$z=>$s(($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($ab_x_diff_sqrd=>($ab_y_diff_sqrd=>($pa_x_diff=>($pa_y_diff=>($ba_x_diff=>($ba_y_diff=>($l=>($t=>($t=>($t=>($d=>($t_times_ba_x_diff=>($t_times_ba_y_diff=>($k=>($d=>($k=>($d=>$d)($F64$add($d)($k)))($F64$pow($F64$sub($p$y)($F64$add($a$y)($t_times_ba_y_diff)))($F64$2)))($F64$add($d)($k)))($F64$pow($F64$sub($p$x)($F64$add($a$x)($t_times_ba_x_diff)))($F64$2)))($F64$mul($t)($ba_y_diff)))($F64$mul($t)($ba_x_diff)))($F64$0))($F64$max($F64$0)($F64$min($F64$1)($t))))($F64$div($t)($l)))($F64$add($F64$mul($pa_x_diff)($ba_x_diff))($F64$mul($pa_y_diff)($ba_y_diff))))($F64$add($ab_x_diff_sqrd)($ab_y_diff_sqrd)))($F64$sub($b$y)($a$y)))($F64$sub($b$x)($a$x)))($F64$sub($p$y)($a$y)))($F64$sub($p$x)($a$x)))($F64$pow($F64$sub($a$y)($b$y))($F64$2)))($F64$pow($F64$sub($a$x)($b$x))($F64$2)))))))))))))))))));
  var $F64$V3$point_segment_dist = ($p=>($s=>$F64$sqrt($F64$V3$point_segment_sqrdist($p)($s))));
  var $F64$V3$rot_90 = ($v=>$v(($v$x=>($v$y=>($v$z=>$F64$V3$new($v$y)($F64$sub($F64$0)($v$x))($v$z))))));
  var $TA$collide_with = ($a_pos=>($a_dir=>($a_box=>($b_pos=>($b_dir=>($b_box=>($none=>$a_box($none)(($a_box$rad=>$b_box($none)(($b_box$rad=>($dst=>($rad=>($if_condition=>$Bool$if($if_condition)(($out_dir=>($out_vec=>$Maybe$some($out_vec))($F64$V3$scale($F64$sub($rad)($dst))($out_dir)))($F64$V3$norm($F64$V3$sub($a_pos)($b_pos))))($none))($Bool$and($F64$ltn($F64$0)($dst))($F64$ltn($dst)($rad))))($F64$add($a_box$rad)($b_box$rad)))($F64$V3$dist($a_pos)($b_pos))))(($b_box$pts=>($cons=>($segs=>$List$fold($none)($cons)($segs))($F64$V3$polygon_to_segments($b_pos)($b_dir)($b_box$pts)))(($segment=>($result=>$result($segment(($segment$a=>($segment$b=>($dst=>($rad=>$Bool$if($F64$ltn($dst)($rad))(($out_dir=>($out_vec=>$Maybe$some($out_vec))($F64$V3$scale($F64$sub($rad)($dst))($out_dir)))($F64$V3$rot_90($F64$V3$norm($F64$V3$sub($segment$a)($segment$b)))))($none))($a_box$rad))($F64$V3$point_segment_dist($a_pos)($segment))))))(($result$value=>$Maybe$some($result$value))))))))))(($a_box$pts=>$none)))($Maybe$none)))))));
  var $TA$Thing$get_dmg = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$dmg))))))))))))))))))))))))))));
  var $TA$Thing$set_dmg = ($thi=>($new_dmg=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($new_dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Pair$new = ($a=>($b=>($pair=>$pair($a)($b))));
  var $Pair = ($A=>($B=>null));
  var $F64$Ordering$EQ = ($F64$Ordering$LT=>($F64$Ordering$EQ=>($F64$Ordering$GT=>$F64$Ordering$EQ)));
  var $F64$Ordering$GT = ($F64$Ordering$LT=>($F64$Ordering$EQ=>($F64$Ordering$GT=>$F64$Ordering$GT)));
  var $F64$Ordering$LT = ($F64$Ordering$LT=>($F64$Ordering$EQ=>($F64$Ordering$GT=>$F64$Ordering$LT)));
  var $F64$compare_numbers = ($a=>($b=>$Bool$if($F64$eql($a)($b))($F64$Ordering$EQ)($Bool$if($F64$ltn($b)($a))($F64$Ordering$GT)($F64$Ordering$LT))));
  var $TA$Game$Buff$shielded = ($dur=>($val=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$shielded($dur)($val)))))))));
  var $TA$Game$use_shields = ($buff=>($acc=>$acc(($acc$fst=>($acc$snd=>$buff(($buff$dur=>($buff$val=>$Bool$if($F64$eql($acc$fst)($F64$0))($acc)(($compare=>$compare(($remaining_shield_val=>($remaining_buf=>$Pair$new($F64$0)($remaining_buf))($List$cons($TA$Game$Buff$shielded($buff$dur)($remaining_shield_val))($acc$snd)))($F64$sub($buff$val)($acc$fst)))($Pair$new($F64$0)($acc$snd))(($remaining_dmg=>$Pair$new($remaining_dmg)($acc$snd))($F64$sub($acc$fst)($buff$val))))($F64$compare_numbers($acc$fst)($buff$val))))))(($buff$dur=>($buff$val=>$Pair$new($acc$fst)($List$cons($buff)($acc$snd)))))(($buff$dur=>($buff$val=>$Pair$new($acc$fst)($List$cons($buff)($acc$snd)))))(($buff$dur=>$Pair$new($acc$fst)($List$cons($buff)($acc$snd))))(($buff$dur=>$Pair$new($acc$fst)($List$cons($buff)($acc$snd))))(($buff$dur=>$Pair$new($acc$fst)($List$cons($buff)($acc$snd)))))))));
  var $Pair$fst = ($pair=>$pair(($a=>($b=>$a))));
  var $Pair$snd = ($pair=>$pair(($a=>($b=>$b))));
  var $TA$Thing$set_buf = ($thi=>($new_buf=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($new_buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$handle_shields = ($hit_dmg=>($self=>($self$buf=>($self$dmg=>($init_val=>($res=>($res$fst=>($res$snd=>($remaining_dmg=>($remaining_buf=>($self=>($self=>$self)($TA$Thing$set_buf($self)($remaining_buf)))($TA$Thing$set_dmg($self)($remaining_dmg)))($res$snd))($F64$add($res$fst)($self$dmg)))($Pair$snd($res)))($Pair$fst($res)))($List$fold($init_val)($TA$Game$use_shields)($self$buf)))($Pair$new($hit_dmg)($List$nil)))($TA$Thing$get_dmg($self)))($TA$Thing$get_buf($self))));
  var $TA$Thing$set_knk = ($thi=>($new_knk=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($new_knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Game$Buff$slowed = ($dur=>($val=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$slowed($dur)($val)))))))));
  var $TA$Game$Buff$hasted = ($dur=>($val=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$hasted($dur)($val)))))))));
  var $TA$Game$Buff$silenced = ($dur=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$silenced($dur))))))));
  var $TA$Game$Buff$rooted = ($dur=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$rooted($dur))))))));
  var $TA$Game$Buff$stuned = ($dur=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$stuned($dur))))))));
  var $TA$interact_with = ($this=>($that=>($this$pos=>($this$dir=>($this$box=>($this$buf=>($this$sid=>($that$pos=>($that$dir=>($that$box=>($that$hit=>($that$sid=>($out_vec=>($this=>($this=>$this)(($apply_hit=>$List$fold($this)($apply_hit)($that$hit))(($hit=>($this=>$hit(($hit$eff=>($hit$pos=>($hit$dir=>($hit$box=>($out_vec=>$out_vec($this)(($out_vec$value=>($compare_sid=>($apply_eff=>$List$fold($this)($apply_eff)($hit$eff))(($eff=>($this=>$eff(($eff$lif=>($this$dmg=>$Bool$if($compare_sid)($this)($TA$Thing$set_dmg($this)($F64$sub($this$dmg)($eff$lif))))($TA$Thing$get_dmg($this))))(($eff$dmg=>$Bool$if($compare_sid)($this)($TA$Thing$handle_shields($eff$dmg)($this))))(($eff$mag=>$Bool$if($compare_sid)($this)(($v3=>($dir=>($vec=>$TA$Thing$set_knk($this)($vec))($F64$V3$scale($eff$mag)($dir)))($F64$V3$look_at($hit$pos)($this$pos)($v3)))($F64$V3$new($F64$1)($F64$0)($F64$0)))))(($eff$mag=>($eff$dir=>$Bool$if($compare_sid)($this)(($vec=>$TA$Thing$set_knk($this)($vec))($F64$V3$scale($eff$mag)($eff$dir))))))(($eff$dur=>($eff$val=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TA$Thing$set_buf($this)($updated_buffs))($List$cons($TA$Game$Buff$slowed($eff$dur)($eff$val))($this$buf))))))(($eff$dur=>($eff$val=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TA$Thing$set_buf($this)($updated_buffs))($List$cons($TA$Game$Buff$hasted($eff$dur)($eff$val))($this$buf))))))(($eff$dur=>($eff$val=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TA$Thing$set_buf($this)($updated_buffs))($List$cons($TA$Game$Buff$shielded($eff$dur)($eff$val))($this$buf))))))(($eff$dur=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TA$Thing$set_buf($this)($updated_buffs))($List$cons($TA$Game$Buff$silenced($eff$dur))($this$buf)))))(($eff$dur=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TA$Thing$set_buf($this)($updated_buffs))($List$cons($TA$Game$Buff$rooted($eff$dur))($this$buf)))))(($eff$dur=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TA$Thing$set_buf($this)($updated_buffs))($List$cons($TA$Game$Buff$stuned($eff$dur))($this$buf)))))(($eff$to_pos=>($eff$all=>$Bool$if($F64$eql($eff$all)($F64$1))($TA$Thing$set_pos($this)($eff$to_pos))($this))))))))($F64$eql($this$sid)($that$sid)))))($TA$collide_with($this$pos)($this$dir)($this$box)($hit$pos)($hit$dir)($hit$box))))))))))))($out_vec($this)(($out_vec$value=>($new_pos=>$TA$Thing$set_pos($this)($new_pos))($F64$V3$add($this$pos)($out_vec$value))))))($TA$collide_with($this$pos)($this$dir)($this$box)($that$pos)($that$dir)($that$box)))($TA$Thing$get_sid($this)))($TA$Thing$get_hit($that)))($TA$Thing$get_box($that)))($TA$Thing$get_dir($that)))($TA$Thing$get_pos($that)))($TA$Thing$get_sid($this)))($TA$Thing$get_buf($this)))($TA$Thing$get_box($this)))($TA$Thing$get_dir($this)))($TA$Thing$get_pos($this))));
  var $TA$Thing$set_hit = ($thi=>($new_hit=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($new_hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$get_rst = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$rst))))))))))))))))))))))))))));
  var $TA$Game$Hitbox$cbox = ($rad=>($nbox=>($cbox=>($pbox=>$cbox($rad)))));
  var $TA$Thing$set_vel = ($thi=>($new_vel=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($new_vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$set_bst = ($thi=>($new_bst=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($new_bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$set_box = ($thi=>($new_box=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($new_box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$set_lit = ($thi=>($new_lit=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($new_lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$set_rst = ($thi=>($new_rst=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($new_rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$get_bst = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$bst))))))))))))))))))))))))))));
  var $TA$Game$combine_mov_buffs = ($buff=>($i=>$buff(($buff$dur=>($buff$val=>$i)))(($buff$dur=>($buff$val=>$F64$mul($i)($buff$val))))(($buff$dur=>($buff$val=>$F64$mul($i)($buff$val))))(($buff$dur=>$i))(($buff$dur=>$F64$0))(($buff$dur=>$F64$0))));
  var $TA$Thing$speed_multiplier_of = ($self=>($bst=>($buf=>$List$fold($bst)($TA$Game$combine_mov_buffs)($buf))($TA$Thing$get_buf($self)))($TA$Thing$get_bst($self)));
  var $TA$Thing$get_mov = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$mov))))))))))))))))))))))))))));
  var $TA$Thing$get_pad = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$pad))))))))))))))))))))))))))));
  var $TA$Thing$update_buff_dur = ($self=>($self$buf=>($fn=>($new_buf=>$TA$Thing$set_buf($self)($new_buf))($List$fold($List$nil)($fn)($self$buf)))(($buff=>($acc=>$buff(($buff$dur=>($buff$val=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TA$Game$Buff$shielded($F64$sub($buff$dur)($F64$1))($buff$val))($acc)))))(($buff$dur=>($buff$val=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TA$Game$Buff$slowed($F64$sub($buff$dur)($F64$1))($buff$val))($acc)))))(($buff$dur=>($buff$val=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TA$Game$Buff$hasted($F64$sub($buff$dur)($F64$1))($buff$val))($acc)))))(($buff$dur=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TA$Game$Buff$silenced($F64$sub($buff$dur)($F64$1)))($acc))))(($buff$dur=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TA$Game$Buff$rooted($F64$sub($buff$dur)($F64$1)))($acc))))(($buff$dur=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TA$Game$Buff$stuned($F64$sub($buff$dur)($F64$1)))($acc))))))))($TA$Thing$get_buf($self)));
  var $TA$Thing$get_knk = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$knk))))))))))))))))))))))))))));
  var $TA$Thing$get_wei = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$wei))))))))))))))))))))))))))));
  var $F64$gtn = ($a=>($b=>$F64$cmp($a)($b)($Bool$false)($Bool$false)($Bool$true)));
  var $TA$Thing$get_fun = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$fun))))))))))))))))))))))))))));
  var $TA$Thing$get_chi = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$chi))))))))))))))))))))))))))));
  var $TA$Thing$set_chi = ($thi=>($new_chi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($new_chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $F64$V3$get_z = ($v=>$v(($v$x=>($v$y=>($v$z=>$v$z)))));
  var $F64$V3$get_y = ($v=>$v(($v$x=>($v$y=>($v$z=>$v$y)))));
  var $TA$Thing$get_mhp = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$mhp))))))))))))))))))))))))))));
  var $TA$Thing$get_die = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$die))))))))))))))))))))))))))));
  var $Bool$or = a=>b=>a||b;
  var $List$concat = ($as=>($bs=>$as($bs)(($head=>($tail=>$List$cons($head)($List$concat($tail)($bs)))))));
  var $TA$fold_with_context = ($i=>($f=>($xs=>($ys=>$xs($i)(($xs$head=>($xs$tail=>($ys2=>($rest=>$f($xs$head)($ys($xs$tail))($rest))($TA$fold_with_context($i)($f)($xs$tail)($ys2)))(($x=>$ys($List$cons($xs$head)($xs)))))))))));
  var $TA$exec_turn = ($gm=>($intr=>($tick=>($things_id=>($stage=>($stage_nil=>($new_stage=>$TA$Game$Game$new($new_stage))($TA$fold_with_context($stage_nil)($tick)($stage)($things_id)))($List$nil))($gm(($stage=>$stage))))(($x=>$x)))(($this=>($others=>($res=>($this=>($rst=>($this=>($boost=>($pos=>($mov=>($pad=>($this=>($this=>($pos=>($knk=>($wei=>($new_pos=>($knk_len=>($new_knk=>($this=>($this=>($fun=>($this=>($this=>($tik=>($this=>($this_chi=>($chi_init=>($chi_list=>($this=>($this_pos=>($pos_x=>($pos_y=>($pos_z=>($new_x=>($new_y=>($new_z=>($this=>($dmg=>($mhp=>($new_dmg=>($this=>($sid=>($dmg=>($mhp=>($no_hp=>($die=>($xs=>$List$concat($chi_list)($xs))(elim_bool($Bool$or($die)($no_hp))($res)($List$cons($this)($res))))($TA$Thing$get_die($this)))($Bool$false))($TA$Thing$get_mhp($this)))($TA$Thing$get_dmg($this)))($TA$Thing$get_sid($this)))($TA$Thing$set_dmg($this)($new_dmg)))($F64$max($F64$0)($F64$min($mhp)($dmg))))($TA$Thing$get_mhp($this)))($TA$Thing$get_dmg($this)))($TA$Thing$set_pos($this)($F64$V3$new($new_x)($new_y)($new_z))))($F64$min($F64$max($F64$0)($pos_z))($F64$parse(`256`))))($F64$min($F64$max($F64$parse(`-160`))($pos_y))($F64$parse(`160`))))($F64$min($F64$max($F64$parse(`-256`))($pos_x))($F64$parse(`256`))))($F64$V3$get_z($this_pos)))($F64$V3$get_y($this_pos)))($F64$V3$get_z($this_pos)))($TA$Thing$get_pos($this)))($TA$Thing$set_chi($this)($List$nil)))($List$map($chi_init)($this_chi)))(($chi=>$TA$Thing$get_fun($chi)($chi))))($TA$Thing$get_chi($this)))($TA$Thing$set_tik($this)($F64$add($tik)($F64$1))))($TA$Thing$get_tik($this)))($List$fold($this)($intr)($others)))($fun($this)))($TA$Thing$get_fun($this)))($TA$Thing$set_knk($this)($new_knk)))($TA$Thing$set_pos($this)($new_pos)))(elim_bool($F64$gtn($knk_len)($F64$0))(($force=>$F64$V3$scale($force)($F64$V3$norm($knk)))($F64$max($F64$sub($knk_len)($wei))($F64$0)))($knk)))($F64$V3$len($knk)))($F64$V3$add($pos)($knk)))($TA$Thing$get_wei($this)))($TA$Thing$get_knk($this)))($TA$Thing$get_pos($this)))($TA$Thing$update_buff_dur($this)))($TA$Thing$set_pos($this)($F64$V3$add($pos)($F64$V3$scale($F64$mul($mov)($boost))($pad)))))($TA$Thing$get_pad($this)))($TA$Thing$get_mov($this)))($TA$Thing$get_pos($this)))($TA$Thing$speed_multiplier_of($this)))(elim_bool($rst)(($new_vel=>($new_bst=>($new_box=>($new_act=>($new_tik=>($new_lit=>($new_rst=>($this=>($this=>($this=>($this=>($this=>($this=>($this=>$this)($TA$Thing$set_rst($this)($new_rst)))($TA$Thing$set_lit($this)($new_lit)))($TA$Thing$set_tik($this)($new_tik)))($TA$Thing$set_act($this)($new_act)))($TA$Thing$set_box($this)($new_box)))($TA$Thing$set_bst($this)($new_bst)))($TA$Thing$set_vel($this)($new_vel)))($Bool$false))($List$nil))($F64$0))($F64$0))($TA$Game$Hitbox$cbox($F64$mul($F64$parse(`3`))($F64$parse(`4`)))))($F64$1))($F64$V3$new($F64$0)($F64$0)($F64$0)))($this)))($TA$Thing$get_rst($this)))($TA$Thing$set_hit($this)($List$nil)))))))(($that=>($this=>$TA$interact_with($this)($that)))));
  var $TA$Thing$set_mov = ($thi=>($new_mov=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($new_mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$set_mhp = ($thi=>($new_mhp=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($new_mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $F64$if = ($x=>($ct=>($cf=>($bool=>elim_bool($bool)($cf)($ct))($F64$eql($x)($F64$0)))));
  var $F64$from_bool = ($b=>elim_bool($b)($F64$1)($F64$0));
  var $TA$Thing$is_walking = ($this=>($this$pad=>$F64$from_bool($F64$ltn($F64$0)($F64$V3$len($this$pad))))($TA$Thing$get_pad($this)));
  var $F64$is_between = ($a=>($b=>($x=>($a_eql_x=>($a_ltn_x=>($x_ltn_b=>$Bool$or($a_eql_x)($Bool$and($a_ltn_x)($x_ltn_b)))($F64$ltn($x)($b)))($F64$ltn($a)($x)))($F64$eql($a)($x)))));
  var $TA$Thing$set_dir = ($thi=>($new_dir=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($new_dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TA$Thing$targ_dir = ($self=>($pos=>($trg=>($dir=>$F64$V3$look_at($pos)($trg)($dir))($TA$Thing$get_dir($self)))($TA$Thing$get_trg($self)))($TA$Thing$get_pos($self)));
  var $TA$Thing$set_mid = ($thi=>($new_mid=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($new_mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $F64$mod = a=>b=>a%b;
  var $F64$floor = ($x=>($ltn_zero=>$F64$sub($F64$sub($x)($F64$mod($x)($F64$1)))($ltn_zero))($F64$if($F64$from_bool($F64$ltn($x)($F64$0)))($F64$1)($F64$0)));
  var $TA$Thing$animate_between = ($self=>($boost=>($model=>($count=>($from=>($til=>($self$tik=>($self$pad=>($self$act=>($self$dir=>$Bool$if($F64$is_between($from)($til)($self$tik))(($set_bst=>($set_dir=>($set_mid=>$self)($TA$Thing$set_mid($self)(($duration=>($curr_tik=>($curr_tim=>$F64$add($model)($F64$mod($F64$floor($F64$mul($curr_tim)($count)))($count)))($F64$div($curr_tik)($duration)))($F64$sub($self$tik)($from)))($F64$sub($til)($from)))))($TA$Thing$set_dir($self)(($pad_len=>$Bool$if($Bool$and($F64$ltn($F64$0)($self$act))($F64$eql($pad_len)($F64$0)))($TA$Thing$targ_dir($self))($Bool$if($F64$ltn($F64$0)($pad_len))($F64$V3$norm($self$pad))($self$dir)))($F64$V3$len($self$pad)))))($TA$Thing$set_bst($self)($boost)))($self))($TA$Thing$get_dir($self)))($TA$Thing$get_act($self)))($TA$Thing$get_pad($self)))($TA$Thing$get_tik($self))))))));
  var $TA$Thing$reset = ($self=>($at_tik=>($curr_tik=>($should_reset=>elim_bool($should_reset)($TA$Thing$set_rst($self)($Bool$true))($self))($F64$gtn($curr_tik)($F64$sub($at_tik)($F64$1))))($TA$Thing$get_tik($self))));
  var $TA$Thing$animate = ($self=>($boost=>($model=>($count=>($durat=>($self=>($self=>$self)($TA$Thing$reset($self)($F64$sub($durat)($F64$1))))($TA$Thing$animate_between($self)($boost)($model)($count)($F64$0)($durat)))))));
  var $BLESKAPE_WALK_000 = $F64$parse(`209`);
  var $BLESKAPE_IDLE_000 = $F64$parse(`143`);
  var $BLESKAPE_SHOCK_BALL_000 = $F64$parse(`147`);
  var $TA$Game$Effect$damage = ($dmg=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport=>$damage($dmg)))))))))))));
  var $TA$Game$Effect$impulse = ($mag=>($dir=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport=>$impulse($mag)($dir))))))))))))));
  var $TA$Game$Hit$new = ($eff=>($pos=>($dir=>($box=>($new=>$new($eff)($pos)($dir)($box))))));
  var $TA$Thing$at_dist = ($self=>($dist=>($dir=>($pos=>$F64$V3$add($pos)($F64$V3$scale($dist)($dir)))($TA$Thing$get_pos($self)))($TA$Thing$targ_dir($self))));
  var $TA$Thing$cast = ($self=>($at_tik=>($do_hit=>($curr_tik=>elim_bool($F64$eql($curr_tik)($at_tik))($TA$Thing$set_hit($self)($do_hit))($self))($TA$Thing$get_tik($self)))));
  var $BLESKAPE_DEFENSE_MODE_000 = $F64$parse(`139`);
  var $BLESKAPE_DEFENSE_MODE_002 = $F64$parse(`141`);
  var $BLESKAPE_SHOCK_GROUND_WAVE_000 = $F64$parse(`162`);
  var $BLESKAPE_SUPREME_PUNCH_SEQUENCE_000 = $F64$parse(`174`);
  var $BLESKAPE_DASH_000 = $F64$parse(`124`);
  var $TA$Thing$is_rooted = ($self=>($self$buf=>($is_rooted_buff=>($found_buf=>$found_buf($Bool$false)(($value=>$Bool$true)))($List$find($is_rooted_buff)($self$buf)))(($buff=>$buff(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$true))(($buff$dur=>$Bool$true)))))($TA$Thing$get_buf($self)));
  var $TA$Thing$dash = ($self=>($speed=>($from_tik=>($til_tik=>($rooted=>($self$tik=>$Bool$if($rooted)($self)(($is_between_tik=>($new_vel=>$TA$Thing$set_vel($self)($new_vel))($Bool$if($is_between_tik)(($self$pos=>($self$trg=>($self$dir=>$F64$V3$scale($speed)($F64$V3$look_at($self$pos)($self$trg)($self$dir)))($TA$Thing$get_dir($self)))($TA$Thing$get_trg($self)))($TA$Thing$get_pos($self)))($F64$V3$new($F64$0)($F64$0)($F64$0))))($F64$is_between($from_tik)($til_tik)($self$tik))))($TA$Thing$get_tik($self)))($TA$Thing$is_rooted($self))))));
  var $TA$Game$Effect$repulse = ($mag=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport=>$repulse($mag)))))))))))));
  var $BLESKAPE_TAUNT_000 = $F64$parse(`199`);
  var $TA$Thing$bleskape_fun = ($self=>($self=>($self=>($self$act=>($self$dir=>($self$pos=>$Bool$if($F64$eql($self$act)($F64$0))($F64$if($TA$Thing$is_walking($self))($TA$Thing$animate($self)($F64$1)($BLESKAPE_WALK_000)($F64$parse(`4`))($F64$parse(`16`)))($TA$Thing$animate($self)($F64$1)($BLESKAPE_IDLE_000)($F64$parse(`4`))($F64$parse(`16`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($effs=>($hits=>($self=>$self)($TA$Thing$cast($self)($F64$parse(`18`))($hits)))($List$cons($TA$Game$Hit$new($effs)($TA$Thing$at_dist($self)($F64$parse(`40`)))($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`20`))))($List$cons($TA$Game$Hit$new($effs)($TA$Thing$at_dist($self)($F64$parse(`40`)))($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`20`))))($List$nil))))($List$cons($TA$Game$Effect$damage($F64$parse(`3`)))($List$cons($TA$Game$Effect$impulse($F64$parse(`12`))($self$dir))($List$nil))))($TA$Thing$animate($self)($F64$0)($BLESKAPE_SHOCK_BALL_000)($F64$parse(`15`))($F64$parse(`30`))))($Bool$if($F64$eql($self$act)($F64$2))(($self=>($self=>($self=>$self)($TA$Thing$reset($self)($F64$parse(`12`))))($TA$Thing$animate_between($self)($F64$1)($BLESKAPE_DEFENSE_MODE_002)($F64$1)($F64$parse(`3`))($F64$parse(`12`))))($TA$Thing$animate_between($self)($F64$1)($BLESKAPE_DEFENSE_MODE_000)($F64$parse(`3`))($F64$0)($F64$parse(`3`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>($effs=>($hits=>($self=>$self)($TA$Thing$cast($self)($F64$parse(`20`))($hits)))($List$cons($TA$Game$Hit$new($effs)($self$pos)($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`58`))))($List$nil)))($List$cons($TA$Game$Effect$damage($F64$parse(`5`)))($List$nil)))($TA$Thing$animate($self)($F64$0)($BLESKAPE_SHOCK_GROUND_WAVE_000)($F64$parse(`12`))($F64$parse(`24`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))(($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>($self=>($effes=>($hits=>($self=>$self)($TA$Thing$cast($self)($F64$parse(`46`))($hits)))($List$cons($TA$Game$Hit$new($effs)($TA$Thing$at_dist($self)($F64$parse(`32`)))($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`32`))))($List$nil)))($List$cons($TA$Game$Effect$impulse($F64$parse(`18`))($self$dir))($List$cons($TA$Game$Effect$impulse($F64$parse(`18`))($self$dir))($List$nil))))($TA$Thing$cast($self)($F64$parse(`42`))($hits)))($TA$Thing$cast($self)($F64$parse(`38`))($hits)))($TA$Thing$cast($self)($F64$parse(`34`))($hits)))($TA$Thing$cast($self)($F64$parse(`30`))($hits)))($TA$Thing$cast($self)($F64$parse(`26`))($hits)))($List$cons($TA$Game$Hit$new($effs)($TA$Thing$at_dist($self)($F64$parse(`32`)))($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`32`))))($List$nil)))($List$cons($TA$Game$Effect$damage($F64$parse(`1`)))($List$nil)))($TA$Thing$animate($self)($F64$0)($BLESKAPE_SUPREME_PUNCH_SEQUENCE_000)($F64$parse(`25`))($F64$parse(`50`))))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))(($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>$self)($TA$Thing$cast($self)($F64$parse(`23`))($hits)))($TA$Thing$cast($self)($F64$parse(`20`))($hits)))($TA$Thing$cast($self)($F64$parse(`17`))($hits)))($List$cons($TA$Game$Hit$new($effs)($TA$Thing$at_dist($self)($F64$parse(`32`)))($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`32`))))($List$nil)))($List$cons($TA$Game$Effect$damage($F64$parse(`1`)))($List$cons($TA$Game$Effect$repulse($F64$parse(`8`)))($List$nil))))($TA$Thing$dash($self)($F64$parse(`8`))($F64$parse(`15`))($F64$parse(`25`))))($TA$Thing$animate($self)($F64$0)($BLESKAPE_DASH_000)($F64$parse(`15`))($F64$parse(`30`))))($TA$Thing$animate($self)($F64$0)($BLESKAPE_TAUNT_000)($F64$parse(`10`))($F64$parse(`20`)))))))))($TA$Thing$get_pos($self)))($TA$Thing$get_dir($self)))($TA$Thing$get_act($self)))($TA$Thing$set_mhp($self)($F64$parse(`24`))))($TA$Thing$set_mov($self)($F64$parse(`2`))));
  var $DILMA_WALK_000 = $F64$parse(`395`);
  var $DILMA_IDLE_000 = $F64$parse(`340`);
  var $DILMA_PROTECTION_000 = $F64$parse(`344`);
  var $DILMA_PROTECTION_007 = $F64$parse(`351`);
  var $DILMA_CONFUSION_CASTING_000 = $F64$parse(`321`);
  var $DILMA_CONFUSION_CASTING_016 = $F64$parse(`337`);
  var $Map$new = ($new=>($=>$new));
  var $F64$_1 = $F64$parse_binary(`0000000000000000000000000000000000000000000000000000111111111101`);
  var $TA$Thing$new_thing = $TA$Thing$new(($x=>$x))($F64$0)($F64$0)($F64$0)($F64$0)($Map$new)($String$nil)($List$nil)($F64$0)($F64$V3$new($F64$0)($F64$0)($F64$0))($F64$parse(`8`))($F64$1)($F64$V3$new($F64$0)($F64$0)($F64$0))($F64$V3$new($F64$0)($F64$_1)($F64$0))($F64$V3$new($F64$0)($F64$0)($F64$0))($F64$V3$new($F64$0)($F64$0)($F64$0))($TA$Game$Hitbox$cbox($F64$parse(`12`)))($F64$1)($F64$parse(`24`))($F64$0)($F64$V3$new($F64$0)($F64$0)($F64$0))($List$nil)($List$nil)($List$nil)($Bool$false)($Bool$false);
  var $TA$Thing$set_die = ($thi=>($new_die=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TA$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($new_die))))))))))))))))))))))))))))));
  var $TA$Thing$die = ($self=>($at_tik=>($curr_tik=>($should_die=>elim_bool($should_die)($TA$Thing$set_die($self)($Bool$true))($self))($F64$gtn($curr_tik)($F64$sub($at_tik)($F64$1))))($TA$Thing$get_tik($self))));
  var $TA$Thing$animate_die = ($self=>($boost=>($model=>($count=>($durat=>($self=>($self=>$self)($TA$Thing$die($self)($F64$sub($durat)($F64$1))))($TA$Thing$animate_between($self)($boost)($model)($count)($F64$0)($durat)))))));
  var $DILMA_CONFUSION_ANIM_000 = $F64$parse(`317`);
  var $TA$Thing$dilma$confusion_fun = ($self=>$TA$Thing$animate_die($self)($F64$0)($DILMA_CONFUSION_ANIM_000)($F64$parse(`4`))($F64$parse(`40`)));
  var $TA$Thing$spawn = ($self=>($at_tik=>($children=>($curr_tik=>elim_bool($F64$eql($curr_tik)($at_tik))($TA$Thing$set_chi($self)($children))($self))($TA$Thing$get_tik($self)))));
  var $TA$Thing$move = ($self=>($to_pos=>$TA$Thing$set_pos($self)($to_pos)));
  var $TA$Thing$at_max_dist = ($self=>($max_range=>($self_pos=>($self_trg=>($dist_max=>($dist_trg=>($less_than=>$F64$if($F64$from_bool($less_than))($TA$Thing$at_dist($self)($dist_trg))($TA$Thing$at_dist($self)($max_range)))($F64$ltn($dist_trg)($dist_max)))($F64$V3$dist($self_pos)($self_trg)))($F64$V3$dist($self_pos)($TA$Thing$at_dist($self)($max_range))))($TA$Thing$get_trg($self)))($TA$Thing$get_pos($self))));
  var $DILMA_SALUTING_THE_CASSAVA_000 = $F64$parse(`358`);
  var $DILMA_STOCKING_WIND_CASTING_000 = $F64$parse(`379`);
  var $DILMA_STOCKING_WIND_ANIM_000 = $F64$parse(`376`);
  var $TA$Thing$dilma$stocking_wind_fun = ($self=>$TA$Thing$animate_die($self)($F64$0)($DILMA_STOCKING_WIND_ANIM_000)($F64$parse(`3`))($F64$parse(`15`)));
  var $TA$Game$Hitbox$nbox = ($nbox=>($cbox=>($pbox=>$nbox)));
  var $DILMA_TAUNT_000 = $F64$parse(`389`);
  var $TA$Thing$dilma_fun = ($self=>($self=>($self$act=>($self$dir=>($self$pos=>$Bool$if($F64$eql($self$act)($F64$0))($F64$if($TA$Thing$is_walking($self))($TA$Thing$animate($self)($F64$1)($DILMA_WALK_000)($F64$parse(`8`))($F64$parse(`16`)))($TA$Thing$animate($self)($F64$1)($DILMA_IDLE_000)($F64$parse(`4`))($F64$parse(`16`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($self=>($self=>$self)($TA$Thing$reset($self)($F64$parse(`27`))))($TA$Thing$animate_between($self)($F64$0)($DILMA_PROTECTION_007)($F64$parse(`5`))($F64$parse(`28`))($F64$parse(`14`))))($TA$Thing$animate_between($self)($F64$0)($DILMA_PROTECTION_000)($F64$parse(`6`))($F64$parse(`3`))($F64$parse(`7`))))($Bool$if($F64$eql($self$act)($F64$2))(($self=>($self=>($self=>($speech=>($speech=>($speech=>($self=>$self)($TA$Thing$spawn($self)($F64$parse(`34`))($List$cons($TA$Thing$move($speech)($TA$Thing$at_max_dist($self)($F64$parse(`100`))))($List$nil))))($TA$Thing$set_dir($speech)($TA$Thing$targ_dir($self))))($TA$Thing$set_fun($speech)($TA$Thing$dilma$confusion_fun)))($TA$Thing$new_thing))($TA$Thing$reset($self)($F64$parse(`63`))))($TA$Thing$animate_between($self)($F64$0)($DILMA_CONFUSION_CASTING_016)($F64$parse(`3`))($F64$parse(`34`))($F64$parse(`64`))))($TA$Thing$animate_between($self)($F64$0)($DILMA_CONFUSION_CASTING_000)($F64$parse(`17`))($F64$parse(`0`))($F64$parse(`34`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>$self)($TA$Thing$animate($self)($F64$0)($DILMA_SALUTING_THE_CASSAVA_000)($F64$parse(`18`))($F64$parse(`54`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))(($self=>($wind=>($wind=>($wind=>($wind=>($wind=>($wind=>($self=>$self)($TA$Thing$spawn($self)($F64$parse(`8`))($List$cons($wind)($List$nil))))($TA$Thing$set_box($wind)($TA$Game$Hitbox$nbox)))($TA$Thing$set_vel($wind)($F64$V3$scale($F64$parse(`6`))($TA$Thing$targ_dir($self)))))($TA$Thing$set_dir($wind)($TA$Thing$targ_dir($self))))($TA$Thing$set_pos($wind)($self$pos)))($TA$Thing$set_fun($wind)($TA$Thing$dilma$stocking_wind_fun)))($TA$Thing$new_thing))($TA$Thing$animate($self)($F64$0)($DILMA_STOCKING_WIND_CASTING_000)($F64$parse(`10`))($F64$parse(`30`))))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))($TA$Thing$animate($self)($F64$1)($DILMA_IDLE_000)($F64$parse(`4`))($F64$parse(`16`)))($TA$Thing$animate($self)($F64$0)($DILMA_TAUNT_000)($F64$parse(`6`))($F64$parse(`18`)))))))))($TA$Thing$get_pos($self)))($TA$Thing$get_dir($self)))($TA$Thing$get_act($self)))($TA$Thing$set_mov($self)($F64$parse(`2`))));
  var $DORIME_BLESSING_FOR_WHO_DESERVE_PROJECTILE_000 = $F64$parse(`410`);
  var $TA$Thing$dorime$blessing_fun = ($self=>($self$pos=>($self$dir=>($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>$self)($TA$Thing$cast($self)($F64$parse(`14`))($hits)))($TA$Thing$cast($self)($F64$parse(`12`))($hits)))($TA$Thing$cast($self)($F64$parse(`10`))($hits)))($TA$Thing$cast($self)($F64$parse(`8`))($hits)))($TA$Thing$cast($self)($F64$parse(`6`))($hits)))($TA$Thing$cast($self)($F64$parse(`4`))($hits)))($TA$Thing$cast($self)($F64$parse(`2`))($hits)))($TA$Thing$cast($self)($F64$0)($hits)))($List$cons($TA$Game$Hit$new($effs)($self$pos)($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`4`))))($List$nil)))($List$cons($TA$Game$Effect$damage($F64$1))($List$nil)))($TA$Thing$set_box($self)($TA$Game$Hitbox$nbox)))($TA$Thing$animate_die($self)($F64$0)($DORIME_BLESSING_FOR_WHO_DESERVE_PROJECTILE_000)($F64$1)($F64$parse(`16`))))($TA$Thing$get_dir($self)))($TA$Thing$get_pos($self)));
  var $DORIME_GODS_CHAMBER_HEAL_CIRCLE_000 = $F64$parse(`463`);
  var $DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_000 = $F64$parse(`434`);
  var $TA$Game$Effect$heal = ($lif=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport=>$heal($lif)))))))))))));
  var $TA$Thing$dorime$gods_chamber_fun = ($self=>($self$pos=>($self$dir=>($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>$self)($TA$Thing$die($self)($F64$parse(`92`))))($TA$Thing$cast($self)($F64$parse(`90`))($hits)))($TA$Thing$cast($self)($F64$parse(`86`))($hits)))($TA$Thing$cast($self)($F64$parse(`82`))($hits)))($TA$Thing$cast($self)($F64$parse(`78`))($hits)))($TA$Thing$cast($self)($F64$parse(`74`))($hits)))($TA$Thing$cast($self)($F64$parse(`70`))($hits)))($TA$Thing$cast($self)($F64$parse(`66`))($hits)))($TA$Thing$cast($self)($F64$parse(`62`))($hits)))($TA$Thing$cast($self)($F64$parse(`54`))($hits)))($TA$Thing$cast($self)($F64$parse(`50`))($hits)))($TA$Thing$cast($self)($F64$parse(`46`))($hits)))($TA$Thing$cast($self)($F64$parse(`42`))($hits)))($TA$Thing$cast($self)($F64$parse(`38`))($hits)))($TA$Thing$cast($self)($F64$parse(`34`))($hits)))($List$cons($TA$Game$Hit$new($effs)($self$pos)($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`52`))))($List$nil)))($List$cons($TA$Game$Effect$heal($F64$1))($List$nil)))($TA$Thing$animate_between($self)($F64$0)($DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_000)($F64$parse(`29`))($F64$parse(`34`))($F64$parse(`92`))))($TA$Thing$animate_between($self)($F64$0)($DORIME_GODS_CHAMBER_HEAL_CIRCLE_000)($F64$parse(`17`))($F64$parse(`0`))($F64$parse(`34`))))($TA$Thing$get_dir($self)))($TA$Thing$get_pos($self)));
  var $DORIME_HOLY_FLAME_PILLAR_000 = $F64$parse(`489`);
  var $TA$Thing$dorime$holy_flame_fun = ($self=>($self$pos=>($self$dir=>($self=>($self=>($effs=>($hits=>($self=>$self)($TA$Thing$cast($self)($F64$0)($hits)))($List$cons($TA$Game$Hit$new($effs)($self$pos)($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`20`))))($List$nil)))($List$cons($TA$Game$Effect$damage($F64$parse(`3`)))($List$nil)))($TA$Thing$set_box($self)($TA$Game$Hitbox$nbox)))($TA$Thing$animate_die($self)($F64$0)($DORIME_HOLY_FLAME_PILLAR_000)($F64$parse(`5`))($F64$parse(`15`))))($TA$Thing$get_dir($self)))($TA$Thing$get_pos($self)));
  var $DORIME_LEPTOSPIROSE_CURSE_POT_000 = $F64$parse(`526`);
  var $DORIME_LEPTOSPIROSE_CURSE_PUDDLE_000 = $F64$parse(`556`);
  var $DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000 = $F64$parse(`527`);
  var $TA$Thing$dorime$leptospirose_puddle_fun = ($self=>($self$pos=>($self$dir=>($self=>($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>$self)($TA$Thing$die($self)($F64$parse(`39`))))($TA$Thing$cast($self)($F64$parse(`38`))($hits)))($TA$Thing$cast($self)($F64$parse(`34`))($hits)))($TA$Thing$cast($self)($F64$parse(`30`))($hits)))($TA$Thing$cast($self)($F64$parse(`26`))($hits)))($TA$Thing$cast($self)($F64$parse(`22`))($hits)))($TA$Thing$cast($self)($F64$parse(`18`))($hits)))($TA$Thing$cast($self)($F64$parse(`14`))($hits)))($TA$Thing$cast($self)($F64$parse(`10`))($hits)))($List$cons($TA$Game$Hit$new($effs)($self$pos)($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`48`))))($List$nil)))($List$cons($TA$Game$Effect$damage($F64$parse(`1`)))($List$nil)))($TA$Thing$animate_between($self)($F64$0)($DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000)($F64$parse(`29`))($F64$parse(`10`))($F64$parse(`39`))))($TA$Thing$animate_between($self)($F64$0)($DORIME_LEPTOSPIROSE_CURSE_PUDDLE_000)($F64$parse(`10`))($F64$parse(`0`))($F64$parse(`10`))))($TA$Thing$set_box($self)($TA$Game$Hitbox$nbox)))($TA$Thing$get_dir($self)))($TA$Thing$get_pos($self)));
  var $TA$Thing$dorime$leptospirose_puddle_pot_fun = ($self=>($self$sid=>($self$pos=>($self=>($self=>($pudd=>($pudd=>($pudd=>($pudd=>($self=>$self)($TA$Thing$spawn($self)($F64$parse(`9`))($List$cons($pudd)($List$nil))))($TA$Thing$set_pos($pudd)($self$pos)))($TA$Thing$set_fun($pudd)($TA$Thing$dorime$leptospirose_puddle_fun)))($TA$Thing$set_sid($pudd)($self$sid)))($TA$Thing$new_thing))($TA$Thing$set_box($self)($TA$Game$Hitbox$cbox($F64$parse(`10`)))))($TA$Thing$animate_die($self)($F64$0)($DORIME_LEPTOSPIROSE_CURSE_POT_000)($F64$1)($F64$parse(`10`))))($TA$Thing$get_pos($self)))($TA$Thing$get_sid($self)));
  var $DORIME_WALK_CYCLE_000 = $F64$parse(`573`);
  var $DORIME_IDLE_000 = $F64$parse(`495`);
  var $DORIME_BLESSING_FOR_WHO_DESERVE_000 = $F64$parse(`411`);
  var $DORIME_LEPTOSPIROSE_CURSE_CAST_ANIMATION_000 = $F64$parse(`521`);
  var $DORIME_HOLY_FLAME_CAST_ANIMATION_000 = $F64$parse(`481`);
  var $DORIME_JESUS_POWER_000 = $F64$parse(`500`);
  var $TA$Thing$dorime$jesus_power = ($self=>($self$pos=>($self$dir=>($self=>($effs=>($hits=>($self=>($self=>$self)($TA$Thing$die($self)($F64$parse(`6`))))($TA$Thing$cast($self)($F64$0)($hits)))($List$cons($TA$Game$Hit$new($effs)($self$pos)($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`20`))))($List$nil)))($List$cons($TA$Game$Effect$heal($F64$parse(`5`)))($List$nil)))($TA$Thing$set_box($self)($TA$Game$Hitbox$nbox)))($TA$Thing$get_dir($self)))($TA$Thing$get_pos($self)));
  var $DORIME_GODS_CHAMBER_CAST_ANIMATION_000 = $F64$parse(`425`);
  var $DORIME_TAUNT_000 = $F64$parse(`570`);
  var $DORIME_TAUNT_002 = $F64$parse(`572`);
  var $TA$Thing$dorime_fun = ($self=>($self$pos=>($self$sid=>($self=>($self=>($self=>($self$act=>($self$dir=>($self$sid=>$Bool$if($F64$eql($self$act)($F64$0))($F64$if($TA$Thing$is_walking($self))($TA$Thing$animate($self)($F64$1)($DORIME_WALK_CYCLE_000)($F64$parse(`8`))($F64$parse(`16`)))($TA$Thing$animate($self)($F64$1)($DORIME_IDLE_000)($F64$parse(`5`))($F64$parse(`15`))))($Bool$if($F64$eql($self$act)($F64$1))(($self=>($fire=>($fire=>($fire=>($fire=>($fire=>($fire=>($self=>($self=>($self=>$self)($TA$Thing$spawn($self)($F64$parse(`22`))($List$cons($fire)($List$nil))))($TA$Thing$spawn($self)($F64$parse(`16`))($List$cons($fire)($List$nil))))($TA$Thing$spawn($self)($F64$parse(`8`))($List$cons($fire)($List$nil))))($TA$Thing$set_pos($fire)($self$pos)))($TA$Thing$set_dir($fire)($TA$Thing$targ_dir($self))))($TA$Thing$set_vel($fire)($F64$V3$scale($F64$parse(`8`))($TA$Thing$targ_dir($self)))))($TA$Thing$set_fun($fire)($TA$Thing$dorime$blessing_fun)))($TA$Thing$set_sid($fire)($self$sid)))($TA$Thing$new_thing))($TA$Thing$animate($self)($F64$0)($DORIME_BLESSING_FOR_WHO_DESERVE_000)($F64$parse(`14`))($F64$parse(`28`))))($Bool$if($F64$eql($self$act)($F64$2))(($self=>($pot=>($pot=>($pot=>($pot=>($pot=>($self=>$self)($TA$Thing$spawn($self)($F64$parse(`14`))($List$cons($pot)($List$nil))))($TA$Thing$set_vel($pot)($F64$V3$scale($F64$parse(`14`))($TA$Thing$targ_dir($self)))))($TA$Thing$set_pos($pot)($self$pos)))($TA$Thing$set_fun($pot)($TA$Thing$dorime$leptospirose_puddle_pot_fun)))($TA$Thing$set_sid($pot)($self$sid)))($TA$Thing$new_thing))($TA$Thing$animate($self)($F64$0)($DORIME_LEPTOSPIROSE_CURSE_CAST_ANIMATION_000)($F64$parse(`5`))($F64$parse(`15`))))($Bool$if($F64$eql($self$act)($F64$parse(`3`)))(($self=>($flame=>($flame=>($flame=>($self=>$self)($TA$Thing$spawn($self)($F64$parse(`5`))($List$cons($TA$Thing$move($flame)($TA$Thing$at_max_dist($self)($F64$parse(`128`))))($List$nil))))($TA$Thing$set_fun($flame)($TA$Thing$dorime$holy_flame_fun)))($TA$Thing$set_sid($flame)($self$sid)))($TA$Thing$new_thing))($TA$Thing$animate($self)($F64$0)($DORIME_HOLY_FLAME_CAST_ANIMATION_000)($F64$parse(`8`))($F64$parse(`16`))))($Bool$if($F64$eql($self$act)($F64$parse(`4`)))(($self=>($hit=>($hit=>($hit=>($self=>$self)($TA$Thing$spawn($self)($F64$parse(`18`))($List$cons($TA$Thing$move($hit)($TA$Thing$at_dist($self)($F64$parse(`30`))))($List$nil))))($TA$Thing$set_fun($hit)($TA$Thing$dorime$jesus_power)))($TA$Thing$set_sid($hit)($self$sid)))($TA$Thing$new_thing))($TA$Thing$animate($self)($F64$0)($DORIME_JESUS_POWER_000)($F64$parse(`21`))($F64$parse(`21`))))($Bool$if($F64$eql($self$act)($F64$parse(`5`)))(($self=>($heal=>($heal=>($heal=>($self=>$self)($TA$Thing$spawn($self)($F64$parse(`9`))($List$cons($TA$Thing$move($heal)($TA$Thing$at_max_dist($self)($F64$parse(`128`))))($List$nil))))($TA$Thing$set_fun($heal)($TA$Thing$dorime$gods_chamber_fun)))($TA$Thing$set_sid($heal)($self$sid)))($TA$Thing$new_thing))($TA$Thing$animate($self)($F64$0)($DORIME_GODS_CHAMBER_CAST_ANIMATION_000)($F64$parse(`9`))($F64$parse(`27`))))(($self=>($self=>($self=>$self)($TA$Thing$reset($self)($F64$parse(`36`))))($TA$Thing$animate_between($self)($F64$0)($DORIME_TAUNT_002)($F64$parse(`1`))($F64$parse(`6`))($F64$parse(`36`))))($TA$Thing$animate_between($self)($F64$0)($DORIME_TAUNT_000)($F64$parse(`3`))($F64$parse(`0`))($F64$parse(`6`))))))))))($TA$Thing$get_sid($self)))($TA$Thing$get_dir($self)))($TA$Thing$get_act($self)))($TA$Thing$set_mhp($self)($F64$parse(`32`))))($TA$Thing$set_box($self)($TA$Game$Hitbox$cbox($F64$parse(`8`)))))($TA$Thing$set_mov($self)($F64$parse(`2.2`))))($TA$Thing$get_sid($self)))($TA$Thing$get_pos($self)));
  var $POSTE_IDLE_000 = $F64$parse(`581`);
  var $TA$Game$Light$new = ($pos=>($rad=>($rng=>($sub=>($add=>($new=>$new($pos)($rad)($rng)($sub)($add)))))));
  var $TA$Thing$illumine = ($self=>($from_tik=>($to_tik=>($lights=>($curr_tik=>elim_bool($F64$is_between($from_tik)($to_tik)($curr_tik))($TA$Thing$set_lit($self)($lights))($TA$Thing$set_lit($self)($List$nil)))($TA$Thing$get_tik($self))))));
  var $TA$Thing$poste_fun = ($self=>($self$pos=>($new_pos=>($self=>($self=>($lpos=>($lrng=>($lrad=>($lsub=>($ladd=>($lght=>($self=>$self)($TA$Thing$illumine($self)($F64$0)($F64$parse(`2147483648`))($List$cons($lght)($List$nil))))($TA$Game$Light$new($lpos)($lrad)($lrng)($lsub)($ladd)))($F64$V3$new($F64$parse(`0.72`))($F64$parse(`0.60`))($F64$parse(`0.24`))))($F64$V3$new($F64$0)($F64$0)($F64$0)))($F64$parse(`12`)))($F64$parse(`32.0`)))($self$pos(($self$pos$x=>($self$pos$y=>($self$pos$z=>$F64$V3$new($self$pos$x)($self$pos$y)($F64$parse(`52`))))))))($TA$Thing$set_mid($self)($POSTE_IDLE_000)))($TA$Thing$set_pos($self)($new_pos)))($F64$V3$new($F64$0)($F64$0)($F64$0)))($TA$Thing$get_pos($self)));
  var $TA$Game$Effect$slow = ($dur=>($val=>($heal=>($damage=>($repulse=>($impulse=>($slow=>($haste=>($shield=>($silence=>($root=>($stun=>($teleport=>$slow($dur)($val))))))))))))));
  var $TA$Constants$ONE_SEC = $F64$parse(`24`);
  var $TA$Thing$puddledmg_fun = ($self=>($self$pos=>($self$dir=>($new_pos=>($self=>($new_dir=>($self=>($self=>($self=>($self=>($effs=>($hits=>($eff_slow=>($slow=>($self=>($self=>($self=>($self=>($self=>($self=>($self=>$self)($TA$Thing$cast($self)($F64$parse(`52`))($hits)))($TA$Thing$cast($self)($F64$parse(`44`))($hits)))($TA$Thing$cast($self)($F64$parse(`38`))($hits)))($TA$Thing$cast($self)($F64$parse(`30`))($hits)))($TA$Thing$cast($self)($F64$parse(`26`))($hits)))($TA$Thing$cast($self)($F64$parse(`18`))($hits)))($TA$Thing$cast($self)($F64$parse(`10`))($slow)))($List$cons($TA$Game$Hit$new($eff_slow)($self$pos)($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`48`))))($List$nil)))($List$cons($TA$Game$Effect$slow($F64$mul($TA$Constants$ONE_SEC)($F64$parse(`3`)))($F64$parse(`0.7`)))($List$nil)))($List$cons($TA$Game$Hit$new($effs)($self$pos)($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`48`))))($List$nil)))($List$cons($TA$Game$Effect$damage($F64$1))($List$nil)))($TA$Thing$animate($self)($F64$0)($DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000)($F64$parse(`29`))($F64$parse(`58`))))($TA$Thing$set_mid($self)($DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000)))($TA$Thing$set_box($self)($TA$Game$Hitbox$nbox)))($TA$Thing$set_dir($self)($new_dir)))($F64$V3$new($F64$parse(`0.7071`))($F64$parse(`0.7071`))($F64$0)))($TA$Thing$set_pos($self)($new_pos)))($F64$V3$new($F64$parse(`100`))($F64$parse(`-100`))($F64$0)))($TA$Thing$get_dir($self)))($TA$Thing$get_pos($self)));
  var $DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_015 = $F64$parse(`449`);
  var $TA$Thing$puddleheal_fun = ($self=>($self$pos=>($self$dir=>($new_pos=>($self=>($new_dir=>($self=>($self=>($self=>($self=>($self=>($effs=>($hits=>($self=>($self=>($self=>($self=>$self)($TA$Thing$cast($self)($F64$parse(`10`))($hits)))($TA$Thing$cast($self)($F64$parse(`10`))($hits)))($TA$Thing$cast($self)($F64$parse(`10`))($hits)))($TA$Thing$cast($self)($F64$parse(`10`))($hits)))($List$cons($TA$Game$Hit$new($effs)($self$pos)($self$dir)($TA$Game$Hitbox$cbox($F64$parse(`42`))))($List$nil)))($List$cons($TA$Game$Effect$heal($F64$parse(`2`)))($List$nil)))($TA$Thing$animate($self)($F64$0)($DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_015)($F64$parse(`9`))($F64$parse(`36`))))($TA$Thing$set_mid($self)($DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_015)))($TA$Thing$set_box($self)($TA$Game$Hitbox$nbox)))($TA$Thing$set_sid($self)($F64$0)))($TA$Thing$set_dir($self)($new_dir)))($F64$V3$new($F64$parse(`0.7071`))($F64$parse(`0.7071`))($F64$0)))($TA$Thing$set_pos($self)($new_pos)))($F64$V3$new($F64$parse(`130`))($F64$parse(`80`))($F64$0)))($TA$Thing$get_dir($self)))($TA$Thing$get_pos($self)));
  var $PUNCHINGBAG_IDLE_000 = $F64$parse(`582`);
  var $TA$Thing$punchingbag_fun = ($self=>($self$dmg=>($self$tik=>($smhp=>($self=>($self=>($div_aux=>($self=>($self=>$self)($TA$Thing$set_mid($self)(($pow=>($sin=>($re0=>($re1=>($ang=>$F64$add($PUNCHINGBAG_IDLE_000)($F64$floor($ang)))($F64$mod($re1)($F64$parse(`24`))))($F64$add($F64$add($re0)($F64$parse(`24`)))($F64$parse(`0.5`))))($F64$mul($F64$mul($sin)($F64$parse(`12`)))($pow)))($F64$sin($F64$div($self$tik)($F64$parse(`6`)))))($F64$max($F64$0)($F64$min($F64$1)($F64$div($self$dmg)($smhp)))))))($TA$Thing$set_dmg($self)($F64$sub($self$dmg)($div_aux))))($F64$div($F64$parse(`2`))($F64$parse(`24`))))($TA$Thing$set_dir($self)($F64$V3$new($F64$parse(`0.707`))($F64$parse(`-0.707`))($F64$0))))($TA$Thing$set_mhp($self)($smhp)))($F64$parse(`32`)))($TA$Thing$get_tik($self)))($TA$Thing$get_dmg($self)));
  var $WALL_IDLE_000 = $F64$parse(`606`);
  var $TA$Thing$wall_fun = ($self=>($new_pos=>($self=>($new_dir=>($self=>($self=>($boxw=>($boxh=>($new_pbox=>$self)($List$cons($F64$V3$new($F64$mul($boxw)($F64$_1))($F64$mul($boxh)($F64$_1))($F64$0))($List$cons($F64$V3$new($F64$mul($boxw)($F64$_1))($F64$mul($boxh)($F64$_1))($F64$0))($List$cons($F64$V3$new($F64$mul($boxw)($F64$_1))($F64$mul($boxh)($F64$_1))($F64$0))($List$cons($F64$V3$new($F64$mul($boxw)($F64$_1))($F64$mul($boxh)($F64$_1))($F64$0))($List$nil))))))($F64$parse(`7`)))($F64$parse(`60`)))($TA$Thing$set_mid($self)($WALL_IDLE_000)))($TA$Thing$set_dir($self)($new_dir)))($F64$V3$new($F64$parse(`0.7071`))($F64$parse(`0.7071`))($F64$0)))($TA$Thing$set_pos($self)($new_pos)))($F64$V3$new($F64$parse(`-64`))($F64$parse(`64`))($F64$0)));
  var $Exports$new = ($new=>($add=>$new));
  var $Exports$TA = $Exports$add($List$nil)($Exports$add($List$cons)($Exports$add($F64$V3$polygon_to_segments)($Exports$add($F64$V3$look_at)($Exports$add($TA$Game$get_position_by_pid)($Exports$add($TA$Game$map_stage)($Exports$add($TA$Game$Command$new)($Exports$add($TA$Game$Input$sdir)($Exports$add($TA$Game$Input$key0)($Exports$add($TA$Game$Input$key1)($Exports$add($TA$Game$Input$key2)($Exports$add($TA$Game$Input$key3)($Exports$add($TA$Game$Input$key4)($Exports$add($TA$Game$Input$key5)($Exports$add($TA$exec_command)($Exports$add($TA$Thing$new)($Exports$add($TA$Thing$set_fun)($Exports$add($TA$Thing$set_sid)($Exports$add($TA$Thing$set_pid)($Exports$add($TA$Thing$set_pos)($Exports$add($TA$Thing$set_nam)($Exports$add($TA$Game$Game$new)($Exports$add($TA$exec_turn)($Exports$add($TA$Thing$bleskape_fun)($Exports$add($TA$Thing$dilma_fun)($Exports$add($TA$Thing$dilma$stocking_wind_fun)($Exports$add($TA$Thing$dilma$confusion_fun)($Exports$add($TA$Thing$dorime$blessing_fun)($Exports$add($TA$Thing$dorime$gods_chamber_fun)($Exports$add($TA$Thing$dorime$holy_flame_fun)($Exports$add($TA$Thing$dorime$leptospirose_puddle_pot_fun)($Exports$add($TA$Thing$dorime$leptospirose_puddle_fun)($Exports$add($TA$Thing$dorime_fun)($Exports$add($TA$Thing$get_fun)($Exports$add($TA$Thing$poste_fun)($Exports$add($TA$Thing$puddledmg_fun)($Exports$add($TA$Thing$puddleheal_fun)($Exports$add($TA$Thing$punchingbag_fun)($Exports$add($TA$Thing$set_fun)($Exports$add($TA$Thing$wall_fun)($Exports$new))))))))))))))))))))))))))))))))))))))));
  return {
    'Exports.add': $Exports$add,
    'List.nil': $List$nil,
    'List.cons': $List$cons,
    'List.fold': $List$fold,
    'List': $List,
    'F64.atan': $F64$atan,
    'F64.mul': $F64$mul,
    'F64.cos': $F64$cos,
    'F64.sin': $F64$sin,
    'F64.sub': $F64$sub,
    'F64.add': $F64$add,
    'F64.V3.new': $F64$V3$new,
    'F64.V3.add': $F64$V3$add,
    'F64.V3.polygon_to_segments.transform': $F64$V3$polygon_to_segments$transform,
    'F64.Segment.new': $F64$Segment$new,
    'F64.V3.polygon_to_segments.nil': $F64$V3$polygon_to_segments$nil,
    'Maybe.some': $Maybe$some,
    'Maybe': $Maybe,
    'F64.V3.polygon_to_segments.cons': $F64$V3$polygon_to_segments$cons,
    'Maybe.none': $Maybe$none,
    'F64.V3.polygon_to_segments': $F64$V3$polygon_to_segments,
    'Cmp.ltn': $Cmp$ltn,
    'Cmp.gtn': $Cmp$gtn,
    'Word.cmp.aux': $Word$cmp$aux,
    'Cmp.eql': $Cmp$eql,
    'Word.cmp': $Word$cmp,
    'Bool.false': $Bool$false,
    'Bool.true': $Bool$true,
    'Word.eql': $Word$eql,
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
    'F64.eql': $F64$eql,
    'Bool.and': $Bool$and,
    'F64.V3.eql': $F64$V3$eql,
    'F64.V3.sub': $F64$V3$sub,
    'Newtype': $Newtype,
    'Word': $Word,
    'String.cons': $String$cons,
    'Word.0': $Word$0,
    'Word.1': $Word$1,
    'Word.nil': $Word$nil,
    'U16.new': $U16$new,
    'Char.new': $Char$new,
    'Bit.0': $Bit$0,
    'Bit.1': $Bit$1,
    'String.nil': $String$nil,
    'F64.new': $F64$new,
    'Bits.nil': $Bits$nil,
    'Word.from_bits': $Word$from_bits,
    'U16.eql': $U16$eql,
    'Char.parse.type': $Char$parse$type,
    'Unit.new': $Unit$new,
    'Char.parse': $Char$parse,
    'Bits.1': $Bits$1,
    'Bits.0': $Bits$0,
    'Bits.from_string': $Bits$from_string,
    'F64.parse_binary': $F64$parse_binary,
    'F64.0': $F64$0,
    'F64.div': $F64$div,
    'F64.1': $F64$1,
    'F64.pow': $F64$pow,
    'F64.V3.len': $F64$V3$len,
    'F64.V3.norm': $F64$V3$norm,
    'F64.V3.look_at': $F64$V3$look_at,
    'List.find': $List$find,
    'TA.Thing.get_pid': $TA$Thing$get_pid,
    'TA.Thing.get_by_pid.cond': $TA$Thing$get_by_pid$cond,
    'TA.Thing.get_by_pid': $TA$Thing$get_by_pid,
    'TA.Thing.get_pos': $TA$Thing$get_pos,
    'TA.Game.get_position_by_pid': $TA$Game$get_position_by_pid,
    'List.map': $List$map,
    'TA.Game.Game.new': $TA$Game$Game$new,
    'TA.Game.map_stage': $TA$Game$map_stage,
    'TA.Game.Command.new': $TA$Game$Command$new,
    'TA.Game.Input.sdir': $TA$Game$Input$sdir,
    'TA.Game.Input.key0': $TA$Game$Input$key0,
    'TA.Game.Input.key1': $TA$Game$Input$key1,
    'TA.Game.Input.key2': $TA$Game$Input$key2,
    'TA.Game.Input.key3': $TA$Game$Input$key3,
    'TA.Game.Input.key4': $TA$Game$Input$key4,
    'TA.Game.Input.key5': $TA$Game$Input$key5,
    'TA.Thing.get_buf': $TA$Thing$get_buf,
    'TA.Thing.is_silenced': $TA$Thing$is_silenced,
    'TA.Thing.is_stunned': $TA$Thing$is_stunned,
    'TA.Thing.get_act': $TA$Thing$get_act,
    'TA.Thing.get_trg': $TA$Thing$get_trg,
    'TA.Thing.get_tik': $TA$Thing$get_tik,
    'TA.Thing.new': $TA$Thing$new,
    'TA.Thing.set_act': $TA$Thing$set_act,
    'Bool.eql': $Bool$eql,
    'Bool.if': $Bool$if,
    'TA.Thing.set_trg': $TA$Thing$set_trg,
    'TA.Thing.set_tik': $TA$Thing$set_tik,
    'TA.Game.init_act': $TA$Game$init_act,
    'TA.Thing.set_pad': $TA$Thing$set_pad,
    'F64.2': $F64$2,
    'F64.parse': $F64$parse,
    'TA.Game.with_thing.effect': $TA$Game$with_thing$effect,
    'TA.Game.with_thing': $TA$Game$with_thing,
    'TA.exec_command': $TA$exec_command,
    'TA.Thing.set_fun': $TA$Thing$set_fun,
    'TA.Thing.set_sid': $TA$Thing$set_sid,
    'TA.Thing.set_pid': $TA$Thing$set_pid,
    'TA.Thing.set_pos': $TA$Thing$set_pos,
    'TA.Thing.set_nam': $TA$Thing$set_nam,
    'TA.Thing.get_dir': $TA$Thing$get_dir,
    'TA.Thing.get_box': $TA$Thing$get_box,
    'TA.Thing.get_sid': $TA$Thing$get_sid,
    'TA.Thing.get_hit': $TA$Thing$get_hit,
    'F64.sqrt': $F64$sqrt,
    'F64.V3.sqr_dist': $F64$V3$sqr_dist,
    'F64.V3.dist': $F64$V3$dist,
    'F64.cmp': $F64$cmp,
    'F64.ltn': $F64$ltn,
    'F64.V3.scale': $F64$V3$scale,
    'F64.max': $F64$max,
    'F64.min': $F64$min,
    'F64.V3.point_segment_sqrdist': $F64$V3$point_segment_sqrdist,
    'F64.V3.point_segment_dist': $F64$V3$point_segment_dist,
    'F64.V3.rot_90': $F64$V3$rot_90,
    'TA.collide_with': $TA$collide_with,
    'TA.Thing.get_dmg': $TA$Thing$get_dmg,
    'TA.Thing.set_dmg': $TA$Thing$set_dmg,
    'Pair.new': $Pair$new,
    'Pair': $Pair,
    'F64.Ordering.EQ': $F64$Ordering$EQ,
    'F64.Ordering.GT': $F64$Ordering$GT,
    'F64.Ordering.LT': $F64$Ordering$LT,
    'F64.compare_numbers': $F64$compare_numbers,
    'TA.Game.Buff.shielded': $TA$Game$Buff$shielded,
    'TA.Game.use_shields': $TA$Game$use_shields,
    'Pair.fst': $Pair$fst,
    'Pair.snd': $Pair$snd,
    'TA.Thing.set_buf': $TA$Thing$set_buf,
    'TA.Thing.handle_shields': $TA$Thing$handle_shields,
    'TA.Thing.set_knk': $TA$Thing$set_knk,
    'TA.Game.Buff.slowed': $TA$Game$Buff$slowed,
    'TA.Game.Buff.hasted': $TA$Game$Buff$hasted,
    'TA.Game.Buff.silenced': $TA$Game$Buff$silenced,
    'TA.Game.Buff.rooted': $TA$Game$Buff$rooted,
    'TA.Game.Buff.stuned': $TA$Game$Buff$stuned,
    'TA.interact_with': $TA$interact_with,
    'TA.Thing.set_hit': $TA$Thing$set_hit,
    'TA.Thing.get_rst': $TA$Thing$get_rst,
    'TA.Game.Hitbox.cbox': $TA$Game$Hitbox$cbox,
    'TA.Thing.set_vel': $TA$Thing$set_vel,
    'TA.Thing.set_bst': $TA$Thing$set_bst,
    'TA.Thing.set_box': $TA$Thing$set_box,
    'TA.Thing.set_lit': $TA$Thing$set_lit,
    'TA.Thing.set_rst': $TA$Thing$set_rst,
    'TA.Thing.get_bst': $TA$Thing$get_bst,
    'TA.Game.combine_mov_buffs': $TA$Game$combine_mov_buffs,
    'TA.Thing.speed_multiplier_of': $TA$Thing$speed_multiplier_of,
    'TA.Thing.get_mov': $TA$Thing$get_mov,
    'TA.Thing.get_pad': $TA$Thing$get_pad,
    'TA.Thing.update_buff_dur': $TA$Thing$update_buff_dur,
    'TA.Thing.get_knk': $TA$Thing$get_knk,
    'TA.Thing.get_wei': $TA$Thing$get_wei,
    'F64.gtn': $F64$gtn,
    'TA.Thing.get_fun': $TA$Thing$get_fun,
    'TA.Thing.get_chi': $TA$Thing$get_chi,
    'TA.Thing.set_chi': $TA$Thing$set_chi,
    'F64.V3.get_z': $F64$V3$get_z,
    'F64.V3.get_y': $F64$V3$get_y,
    'TA.Thing.get_mhp': $TA$Thing$get_mhp,
    'TA.Thing.get_die': $TA$Thing$get_die,
    'Bool.or': $Bool$or,
    'List.concat': $List$concat,
    'TA.fold_with_context': $TA$fold_with_context,
    'TA.exec_turn': $TA$exec_turn,
    'TA.Thing.set_mov': $TA$Thing$set_mov,
    'TA.Thing.set_mhp': $TA$Thing$set_mhp,
    'F64.if': $F64$if,
    'F64.from_bool': $F64$from_bool,
    'TA.Thing.is_walking': $TA$Thing$is_walking,
    'F64.is_between': $F64$is_between,
    'TA.Thing.set_dir': $TA$Thing$set_dir,
    'TA.Thing.targ_dir': $TA$Thing$targ_dir,
    'TA.Thing.set_mid': $TA$Thing$set_mid,
    'F64.mod': $F64$mod,
    'F64.floor': $F64$floor,
    'TA.Thing.animate_between': $TA$Thing$animate_between,
    'TA.Thing.reset': $TA$Thing$reset,
    'TA.Thing.animate': $TA$Thing$animate,
    'BLESKAPE_WALK_000': $BLESKAPE_WALK_000,
    'BLESKAPE_IDLE_000': $BLESKAPE_IDLE_000,
    'BLESKAPE_SHOCK_BALL_000': $BLESKAPE_SHOCK_BALL_000,
    'TA.Game.Effect.damage': $TA$Game$Effect$damage,
    'TA.Game.Effect.impulse': $TA$Game$Effect$impulse,
    'TA.Game.Hit.new': $TA$Game$Hit$new,
    'TA.Thing.at_dist': $TA$Thing$at_dist,
    'TA.Thing.cast': $TA$Thing$cast,
    'BLESKAPE_DEFENSE_MODE_000': $BLESKAPE_DEFENSE_MODE_000,
    'BLESKAPE_DEFENSE_MODE_002': $BLESKAPE_DEFENSE_MODE_002,
    'BLESKAPE_SHOCK_GROUND_WAVE_000': $BLESKAPE_SHOCK_GROUND_WAVE_000,
    'BLESKAPE_SUPREME_PUNCH_SEQUENCE_000': $BLESKAPE_SUPREME_PUNCH_SEQUENCE_000,
    'BLESKAPE_DASH_000': $BLESKAPE_DASH_000,
    'TA.Thing.is_rooted': $TA$Thing$is_rooted,
    'TA.Thing.dash': $TA$Thing$dash,
    'TA.Game.Effect.repulse': $TA$Game$Effect$repulse,
    'BLESKAPE_TAUNT_000': $BLESKAPE_TAUNT_000,
    'TA.Thing.bleskape_fun': $TA$Thing$bleskape_fun,
    'DILMA_WALK_000': $DILMA_WALK_000,
    'DILMA_IDLE_000': $DILMA_IDLE_000,
    'DILMA_PROTECTION_000': $DILMA_PROTECTION_000,
    'DILMA_PROTECTION_007': $DILMA_PROTECTION_007,
    'DILMA_CONFUSION_CASTING_000': $DILMA_CONFUSION_CASTING_000,
    'DILMA_CONFUSION_CASTING_016': $DILMA_CONFUSION_CASTING_016,
    'Map.new': $Map$new,
    'F64._1': $F64$_1,
    'TA.Thing.new_thing': $TA$Thing$new_thing,
    'TA.Thing.set_die': $TA$Thing$set_die,
    'TA.Thing.die': $TA$Thing$die,
    'TA.Thing.animate_die': $TA$Thing$animate_die,
    'DILMA_CONFUSION_ANIM_000': $DILMA_CONFUSION_ANIM_000,
    'TA.Thing.dilma.confusion_fun': $TA$Thing$dilma$confusion_fun,
    'TA.Thing.spawn': $TA$Thing$spawn,
    'TA.Thing.move': $TA$Thing$move,
    'TA.Thing.at_max_dist': $TA$Thing$at_max_dist,
    'DILMA_SALUTING_THE_CASSAVA_000': $DILMA_SALUTING_THE_CASSAVA_000,
    'DILMA_STOCKING_WIND_CASTING_000': $DILMA_STOCKING_WIND_CASTING_000,
    'DILMA_STOCKING_WIND_ANIM_000': $DILMA_STOCKING_WIND_ANIM_000,
    'TA.Thing.dilma.stocking_wind_fun': $TA$Thing$dilma$stocking_wind_fun,
    'TA.Game.Hitbox.nbox': $TA$Game$Hitbox$nbox,
    'DILMA_TAUNT_000': $DILMA_TAUNT_000,
    'TA.Thing.dilma_fun': $TA$Thing$dilma_fun,
    'DORIME_BLESSING_FOR_WHO_DESERVE_PROJECTILE_000': $DORIME_BLESSING_FOR_WHO_DESERVE_PROJECTILE_000,
    'TA.Thing.dorime.blessing_fun': $TA$Thing$dorime$blessing_fun,
    'DORIME_GODS_CHAMBER_HEAL_CIRCLE_000': $DORIME_GODS_CHAMBER_HEAL_CIRCLE_000,
    'DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_000': $DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_000,
    'TA.Game.Effect.heal': $TA$Game$Effect$heal,
    'TA.Thing.dorime.gods_chamber_fun': $TA$Thing$dorime$gods_chamber_fun,
    'DORIME_HOLY_FLAME_PILLAR_000': $DORIME_HOLY_FLAME_PILLAR_000,
    'TA.Thing.dorime.holy_flame_fun': $TA$Thing$dorime$holy_flame_fun,
    'DORIME_LEPTOSPIROSE_CURSE_POT_000': $DORIME_LEPTOSPIROSE_CURSE_POT_000,
    'DORIME_LEPTOSPIROSE_CURSE_PUDDLE_000': $DORIME_LEPTOSPIROSE_CURSE_PUDDLE_000,
    'DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000': $DORIME_LEPTOSPIROSE_CURSE_PUDDLE_IDLE_000,
    'TA.Thing.dorime.leptospirose_puddle_fun': $TA$Thing$dorime$leptospirose_puddle_fun,
    'TA.Thing.dorime.leptospirose_puddle_pot_fun': $TA$Thing$dorime$leptospirose_puddle_pot_fun,
    'DORIME_WALK_CYCLE_000': $DORIME_WALK_CYCLE_000,
    'DORIME_IDLE_000': $DORIME_IDLE_000,
    'DORIME_BLESSING_FOR_WHO_DESERVE_000': $DORIME_BLESSING_FOR_WHO_DESERVE_000,
    'DORIME_LEPTOSPIROSE_CURSE_CAST_ANIMATION_000': $DORIME_LEPTOSPIROSE_CURSE_CAST_ANIMATION_000,
    'DORIME_HOLY_FLAME_CAST_ANIMATION_000': $DORIME_HOLY_FLAME_CAST_ANIMATION_000,
    'DORIME_JESUS_POWER_000': $DORIME_JESUS_POWER_000,
    'TA.Thing.dorime.jesus_power': $TA$Thing$dorime$jesus_power,
    'DORIME_GODS_CHAMBER_CAST_ANIMATION_000': $DORIME_GODS_CHAMBER_CAST_ANIMATION_000,
    'DORIME_TAUNT_000': $DORIME_TAUNT_000,
    'DORIME_TAUNT_002': $DORIME_TAUNT_002,
    'TA.Thing.dorime_fun': $TA$Thing$dorime_fun,
    'POSTE_IDLE_000': $POSTE_IDLE_000,
    'TA.Game.Light.new': $TA$Game$Light$new,
    'TA.Thing.illumine': $TA$Thing$illumine,
    'TA.Thing.poste_fun': $TA$Thing$poste_fun,
    'TA.Game.Effect.slow': $TA$Game$Effect$slow,
    'TA.Constants.ONE_SEC': $TA$Constants$ONE_SEC,
    'TA.Thing.puddledmg_fun': $TA$Thing$puddledmg_fun,
    'DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_015': $DORIME_GODS_CHAMBER_HEAL_CIRCLE_IDLE_015,
    'TA.Thing.puddleheal_fun': $TA$Thing$puddleheal_fun,
    'PUNCHINGBAG_IDLE_000': $PUNCHINGBAG_IDLE_000,
    'TA.Thing.punchingbag_fun': $TA$Thing$punchingbag_fun,
    'WALL_IDLE_000': $WALL_IDLE_000,
    'TA.Thing.wall_fun': $TA$Thing$wall_fun,
    'Exports.new': $Exports$new,
    'Exports.TA': $Exports$TA,
  };
})();
console.log(module.exports['Exports.TA']);
