// Notes for Chemistry, Computer Science, Spanish, Maths and DT. Written for this site.
const PMT = "https://www.physicsandmathstutor.com/";
const pdf = p => "https://pmt.physicsandmathstutor.com/download/Maths/GCSE/Topic-Qs/Edexcel-IGCSE/" + encodeURI(p);
const mlinks = (qp) => [
  ["Real past paper questions (PMT)", pdf(qp+" QP.pdf")],
  ["Mark scheme", pdf(qp.replace("/QP/","/MS/")+" MS.pdf")],
  ["Maths Genie by grade", "https://www.mathsgenie.co.uk/gcse.html"],
  ["Corbettmaths", "https://corbettmaths.com/contents/"]];

NOTES.chem = [{links:[["PMT notes and topic questions", PMT+"chemistry-revision/igcse-edexcel/principles-of-chemistry/"],["Save My Exams (log in on your phone)","https://www.savemyexams.com/igcse/chemistry/edexcel/19/"]], figs:["electro"], html:`
<h3>What conducts and why</h3>
<p>An electric current is a <b>flow of charged particles</b>: <b>electrons</b> in metals and graphite, <b>ions</b> in electrolytes.</p>
<ul>
<li><b>Covalent compounds</b> (e.g. sugar, ethanol, water on its own) don't conduct: they are made of neutral molecules with no ions or free electrons.</li>
<li><b>Ionic compounds</b> don't conduct when <b>solid</b> because the ions are held in fixed positions in the lattice. When <b>molten</b> or <b>dissolved in water</b> the ions are free to move and carry the charge.</li>
<li><b>Cation</b> = positive ion (goes to the cathode). <b>Anion</b> = negative ion (goes to the anode).</li>
</ul>
<h3>Key words</h3>
<p><b>Electrolysis</b>: breaking down an ionic compound, molten or in solution, using electricity. <b>Electrolyte</b>: the liquid that conducts. <b>Electrodes</b>: inert (graphite or platinum) so they don't react. <b>Anode</b> is positive, <b>cathode</b> is negative. Memory aid: PANCake, Positive Anode Negative Cathode.</p>
<h3>Molten compounds</h3>
<p>Only two ions present, so: <b>metal at the cathode</b>, <b>non-metal at the anode</b>.</p>
<p><b>Lead(II) bromide</b> (heat to melt it, in a fume cupboard): cathode Pb²⁺ + 2e⁻ → Pb (grey liquid lead at the bottom); anode 2Br⁻ → Br₂ + 2e⁻ (red-brown bromine vapour).</p>
<h3>Aqueous solutions</h3>
<p>Water provides H⁺ and OH⁻ ions too, so the ions compete.</p>
<ul>
<li><b>Cathode</b>: hydrogen forms <b>unless</b> the metal is less reactive than hydrogen (copper, silver, gold), then the metal forms. 2H⁺ + 2e⁻ → H₂</li>
<li><b>Anode</b>: if a <b>halide</b> (Cl⁻, Br⁻, I⁻) is present, the halogen forms. Otherwise <b>oxygen</b> forms from hydroxide ions. 4OH⁻ → O₂ + 2H₂O + 4e⁻</li>
</ul>
<table class="t"><tr><th>Electrolyte</th><th>Cathode (−)</th><th>Anode (+)</th><th>Left in solution</th></tr>
<tr><td>Sodium chloride solution</td><td>hydrogen</td><td>chlorine</td><td>sodium hydroxide</td></tr>
<tr><td>Dilute sulfuric acid</td><td>hydrogen</td><td>oxygen</td><td>more concentrated acid</td></tr>
<tr><td>Copper(II) sulfate solution</td><td>copper</td><td>oxygen</td><td>sulfuric acid, blue fades</td></tr></table>
<p>Dilute sulfuric acid gives <b>twice the volume of hydrogen as oxygen</b>: 4 electrons make 2H₂ but only 1O₂.</p>
<h3>Half-equations, oxidation and reduction</h3>
<p><b>OIL RIG</b>: Oxidation Is Loss of electrons, Reduction Is Gain. At the cathode, positive ions <b>gain</b> electrons, so <b>reduction</b>. At the anode, negative ions <b>lose</b> electrons, so <b>oxidation</b>. Balance the charges: Cu²⁺ + 2e⁻ → Cu; 2Cl⁻ → Cl₂ + 2e⁻.</p>
<h3>Practical: electrolysis of aqueous solutions (1.59C)</h3>
<p>Pour the solution into a beaker, put in two graphite electrodes connected to a low-voltage d.c. supply. Collect gases in inverted test tubes full of solution over each electrode. Observe for a few minutes.</p>
<ul>
<li><b>Hydrogen</b>: lit splint, squeaky pop.</li>
<li><b>Oxygen</b>: relights a glowing splint.</li>
<li><b>Chlorine</b>: damp blue litmus paper turns red then bleaches white.</li>
<li><b>Copper</b>: pink-brown coating on the cathode.</li>
</ul>`,
exam:[
["Explain why solid lead(II) bromide does not conduct electricity but molten lead(II) bromide does.",2,"Solid: ions held in fixed positions in a lattice / can't move (1). Molten: ions free to move and carry charge (1)."],
["Copper(II) sulfate solution is electrolysed with graphite electrodes. Name the products at each electrode and write a half-equation for each.",4,"Cathode: copper (1), Cu²⁺ + 2e⁻ → Cu (1). Anode: oxygen (1), 4OH⁻ → O₂ + 2H₂O + 4e⁻ (1)."],
["Explain why hydrogen, not sodium, forms at the cathode when sodium chloride solution is electrolysed.",2,"Sodium is more reactive than hydrogen (1), so H⁺ ions are discharged / gain electrons instead (1)."],
["Describe how you would electrolyse sodium chloride solution and identify the products.",5,"Graphite electrodes in solution connected to d.c. supply (1). Collect gas at each electrode in an inverted test tube (1). Cathode gas: lit splint gives squeaky pop, hydrogen (1). Anode gas: damp blue litmus turns red then bleaches, chlorine (1). Test remaining solution with indicator, alkaline / sodium hydroxide (1)."],
["Explain why the reaction at the anode is oxidation.",2,"Negative ions lose electrons (1). Loss of electrons is oxidation (1)."],
["When dilute sulfuric acid is electrolysed, 40 cm³ of hydrogen is collected. Predict the volume of oxygen and explain.",2,"20 cm³ (1). Same number of electrons makes twice as many moles of H₂ as O₂: 4H⁺ + 4e⁻ → 2H₂ and 4OH⁻ → O₂ + 2H₂O + 4e⁻ (1)."],
["Potassium bromide solution is electrolysed. Name the products, write both half-equations, and explain why the solution becomes alkaline.",5,"Cathode: hydrogen, 2H⁺ + 2e⁻ → H₂ (1)(1). Anode: bromine, 2Br⁻ → Br₂ + 2e⁻ (1). H⁺ and Br⁻ are removed, leaving K⁺ and OH⁻ ions (1), so potassium hydroxide forms, which is alkaline (1).",true],
["Glucose solution does not conduct electricity but hydrogen chloride dissolved in water does, even though both are covalent. Explain.",3,"Glucose stays as neutral molecules, no ions (1). HCl ionises / splits into H⁺ and Cl⁻ ions in water (1). These ions are free to move and carry charge (1).",true]]}];

