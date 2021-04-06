streng = `LDM{mode}{cond}
STM{mode}{cond}
PLD
CLREX{cond}
SEL
USAD8{cond}
USADA8{cond}
UQADD{cond}
UQSUB{cond}
SXT{cond}
UXT{cond}
SXTAB{cond}
UXTAH{cond}
SXTAB16{cond}
UXTAB{cond}
SXTAH{cond}
UXTAB16{cond}
CBZ
CBNZ
IT{itfl}
TBB
TBH
VSEL{cond}.F<32|64>
VMAXNM.F<32|64>
VMINNM.F<32|64>
VCVT{rmode}.S32.F<32|64>
VCVT{rmode}.U32.F<32|64>
VRINT{RX}{cond}.F<32|64>
VRINT{rmode2}.F<32|64>
BKPT
CPS{effect}
DMB{cond}
DSB{cond}
ISB{cond}
NOP{cond}
SEV{cond}
WFE{cond}
WFI{cond}

ADR{cond}
LDR{type}{cond}
LDRD{cond}
STR{type}{cond}
STRD{cond}
LDR{type}T{cond}
STR{type}T{cond}
PUSH{cond}
POP{cond}
LDREX{cond}
STREX{cond}
LDREXB{cond}
STREXB{cond}
LDREXH{cond}
STREXH{cond}
ADD{S}{cond}
ADD{cond}
ADC{S}{cond}
SUB{S}{cond}
SUB{cond}
SBC{S}{cond}
RSB{S}{cond}
AND{S}{cond}
ORR{S}{cond}
EOR{S}{cond}
BIC{S}{cond}
ORN{S}{cond}
ASR{S}{cond}
LSL{S}{cond}
LSR{S}{cond}
ROR{S}{cond}
RRX{S}{cond}
CLZ{cond}
CMP{cond}
CMN{cond}
MOV{S}{cond}
MOV{cond}
MVN{S}{cond}
MOVT{cond}
REV{cond}
REV16{cond}
REVSH{cond}
RBIT{cond}
SADD16{cond}
SADD8{cond}
SHADD16{cond}
SHADD8{cond}
SHASX{cond}
SHSAX{cond}
SHSUB16{cond}
SHSUB8{cond}
SSUB16{cond}
SSUB8{cond}
SASX{cond}
SSAX{cond}
TST{cond}
TEQ{cond}
UADD16{cond}
UADD8{cond}
UASX{cond}
USAX{cond}
UHADD16{cond}
UHADD8{cond}
UHASX{cond}
UHSAX{cond}
UHSUB16{cond}
UHSUB8{cond}
USUB16{cond}
USUB8{cond}
MUL{S}{cond}
MLA{cond}
MLS{cond}
UMULL{cond}
UMAAL{cond}
UMLAL{cond}
SMLA{XY}{cond}
SMLA{Y}{cond}
SMLAW{XY}{cond}
SMLAW{Y}{cond}
SMLAD{X}{cond}
SMLAL{cond}
SMLAL{XY}{cond}
SMLAL{X}{cond}
SMLALD{cond}
SMLALD{XY}{cond}
SMLALD{X}{cond}
SMLSD{X}{cond}
SMLSLD{X}{cond}
SMMLA{R}{cond}
SMMLS{R}{cond}
SMMUL{R}{cond}
SMUAD{X}{cond}
SMUSD{X}{cond}
SMUL{XY}{cond}
SMUL{Y}{cond}
SMULW{XY}{cond}
SMULW{Y}{cond}
SMULL{cond}
SDIV{cond}
UDIV{cond}
SSAT{cond}
USAT{cond}
SSAT16{cond}
USAT16{cond}
QADD{cond}
QSUB{cond}
QADD8{cond}
QSUB8{cond}
QADD16{cond}
QSUB16{cond}
QASX{cond}
QSAX{cond}
QDADD{cond}
QDSUB{cond}
UQASX{cond}
UQSAX{cond}
UQADD8{cond}
UQSUB8{cond}
UQADD16{cond}
UQSUB16{cond}
PKHBT{cond}
PKHTB{cond}
SXTB{cond}
UXTB{cond}
SXTH{cond}
UXTH{cond}
SXTB16{cond}
UXTB16{cond}
SXTAB{cond}
UXTAB{cond}
SXTAH{cond}
UXTAH{cond}
SXTAB16{cond}
UXTAB16{cond}
BFC{cond}
BFI{cond}
SBFX{cond}
UBFX{cond}
B{cond}
BL{cond}
BX{cond}
BLX{cond}
VABS{cond}.F<32|64>
VADD{cond}.F<32|64>
VCMP{E}{cond}.F<32|64>
VCVT{R}{cond}.Tm.F<32|64>
VCVT{cond}.F<32|64>.Tm
VCVT{cond}.Td.F<32|64>
VCVT{cond}.F<32|64>.Td
VCVT{Y}{cond}.F<32|64>.F16
VCVT{Y}{cond}.F16.F<32|64>
VDIV{cond}.F<32|64>
VFMA{cond}.F<32|64>
VFMS{cond}.F<32|64>
VFNMA{cond}.F<32|64>
VFNMS{cond}.F<32|64>
VLDM{mode}{cond}{.size}
VLDR{cond}{.F<32|64>}
VMLA{cond}.F<32|64>
VMLS{cond}.F<32|64>
VMOV{cond}.F<32|64>
VMOV{cond}{.32}
VMRS{cond}
VMSR{cond}
VMUL{cond}.F<32|64>
VNEG{cond}.F<32|64>
VNMLA{cond}.F<32|64>
VNMLS{cond}.F<32|64>
VNMUL{cond}.F<32|64>
VPOP{cond}{.size}
VPUSH{cond}{.size}
VSQRT{cond}.F<32|64>
VSTM{mode}{cond}{.size}
VSTR{cond}{.size}
VSUB{cond}.F<32|64>
MRS{cond}
MSR{cond}
SVC{cond}`;

