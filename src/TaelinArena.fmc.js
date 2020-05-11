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
  var $List$fold = ($nil=>($cons=>($list=>$list($nil)(($list$head=>($list$tail=>$cons($list$head)($List$fold($nil)($cons)($list$tail))))))));
  var $List = ($A=>(void 0));
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
  var $Maybe = ($A=>(void 0));
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
  var $F64$new = ($a=>inst_f64(($f64=>$f64($a))));
  var $Word = ($size=>(void 0));
  var $Word$nil = ($we=>($w0=>($w1=>$we)));
  var $Word$0 = ($wo=>($we=>($w0=>($w1=>$w0($wo)))));
  var $Bits$nil = inst_bits(($be=>($b0=>($b1=>$be))));
  var $Word$1 = ($wo=>($we=>($w0=>($w1=>$w1($wo)))));
  var $Word$from_bits = ($size=>($bits=>elim_nat($size)($Word$nil)(($size$pred=>elim_bits($bits)($Word$0($Word$from_bits($size$pred)($Bits$nil)))(($bits$pred=>$Word$0($Word$from_bits($size$pred)($bits$pred))))(($bits$pred=>$Word$1($Word$from_bits($size$pred)($bits$pred))))))));
  var $U16$eql = a=>b=>a===b;
  var $Char$parse$type = ($str=>(void 0));
  var $Unit$new = inst_unit(($unit=>$unit));
  var $Char$parse = ($str=>elim_string($str)($Unit$new)(($str$head=>($str$tail=>$str$head))));
  var $String$cons = ($head=>($tail=>inst_string(($strnil=>($strcons=>$strcons($head)($tail))))));
  var $U16$new = ($a=>inst_u16(($u16=>$u16($a))));
  var $Char$new = ($b0=>($b1=>($b2=>($b3=>($b4=>($b5=>($b6=>($b7=>($b8=>($b9=>($bA=>($bB=>($bC=>($bD=>($bE=>($bF=>($kF=>($kE=>($kD=>($kC=>($kB=>($kA=>($k9=>($k8=>($k7=>($k6=>($k5=>($k4=>($k3=>($k2=>($k1=>($k0=>($k_=>$U16$new($k0($k1($k2($k3($k4($k5($k6($k7($k8($k9($kA($kB($kC($kD($kE($kF($k_))))))))))))))))))($Word$nil))($bF($Word$0)($Word$1)))($bE($Word$0)($Word$1)))($bD($Word$0)($Word$1)))($bC($Word$0)($Word$1)))($bB($Word$0)($Word$1)))($bA($Word$0)($Word$1)))($b9($Word$0)($Word$1)))($b8($Word$0)($Word$1)))($b7($Word$0)($Word$1)))($b6($Word$0)($Word$1)))($b5($Word$0)($Word$1)))($b4($Word$0)($Word$1)))($b3($Word$0)($Word$1)))($b2($Word$0)($Word$1)))($b1($Word$0)($Word$1)))($b0($Word$0)($Word$1))))))))))))))))));
  var $Bit$0 = ($o=>($i=>$o));
  var $Bit$1 = ($o=>($i=>$i));
  var $String$nil = inst_string(($strnil=>($strcons=>$strnil)));
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
  var $TaelinArena$Game$get_thing_pid = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$pid))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_by_pid$cond = ($pid=>($thi=>($thi$pid=>$F64$eql($pid)($thi$pid))($TaelinArena$Game$get_thing_pid($thi))));
  var $TaelinArena$Game$get_thing_by_pid = ($pid=>($gm=>$gm(($gm$stage=>$List$find($TaelinArena$Game$get_thing_by_pid$cond($pid))($gm$stage)))));
  var $TaelinArena$Game$get_thing_pos = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$pos))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_position_by_pid = ($pid=>($gm=>$TaelinArena$Game$get_thing_by_pid($pid)($gm)($F64$V3$new($F64$0)($F64$0)($F64$0))(($found=>$TaelinArena$Game$get_thing_pos($found)))));
  var $List$map = ($fn=>($list=>$list($List$nil)(($list$head=>($list$tail=>$List$cons($fn($list$head))($List$map($fn)($list$tail)))))));
  var $TaelinArena$Game$Game$new = ($stage=>($new=>$new($stage)));
  var $TaelinArena$Game$map_stage = ($fn=>($gm=>$gm(($gm$stage=>($new_stage=>$TaelinArena$Game$Game$new($new_stage))($List$map($fn)($gm$stage))))));
  var $TaelinArena$Game$Command$new = ($pid=>($inp=>($new=>$new($pid)($inp))));
  var $TaelinArena$Game$Input$sdir = ($dir=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$sdir($dir))))))))));
  var $TaelinArena$Game$Input$key0 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key0($pos))))))))));
  var $TaelinArena$Game$Input$key1 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key1($pos))))))))));
  var $TaelinArena$Game$Input$key2 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key2($pos))))))))));
  var $TaelinArena$Game$Input$key3 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key3($pos))))))))));
  var $TaelinArena$Game$Input$key4 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key4($pos))))))))));
  var $TaelinArena$Game$Input$key5 = ($pos=>($sdir=>($key0=>($key1=>($key2=>($key3=>($key4=>($key5=>($cmsg=>$key5($pos))))))))));
  var $TaelinArena$Game$get_thing_buf = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$buf))))))))))))))))))))))))))));
  var $TaelinArena$Game$is_silenced = ($self=>($self$buf=>($is_silenced=>($found_buf=>$found_buf($Bool$false)(($value=>$Bool$true)))($List$find($is_silenced)($self$buf)))(($buff=>$buff(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>$Bool$true))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$true)))))($TaelinArena$Game$get_thing_buf($self)));
  var $TaelinArena$Game$is_stunned = ($self=>($self$buf=>($is_stunned=>($found_buf=>$found_buf($Bool$false)(($value=>$Bool$true)))($List$find($is_stunned)($self$buf)))(($buff=>$buff(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>($buff$val=>$Bool$false)))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$false))(($buff$dur=>$Bool$true)))))($TaelinArena$Game$get_thing_buf($self)));
  var $TaelinArena$Game$get_thing_act = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$act))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_trg = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$trg))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_tik = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$tik))))))))))))))))))))))))))));
  var $TaelinArena$Game$Thing$new = ($fun=>($pid=>($mid=>($act=>($sid=>($stt=>($nam=>($lit=>($tik=>($pos=>($mov=>($bst=>($pad=>($dir=>($trg=>($vel=>($box=>($wei=>($mhp=>($dmg=>($knk=>($buf=>($chi=>($hit=>($rst=>($die=>($new=>$new($fun)($pid)($mid)($act)($sid)($stt)($nam)($lit)($tik)($pos)($mov)($bst)($pad)($dir)($trg)($vel)($box)($wei)($mhp)($dmg)($knk)($buf)($chi)($hit)($rst)($die))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_act = ($thi=>($new_act=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($new_act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Bool$eql = ($a=>($b=>elim_bool($a)(elim_bool($b)($Bool$true)($Bool$false))(elim_bool($b)($Bool$false)($Bool$true))));
  var $Bool$if = x=>ct=>cf=>x?ct:cf;
  var $TaelinArena$Game$set_thing_trg = ($thi=>($new_trg=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($new_trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_tik = ($thi=>($new_tik=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($new_tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$init_act = ($self=>($new_act=>($new_trg=>($self$act=>($self$trg=>($self$tik=>($act_eql_0=>($self=>($self=>($self=>$self)($TaelinArena$Game$set_thing_tik($self)($Bool$if($act_eql_0)($F64$0)($self$tik))))($TaelinArena$Game$set_thing_trg($self)($Bool$if($act_eql_0)($new_trg)($self$trg))))($TaelinArena$Game$set_thing_act($self)($Bool$if($act_eql_0)($new_act)($self$act))))($F64$eql($self$act)($F64$0)))($TaelinArena$Game$get_thing_tik($self)))($TaelinArena$Game$get_thing_trg($self)))($TaelinArena$Game$get_thing_act($self)))));
  var $TaelinArena$Game$set_thing_pad = ($thi=>($new_pad=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($new_pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $F64$2 = $F64$parse_binary(`0000000000000000000000000000000000000000000000000000000000000010`);
  var $F64$parse = $F64$parse;
  var $TaelinArena$Game$with_thing$effect = ($pid=>($fn=>($thi=>($thi$pid=>elim_bool($F64$eql($pid)($thi$pid))($fn($thi))($thi))($TaelinArena$Game$get_thing_pid($thi)))));
  var $TaelinArena$Game$with_thing = ($pid=>($fn=>($gm=>$TaelinArena$Game$map_stage($TaelinArena$Game$with_thing$effect($pid)($fn))($gm))));
  var $TaelinArena$exec_command = ($cmd=>($gm=>$cmd(($cmd$pid=>($cmd$inp=>($fn=>$TaelinArena$Game$with_thing($cmd$pid)($fn)($gm))(($this=>($inp=>($is_silenced=>($is_stunned=>elim_bool($is_stunned)($inp(($sdir$dir=>$TaelinArena$Game$init_act($this)($F64$0)($sdir$dir)))(($key0$pos=>$this))(($key1$pos=>$this))(($key2$pos=>$this))(($key3$pos=>$this))(($key4$pos=>$this))(($key5$pos=>$this))(($cmsg$txt=>$this)))(elim_bool($is_silenced)($inp(($sdir$dir=>$TaelinArena$Game$set_thing_pad($this)($sdir$dir)))(($key0$pos=>$this))(($key1$pos=>$this))(($key2$pos=>$this))(($key3$pos=>$this))(($key4$pos=>$this))(($key5$pos=>$this))(($cmsg$txt=>$this)))($inp(($sdir$dir=>$TaelinArena$Game$set_thing_pad($this)($sdir$dir)))(($key0$pos=>$TaelinArena$Game$init_act($this)($F64$1)($key0$pos)))(($key1$pos=>$TaelinArena$Game$init_act($this)($F64$2)($key1$pos)))(($key2$pos=>$TaelinArena$Game$init_act($this)($F64$parse(`3`))($key2$pos)))(($key3$pos=>$TaelinArena$Game$init_act($this)($F64$parse(`4`))($key3$pos)))(($key4$pos=>$TaelinArena$Game$init_act($this)($F64$parse(`5`))($key4$pos)))(($key5$pos=>$TaelinArena$Game$init_act($this)($F64$parse(`6`))($key5$pos)))(($cmsg$txt=>$this)))))($TaelinArena$Game$is_stunned($this)))($TaelinArena$Game$is_silenced($this)))($cmd$inp))))))));
  var $TaelinArena$Game$set_thing_fun = ($thi=>($new_fun=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($new_fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_sid = ($thi=>($new_sid=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($new_sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_pid = ($thi=>($new_pid=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($new_pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_pos = ($thi=>($new_pos=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($new_pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_nam = ($thi=>($new_nam=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($new_nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_dir = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$dir))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_box = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$box))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_sid = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$sid))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_hit = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$hit))))))))))))))))))))))))))));
  var $F64$sqrt = ($n=>$F64$pow($n)($F64$div($F64$1)($F64$2)));
  var $F64$V3$sqr_dist = ($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($two=>($x_diff=>($y_diff=>($z_diff=>$F64$add($x_diff)($F64$add($y_diff)($z_diff)))($F64$pow($F64$sub($a$z)($b$z))($two)))($F64$pow($F64$sub($a$y)($b$y))($two)))($F64$pow($F64$sub($a$x)($b$x))($two)))($F64$add($F64$1)($F64$1))))))))))));
  var $F64$V3$dist = ($a=>($b=>$F64$sqrt($F64$V3$sqr_dist($a)($b))));
  var $Word$ltn = ($a=>($b=>$Word$cmp($a)($b)($Bool$true)($Bool$false)($Bool$false)));
  var $F64$cmp = ($a=>($b=>elim_f64($a)(($a$word=>elim_f64($b)(($b$word=>elim_bool($F64$eql($a)($b))($Cmp$eql)(elim_bool($Word$ltn($a$word)($b$word))($Cmp$ltn)($Cmp$gtn))))))));
  var $F64$ltn = ($a=>($b=>$F64$cmp($a)($b)($Bool$true)($Bool$false)($Bool$false)));
  var $F64$V3$scale = ($k=>($v=>$v(($v$x=>($v$y=>($v$z=>($new_x=>($new_y=>($new_z=>$F64$V3$new($new_x)($new_y)($new_z))($F64$mul($k)($v$z)))($F64$mul($k)($v$y)))($F64$mul($k)($v$x))))))));
  var $F64$max = $F64$max;
  var $F64$min = $F64$min;
  var $F64$V3$point_segment_sqrdist = ($p=>($s=>$p(($p$x=>($p$y=>($p$z=>$s(($a=>($b=>$a(($a$x=>($a$y=>($a$z=>$b(($b$x=>($b$y=>($b$z=>($ab_x_diff_sqrd=>($ab_y_diff_sqrd=>($pa_x_diff=>($pa_y_diff=>($ba_x_diff=>($ba_y_diff=>($l=>($t=>($t=>($t=>($d=>($t_times_ba_x_diff=>($t_times_ba_y_diff=>($k=>($d=>($k=>($d=>$d)($F64$add($d)($k)))($F64$pow($F64$sub($p$y)($F64$add($a$y)($t_times_ba_y_diff)))($F64$2)))($F64$add($d)($k)))($F64$pow($F64$sub($p$x)($F64$add($a$x)($t_times_ba_x_diff)))($F64$2)))($F64$mul($t)($ba_y_diff)))($F64$mul($t)($ba_x_diff)))($F64$0))($F64$max($F64$0)($F64$min($F64$1)($t))))($F64$div($t)($l)))($F64$add($F64$mul($pa_x_diff)($ba_x_diff))($F64$mul($pa_y_diff)($ba_y_diff))))($F64$add($ab_x_diff_sqrd)($ab_y_diff_sqrd)))($F64$sub($b$y)($a$y)))($F64$sub($b$x)($a$x)))($F64$sub($p$y)($a$y)))($F64$sub($p$x)($a$x)))($F64$pow($F64$sub($a$y)($b$y))($F64$2)))($F64$pow($F64$sub($a$x)($b$x))($F64$2)))))))))))))))))));
  var $F64$V3$point_segment_dist = ($p=>($s=>$F64$sqrt($F64$V3$point_segment_sqrdist($p)($s))));
  var $F64$V3$rot_90 = ($v=>$v(($v$x=>($v$y=>($v$z=>$F64$V3$new($v$y)($F64$sub($F64$0)($v$x))($v$z))))));
  var $TaelinArena$collide_with = ($a_pos=>($a_dir=>($a_box=>($b_pos=>($b_dir=>($b_box=>($none=>$a_box($none)(($a_box$rad=>$b_box($none)(($b_box$rad=>($dst=>($rad=>($if_condition=>$Bool$if($if_condition)(($out_dir=>($out_vec=>$Maybe$some($out_vec))($F64$V3$scale($F64$sub($rad)($dst))($out_dir)))($F64$V3$norm($F64$V3$sub($a_pos)($b_pos))))($none))($Bool$and($F64$ltn($F64$0)($dst))($F64$ltn($dst)($rad))))($F64$add($a_box$rad)($b_box$rad)))($F64$V3$dist($a_pos)($b_pos))))(($b_box$pts=>($cons=>($segs=>$List$fold($none)($cons)($segs))($F64$V3$polygon_to_segments($b_pos)($b_dir)($b_box$pts)))(($segment=>($result=>$result($segment(($segment$a=>($segment$b=>($dst=>($rad=>$Bool$if($F64$ltn($dst)($rad))(($out_dir=>($out_vec=>$Maybe$some($out_vec))($F64$V3$scale($F64$sub($rad)($dst))($out_dir)))($F64$V3$rot_90($F64$V3$norm($F64$V3$sub($segment$a)($segment$b)))))($none))($a_box$rad))($F64$V3$point_segment_dist($a_pos)($segment))))))(($result$value=>$Maybe$some($result$value))))))))))(($a_box$pts=>$none)))($Maybe$none)))))));
  var $TaelinArena$Game$get_thing_dmg = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$dmg))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_dmg = ($thi=>($new_dmg=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($new_dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $Pair$new = ($a=>($b=>($pair=>$pair($a)($b))));
  var $Pair = ($A=>($B=>(void 0)));
  var $F64$Ordering$EQ = ($F64$Ordering$LT=>($F64$Ordering$EQ=>($F64$Ordering$GT=>$F64$Ordering$EQ)));
  var $F64$Ordering$GT = ($F64$Ordering$LT=>($F64$Ordering$EQ=>($F64$Ordering$GT=>$F64$Ordering$GT)));
  var $F64$Ordering$LT = ($F64$Ordering$LT=>($F64$Ordering$EQ=>($F64$Ordering$GT=>$F64$Ordering$LT)));
  var $F64$compare_numbers = ($a=>($b=>$Bool$if($F64$eql($a)($b))($F64$Ordering$EQ)($Bool$if($F64$ltn($b)($a))($F64$Ordering$GT)($F64$Ordering$LT))));
  var $TaelinArena$Game$Buff$shielded = ($dur=>($val=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$shielded($dur)($val)))))))));
  var $TaelinArena$Game$use_shields = ($buff=>($acc=>$acc(($acc$fst=>($acc$snd=>$buff(($buff$dur=>($buff$val=>$Bool$if($F64$eql($acc$fst)($F64$0))($acc)(($compare=>$compare(($remaining_shield_val=>($remaining_buf=>$Pair$new($F64$0)($remaining_buf))($List$cons($TaelinArena$Game$Buff$shielded($buff$dur)($remaining_shield_val))($acc$snd)))($F64$sub($buff$val)($acc$fst)))($Pair$new($F64$0)($acc$snd))(($remaining_dmg=>$Pair$new($remaining_dmg)($acc$snd))($F64$sub($acc$fst)($buff$val))))($F64$compare_numbers($acc$fst)($buff$val))))))(($buff$dur=>($buff$val=>$Pair$new($acc$fst)($List$cons($buff)($acc$snd)))))(($buff$dur=>($buff$val=>$Pair$new($acc$fst)($List$cons($buff)($acc$snd)))))(($buff$dur=>$Pair$new($acc$fst)($List$cons($buff)($acc$snd))))(($buff$dur=>$Pair$new($acc$fst)($List$cons($buff)($acc$snd))))(($buff$dur=>$Pair$new($acc$fst)($List$cons($buff)($acc$snd)))))))));
  var $Pair$fst = ($pair=>$pair(($a=>($b=>$a))));
  var $Pair$snd = ($pair=>$pair(($a=>($b=>$b))));
  var $TaelinArena$Game$set_thing_buf = ($thi=>($new_buf=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($new_buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$handle_shields = ($hit_dmg=>($self=>($self$buf=>($self$dmg=>($init_val=>($res=>($res$fst=>($res$snd=>($remaining_dmg=>($remaining_buf=>($self=>($self=>$self)($TaelinArena$Game$set_thing_buf($self)($remaining_buf)))($TaelinArena$Game$set_thing_dmg($self)($remaining_dmg)))($res$snd))($F64$add($res$fst)($self$dmg)))($Pair$snd($res)))($Pair$fst($res)))($List$fold($init_val)($TaelinArena$Game$use_shields)($self$buf)))($Pair$new($hit_dmg)($List$nil)))($TaelinArena$Game$get_thing_dmg($self)))($TaelinArena$Game$get_thing_buf($self))));
  var $TaelinArena$Game$set_thing_knk = ($thi=>($new_knk=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($new_knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$Buff$slowed = ($dur=>($val=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$slowed($dur)($val)))))))));
  var $TaelinArena$Game$Buff$hasted = ($dur=>($val=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$hasted($dur)($val)))))))));
  var $TaelinArena$Game$Buff$silenced = ($dur=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$silenced($dur))))))));
  var $TaelinArena$Game$Buff$rooted = ($dur=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$rooted($dur))))))));
  var $TaelinArena$Game$Buff$stuned = ($dur=>($shielded=>($slowed=>($hasted=>($silenced=>($rooted=>($stuned=>$stuned($dur))))))));
  var $TaelinArena$interact_with = ($this=>($that=>($this$pos=>($this$dir=>($this$box=>($this$buf=>($this$sid=>($that$pos=>($that$dir=>($that$box=>($that$hit=>($that$sid=>($out_vec=>($this=>($this=>$this)(($apply_hit=>$List$fold($this)($apply_hit)($that$hit))(($hit=>($this=>$hit(($hit$eff=>($hit$pos=>($hit$dir=>($hit$box=>($out_vec=>$out_vec($this)(($out_vec$value=>($compare_sid=>($apply_eff=>$List$fold($this)($apply_eff)($hit$eff))(($eff=>($this=>$eff(($eff$lif=>($this$dmg=>$Bool$if($compare_sid)($this)($TaelinArena$Game$set_thing_dmg($this)($F64$sub($this$dmg)($eff$lif))))($TaelinArena$Game$get_thing_dmg($this))))(($eff$dmg=>$Bool$if($compare_sid)($this)($TaelinArena$Game$handle_shields($eff$dmg)($this))))(($eff$mag=>$Bool$if($compare_sid)($this)(($v3=>($dir=>($vec=>$TaelinArena$Game$set_thing_knk($this)($vec))($F64$V3$scale($eff$mag)($dir)))($F64$V3$look_at($hit$pos)($this$pos)($v3)))($F64$V3$new($F64$1)($F64$0)($F64$0)))))(($eff$mag=>($eff$dir=>$Bool$if($compare_sid)($this)(($vec=>$TaelinArena$Game$set_thing_knk($this)($vec))($F64$V3$scale($eff$mag)($eff$dir))))))(($eff$dur=>($eff$val=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TaelinArena$Game$set_thing_buf($this)($updated_buffs))($List$cons($TaelinArena$Game$Buff$slowed($eff$dur)($eff$val))($this$buf))))))(($eff$dur=>($eff$val=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TaelinArena$Game$set_thing_buf($this)($updated_buffs))($List$cons($TaelinArena$Game$Buff$hasted($eff$dur)($eff$val))($this$buf))))))(($eff$dur=>($eff$val=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TaelinArena$Game$set_thing_buf($this)($updated_buffs))($List$cons($TaelinArena$Game$Buff$shielded($eff$dur)($eff$val))($this$buf))))))(($eff$dur=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TaelinArena$Game$set_thing_buf($this)($updated_buffs))($List$cons($TaelinArena$Game$Buff$silenced($eff$dur))($this$buf)))))(($eff$dur=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TaelinArena$Game$set_thing_buf($this)($updated_buffs))($List$cons($TaelinArena$Game$Buff$rooted($eff$dur))($this$buf)))))(($eff$dur=>$Bool$if($compare_sid)($this)(($updated_buffs=>$TaelinArena$Game$set_thing_buf($this)($updated_buffs))($List$cons($TaelinArena$Game$Buff$stuned($eff$dur))($this$buf)))))(($eff$to_pos=>($eff$all=>$Bool$if($F64$eql($eff$all)($F64$1))($TaelinArena$Game$set_thing_pos($this)($eff$to_pos))($this))))))))($F64$eql($this$sid)($that$sid)))))($TaelinArena$collide_with($this$pos)($this$dir)($this$box)($hit$pos)($hit$dir)($hit$box))))))))))))($out_vec($this)(($out_vec$value=>($new_pos=>$TaelinArena$Game$set_thing_pos($this)($new_pos))($F64$V3$add($this$pos)($out_vec$value))))))($TaelinArena$collide_with($this$pos)($this$dir)($this$box)($that$pos)($that$dir)($that$box)))($TaelinArena$Game$get_thing_sid($this)))($TaelinArena$Game$get_thing_hit($that)))($TaelinArena$Game$get_thing_box($that)))($TaelinArena$Game$get_thing_dir($that)))($TaelinArena$Game$get_thing_pos($that)))($TaelinArena$Game$get_thing_sid($this)))($TaelinArena$Game$get_thing_buf($this)))($TaelinArena$Game$get_thing_box($this)))($TaelinArena$Game$get_thing_dir($this)))($TaelinArena$Game$get_thing_pos($this))));
  var $TaelinArena$Game$set_thing_hit = ($thi=>($new_hit=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($new_hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_rst = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$rst))))))))))))))))))))))))))));
  var $TaelinArena$Game$Hitbox$cbox = ($rad=>($nbox=>($cbox=>($pbox=>$cbox($rad)))));
  var $TaelinArena$Game$set_thing_vel = ($thi=>($new_vel=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($new_vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_bst = ($thi=>($new_bst=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($new_bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_box = ($thi=>($new_box=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($new_box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_lit = ($thi=>($new_lit=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($new_lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_rst = ($thi=>($new_rst=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($thi$chi)($thi$hit)($new_rst)($thi$die))))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_bst = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$bst))))))))))))))))))))))))))));
  var $TaelinArena$Game$combine_mov_buffs = ($buff=>($i=>$buff(($buff$dur=>($buff$val=>$i)))(($buff$dur=>($buff$val=>$F64$mul($i)($buff$val))))(($buff$dur=>($buff$val=>$F64$mul($i)($buff$val))))(($buff$dur=>$i))(($buff$dur=>$F64$0))(($buff$dur=>$F64$0))));
  var $TaelinArena$Game$speed_multiplier_of = ($self=>($bst=>($buf=>$List$fold($bst)($TaelinArena$Game$combine_mov_buffs)($buf))($TaelinArena$Game$get_thing_buf($self)))($TaelinArena$Game$get_thing_bst($self)));
  var $TaelinArena$Game$get_thing_mov = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$mov))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_pad = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$pad))))))))))))))))))))))))))));
  var $TaelinArena$Game$update_buff_dur = ($self=>($self$buf=>($fn=>($new_buf=>$TaelinArena$Game$set_thing_buf($self)($new_buf))($List$fold($List$nil)($fn)($self$buf)))(($buff=>($acc=>$buff(($buff$dur=>($buff$val=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TaelinArena$Game$Buff$shielded($F64$sub($buff$dur)($F64$1))($buff$val))($acc)))))(($buff$dur=>($buff$val=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TaelinArena$Game$Buff$slowed($F64$sub($buff$dur)($F64$1))($buff$val))($acc)))))(($buff$dur=>($buff$val=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TaelinArena$Game$Buff$hasted($F64$sub($buff$dur)($F64$1))($buff$val))($acc)))))(($buff$dur=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TaelinArena$Game$Buff$silenced($F64$sub($buff$dur)($F64$1)))($acc))))(($buff$dur=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TaelinArena$Game$Buff$rooted($F64$sub($buff$dur)($F64$1)))($acc))))(($buff$dur=>$Bool$if($F64$eql($buff$dur)($F64$0))($acc)($List$cons($TaelinArena$Game$Buff$stuned($F64$sub($buff$dur)($F64$1)))($acc))))))))($TaelinArena$Game$get_thing_buf($self)));
  var $TaelinArena$Game$get_thing_knk = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$knk))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_wei = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$wei))))))))))))))))))))))))))));
  var $F64$gtn = ($a=>($b=>$F64$cmp($a)($b)($Bool$false)($Bool$false)($Bool$true)));
  var $TaelinArena$Game$get_thing_fun = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$fun))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_chi = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$chi))))))))))))))))))))))))))));
  var $TaelinArena$Game$set_thing_chi = ($thi=>($new_chi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$TaelinArena$Game$Thing$new($thi$fun)($thi$pid)($thi$mid)($thi$act)($thi$sid)($thi$stt)($thi$nam)($thi$lit)($thi$tik)($thi$pos)($thi$mov)($thi$bst)($thi$pad)($thi$dir)($thi$trg)($thi$vel)($thi$box)($thi$wei)($thi$mhp)($thi$dmg)($thi$knk)($thi$buf)($new_chi)($thi$hit)($thi$rst)($thi$die))))))))))))))))))))))))))))));
  var $F64$V3$get_z = ($v=>$v(($v$x=>($v$y=>($v$z=>$v$z)))));
  var $F64$V3$get_y = ($v=>$v(($v$x=>($v$y=>($v$z=>$v$y)))));
  var $TaelinArena$Game$get_thing_mhp = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$mhp))))))))))))))))))))))))))));
  var $TaelinArena$Game$get_thing_die = ($thi=>$thi(($thi$fun=>($thi$pid=>($thi$mid=>($thi$act=>($thi$sid=>($thi$stt=>($thi$nam=>($thi$lit=>($thi$tik=>($thi$pos=>($thi$mov=>($thi$bst=>($thi$pad=>($thi$dir=>($thi$trg=>($thi$vel=>($thi$box=>($thi$wei=>($thi$mhp=>($thi$dmg=>($thi$knk=>($thi$buf=>($thi$chi=>($thi$hit=>($thi$rst=>($thi$die=>$thi$die))))))))))))))))))))))))))));
  var $Bool$or = a=>b=>a||b;
  var $List$concat = ($as=>($bs=>$as($bs)(($head=>($tail=>$List$cons($head)($List$concat($tail)($bs)))))));
  var $TaelinArena$fold_with_context = ($i=>($f=>($xs=>($ys=>$xs($i)(($xs$head=>($xs$tail=>($ys2=>($rest=>$f($xs$head)($ys($xs$tail))($rest))($TaelinArena$fold_with_context($i)($f)($xs$tail)($ys2)))(($x=>$ys($List$cons($xs$head)($xs)))))))))));
  var $TaelinArena$exec_turn = ($gm=>($intr=>($tick=>($things_id=>($stage=>($stage_nil=>($new_stage=>$TaelinArena$Game$Game$new($new_stage))($TaelinArena$fold_with_context($stage_nil)($tick)($stage)($things_id)))($List$nil))($gm(($stage=>$stage))))(($x=>$x)))(($this=>($others=>($res=>($this=>($rst=>($this=>($boost=>($pos=>($mov=>($pad=>($this=>($this=>($pos=>($knk=>($wei=>($new_pos=>($knk_len=>($new_knk=>($this=>($this=>($fun=>($this=>($this=>($tik=>($this=>($this_chi=>($chi_init=>($chi_list=>($this=>($this_pos=>($pos_x=>($pos_y=>($pos_z=>($new_x=>($new_y=>($new_z=>($this=>($dmg=>($mhp=>($new_dmg=>($this=>($sid=>($dmg=>($mhp=>($no_hp=>($die=>($xs=>$List$concat($chi_list)($xs))(elim_bool($Bool$or($die)($no_hp))($res)($List$cons($this)($res))))($TaelinArena$Game$get_thing_die($this)))($Bool$false))($TaelinArena$Game$get_thing_mhp($this)))($TaelinArena$Game$get_thing_dmg($this)))($TaelinArena$Game$get_thing_sid($this)))($TaelinArena$Game$set_thing_dmg($this)($new_dmg)))($F64$max($F64$0)($F64$min($mhp)($dmg))))($TaelinArena$Game$get_thing_mhp($this)))($TaelinArena$Game$get_thing_dmg($this)))($TaelinArena$Game$set_thing_pos($this)($F64$V3$new($new_x)($new_y)($new_z))))($F64$min($F64$max($F64$0)($pos_z))($F64$parse(`256`))))($F64$min($F64$max($F64$parse(`-160`))($pos_y))($F64$parse(`160`))))($F64$min($F64$max($F64$parse(`-256`))($pos_x))($F64$parse(`256`))))($F64$V3$get_z($this_pos)))($F64$V3$get_y($this_pos)))($F64$V3$get_z($this_pos)))($TaelinArena$Game$get_thing_pos($this)))($TaelinArena$Game$set_thing_chi($this)($List$nil)))($List$map($chi_init)($this_chi)))(($chi=>$TaelinArena$Game$get_thing_fun($chi)($chi))))($TaelinArena$Game$get_thing_chi($this)))($TaelinArena$Game$set_thing_tik($this)($F64$add($tik)($F64$1))))($TaelinArena$Game$get_thing_tik($this)))($List$fold($this)($intr)($others)))($fun($this)))($TaelinArena$Game$get_thing_fun($this)))($TaelinArena$Game$set_thing_knk($this)($new_knk)))($TaelinArena$Game$set_thing_pos($this)($new_pos)))(elim_bool($F64$gtn($knk_len)($F64$0))(($force=>$F64$V3$scale($force)($F64$V3$norm($knk)))($F64$max($F64$sub($knk_len)($wei))($F64$0)))($knk)))($F64$V3$len($knk)))($F64$V3$add($pos)($knk)))($TaelinArena$Game$get_thing_wei($this)))($TaelinArena$Game$get_thing_knk($this)))($TaelinArena$Game$get_thing_pos($this)))($TaelinArena$Game$update_buff_dur($this)))($TaelinArena$Game$set_thing_pos($this)($F64$V3$add($pos)($F64$V3$scale($F64$mul($mov)($boost))($pad)))))($TaelinArena$Game$get_thing_pad($this)))($TaelinArena$Game$get_thing_mov($this)))($TaelinArena$Game$get_thing_pos($this)))($TaelinArena$Game$speed_multiplier_of($this)))(elim_bool($rst)(($new_vel=>($new_bst=>($new_box=>($new_act=>($new_tik=>($new_lit=>($new_rst=>($this=>($this=>($this=>($this=>($this=>($this=>($this=>$this)($TaelinArena$Game$set_thing_rst($this)($new_rst)))($TaelinArena$Game$set_thing_lit($this)($new_lit)))($TaelinArena$Game$set_thing_tik($this)($new_tik)))($TaelinArena$Game$set_thing_act($this)($new_act)))($TaelinArena$Game$set_thing_box($this)($new_box)))($TaelinArena$Game$set_thing_bst($this)($new_bst)))($TaelinArena$Game$set_thing_vel($this)($new_vel)))($Bool$false))($List$nil))($F64$0))($F64$0))($TaelinArena$Game$Hitbox$cbox($F64$mul($F64$parse(`3`))($F64$parse(`4`)))))($F64$1))($F64$V3$new($F64$0)($F64$0)($F64$0)))($this)))($TaelinArena$Game$get_thing_rst($this)))($TaelinArena$Game$set_thing_hit($this)($List$nil)))))))(($that=>($this=>$TaelinArena$interact_with($this)($that)))));
  var $Exports$new = ($new=>($add=>$new));
  var $Exports$TaelinArena = $Exports$add($List$nil)($Exports$add($List$cons)($Exports$add($F64$V3$polygon_to_segments)($Exports$add($F64$V3$look_at)($Exports$add($TaelinArena$Game$get_position_by_pid)($Exports$add($TaelinArena$Game$map_stage)($Exports$add($TaelinArena$Game$Command$new)($Exports$add($TaelinArena$Game$Input$sdir)($Exports$add($TaelinArena$Game$Input$key0)($Exports$add($TaelinArena$Game$Input$key1)($Exports$add($TaelinArena$Game$Input$key2)($Exports$add($TaelinArena$Game$Input$key3)($Exports$add($TaelinArena$Game$Input$key4)($Exports$add($TaelinArena$Game$Input$key5)($Exports$add($TaelinArena$exec_command)($Exports$add($TaelinArena$Game$Thing$new)($Exports$add($TaelinArena$Game$set_thing_fun)($Exports$add($TaelinArena$Game$set_thing_sid)($Exports$add($TaelinArena$Game$set_thing_pid)($Exports$add($TaelinArena$Game$set_thing_pos)($Exports$add($TaelinArena$Game$set_thing_nam)($Exports$add($TaelinArena$Game$Game$new)($Exports$add($TaelinArena$exec_turn)($Exports$new)))))))))))))))))))))));
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
    'F64.new': $F64$new,
    'Word': $Word,
    'Word.nil': $Word$nil,
    'Word.0': $Word$0,
    'Bits.nil': $Bits$nil,
    'Word.1': $Word$1,
    'Word.from_bits': $Word$from_bits,
    'U16.eql': $U16$eql,
    'Char.parse.type': $Char$parse$type,
    'Unit.new': $Unit$new,
    'Char.parse': $Char$parse,
    'String.cons': $String$cons,
    'U16.new': $U16$new,
    'Char.new': $Char$new,
    'Bit.0': $Bit$0,
    'Bit.1': $Bit$1,
    'String.nil': $String$nil,
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
    'TaelinArena.Game.get_thing_pid': $TaelinArena$Game$get_thing_pid,
    'TaelinArena.Game.get_thing_by_pid.cond': $TaelinArena$Game$get_thing_by_pid$cond,
    'TaelinArena.Game.get_thing_by_pid': $TaelinArena$Game$get_thing_by_pid,
    'TaelinArena.Game.get_thing_pos': $TaelinArena$Game$get_thing_pos,
    'TaelinArena.Game.get_position_by_pid': $TaelinArena$Game$get_position_by_pid,
    'List.map': $List$map,
    'TaelinArena.Game.Game.new': $TaelinArena$Game$Game$new,
    'TaelinArena.Game.map_stage': $TaelinArena$Game$map_stage,
    'TaelinArena.Game.Command.new': $TaelinArena$Game$Command$new,
    'TaelinArena.Game.Input.sdir': $TaelinArena$Game$Input$sdir,
    'TaelinArena.Game.Input.key0': $TaelinArena$Game$Input$key0,
    'TaelinArena.Game.Input.key1': $TaelinArena$Game$Input$key1,
    'TaelinArena.Game.Input.key2': $TaelinArena$Game$Input$key2,
    'TaelinArena.Game.Input.key3': $TaelinArena$Game$Input$key3,
    'TaelinArena.Game.Input.key4': $TaelinArena$Game$Input$key4,
    'TaelinArena.Game.Input.key5': $TaelinArena$Game$Input$key5,
    'TaelinArena.Game.get_thing_buf': $TaelinArena$Game$get_thing_buf,
    'TaelinArena.Game.is_silenced': $TaelinArena$Game$is_silenced,
    'TaelinArena.Game.is_stunned': $TaelinArena$Game$is_stunned,
    'TaelinArena.Game.get_thing_act': $TaelinArena$Game$get_thing_act,
    'TaelinArena.Game.get_thing_trg': $TaelinArena$Game$get_thing_trg,
    'TaelinArena.Game.get_thing_tik': $TaelinArena$Game$get_thing_tik,
    'TaelinArena.Game.Thing.new': $TaelinArena$Game$Thing$new,
    'TaelinArena.Game.set_thing_act': $TaelinArena$Game$set_thing_act,
    'Bool.eql': $Bool$eql,
    'Bool.if': $Bool$if,
    'TaelinArena.Game.set_thing_trg': $TaelinArena$Game$set_thing_trg,
    'TaelinArena.Game.set_thing_tik': $TaelinArena$Game$set_thing_tik,
    'TaelinArena.Game.init_act': $TaelinArena$Game$init_act,
    'TaelinArena.Game.set_thing_pad': $TaelinArena$Game$set_thing_pad,
    'F64.2': $F64$2,
    'F64.parse': $F64$parse,
    'TaelinArena.Game.with_thing.effect': $TaelinArena$Game$with_thing$effect,
    'TaelinArena.Game.with_thing': $TaelinArena$Game$with_thing,
    'TaelinArena.exec_command': $TaelinArena$exec_command,
    'TaelinArena.Game.set_thing_fun': $TaelinArena$Game$set_thing_fun,
    'TaelinArena.Game.set_thing_sid': $TaelinArena$Game$set_thing_sid,
    'TaelinArena.Game.set_thing_pid': $TaelinArena$Game$set_thing_pid,
    'TaelinArena.Game.set_thing_pos': $TaelinArena$Game$set_thing_pos,
    'TaelinArena.Game.set_thing_nam': $TaelinArena$Game$set_thing_nam,
    'TaelinArena.Game.get_thing_dir': $TaelinArena$Game$get_thing_dir,
    'TaelinArena.Game.get_thing_box': $TaelinArena$Game$get_thing_box,
    'TaelinArena.Game.get_thing_sid': $TaelinArena$Game$get_thing_sid,
    'TaelinArena.Game.get_thing_hit': $TaelinArena$Game$get_thing_hit,
    'F64.sqrt': $F64$sqrt,
    'F64.V3.sqr_dist': $F64$V3$sqr_dist,
    'F64.V3.dist': $F64$V3$dist,
    'Word.ltn': $Word$ltn,
    'F64.cmp': $F64$cmp,
    'F64.ltn': $F64$ltn,
    'F64.V3.scale': $F64$V3$scale,
    'F64.max': $F64$max,
    'F64.min': $F64$min,
    'F64.V3.point_segment_sqrdist': $F64$V3$point_segment_sqrdist,
    'F64.V3.point_segment_dist': $F64$V3$point_segment_dist,
    'F64.V3.rot_90': $F64$V3$rot_90,
    'TaelinArena.collide_with': $TaelinArena$collide_with,
    'TaelinArena.Game.get_thing_dmg': $TaelinArena$Game$get_thing_dmg,
    'TaelinArena.Game.set_thing_dmg': $TaelinArena$Game$set_thing_dmg,
    'Pair.new': $Pair$new,
    'Pair': $Pair,
    'F64.Ordering.EQ': $F64$Ordering$EQ,
    'F64.Ordering.GT': $F64$Ordering$GT,
    'F64.Ordering.LT': $F64$Ordering$LT,
    'F64.compare_numbers': $F64$compare_numbers,
    'TaelinArena.Game.Buff.shielded': $TaelinArena$Game$Buff$shielded,
    'TaelinArena.Game.use_shields': $TaelinArena$Game$use_shields,
    'Pair.fst': $Pair$fst,
    'Pair.snd': $Pair$snd,
    'TaelinArena.Game.set_thing_buf': $TaelinArena$Game$set_thing_buf,
    'TaelinArena.Game.handle_shields': $TaelinArena$Game$handle_shields,
    'TaelinArena.Game.set_thing_knk': $TaelinArena$Game$set_thing_knk,
    'TaelinArena.Game.Buff.slowed': $TaelinArena$Game$Buff$slowed,
    'TaelinArena.Game.Buff.hasted': $TaelinArena$Game$Buff$hasted,
    'TaelinArena.Game.Buff.silenced': $TaelinArena$Game$Buff$silenced,
    'TaelinArena.Game.Buff.rooted': $TaelinArena$Game$Buff$rooted,
    'TaelinArena.Game.Buff.stuned': $TaelinArena$Game$Buff$stuned,
    'TaelinArena.interact_with': $TaelinArena$interact_with,
    'TaelinArena.Game.set_thing_hit': $TaelinArena$Game$set_thing_hit,
    'TaelinArena.Game.get_thing_rst': $TaelinArena$Game$get_thing_rst,
    'TaelinArena.Game.Hitbox.cbox': $TaelinArena$Game$Hitbox$cbox,
    'TaelinArena.Game.set_thing_vel': $TaelinArena$Game$set_thing_vel,
    'TaelinArena.Game.set_thing_bst': $TaelinArena$Game$set_thing_bst,
    'TaelinArena.Game.set_thing_box': $TaelinArena$Game$set_thing_box,
    'TaelinArena.Game.set_thing_lit': $TaelinArena$Game$set_thing_lit,
    'TaelinArena.Game.set_thing_rst': $TaelinArena$Game$set_thing_rst,
    'TaelinArena.Game.get_thing_bst': $TaelinArena$Game$get_thing_bst,
    'TaelinArena.Game.combine_mov_buffs': $TaelinArena$Game$combine_mov_buffs,
    'TaelinArena.Game.speed_multiplier_of': $TaelinArena$Game$speed_multiplier_of,
    'TaelinArena.Game.get_thing_mov': $TaelinArena$Game$get_thing_mov,
    'TaelinArena.Game.get_thing_pad': $TaelinArena$Game$get_thing_pad,
    'TaelinArena.Game.update_buff_dur': $TaelinArena$Game$update_buff_dur,
    'TaelinArena.Game.get_thing_knk': $TaelinArena$Game$get_thing_knk,
    'TaelinArena.Game.get_thing_wei': $TaelinArena$Game$get_thing_wei,
    'F64.gtn': $F64$gtn,
    'TaelinArena.Game.get_thing_fun': $TaelinArena$Game$get_thing_fun,
    'TaelinArena.Game.get_thing_chi': $TaelinArena$Game$get_thing_chi,
    'TaelinArena.Game.set_thing_chi': $TaelinArena$Game$set_thing_chi,
    'F64.V3.get_z': $F64$V3$get_z,
    'F64.V3.get_y': $F64$V3$get_y,
    'TaelinArena.Game.get_thing_mhp': $TaelinArena$Game$get_thing_mhp,
    'TaelinArena.Game.get_thing_die': $TaelinArena$Game$get_thing_die,
    'Bool.or': $Bool$or,
    'List.concat': $List$concat,
    'TaelinArena.fold_with_context': $TaelinArena$fold_with_context,
    'TaelinArena.exec_turn': $TaelinArena$exec_turn,
    'Exports.new': $Exports$new,
    'Exports.TaelinArena': $Exports$TaelinArena,
  };
})();
console.log(module.exports['Exports.TaelinArena']);