const CSL = (p) => [["PMT notes and questions", PMT+"computer-science-revision/igcse-caie/"+p+"/"],["PMT past papers (use 2023 onwards)", PMT+"past-papers/gcse-computer-science/"]];
NOTES.cs = [
{links:CSL("programming"), html:`
<h3>Procedures and functions</h3>
<p>Both are <b>subroutines</b>: named blocks of code you can call from anywhere. A <b>function returns a value</b>; a <b>procedure doesn't</b>.</p>
<pre>PROCEDURE Greet(Name : STRING)
    OUTPUT "Hello ", Name
ENDPROCEDURE

CALL Greet("Dru")

FUNCTION Square(Number : INTEGER) RETURNS INTEGER
    RETURN Number * Number
ENDFUNCTION

Result ← Square(5)</pre>
<h3>Parameters</h3>
<p>A <b>parameter</b> is the variable in the subroutine header that receives a value (Name, Number). The value passed in when you call it is the argument.</p>
<h3>Local and global variables</h3>
<p><b>Local</b>: declared inside a subroutine, only exists while it runs, can only be used there. <b>Global</b>: declared in the main program, can be used anywhere. Prefer local: less memory, can't be changed by mistake elsewhere, subroutines can be reused and tested on their own.</p>
<h3>Why use subroutines</h3>
<p>Code is written once and reused, programs are shorter and easier to read, each part can be tested separately, and several programmers can work on different parts.</p>
<h3>Library routines</h3>
<ul>
<li><b>MOD</b>: remainder. 17 MOD 5 = 2</li>
<li><b>DIV</b>: whole-number division. 17 DIV 5 = 3</li>
<li><b>ROUND(x, places)</b>: ROUND(3.456, 1) = 3.5</li>
<li><b>RANDOM()</b>: a random number between 0 and 1</li>
</ul>`,
exam:[
["State two benefits of using subroutines in a program.",2,"Code reused, not rewritten (1). Easier to test/debug each part (1). Program easier to read/maintain (1). Team can work on different parts (1). Any two."],
["Write pseudocode for a procedure TimesTable that takes a number and outputs its times table from 1 to 12.",4,"PROCEDURE TimesTable(Number : INTEGER)\n    FOR Count ← 1 TO 12\n        OUTPUT Number, \" x \", Count, \" = \", Number * Count\n    NEXT Count\nENDPROCEDURE\n\nProcedure header with parameter (1). Loop 1 to 12 (1). Correct calculation (1). Output inside loop, ENDPROCEDURE (1)."],
["Explain the difference between a local and a global variable.",2,"Local: declared in a subroutine and only accessible there (1). Global: declared in main program, accessible throughout (1)."],
["Write a function IsPrime(N) that returns TRUE if N is prime. Then write code that uses it to output every prime from 2 to 100.",6,"FUNCTION IsPrime(N : INTEGER) RETURNS BOOLEAN\n    IF N < 2 THEN\n        RETURN FALSE\n    ENDIF\n    FOR D ← 2 TO N - 1\n        IF N MOD D = 0 THEN\n            RETURN FALSE\n        ENDIF\n    NEXT D\n    RETURN TRUE\nENDFUNCTION\n\nFOR Num ← 2 TO 100\n    IF IsPrime(Num) = TRUE THEN\n        OUTPUT Num\n    ENDIF\nNEXT Num\n\nFunction header returns BOOLEAN (1). Loop over possible divisors (1). Uses MOD to test (1). Returns FALSE when a factor found, TRUE otherwise (1). Main loop 2 to 100 (1). Calls function and outputs primes (1).",true]]},
{links:CSL("programming"), html:`
<h3>Why use files</h3>
<p>Variables are lost when a program ends. Storing data in a <b>file</b> keeps it permanently, so it can be loaded next time or used by another program.</p>
<h3>Pseudocode</h3>
<pre>// write
OPENFILE "Scores.txt" FOR WRITE
WRITEFILE "Scores.txt", Score
CLOSEFILE "Scores.txt"

// read one line
OPENFILE "Scores.txt" FOR READ
READFILE "Scores.txt", Line
CLOSEFILE "Scores.txt"</pre>
<p>FOR WRITE replaces what's in the file. Always <b>close</b> the file so the data is saved and other programs can use it. READFILE reads the next line each time it's called.</p>`,
exam:[
["Write pseudocode to read 10 lines from Names.txt and output each one.",4,"OPENFILE \"Names.txt\" FOR READ\nFOR Count ← 1 TO 10\n    READFILE \"Names.txt\", Name\n    OUTPUT Name\nNEXT Count\nCLOSEFILE \"Names.txt\"\n\nOpen for read (1). Loop 10 times (1). Read and output inside loop (1). Close file (1)."],
["Give one reason why a file should be closed after use.",1,"Makes sure data is saved / lets other programs access it / frees resources (1)."],
["A program asks the user for 5 test scores and writes them to Scores.txt. It then reads them back and outputs the average. Write the pseudocode.",6,"OPENFILE \"Scores.txt\" FOR WRITE\nFOR Count ← 1 TO 5\n    OUTPUT \"Enter score\"\n    INPUT Score\n    WRITEFILE \"Scores.txt\", Score\nNEXT Count\nCLOSEFILE \"Scores.txt\"\n\nTotal ← 0\nOPENFILE \"Scores.txt\" FOR READ\nFOR Count ← 1 TO 5\n    READFILE \"Scores.txt\", Score\n    Total ← Total + Score\nNEXT Count\nCLOSEFILE \"Scores.txt\"\nOUTPUT Total / 5\n\nWrite loop with input (1). WRITEFILE inside loop and close (1). Total initialised (1). Read loop (1). Total updated (1). Average output (1).",true]]},
{links:CSL("algorithm-design-and-problem-solving"), html:`
<h3>Making programs maintainable</h3>
<p>Maintainable code is easy for someone else (or you later) to understand, fix and extend.</p>
<ul>
<li><b>Meaningful identifiers</b>: TotalScore, not X. Same for constants, arrays and subroutines.</li>
<li><b>Comments</b>: explain what sections do, using //.</li>
<li><b>Procedures and functions</b>: split the problem into smaller named parts.</li>
<li><b>Indentation and white space</b>: makes loops and selection easy to see.</li>
<li><b>Constants</b>: e.g. CONSTANT VAT ← 0.2, so the value only needs changing in one place.</li>
</ul>
<p>In exam answers, name the feature <b>and</b> say how it helps, using the code you're given.</p>`,
exam:[
["Explain two ways the programmer could make this code easier to maintain:\nX ← 0\nFOR I ← 1 TO 5\nINPUT Y\nX ← X + Y\nNEXT I\nOUTPUT X / 5",4,"Use meaningful identifiers, e.g. Total, Mark (1), so others can tell what each variable stores (1). Add comments (1) to explain the purpose of the loop / average (1). Indent the loop body (1) so the loop structure is clear (1). Use a constant for 5 (1) so the number of marks is changed in one place (1). Any two pairs."],
["Rewrite the code above to be maintainable, using a constant and a function that returns the average.",5,"CONSTANT NumberOfMarks ← 5\n\nFUNCTION AverageMark() RETURNS REAL\n    // reads marks and returns their mean\n    Total ← 0\n    FOR Count ← 1 TO NumberOfMarks\n        INPUT Mark\n        Total ← Total + Mark\n    NEXT Count\n    RETURN Total / NumberOfMarks\nENDFUNCTION\n\nOUTPUT AverageMark()\n\nConstant used (1). Function with RETURNS (1). Meaningful names (1). Comment (1). Indentation and correct output (1).",true]]},
{links:CSL("boolean"), figs:["gates"], html:`
<h3>The six gates</h3>
<table class="t"><tr><th>Gate</th><th>Output is 1 when…</th></tr>
<tr><td>NOT</td><td>input is 0 (it flips the input)</td></tr>
<tr><td>AND</td><td>both inputs are 1</td></tr>
<tr><td>OR</td><td>at least one input is 1</td></tr>
<tr><td>NAND</td><td>not both inputs are 1 (opposite of AND)</td></tr>
<tr><td>NOR</td><td>both inputs are 0 (opposite of OR)</td></tr>
<tr><td>XOR</td><td>the inputs are different</td></tr></table>
<h3>Truth tables</h3>
<p>With n inputs there are 2ⁿ rows: 2 inputs → 4 rows, 3 inputs → 8 rows. List inputs in binary order (000, 001, 010 … 111). Add a column for each part of the expression to avoid mistakes.</p>
<h3>Expressions from statements</h3>
<p>Turn the sentence into conditions: "the alarm sounds if the door is open and it's night, or the button is pressed" → X = (D AND N) OR B. Use brackets to show the order. "Not" usually goes on one input: X = A AND NOT B.</p>
<h3>Drawing circuits</h3>
<p>Draw one gate for each operator, working from the innermost bracket. Maximum of three inputs at IGCSE. Label inputs and the output.</p>`,
exam:[
["Complete the truth table for X = (A AND B) OR NOT C.",4,"ABC → X\n000 → 1\n001 → 0\n010 → 1\n011 → 0\n100 → 1\n101 → 0\n110 → 1\n111 → 1\n\n2 marks for 8 correct rows, 1 for 6–7. Plus working columns (1)(1)."],
["Write the logic expression for: the light comes on (L) if the switch is on (S) and it is dark (D), but not if the lamp is broken (B).",3,"L = S AND D AND NOT B. S AND D (1). NOT B (1). Combined with AND (1)."],
["A greenhouse vent opens (X = 1) when the temperature is high (T = 1) and it is not raining (R = 0), or when the humidity is high (H = 1) and the temperature is high. Write the expression and complete the truth table for inputs T, R, H.",6,"X = (T AND NOT R) OR (T AND H)\n\nTRH → X\n000 → 0\n001 → 0\n010 → 0\n011 → 0\n100 → 1\n101 → 1\n110 → 0\n111 → 1\n\nExpression (2). Truth table: 8 correct rows (4), lose 1 per error.",true]]},
{links:CSL("databases"), html:`
<h3>Single-table databases</h3>
<p>A <b>table</b> stores data about one type of thing. Each row is a <b>record</b> (one item). Each column is a <b>field</b> (one piece of data about every item).</p>
<h3>Data types</h3>
<ul>
<li><b>Text / alphanumeric</b>: names, phone numbers (keep leading zeros, no maths), postcodes.</li>
<li><b>Character</b>: a single character, e.g. M/F, a grade letter.</li>
<li><b>Boolean</b>: TRUE/FALSE, yes/no.</li>
<li><b>Integer</b>: whole numbers, e.g. quantity.</li>
<li><b>Real</b>: decimals, e.g. price.</li>
<li><b>Date/time</b>.</li>
</ul>
<h3>Primary key</h3>
<p>A field whose value is <b>unique</b> for every record, so it identifies each record (e.g. StudentID). Names aren't suitable because two people can share one.</p>
<h3>Validation</h3>
<p>Range, length, type, presence, format and check digit checks stop unreasonable data being entered.</p>
<h3>SQL</h3>
<pre>SELECT Name, Age
FROM Students
WHERE Age > 15 AND Form = "11E"
ORDER BY Name;

SELECT COUNT(*) FROM Students WHERE Year = 11;
SELECT SUM(Price) FROM Books WHERE InStock = TRUE;</pre>
<p>ORDER BY sorts ascending by default; add DESC for descending. Text in quotes. Use = for matching, &lt;&gt; for not equal.</p>`,
exam:[
["A table Cars has fields Reg, Make, Colour, Price. Suggest the primary key and explain your choice.",2,"Reg (1). Unique to each car / no two cars share it (1)."],
["Write SQL to show the Make and Price of all red cars, most expensive first.",4,"SELECT Make, Price (1)\nFROM Cars (1)\nWHERE Colour = \"Red\" (1)\nORDER BY Price DESC; (1)"],
["Give a suitable validation check for Price and explain how it works.",2,"Range check (1). Only accepts prices between, e.g., 0 and 200 000 (1)."],
["Table Books(BookID, Title, Author, Price, InStock). Write two queries: (a) the total value of all books in stock; (b) titles and prices of books by Orwell under £10, sorted by title.",6,"(a) SELECT SUM(Price) (1) FROM Books WHERE InStock = TRUE; (1)\n(b) SELECT Title, Price FROM Books (1)\nWHERE Author = \"Orwell\" (1) AND Price < 10 (1)\nORDER BY Title; (1)",true]]}];