streng = streng.split('\n');

strong = "";

suffixes = [
	{
		'regex':       new RegExp('\{cond\}'),
		'replacement': "(EQ|NE|CS|HS|CC|LO|MI|PL|VS|VC|HI|LS|GE|LT|GT|LE|AL|)",
		'scope':       "cond.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{type\}'),
		'replacement': "(B|SB|H|SH|)",
		'scope':       "type.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{\\.size\}'),
		'replacement': "(?:\\.(32|64))?",
		'scope':       "dotsize.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{mode\}'),
		'replacement': "(IA|DB)",
		'scope':       "mode.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{rmode\}'),
		'replacement': "(A|M|N|P)",
		'scope':       "rmode.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{rmode2\}'),
		'replacement': "(A|M|N|P|Z)",
		'scope':       "rmode2.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{effect\}'),
		'replacement': "(IE|ID)",
		'scope':       "effect.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{itfl\}'),
		'replacement': "((?:T|E){0,3})[ \\t]+(EQ|NE|CS|HS|CC|LO|MI|PL|VS|VC|HI|LS|GE|LT|GT|LE|AL)",
		'scope':       ["itfl.suffix.instruction.example-c", "cond.suffix.instruction.example-c"],
	},
	{
		'regex':       new RegExp('\\{\\.F<32\\|64>\\}'),
		'replacement': "(?:\\.(F32|F64))?",
		'scope':       "f3264opt.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\\.F<32\\|64>'),
		'replacement': "\\.(F32|F64)",
		'scope':       "f3264.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\\.F16'),
		'replacement': "\\.(F16)",
		'scope':       "f16.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\\.Tm'),
		'replacement': "\\.(S32|U32)",
		'scope':       "tm.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\\.Td'),
		'replacement': "\\.(S32|U32|S16|U16)",
		'scope':       "td.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\\.U32'),
		'replacement': "\\.(U32)",
		'scope':       "dU32.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\\.S32'),
		'replacement': "\\.(S32)",
		'scope':       "dS32.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\\{\\.32\\}'),
		'replacement': "(?:\\.(32))?",
		'scope':       "d32.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\\{\\.64\\}'),
		'replacement': "(?:\\.(64))?",
		'scope':       "d64.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{S\}'),
		'replacement': "(S|)",
		'scope':       "S.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{E\}'),
		'replacement': "(E|)",
		'scope':       "E.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{RX\}'),
		'replacement': "(R|X)",
		'scope':       "RX.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{R\}'),
		'replacement': "(R|)",
		'scope':       "R.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{X\}'),
		'replacement': "(B|T)",
		'scope':       "X.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{Y\}'),
		'replacement': "(B|T)",
		'scope':       "Y.suffix.instruction.example-c",
	},
	{
		'regex':       new RegExp('\{XY\}'),
		'replacement': "(BT|TB|BB|TT)",
		'scope':       "XY.suffix.instruction.example-c",
	}
];

//https://forum.sublimetext.com/t/how-to-ignore-case-when-doing-matching-in-language-syntax/1464
case_insensitive = "(?i)"; //= "";

for(line of streng){

	matches = [];
	for([suffix_index, suffix] of Object.entries(suffixes)){
		let match = suffix["regex"].exec(line);
		if(match !== null)matches.push({
			'find_index': match.index,
			'suffix': suffix_index
		});
	}

	matches.sort((a, b) => 
		(a["find_index"] == b["find_index"])
			? (          (a["suffix"] < b["suffix"])?1:-1         )
			: (      (a["find_index"] > b["find_index"])?1:-1     )
	);

	let capture_index = 1;
	let repline = line;
	let endofline = "";
	for(match of matches){
		let suffix = suffixes[match["suffix"]];
		repline = repline.replace(suffix["regex"], suffix["replacement"]);
		if(!Array.isArray(suffix["scope"]))
			endofline += "\t\t" + (capture_index++) + ": " + suffix["scope"] + "\n";
		else for(scope_element of suffix["scope"])
			endofline += "\t\t" + (capture_index++) + ": " + scope_element + "\n";
	}
	strong += "- match: '" + case_insensitive + "\\b" + repline + "\\b'\n\tscope: instruction.example-c\n\tcaptures:\n" + endofline;

}