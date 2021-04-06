# CortexM7-Sublime-Asm-Syntax
Hey.

![image](https://user-images.githubusercontent.com/30376152/113668383-11aba380-96aa-11eb-8c95-a5857288bd83.png)

This a sublime text syntax package for the Cortex-M7 instruction set.
As shown, it can hilight condition suffixes as well as any other suffixes that instructions may have.
This was a pain to make cuz people can't seem to be able to write documentation consistently.

It will let you know if you have an invalid instruction because it only accepts valid suffixes, example:  
![2fUETGDVfE](https://user-images.githubusercontent.com/30376152/113671131-dd39e680-96ad-11eb-95f8-68a73cf14a1e.gif)  
Though this video is a bit old - the dots are now the color of the instruction.

Operands and operators are not part of the syntax.  


To install just drag the AsmCortexM7 folder into your sublime packages folder.

To change colors, edit `AsmCortexM7.sublime-color-scheme`, everything there should be pretty self-explanatory.
If you want to edit the color on specific suffix types, look at `all_instruction_variations.txt`, it will have the names for every suffix - so just search for that instruction and compare the suffix you find to the scope name on `instruction_syntax_generator.js` - then that should be what you look for in `sublime-color-scheme` (though the names are all very close to those of the documentation).

Bye.