const SPL = [["Save My Exams AQA Spanish (log in on your phone)","https://www.savemyexams.com/gcse/spanish/aqa/"],["Your Module 5 Quizlet set","https://quizlet.com/gb/1097934915/aqa-gcse-spanish-module-5-a-clase-flash-cards/"]];
NOTES.spa = [
{links:SPL, html:`
<h3>Translation into English</h3>
<p>Translate every word, but make it sound natural: "tengo quince años" is "I am fifteen", not "I have fifteen years". Watch tense clues (ayer, el año pasado, mañana) and don't skip small words like muy, también, nunca.</p>
<h3>Translation into Spanish</h3>
<p>Check verb endings match the person, adjectives agree (las asignaturas son aburrid<b>as</b>), and adjectives usually go after the noun. Accents count: inglés, también, está, fácil.</p>
<h3>Reading and listening</h3>
<p>Read the questions first and underline what they ask for. Listen for negatives (no, nunca, ni) and opinion changes (pero, sin embargo). Answer in the language of the question.</p>
<h3>Dictado</h3>
<p>Spanish is spelled as it sounds. Key traps: <b>h</b> is silent (hay, hago); <b>b</b> and <b>v</b> sound the same; <b>ll</b> and <b>y</b> sound alike; <b>c</b> before e/i and <b>z</b> sound like "th"; <b>j</b> and <b>g</b> before e/i are throaty; <b>ñ</b> = ny; <b>qu</b> = k. The stress tells you where an accent might be: if the stress breaks the normal rule, write an accent.</p>`,
exam:[
["Translate into English: Ayer no fui al instituto porque estaba enfermo, pero mañana tendré un examen de química.",4,"Yesterday I didn't go to school (1) because I was ill (1), but tomorrow (1) I will have a chemistry exam (1)."],
["Translate into Spanish: Last year our teachers were stricter, but now I would like to change the rules because they are unfair.",6,"El año pasado (1) nuestros profesores eran más estrictos (2), pero ahora me gustaría cambiar las normas (2) porque son injustas (1).",true]]},
{links:SPL, html:`
<h3>School life in Spain</h3>
<p>Secondary school is the <b>ESO</b> (ages 12–16), then <b>bachillerato</b> (16–18). The school year runs from September to June with about 11 weeks of summer holiday. The day often starts around 8:30 and finishes about 14:30, with a short <b>recreo</b>. Most state schools don't have uniform. Students who fail too many subjects may have to <b>repetir curso</b>.</p>
<h3>Absolute superlatives</h3>
<p>Mean "extremely". Drop the final vowel and add <b>-ísimo</b>, agreeing with the noun: grande → grand<b>ísimo</b>, aburrida → aburrid<b>ísima</b>, fáciles → facil<b>ísimos</b>.</p>
<p>Spelling changes keep the sound: rico → ri<b>qu</b>ísimo, largo → lar<b>gu</b>ísimo, feliz → feli<b>c</b>ísimo.</p>`,
exam:[
["Translate into Spanish: My school is extremely big and the classes are very boring.",3,"Mi instituto es grandísimo (1) y las clases son (1) aburridísimas / muy aburridas (1)."],
["Translate into English: En España las vacaciones de verano son larguísimas y no se lleva uniforme.",3,"In Spain the summer holidays (1) are extremely long (1) and you don't wear uniform (1)."]]},
{links:SPL, html:`
<h3>Relative pronouns</h3>
<p><b>que</b> = who/that/which: el profesor <b>que</b> me enseña. <b>donde</b> = where: el patio es <b>donde</b> charlo con mis amigos. <b>cuando</b> = when: el lunes es el día <b>cuando</b> tengo inglés.</p>
<h3>Irregular "I" forms</h3>
<p>hacer → <b>hago</b>, salir → <b>salgo</b>, poner → <b>pongo</b>, tener → <b>tengo</b>, venir → <b>vengo</b>, conocer → <b>conozco</b>, coger → <b>cojo</b>, ir → <b>voy</b>, ser → <b>soy</b>.</p>
<h3>Llevar + time + gerund</h3>
<p>Says how long you've been doing something: <b>Llevo</b> tres años <b>estudiando</b> español = I've been studying Spanish for three years. Gerund: -ar → -ando, -er/-ir → -iendo.</p>
<h3>Uniform and time</h3>
<p>llevar = to wear. Colours agree: una falda negr<b>a</b>, unos zapatos negr<b>os</b>. Shades don't: una camisa azul <b>claro</b>. Time: a la una, a las ocho y media, a las tres menos cuarto.</p>`,
exam:[
["Translate into Spanish: I leave home at eight and lessons start at quarter to nine.",3,"Salgo de casa a las ocho (1) y las clases empiezan (1) a las nueve menos cuarto (1)."],
["Translate into Spanish: I have been going to this school for four years. The library is where I do my homework when I have free time.",5,"Llevo cuatro años (1) yendo / asistiendo a este instituto (1). La biblioteca es donde (1) hago los deberes (1) cuando tengo tiempo libre (1).",true]]},
{links:SPL, html:`
<h3>Subjects and opinions</h3>
<p>Use a range: me gusta(n), me encanta(n), me interesa(n), odio, prefiero, se me da(n) bien/mal. Give a reason with porque es/son… or ya que… Use comparatives: el inglés es <b>más</b> útil <b>que</b> el dibujo; el francés es <b>menos</b> difícil <b>que</b>…</p>
<h3>gustar-type verbs</h3>
<p>The verb agrees with the thing liked: me gusta <b>la</b> historia, me gusta<b>n</b> <b>las</b> ciencias. Change the pronoun for other people: <b>te</b> (you), <b>le</b> (he/she), <b>nos</b> (we), <b>les</b> (they). Add a + name for clarity: <b>A mi hermana le</b> encanta la química.</p>
<h3>lo que</h3>
<p>Means "what" in the middle of a sentence. Great for higher-level openings: <b>Lo que más me gusta es</b>… <b>Lo que no soporto es</b>… <b>Lo que me interesa es</b>…</p>`,
exam:[
["Translate into Spanish: My friends love PE but sciences don't interest them.",4,"A mis amigos (1) les encanta la educación física (1) pero no les interesan (1) las ciencias (1)."],
["Translate into English: Lo que más me fastidia es que mi profesor de historia nos pone demasiados deberes.",4,"What annoys me most (1) is that my history teacher (1) gives us (1) too much homework (1).",true]]},
{links:SPL, html:`
<h3>The conditional (would)</h3>
<p>Add these endings to the <b>whole infinitive</b>: -ía, -ías, -ía, -íamos, -íais, -ían. cambiar → cambiar<b>ía</b> (I would change).</p>
<p>Irregular stems (same endings): tener → <b>tendr</b>ía, hacer → <b>har</b>ía, poder → <b>podr</b>ía, haber → <b>habr</b>ía (there would be), salir → <b>saldr</b>ía, poner → <b>pondr</b>ía, decir → <b>dir</b>ía, querer → <b>querr</b>ía, venir → <b>vendr</b>ía, saber → <b>sabr</b>ía.</p>
<h3>Rules: impersonal phrases + infinitive</h3>
<p><b>Hay que</b> llevar uniforme (you have to). <b>Se debe</b> respetar a los profesores (you must). <b>No se puede</b> / <b>no se permite</b> usar el móvil (you can't / it's not allowed). <b>Está prohibido</b> mascar chicle (it's forbidden).</p>
<p>Give opinions: creo que la norma es justa / injusta porque… En mi opinión, sería mejor…</p>`,
exam:[
["Translate into Spanish: If I were the head, I would build a pool and there would be more clubs.",4,"Si fuera director (1), construiría una piscina (1) y habría (1) más clubs / actividades extraescolares (1).",true],
["Translate into English: Está prohibido usar el móvil en clase, pero creo que esta norma es injusta.",4,"It's forbidden to use your phone in class (2), but I think (1) this rule is unfair (1)."]]},
{links:SPL, html:`
<h3>Describing people</h3>
<p>Adjectives agree in gender and number: mi profesor<b>a</b> es estrict<b>a</b>, mis compañeros son trabajador<b>es</b>. Use ser for personality (es paciente) and estar for moods (está cansado). Add intensifiers: bastante, muy, demasiado, un poco.</p>
<h3>Negatives</h3>
<p>Put <b>no</b> before the verb and the negative after, or the negative alone before: <b>No</b> tengo <b>nunca</b> deberes = <b>Nunca</b> tengo deberes. Others: nadie (nobody), nada (nothing), ni… ni (neither… nor), tampoco (neither), ningún / ninguna (no, not any).</p>
<h3>Questions</h3>
<p>Question words always take accents: ¿Qué? ¿Quién? ¿Dónde? ¿Cuándo? ¿Cómo? ¿Por qué? ¿Cuál? ¿Cuánto/a/os/as? Open with ¿ and close with ?</p>`,
exam:[
["Translate into Spanish: Nobody likes my science teacher because he is never patient.",4,"A nadie le gusta (2) mi profesor de ciencias (1) porque nunca es paciente (1)."],
["Translate into English: No tengo ni hermanos ni primos en mi insti, así que tampoco conozco a nadie en mi clase.",5,"I have neither brothers nor cousins (2) at my school (1), so I don't know anyone in my class either (2).",true]]},
{links:SPL, html:`
<h3>The preterite (completed past actions)</h3>
<p><b>-ar</b>: -é, -aste, -ó, -amos, -asteis, -aron (visit<b>é</b>, visit<b>amos</b>). <b>-er / -ir</b>: -í, -iste, -ió, -imos, -isteis, -ieron (com<b>í</b>, sal<b>imos</b>).</p>
<p>Key irregulars: ir/ser → <b>fui, fue, fuimos</b>; hacer → <b>hice, hizo</b>; tener → <b>tuve</b>; estar → <b>estuve</b>; poder → <b>pude</b>; ver → <b>vi</b>. Spelling: sacar → sa<b>qué</b>, jugar → ju<b>gué</b>, llegar → lle<b>gué</b>.</p>
<h3>Description in the past</h3>
<p>Use the imperfect for what something was like: <b>era</b> (it was), <b>había</b> (there was), <b>hacía</b> sol (it was sunny). Opinion: <b>fue</b> inolvidable (it was unforgettable, a one-off judgement), lo pasé bomba.</p>
<h3>Adjectives and adverbs</h3>
<p>Make adverbs by adding <b>-mente</b> to the feminine adjective: rápida → rápida<b>mente</b>, fácil → fácil<b>mente</b>.</p>
<h3>False friends</h3>
<p>librería = bookshop, carpeta = folder, éxito = success, embarazada = pregnant, constipado = having a cold, actual = current.</p>`,
exam:[
["Translate into Spanish: Last year we went to Madrid and I visited a museum.",4,"El año pasado (1) fuimos a Madrid (1) y visité (1) un museo (1)."],
["Translate into Spanish: On the trip we stayed in a hostel that was very old. It was unforgettable and next year I would like to go back.",6,"En el viaje (1) nos alojamos en un albergue (1) que era muy antiguo (1). Fue inolvidable (1) y el año que viene (1) me gustaría volver (1).",true]]}];

// Maths: one section per topic group. Grades are approximate, as ranked on Maths Genie / Corbettmaths topic lists.
NOTES.maths = [
{links:mlinks("Number/QP/Higher/Structure-and-Calculation/Surds (H)"), html:`
<p class="grade">Grade 6 (simplifying) to 8 (rationalising harder denominators)</p>
<h3>Irrational numbers</h3>
<p>Can't be written as a fraction a/b of integers. Their decimals go on forever without repeating: √2, √7, π. Rational: integers, fractions, terminating and recurring decimals, and square roots of square numbers (√9 = 3).</p>
<h3>Surd rules</h3>
<p>√a × √b = √(ab). √a ÷ √b = √(a/b). √a × √a = a. You can only add surds with the same root: 3√2 + 5√2 = 8√2.</p>
<h3>Simplifying</h3>
<p>Find the biggest square factor: √72 = √(36 × 2) = 6√2. √50 + √18 = 5√2 + 3√2 = 8√2.</p>
<h3>Expanding brackets</h3>
<p>Treat surds like algebra: (3 + √2)(3 − √2) = 9 − 3√2 + 3√2 − 2 = 7. (2 + √3)² = 4 + 4√3 + 3 = 7 + 4√3.</p>
<h3>Rationalising the denominator</h3>
<p>Single surd: multiply top and bottom by it. 10/√5 = 10√5/5 = 2√5.</p>
<p>Bracket: multiply by the denominator with the sign flipped, so the surds cancel (difference of two squares). 4/(3 − √5) × (3 + √5)/(3 + √5) = 4(3 + √5)/(9 − 5) = 3 + √5.</p>`,
exam:[
["Write down an irrational number between 3 and 4.",1,"e.g. √10 or π (any √n with 9 < n < 16)."],
["Simplify √50 + √18.",2,"√50 = 5√2, √18 = 3√2 (1)\n= 8√2 (1)"],
["Expand and simplify (2 + √3)².",2,"(2 + √3)(2 + √3) = 4 + 2√3 + 2√3 + 3 (1)\n= 7 + 4√3 (1)"],
["Rationalise the denominator of 10/√5. Give your answer in its simplest form.",2,"10√5 / 5 (1)\n= 2√5 (1)"],
["Show that 4/(3 − √5) = 3 + √5.",3,"× (3 + √5)/(3 + √5) (1)\nDenominator: 9 − 5 = 4 (1)\n4(3 + √5)/4 = 3 + √5 (1)"],
["Write (√12 + √27)/(√3 − 1) in the form a + b√3, where a and b are fractions.",4,"√12 + √27 = 2√3 + 3√3 = 5√3 (1)\n× (√3 + 1)/(√3 + 1) (1)\nNumerator: 5√3(√3 + 1) = 15 + 5√3. Denominator: 3 − 1 = 2 (1)\n= 15/2 + (5/2)√3, so a = 15/2, b = 5/2 (1)",true]]},
{links:mlinks("Algebra/QP/Higher/Graphs/Interpreting Gradients (H)"), html:`
<p class="grade">Grade 8 (tangents, rates of change), differentiation is IGCSE-only and grade 8–9</p>
<h3>Gradient of a curve</h3>
<p>A curve's gradient changes. To estimate it at a point, draw a <b>tangent</b> (a straight line just touching the curve there), pick two points far apart on it, and work out change in y ÷ change in x.</p>
<p><b>Average</b> rate of change between two points is the gradient of the <b>chord</b> joining them.</p>
<h3>What gradients mean</h3>
<ul>
<li>Distance–time graph: gradient = <b>speed</b>.</li>
<li>Velocity–time graph: gradient = <b>acceleration</b>; area under the graph = <b>distance</b> (split into trapezia to estimate).</li>
<li>Always give units: m/s, m/s², litres per minute.</li>
</ul>
<h3>Differentiation (if covered in class)</h3>
<p>For y = axⁿ, dy/dx = naxⁿ⁻¹. Constants disappear. dy/dx gives the exact gradient at any x. At a <b>turning point</b> dy/dx = 0.</p>`,
exam:[
["A car accelerates steadily from 0 to 12 m/s in 4 seconds. Work out its acceleration.",2,"12 ÷ 4 (1) = 3 m/s² (1)"],
["The tangent to a curve at (3, 9) passes through (5, 21). Estimate the gradient of the curve at x = 3.",2,"(21 − 9) ÷ (5 − 3) (1) = 6 (1)"],
["Find the average rate of change of y = x² between x = 1 and x = 4.",2,"(16 − 1) ÷ (4 − 1) (1) = 5 (1)"],
["y = 3x² − 4x + 1. Find the gradient of the curve at x = 2.",3,"dy/dx = 6x − 4 (2)\nAt x = 2: 12 − 4 = 8 (1)"],
["The curve y = x³ − 12x has two turning points. Find their coordinates and say which is a maximum.",5,"dy/dx = 3x² − 12 (1)\n3x² − 12 = 0, x² = 4, x = ±2 (1)\nx = 2: y = 8 − 24 = −16; x = −2: y = −8 + 24 = 16 (1)\n(2, −16) and (−2, 16) (1)\n(−2, 16) is the maximum (a positive cubic rises, falls, then rises) (1)",true]]},
{links:mlinks("Statistics/QP/Higher/Histograms (H)"), html:`
<p class="grade">Grade 7</p>
<h3>Key idea</h3>
<p>In a histogram the <b>area</b> of each bar represents frequency, so bars can have different widths. The vertical axis is <b>frequency density</b>.</p>
<p><b>Frequency density = frequency ÷ class width</b>, so <b>frequency = frequency density × class width</b>.</p>
<h3>Drawing one</h3>
<p>Work out each class width and frequency density in an extra column, draw bars with no gaps, label the axis "frequency density".</p>
<h3>Estimating within a class</h3>
<p>Assume values are spread evenly. For 10 &lt; t ≤ 15 with frequency 30, the number between 12 and 15 is 3/5 × 30 = 18.</p>
<h3>No scale given</h3>
<p>Use a bar you know the frequency of to find what one square (or one unit of area) represents, then use that for the others.</p>
<h3>Median from a histogram</h3>
<p>Find the frequencies, then the middle value's position, and work out how far into that class it falls.</p>`,
exam:[
["Classes: 0 < t ≤ 10 frequency 20; 10 < t ≤ 15 frequency 30; 15 < t ≤ 30 frequency 45. Work out the frequency density of each class.",3,"20 ÷ 10 = 2 (1)\n30 ÷ 5 = 6 (1)\n45 ÷ 15 = 3 (1)"],
["A bar for 20 < x ≤ 40 has a frequency density of 1.5. How many values are in this class?",2,"1.5 × 20 (1) = 30 (1)"],
["Using the table above, estimate how many values of t are between 12 and 15.",2,"3/5 of the class (1)\n3/5 × 30 = 18 (1)"],
["A histogram has no scale. A bar 10 wide and 6 cm tall represents 30 people. Another bar is 15 wide and 4 cm tall. How many people does it represent?",3,"First bar area 10 × 6 = 60 units = 30 people, so 1 unit = 0.5 people (1)\nSecond bar area 15 × 4 = 60 units (1)\n60 × 0.5 = 30 people (1)"],
["A histogram shows: 0–10 fd 1.2, 10–20 fd 2.4, 20–40 fd 1.5, 40–60 fd 0.7. Estimate the median.",4,"Frequencies: 12, 24, 30, 14. Total 80 (1)\nMedian is the 40th value. Cumulative: 12, 36, so 4 more needed in 20–40 (1)\n4/30 of the way through a width of 20 (1)\n20 + 4/30 × 20 ≈ 22.7 (1)",true]]},
{links:mlinks("Algebra/QP/Higher/Graphs/Translations and Reflections of Functions (H)"), html:`
<p class="grade">Grade 7 (translations, reflections) to 9 (stretches, combining)</p>
<h3>The six transformations</h3>
<table class="t"><tr><th>Graph</th><th>Transformation</th><th>(x, y) goes to</th></tr>
<tr><td>y = f(x) + a</td><td>translation up a, vector (0, a)</td><td>(x, y + a)</td></tr>
<tr><td>y = f(x + a)</td><td>translation left a, vector (−a, 0)</td><td>(x − a, y)</td></tr>
<tr><td>y = −f(x)</td><td>reflection in the x-axis</td><td>(x, −y)</td></tr>
<tr><td>y = f(−x)</td><td>reflection in the y-axis</td><td>(−x, y)</td></tr>
<tr><td>y = af(x)</td><td>vertical stretch, scale factor a</td><td>(x, ay)</td></tr>
<tr><td>y = f(ax)</td><td>horizontal stretch, scale factor 1/a</td><td>(x/a, y)</td></tr></table>
<p>Rule of thumb: changes <b>outside</b> the bracket affect y and do what you'd expect. Changes <b>inside</b> affect x and do the opposite.</p>
<h3>Combining</h3>
<p>Do inside-the-bracket changes first, then outside. y = (x + 2)² − 3 is y = x² moved left 2 and down 3, so the vertex is (−2, −3).</p>`,
exam:[
["The point (2, 5) is on y = f(x). Write down its image on (a) y = f(x − 3) (b) y = f(x) − 4.",2,"(a) (5, 5) (1)\n(b) (2, 1) (1)"],
["The point (2, 5) is on y = f(x). Write down its image on (a) y = −f(x) (b) y = f(−x).",2,"(a) (2, −5) (1)\n(b) (−2, 5) (1)"],
["The point (2, 5) is on y = f(x). Write down its image on (a) y = 3f(x) (b) y = f(2x).",2,"(a) (2, 15) (1)\n(b) (1, 5) (1)"],
["Describe the transformation that maps y = x² onto y = (x + 2)² − 3, and give the new turning point.",3,"Translation (1) by vector (−2, −3) (1)\nTurning point (−2, −3) (1)"],
["y = f(x) has a minimum at (4, −2). Find the turning point of (a) y = f(2x) + 3 (b) y = −f(x − 1), and say whether each is a maximum or minimum.",4,"(a) f(2x): x halves → (2, −2); +3 → (2, 1) (1). Still a minimum (1)\n(b) f(x − 1): (5, −2); reflect in x-axis → (5, 2) (1). Now a maximum (1)",true]]},
{links:mlinks("Algebra/QP/Higher/Notation-Vocabulary-and-Manipulation/Algebraic Fractions (H)"), html:`
<p class="grade">Grade 6 (simplifying) to 8 (solving equations)</p>
<h3>Simplifying</h3>
<p><b>Factorise top and bottom fully</b>, then cancel common factors (whole brackets only, never single terms). (x² − 9)/(x² + 5x + 6) = (x − 3)(x + 3)/((x + 2)(x + 3)) = (x − 3)/(x + 2).</p>
<h3>Adding and subtracting</h3>
<p>Use a common denominator, usually the two denominators multiplied: 2/x + 3/(x + 1) = (2(x + 1) + 3x)/(x(x + 1)) = (5x + 2)/(x(x + 1)). Use brackets when subtracting so the signs are right.</p>
<h3>Multiplying and dividing</h3>
<p>Multiply tops and bottoms, factorising first so you can cancel. To divide, <b>flip the second fraction and multiply</b>.</p>
<h3>Solving equations</h3>
<p>Multiply every term by the common denominator to clear the fractions, expand, collect into a linear or quadratic equation, then solve. Check your answers don't make a denominator zero.</p>`,
exam:[
["Simplify fully (2x² + 7x + 3)/(4x² − 1).",3,"Top: (2x + 1)(x + 3) (1)\nBottom: (2x + 1)(2x − 1) (1)\n= (x + 3)/(2x − 1) (1)"],
["Write 3/(x − 2) − 2/(x + 1) as a single fraction in its simplest form.",3,"(3(x + 1) − 2(x − 2)) / ((x − 2)(x + 1)) (1)\nNumerator: 3x + 3 − 2x + 4 (1)\n= (x + 7)/((x − 2)(x + 1)) (1)"],
["Simplify (x² − 4)/(3x) × 6x²/(x + 2).",3,"x² − 4 = (x − 2)(x + 2) (1)\nCancel (x + 2) and 3x (1)\n= 2x(x − 2) (1)"],
["Simplify (x + 3)/4 ÷ (x² + 3x)/8.",3,"Flip: (x + 3)/4 × 8/(x(x + 3)) (1)\nFactorise x² + 3x = x(x + 3) and cancel (1)\n= 2/x (1)"],
["Solve x/(x + 1) + 2/(x − 3) = 1.",4,"× (x + 1)(x − 3): x(x − 3) + 2(x + 1) = (x + 1)(x − 3) (1)\nx² − x + 2 = x² − 2x − 3 (1)\nx = −5 (1)\nCheck: −5/−4 + 2/−8 = 1.25 − 0.25 = 1 ✓ (1)"],
["Show that 1/(x + 2) + 3/(x − 1) = 2 can be written as 2x² − 2x − 9 = 0, then solve it, giving answers to 3 s.f.",5,"(x − 1) + 3(x + 2) = 2(x + 2)(x − 1) (1)\n4x + 5 = 2x² + 2x − 4 (1)\n2x² − 2x − 9 = 0 (1)\nx = (2 ± √(4 + 72))/4 = (2 ± √76)/4 (1)\nx = 2.68 or x = −1.68 (1)",true]]},
{links:mlinks("Geometry-and-Measures/QP/Higher/Properties-and-Constructions/Transformations of Shapes (H)"), html:`
<p class="grade">Grade 3–4 (translate, reflect, rotate) to 7 (negative scale factors, combined)</p>
<h3>Describing transformations</h3>
<p>Say <b>one</b> transformation unless asked, and give every detail. Missing one costs a mark.</p>
<ul>
<li><b>Translation</b>: a column vector (right/left over up/down).</li>
<li><b>Reflection</b>: the mirror line's equation, e.g. x = 2, y = −1, y = x, y = −x.</li>
<li><b>Rotation</b>: angle, direction (clockwise/anticlockwise) and centre.</li>
<li><b>Enlargement</b>: scale factor and centre.</li>
</ul>
<h3>Rotation shortcuts about the origin</h3>
<p>90° anticlockwise: (x, y) → (−y, x). 90° clockwise: (x, y) → (y, −x). 180°: (x, y) → (−x, −y).</p>
<h3>Enlargement</h3>
<p>Multiply each distance from the centre by the scale factor. SF between 0 and 1 makes it smaller. <b>Negative SF</b>: the image is on the opposite side of the centre and upside down. To find the centre, join corresponding vertices and extend: the lines meet at the centre. Area scale factor = SF².</p>
<h3>Reflection lines</h3>
<p>In y = x: (x, y) → (y, x). In y = −x: (x, y) → (−y, −x).</p>`,
exam:[
["Point A (1, 2) is translated by the vector (4, −3). Find its image.",1,"(5, −1)"],
["Reflect the point (3, 1) in (a) y = x (b) y = −x (c) x = 2.",3,"(a) (1, 3) (1)\n(b) (−1, −3) (1)\n(c) (1, 1) (1)"],
["Rotate the point (2, 1) through 90° anticlockwise about the origin.",1,"(−1, 2)"],
["Triangle with vertices (1, 1), (3, 1), (1, 2) is enlarged by scale factor −2, centre the origin. Find the new vertices.",2,"(−2, −2), (−6, −2), (−2, −4). All three (2), two correct (1)."],
["A shape has area 5 cm². It is enlarged by scale factor 3. Find the area of the image.",2,"Area scale factor 3² = 9 (1)\n45 cm² (1)"],
["Shape A is reflected in the y-axis, then rotated 90° clockwise about the origin. Describe the single transformation that has the same effect.",3,"Reflect in y-axis: (x, y) → (−x, y) (1)\nRotate 90° clockwise: (−x, y) → (y, x) (1)\nSo a reflection in the line y = x (1)",true]]},
{links:mlinks("Algebra/QP/Higher/Solving-Equations-and-Inequalities/Simultaneous Equations (H)"), html:`
<p class="grade">Grade 7 (Corbett's checklist puts the discriminant follow-up at 9)</p>
<h3>Method: substitution</h3>
<p>1. Rearrange the <b>linear</b> equation to get x = … or y = …. 2. Substitute into the non-linear one. 3. Expand and rearrange to a quadratic = 0. 4. Solve (factorise or formula). 5. Substitute <b>each</b> x back into the linear equation to get the matching y. Give answers as pairs.</p>
<h3>Meaning</h3>
<p>The solutions are where the line meets the curve or circle. Two solutions: it crosses twice. One repeated solution: the line is a <b>tangent</b>. No real solutions: they don't meet (discriminant b² − 4ac &lt; 0).</p>`,
exam:[
["Solve y = 2x − 1 and y = x² − 4.",4,"x² − 4 = 2x − 1 (1)\nx² − 2x − 3 = 0, (x − 3)(x + 1) = 0 (1)\nx = 3, y = 5 (1)\nx = −1, y = −3 (1)"],
["Solve x + y = 5 and x² + y² = 17.",5,"y = 5 − x (1)\nx² + (5 − x)² = 17, so 2x² − 10x + 8 = 0 (1)\nx² − 5x + 4 = 0, (x − 1)(x − 4) = 0 (1)\nx = 1, y = 4 (1)\nx = 4, y = 1 (1)"],
["Solve y = x² − 3x + 1 and y = 2x − 5.",4,"x² − 3x + 1 = 2x − 5 (1)\nx² − 5x + 6 = 0, (x − 2)(x − 3) = 0 (1)\nx = 2, y = −1 (1)\nx = 3, y = 1 (1)"],
["The line y = x + k is a tangent to the circle x² + y² = 8. Find the possible values of k.",5,"x² + (x + k)² = 8 (1)\n2x² + 2kx + k² − 8 = 0 (1)\nTangent so one solution: b² − 4ac = 0 (1)\n4k² − 8(k² − 8) = 0, so −4k² + 64 = 0 (1)\nk = 4 or k = −4 (1)",true]]},
{links:mlinks("Algebra/QP/Higher/Notation-Vocabulary-and-Manipulation/Algebraic Proof (H)"), html:`
<p class="grade">Grade 5 (counterexamples) to 8 (algebraic proof)</p>
<h3>Counterexamples</h3>
<p>To show a statement is false you only need <b>one</b> example where it fails. Say clearly why it fails.</p>
<h3>Algebraic building blocks</h3>
<ul>
<li>Any integer: n. Consecutive integers: n, n + 1, n + 2.</li>
<li>Even: 2n. Odd: 2n + 1. Consecutive odds: 2n + 1, 2n + 3.</li>
<li>Two <b>different</b> odd numbers: 2a + 1 and 2b + 1 (use different letters).</li>
<li>Multiple of 3: 3n. Square: n².</li>
</ul>
<h3>Finishing a proof</h3>
<p>Expand and simplify, then factorise to show the form you need: 2(…) is even, 2(…) + 1 is odd, 8(…) is a multiple of 8. End with a sentence: "which is a multiple of 8 because…".</p>
<h3>Deduction</h3>
<p>Show a result follows step by step from known facts, giving a reason for each step (like a geometry proof).</p>`,
exam:[
["Give a counterexample to show that 'the square of every prime number is odd' is false.",1,"2² = 4, which is even (1)"],
["Prove that (n + 3)² − (n + 1)² is always a multiple of 4.",3,"n² + 6n + 9 − (n² + 2n + 1) (1)\n= 4n + 8 (1)\n= 4(n + 2), a multiple of 4 (1)"],
["Prove that the product of two odd numbers is always odd.",3,"(2a + 1)(2b + 1) (1)\n= 4ab + 2a + 2b + 1 (1)\n= 2(2ab + a + b) + 1, one more than an even number, so odd (1)"],
["Prove that the sum of any three consecutive integers is a multiple of 3.",2,"n + (n + 1) + (n + 2) = 3n + 3 (1)\n= 3(n + 1) (1)"],
["Prove that the difference between the squares of any two consecutive odd numbers is a multiple of 8.",4,"Consecutive odds: 2n + 1 and 2n + 3 (1)\n(2n + 3)² − (2n + 1)² = 4n² + 12n + 9 − 4n² − 4n − 1 (1)\n= 8n + 8 (1)\n= 8(n + 1), a multiple of 8 (1)",true]]},
{links:mlinks("Algebra/QP/Higher/Solving-Equations-and-Inequalities/Completing the square (H)"), html:`
<p class="grade">Grade 7–8 (Corbett's checklist: 8)</p>
<h3>When the x² coefficient is 1</h3>
<p>x² + bx + c = (x + b/2)² − (b/2)² + c. Halve b, square it, subtract it. x² − 8x + 5 = (x − 4)² − 16 + 5 = (x − 4)² − 11.</p>
<h3>Turning point</h3>
<p>(x + p)² + q has a minimum at (−p, q). So (x − 4)² − 11 has its minimum at (4, −11).</p>
<h3>Solving</h3>
<p>Complete the square, isolate the bracket, square root both sides (±), rearrange. x² + 6x − 2 = 0 → (x + 3)² = 11 → x = −3 ± √11.</p>
<h3>When a ≠ 1</h3>
<p>Take a out of the x terms first: 2x² + 12x + 7 = 2(x² + 6x) + 7 = 2[(x + 3)² − 9] + 7 = 2(x + 3)² − 11.</p>
<h3>Proving always positive</h3>
<p>A squared bracket is never negative, so (x − 2)² + 3 ≥ 3 > 0 for all x.</p>`,
exam:[
["Write x² − 8x + 5 in the form (x + a)² + b. Hence write down the minimum point of y = x² − 8x + 5.",3,"(x − 4)² − 16 + 5 (1)\n= (x − 4)² − 11 (1)\nMinimum (4, −11) (1)"],
["Solve x² + 6x − 2 = 0 by completing the square. Give exact answers.",3,"(x + 3)² − 9 − 2 = 0 (1)\n(x + 3)² = 11 (1)\nx = −3 ± √11 (1)"],
["Write 2x² + 12x + 7 in the form a(x + b)² + c.",3,"2(x² + 6x) + 7 (1)\n2[(x + 3)² − 9] + 7 (1)\n= 2(x + 3)² − 11 (1)"],
["Show that x² − 4x + 7 > 0 for all values of x.",2,"(x − 2)² + 3 (1)\n(x − 2)² ≥ 0, so (x − 2)² + 3 ≥ 3 > 0 (1)"],
["Write 3 + 8x − 2x² in the form a − b(x − c)². Hence find the maximum point of y = 3 + 8x − 2x².",4,"−2(x² − 4x) + 3 (1)\n−2[(x − 2)² − 4] + 3 (1)\n= 11 − 2(x − 2)² (1)\nMaximum (2, 11) (1)",true]]}
];

NOTES.dt = [
{links:[], html:`
<h3>What band 4 looks like</h3>
<p>Investigations that are <b>comprehensive</b> and focused on the brief. The design brief and stakeholder requirements come from evidence, not guesses, and the technical specification covers <b>all</b> technical requirements with measurable values.</p>
<h3>For your garden stake</h3>
<ul>
<li>Context: who struggles with gardening, why accessibility matters, where the stake will be used (outdoor soil, weather).</li>
<li>Stakeholders: link every requirement to an interview answer, e.g. "lightweight (Q4)". Get the second interview done so it's not one person's view.</li>
<li>Existing products: Walensee and Yolemiko, with what each does well and badly, and what you'll take from them.</li>
<li>Materials: why PETG/ASA over PLA outdoors, why stainless for the probe.</li>
<li>Tech spec: measurable, e.g. waterproof to submersion for X min, display readable at Y cm, mass under Z g, battery life.</li>
</ul>`, exam:[]},
{links:[], html:`
<h3>What band 4 looks like</h3>
<p>Ideas that <b>fully avoid design fixation</b>, developments that respond to <b>identified next steps</b>, and clear evidence of innovation (new methods or ideas that improve the solution for the user).</p>
<h3>For your project</h3>
<ul>
<li>Your three ideas (telescopic probe, smart cultivator, leave-in stake) are genuinely different. Say why, and why Idea 3 won against the spec.</li>
<li>Every development should start from a test result or stakeholder comment: OLED 0.96" → 2.42" for readability is a good example.</li>
<li>Innovation: the split outdoor stake / indoor fridge display, solar head, no outdoor buttons or ports. Explain why each helps an elderly user.</li>
<li>Show critical thinking: what didn't work and what you changed.</li>
</ul>`, exam:[]},
{links:[], html:`
<h3>What band 4 looks like</h3>
<p>A clear <b>chronological</b> story, with high-quality sketches, CAD and models that communicate ideas, developments and the final design accurately.</p>
<h3>For your project</h3>
<ul>
<li>Keep pages in the order things happened, even if it's messy.</li>
<li>Use a mix: hand sketches, annotated Onshape renders and assembly, photos of models, and the U8g2 display code as secondary communication.</li>
<li>Annotate for <b>why</b>, not just what: dimensions, materials, user reasons.</li>
</ul>`, exam:[]},
{links:[], html:`
<h3>What band 4 looks like</h3>
<p>Detailed planning for making, a high-quality working prototype, specialist techniques and tools used accurately, and a <b>viable</b> outcome that could realistically be used.</p>
<h3>For your project</h3>
<ul>
<li>Make a production plan: order of operations, tools, time, quality checks.</li>
<li>Show specialist processes: 3D printing settings for waterproof parts, wood lathe, epoxy coating, soldering the Arduino Nano, O-ring sealing.</li>
<li>Photo and video every part and moving perspective, including the screw-on base cap.</li>
</ul>`, exam:[]},
{links:[], html:`
<h3>What band 4 looks like</h3>
<p><b>Ongoing</b> evaluation that identifies problems and next steps all the way through, plus a full and objective final evaluation against the spec and stakeholders.</p>
<h3>For your project</h3>
<ul>
<li>After each iteration (submersion test, foam display models), write: what you tested, the result, the problem, and the next step.</li>
<li>Get stakeholder feedback on the prototype and quote it.</li>
<li>Feasibility: cost of parts, could it be manufactured, would it survive outdoors.</li>
<li>Final evaluation: go through each spec point, met or not, with evidence.</li>
</ul>`, exam:[]}
];
