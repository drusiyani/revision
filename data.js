// Each subject: id, name, board, date (YYYY-MM-DD), when (text), sections.
// Section: title, items [[code, statement]], qs [[question, answer]]
const SUBJECTS = [
{
id:"bio", name:"Biology", board:"Edexcel iGCSE 4BI1, Year 9 and 10 content",
date:"2026-11-02", when:"Mon 2 Nov",
sections:[
{title:"1 Living organisms", items:[
["1.1","Characteristics of living organisms: nutrition, respiration, excretion, response, movement, control of internal conditions, reproduction, growth and development"],
["1.2","Common features of eukaryotic organisms: plants, animals, fungi and protoctists"],
["1.3","Common features of prokaryotic organisms such as bacteria"],
["1.4","The term pathogen; pathogens may be fungi, bacteria, protoctists or viruses"]],
qs:[
["Name the eight characteristics of living organisms.","Nutrition, respiration, excretion, response to surroundings, movement, control of internal conditions, reproduction, growth and development."],
["Give two ways a bacterial cell differs from a plant cell.","No nucleus (DNA is a single circular chromosome, plus plasmids); no mitochondria or chloroplasts; cell wall is not cellulose; much smaller."],
["What is a pathogen? Name the four types.","An organism that causes disease. Fungi, bacteria, protoctists and viruses."]]},
{title:"2(a–b) Organisation and cells", items:[
["2.1","Levels of organisation: organelles, cells, tissues, organs and systems"],
["2.2","Cell structures: nucleus, cytoplasm, cell membrane, cell wall, mitochondria, chloroplasts, ribosomes, vacuole"],
["2.3","Functions of those cell structures"],
["2.4","Similarities and differences between plant and animal cells"]],
qs:[
["Which three structures are in plant cells but not animal cells?","Cell wall, chloroplasts, large permanent vacuole."],
["State the function of the mitochondria and of the ribosomes.","Mitochondria: site of aerobic respiration (releases energy). Ribosomes: protein synthesis."],
["Put in order, smallest first: organ, cell, system, organelle, tissue.","Organelle → cell → tissue → organ → organ system."]]},
{title:"2(c) Biological molecules and enzymes", items:[
["2.7","Elements in carbohydrates, proteins and lipids"],
["2.8","Large molecules from smaller units: starch/glycogen from sugars, protein from amino acids, lipid from fatty acids and glycerol"],
["2.9","Practical: food tests for glucose, starch, protein and fat"],
["2.10","Enzymes as biological catalysts"],
["2.11","Effect of temperature on enzymes, including active site shape"],
["2.12","Practical: enzyme activity and temperature"],
["2.13","Effect of pH on enzymes via the active site"],
["2.14B","Practical: enzyme activity and pH"]],
qs:[
["Which elements are in carbohydrates, lipids and proteins?","Carbohydrates and lipids: C, H, O. Proteins: C, H, O, N (sometimes S)."],
["Describe the test for glucose and a positive result.","Add Benedict's solution and heat in a water bath (~80 °C). Blue → green/yellow/orange/brick red."],
["Describe the tests for starch, protein and fat.","Starch: iodine, orange-brown → blue-black. Protein: biuret, blue → lilac/purple. Fat: shake with ethanol then add water, cloudy white emulsion."],
["Explain why enzyme activity falls above the optimum temperature.","The enzyme denatures: bonds break, the active site changes shape, so the substrate no longer fits and fewer enzyme–substrate complexes form."]]},
{title:"2(d) Movement in and out of cells", items:[
["2.15","Diffusion, osmosis and active transport"],
["2.16","Factors affecting rate: SA:V ratio, distance, temperature, concentration gradient"],
["2.17","Practical: diffusion and osmosis in living and non-living systems"]],
qs:[
["Define osmosis.","The net movement of water molecules from a dilute solution to a more concentrated solution through a partially permeable membrane."],
["How is active transport different from diffusion?","It moves substances against a concentration gradient and needs energy from respiration (and carrier proteins)."],
["A potato cylinder is put in concentrated salt solution. What happens to its mass and why?","Mass decreases: water leaves the cells by osmosis because the solution is more concentrated than the cell sap."]]},
{title:"2(e) Plant nutrition", items:[
["2.18","Photosynthesis and converting light energy to chemical energy"],
["2.19","Word and balanced symbol equation for photosynthesis"],
["2.20","Effect of CO2 concentration, light intensity and temperature on rate"],
["2.21","Leaf structure and its adaptations for photosynthesis"],
["2.22","Mineral ions: magnesium for chlorophyll, nitrate for amino acids"],
["2.23","Practical: oxygen from a water plant, starch production, need for light, CO2 and chlorophyll"]],
qs:[
["Write the balanced symbol equation for photosynthesis.","6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light energy, chlorophyll)."],
["Why must a plant be destarched before testing a leaf for starch?","So any starch found must have been made during the experiment."],
["Give two adaptations of a leaf for photosynthesis.","Large surface area; thin (short diffusion distance); palisade cells packed with chloroplasts near the top; stomata for CO₂; air spaces; veins bring water."],
["What happens if a plant lacks magnesium? Nitrate?","Magnesium: can't make chlorophyll, yellow leaves. Nitrate: can't make amino acids/proteins, stunted growth."]]},
{title:"2(e) Human nutrition", items:[
["2.24","A balanced diet: carbohydrate, protein, lipid, vitamins, minerals, water, fibre"],
["2.25","Sources and functions of diet components incl. vitamins A, C, D, calcium, iron"],
["2.26","Energy requirements vary with activity, age and pregnancy"],
["2.27","Structure and function of the alimentary canal and pancreas"],
["2.28","Peristalsis"],
["2.29","Digestive enzymes: amylase, maltase, proteases, lipases"],
["2.30","Bile made in the liver, stored in the gall bladder"],
["2.31","Bile neutralises stomach acid and emulsifies lipids"],
["2.32","Small intestine adaptations for absorption, villus structure"],
["2.33B","Practical: energy content of a food sample"]],
qs:[
["Give a source and function of vitamin D, calcium and iron.","Vitamin D: oily fish/sunlight, absorbing calcium. Calcium: dairy, bones and teeth. Iron: red meat/spinach, making haemoglobin."],
["Explain the two roles of bile.","Alkaline, so neutralises stomach acid for enzymes in the small intestine. Emulsifies fats into droplets, increasing surface area for lipase."],
["Give three adaptations of a villus.","Microvilli (large SA), wall one cell thick, rich capillary network to keep gradient, lacteal to absorb fatty acids and glycerol."],
["How do you calculate energy in food from the burning food experiment?","Energy (J) = mass of water (g) × 4.2 × temperature rise (°C). Divide by mass of food for J/g."]]},
{title:"2(f) Respiration", items:[
["2.34","Respiration produces ATP"],
["2.35","ATP provides energy for cells"],
["2.36","Differences between aerobic and anaerobic respiration"],
["2.37","Word and balanced symbol equation for aerobic respiration"],
["2.38","Word equations for anaerobic respiration in plants and animals"],
["2.39","Practical: CO2 and heat from respiring seeds"]],
qs:[
["Write the balanced symbol equation for aerobic respiration.","C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (+ ATP)."],
["Write the word equations for anaerobic respiration in animals and in plants/yeast.","Animals: glucose → lactic acid. Plants and yeast: glucose → ethanol + carbon dioxide."],
["Give two differences between aerobic and anaerobic respiration.","Anaerobic needs no oxygen, releases much less energy (ATP) per glucose, makes different products, and glucose is only partly broken down."],
["In the respiring seeds practical, why use boiled seeds as a control?","Boiled seeds are dead so don't respire. Shows any temperature rise is due to respiration."]]},
{title:"2(g) Gas exchange in plants", items:[
["2.40B","Role of diffusion in gas exchange"],
["2.41B","Gas exchange in relation to respiration and photosynthesis"],
["2.42B","Leaf structure adapted for gas exchange"],
["2.43B","Role of stomata"],
["2.44B","Respiration day and night; net exchange depends on light intensity"],
["2.45B","Practical: light and net gas exchange using hydrogen-carbonate indicator"]],
qs:[
["What colour does hydrogen-carbonate indicator go around a leaf in bright light, and in the dark? Why?","Bright light: purple, as photosynthesis is faster than respiration so CO₂ falls. Dark: yellow, as only respiration happens so CO₂ rises."],
["How do guard cells open a stoma?","They take in water by osmosis, become turgid and curve apart, opening the pore."]]},
{title:"2(g) Gas exchange in humans", items:[
["2.46","Structure of the thorax"],
["2.47","Intercostal muscles and diaphragm in ventilation"],
["2.48","Alveoli adapted for gas exchange"],
["2.49","Smoking: effects on lungs and circulatory system, incl. CHD"],
["2.50","Practical: breathing, CO2 release and effect of exercise"]],
qs:[
["Describe what happens when you breathe in.","External intercostal muscles contract, ribs move up and out; diaphragm contracts and flattens. Thorax volume increases, pressure drops below atmospheric, air flows in."],
["Give four adaptations of alveoli.","Large surface area, walls one cell thick, moist lining, good blood supply (plus ventilation) to keep a steep concentration gradient."],
["How does carbon monoxide in smoke affect the body?","It binds to haemoglobin (carboxyhaemoglobin) so blood carries less oxygen."]]},
{title:"2(h) Transport in plants", items:[
["2.51","Why unicellular organisms can rely on diffusion"],
["2.52","Need for a transport system in multicellular organisms"],
["2.53","Phloem transports sucrose and amino acids"],
["2.54","Xylem transports water and mineral ions from roots"],
["2.55B","Water absorption by root hair cells"],
["2.56B","Transpiration is evaporation of water from a plant's surface"],
["2.57B","Effect of humidity, wind, temperature and light on transpiration"],
["2.58B","Practical: environmental factors and transpiration of a leafy shoot"]],
qs:[
["Compare what xylem and phloem carry.","Xylem: water and mineral ions, roots upwards. Phloem: sucrose and amino acids, from leaves to other parts in both directions."],
["Which conditions give the fastest transpiration?","High temperature, high light intensity, high wind speed, low humidity."],
["Why can a single-celled organism rely on diffusion?","Large surface area to volume ratio and short diffusion distances."]]},
{title:"2(h) Transport in humans", items:[
["2.59","Composition of blood"],
["2.60","Plasma transports CO2, digested food, urea, hormones, heat"],
["2.61","Red blood cell adaptations"],
["2.62","Immune response: phagocytes and lymphocytes"],
["2.63B","Vaccination and memory cells"],
["2.64B","Platelets and blood clotting"],
["2.65","Structure and function of the heart"],
["2.66","Heart rate during exercise and with adrenaline"],
["2.67","Risk factors for coronary heart disease"],
["2.68","Arteries, veins and capillaries"],
["2.69","General structure of the circulation system"]],
qs:[
["Give three adaptations of red blood cells.","Biconcave disc (large SA), no nucleus (more room for haemoglobin), haemoglobin binds oxygen."],
["Explain how vaccination protects you.","Vaccine contains a dead/weakened pathogen (antigens). Lymphocytes make antibodies and memory cells. On infection, memory cells make antibodies sooner, faster and in greater quantity."],
["Why is the left ventricle wall thicker than the right?","It pumps blood at higher pressure around the whole body; the right only pumps to the lungs."],
["Compare the structure of arteries and veins.","Arteries: thick muscular, elastic walls, narrow lumen, high pressure. Veins: thinner walls, wide lumen, valves to stop backflow."]]},
{title:"2(i) Excretion", items:[
["2.70","CO2 and O2 as waste products lost through stomata"],
["2.71","Excretory products of lungs, kidneys and skin"],
["2.72B","Kidney roles in excretion and osmoregulation"],
["2.73B","Structure of the urinary system"],
["2.74B","Structure of a nephron"],
["2.75B","Ultrafiltration and glomerular filtrate"],
["2.76B","Water reabsorption from the collecting duct"],
["2.77B","Selective reabsorption of glucose at the PCT"],
["2.78B","Role of ADH"],
["2.79B","Urine contains water, urea and ions"]],
qs:[
["Name the parts of a nephron in order.","Glomerulus and Bowman's capsule → proximal convoluted tubule → loop of Henle → distal convoluted tubule → collecting duct."],
["What is in the glomerular filtrate, and what is left in the blood?","Filtrate: water, glucose, urea, ions. Left in blood: blood cells and proteins (too big)."],
["Describe the role of ADH when you're dehydrated.","Pituitary releases more ADH; collecting duct becomes more permeable; more water reabsorbed into the blood; small volume of concentrated urine."]]},
{title:"2(j) Co-ordination and response", items:[
["2.80","How organisms respond to changes in their environment"],
["2.81","Homeostasis: water content and temperature"],
["2.82","Stimulus, receptor, effector"],
["2.93","Skin in temperature regulation: sweating, vasoconstriction, vasodilation"],
["2.94","Adrenaline, insulin, testosterone, progesterone, oestrogen"],
["2.95B","ADH, FSH and LH"]],
qs:[
["How does the body cool down when too hot?","Sweat glands release sweat, which evaporates taking heat. Vasodilation: arterioles near the skin widen so more blood flows near the surface and more heat is lost."],
["Give the source and effects of adrenaline.","Adrenal glands. Increases heart rate and breathing, raises blood glucose, widens pupils: prepares body for fight or flight."],
["Give the source and role of insulin.","Pancreas. Lowers blood glucose by causing the liver to convert glucose to glycogen."]]},
{title:"3 Reproduction", items:[
["3.1","Sexual vs asexual reproduction"],
["3.2","Fertilisation: gametes fuse to form a zygote"],
["3.3","Insect- and wind-pollinated flowers"],
["3.4","Pollen tube growth, fertilisation, seed and fruit formation"],
["3.5","Practical: conditions for germination"],
["3.6","Germinating seeds use food reserves"],
["3.7","Asexual reproduction: runners and cuttings"],
["3.8","Male and female reproductive systems"],
["3.9","Oestrogen and progesterone in the menstrual cycle"],
["3.10B","FSH and LH in the menstrual cycle"],
["3.11","Placenta and embryo nutrition"],
["3.12","Amniotic fluid protects the embryo"],
["3.13","Oestrogen and testosterone in secondary sexual characteristics"]],
qs:[
["Compare the stigma and anthers of wind- and insect-pollinated flowers.","Wind: feathery stigma and anthers hanging outside the flower. Insect: sticky stigma and anthers inside the flower."],
["What three conditions do seeds need to germinate?","Water, oxygen and a suitable temperature."],
["State the roles of FSH and LH.","FSH: causes an egg to mature in the ovary and stimulates oestrogen. LH: triggers ovulation."],
["Name two substances that pass from mother to fetus across the placenta, and two that pass back.","To fetus: oxygen, glucose, amino acids. Back to mother: carbon dioxide, urea."]]},
{title:"4(a–c) Ecology and cycles", items:[
["4.1","Population, community, habitat, ecosystem"],
["4.2","Practical: population size with quadrats"],
["4.3B","Biodiversity"],
["4.4B","Practical: distribution and biodiversity with quadrats"],
["4.5","Abiotic and biotic factors"],
["4.6","Trophic levels"],
["4.7","Food chains, webs, pyramids of number, biomass and energy"],
["4.8","Transfer of substances and energy along a food chain"],
["4.9","Why only about 10% of energy is transferred"],
["4.10","The carbon cycle"],
["4.11B","The nitrogen cycle"]],
qs:[
["Define community and ecosystem.","Community: all the populations of different species in a habitat. Ecosystem: the community plus its non-living environment."],
["Why is only about 10% of energy passed to the next trophic level?","Energy lost as heat from respiration, used in movement, lost in faeces and urine, and parts not eaten."],
["What do nitrifying and denitrifying bacteria do?","Nitrifying: ammonium → nitrites → nitrates. Denitrifying: nitrates → nitrogen gas (in waterlogged, anaerobic soil)."]]},
{title:"4(d) Human influences", items:[
["4.12","Air pollution by sulfur dioxide and carbon monoxide"],
["4.13","Greenhouse gases: water vapour, CO2, nitrous oxide, methane, CFCs"],
["4.14","How human activities add greenhouse gases"],
["4.15","Enhanced greenhouse effect and global warming"],
["4.16","Water pollution by sewage"],
["4.17","Eutrophication from leached fertiliser"],
["4.18B","Effects of deforestation"]],
qs:[
["Describe the stages of eutrophication.","Fertiliser leaches into water → algae grow fast (algal bloom) → light blocked, plants below die → decomposers break them down and use oxygen → oxygen falls, fish die."],
["Give two effects of sulfur dioxide pollution.","Acid rain: damages leaves and kills trees, acidifies lakes killing fish. Also irritates lungs."],
["Give two effects of deforestation.","Soil erosion and leaching of nutrients; less transpiration so less rain; more CO₂ (less photosynthesis, burning); habitat and biodiversity loss."]]},
{title:"5 Use of biological resources", items:[
["5.1","Glasshouses and polythene tunnels"],
["5.2","Increased CO2 and temperature on crop yield"],
["5.3","Fertiliser and crop yield"],
["5.4","Pest control: pesticides vs biological control"],
["5.5","Yeast in bread making"],
["5.6","Practical: anaerobic respiration by yeast"],
["5.7","Lactobacillus in yoghurt"],
["5.8","Industrial fermenters and their conditions"],
["5.9B","Fish farming methods"]],
qs:[
["Why do farmers add CO₂ to glasshouses?","CO₂ is often the limiting factor, so more CO₂ increases the rate of photosynthesis and the yield."],
["Give an advantage and a disadvantage of biological control.","Advantage: specific to the pest, no chemical residues, doesn't need reapplying. Disadvantage: slow, may not kill all pests, control organism might become a pest."],
["Why are aseptic precautions needed in a fermenter?","To stop contaminating microbes competing with the culture or producing toxins."],
["How does Lactobacillus make yoghurt?","It ferments lactose into lactic acid, which lowers pH, thickens the milk and gives the sour taste."]]}
]},

{
id:"spa", name:"Spanish", board:"AQA GCSE, Module 5 ¡A clase!",
date:"2026-11-05", when:"2nd lesson back, by Thu 5 Nov", approx:true,
sections:[
{title:"Test format", items:[
["T1","Translation Spanish → English"],
["T2","Translation English → Spanish"],
["T3","Reading comprehension"],
["T4","Listening comprehension"],
["T5","Dictado (write what you hear)"]],
qs:[
["Translate: Tengo que llevar uniforme y no se permite usar el móvil.","I have to wear uniform and you're not allowed to use your phone."],
["Translate into Spanish: My school is very big and the teachers are strict.","Mi instituto es grandísimo / muy grande y los profesores son estrictos."],
["Dictado tip: which letters are silent or easy to mishear?","h is silent (hay, hago). b and v sound the same. ll and y sound alike. ñ = 'ny'. Listen for accents on stressed endings (inglés, también)."]]},
{title:"Unit 0 La vida escolar en España", items:[
["0.1","School life in Spain vs here"],
["0.2","Absolute superlatives (-ísimo)"]],
qs:[
["Make these absolute superlatives: grande, aburrido, fácil.","grandísimo, aburridísimo, facilísimo."]]},
{title:"Unit 1 Un día en el insti", items:[
["1.1","Describing the school day, timetable and uniform"],
["1.2","Relative pronouns que, donde, cuando"],
["1.3","Irregular first person present verbs (hago, salgo, pongo, tengo)"],
["1.4","Llevar + time + gerund"]],
qs:[
["Translate: I have been studying Spanish for three years.","Llevo tres años estudiando español."],
["Translate: The library is where I do my homework.","La biblioteca es donde hago los deberes."],
["Give the 'I' form of: hacer, salir, poner, tener.","hago, salgo, pongo, tengo."]]},
{title:"Unit 2 ¿Qué tal tus estudios?", items:[
["2.1","Subjects and opinions with reasons"],
["2.2","Using lo que"],
["2.3","gustar, encantar, interesar for others' opinions"]],
qs:[
["Translate: What I like most is computing because it's useful.","Lo que más me gusta es la informática porque es útil."],
["Translate: My brother loves history but sciences don't interest him.","A mi hermano le encanta la historia pero no le interesan las ciencias."]]},
{title:"Unit 3 ¿Cómo cambiarías tu instituto?", items:[
["3.1","School rules and opinions on them"],
["3.2","The conditional (cambiaría, habría)"],
["3.3","Impersonal phrases + infinitive (hay que, se debe, está prohibido)"]],
qs:[
["Translate: I would change the uniform and there would be a pool.","Cambiaría el uniforme y habría una piscina."],
["Translate: You must not chew gum.","No se debe mascar chicle. / Está prohibido mascar chicle."]]},
{title:"Unit 4 La gente de mi insti", items:[
["4.1","Describing teachers and pupils"],
["4.2","Negatives (nunca, nadie, nada, ni… ni)"],
["4.3","Forming questions"]],
qs:[
["Translate: I never have problems and nobody bullies me.","Nunca tengo problemas y nadie me acosa."],
["Translate: My maths teacher is patient and explains well.","Mi profesor(a) de matemáticas es paciente y explica bien."]]},
{title:"Unit 5 El viaje de fin de curso", items:[
["5.1","Describing a school trip in the past (preterite)"],
["5.2","Adjectives and adverbs"]],
qs:[
["Translate: Last year we went to Madrid and we visited a museum.","El año pasado fuimos a Madrid y visitamos un museo."],
["Translate: It was unforgettable and I had a great time.","Fue inolvidable y lo pasé bomba / me divertí mucho."]]}
]},

{
id:"chem", name:"Chemistry", board:"Edexcel iGCSE 4CH1, Electrolysis",
date:"2026-11-05", when:"Thu 5 Nov",
sections:[
{title:"Electrolysis", items:[
["1.53C","An electric current is a flow of electrons or ions"],
["1.54C","Why covalent compounds don't conduct electricity"],
["1.55C","Why ionic compounds conduct only when molten or in solution"],
["1.56C","Anion = negative ion, cation = positive ion"],
["1.57C","Electrolysis with inert electrodes: molten lead(II) bromide, aqueous NaCl, dilute H2SO4, CuSO4; predict products"],
["1.58C","Ionic half-equations at electrodes; oxidation and reduction"],
["1.59C","Practical: electrolysis of aqueous solutions"]],
qs:[
["Why does solid sodium chloride not conduct, but molten sodium chloride does?","In the solid the ions are held in a fixed lattice. When molten the ions are free to move and carry charge."],
["What forms at each electrode in molten lead(II) bromide? Give the half-equations.","Cathode: lead. Pb²⁺ + 2e⁻ → Pb. Anode: bromine. 2Br⁻ → Br₂ + 2e⁻."],
["Products of electrolysing aqueous sodium chloride?","Cathode: hydrogen. Anode: chlorine. Sodium hydroxide left in solution."],
["Products of electrolysing dilute sulfuric acid? Anode half-equation?","Cathode: hydrogen. Anode: oxygen. 4OH⁻ → O₂ + 2H₂O + 4e⁻."],
["Copper(II) sulfate with inert electrodes: what forms and what happens to the solution?","Cathode: copper (pink-brown coating). Anode: oxygen. Blue colour fades as Cu²⁺ ions are removed; solution becomes acidic."],
["Rule for what forms at the cathode in aqueous solutions?","Hydrogen forms unless the metal is less reactive than hydrogen (e.g. copper), then the metal forms."],
["Rule for what forms at the anode in aqueous solutions?","If halide ions are present the halogen forms; otherwise oxygen forms from hydroxide ions."],
["Is the reaction at the cathode oxidation or reduction? Why?","Reduction, because ions gain electrons (OIL RIG)."],
["Give the tests for hydrogen, oxygen and chlorine.","Hydrogen: lit splint, squeaky pop. Oxygen: relights glowing splint. Chlorine: bleaches damp blue litmus (turns red first)."]]}
]},

{
id:"cs", name:"Computer Science", board:"Cambridge iGCSE 0984, Unit 10 Advanced Programming",
date:"2026-11-06", when:"2nd lesson back, by Fri 6 Nov", approx:true,
sections:[
{title:"Procedures and functions", items:[
["P1","Define and call procedures and functions in pseudocode"],
["P2","Use parameters"],
["P3","Difference between a procedure and a function"],
["P4","Local and global variables"],
["P5","Library routines: MOD, DIV, ROUND, RANDOM"]],
qs:[
["What is the difference between a procedure and a function?","A function returns a single value to the point where it was called; a procedure doesn't return a value."],
["Write a pseudocode function that returns the area of a rectangle.","FUNCTION Area(Length : REAL, Width : REAL) RETURNS REAL\n    RETURN Length * Width\nENDFUNCTION"],
["What is a local variable? Give one advantage.","A variable declared inside a subroutine, only usable there. Saves memory and can't be changed accidentally by other parts of the program."],
["Evaluate 17 MOD 5 and 17 DIV 5.","17 MOD 5 = 2. 17 DIV 5 = 3."]]},
{title:"File handling", items:[
["F1","Why programs store data in files"],
["F2","Open, read, write and close a text file in pseudocode"]],
qs:[
["Why would a program store data in a file?","So the data is kept permanently after the program closes and can be used again later or by another program."],
["Write pseudocode to write the value of Score to Scores.txt.","OPENFILE \"Scores.txt\" FOR WRITE\nWRITEFILE \"Scores.txt\", Score\nCLOSEFILE \"Scores.txt\""],
["Write pseudocode to read one line from Data.txt into LineOfText.","OPENFILE \"Data.txt\" FOR READ\nREADFILE \"Data.txt\", LineOfText\nCLOSEFILE \"Data.txt\""]]},
{title:"Maintainable programs", items:[
["M1","Meaningful identifiers"],
["M2","Comments"],
["M3","Procedures and functions"],
["M4","Indentation and white space"]],
qs:[
["Give three ways to make a program maintainable.","Meaningful identifiers for variables, constants and subroutines; comments explaining the code; using procedures and functions; consistent indentation."]]},
{title:"Boolean logic", items:[
["B1","Logic gates: NOT, AND, OR, NAND, NOR, XOR"],
["B2","Truth tables for gates and circuits"],
["B3","Write logic expressions from circuits, tables or statements"],
["B4","Draw circuits from expressions or problem statements (max 3 inputs)"]],
qs:[
["When does an XOR gate output 1?","When the inputs are different."],
["When does a NAND gate output 0?","Only when both inputs are 1."],
["How many rows does a truth table with 3 inputs have?","8 (2³)."],
["An alarm sounds if the door is open and the system is armed, or the panic button is pressed. Write the expression.","X = (D AND A) OR P"],
["Complete: NOT (A OR B) is the same as which gate?","NOR"]]},
{title:"Databases and SQL", items:[
["D1","Single-table databases: tables, records, fields"],
["D2","Data types: text/alphanumeric, character, Boolean, integer, real, date/time"],
["D3","Primary keys"],
["D4","SQL: SELECT, FROM, WHERE, ORDER BY, SUM, COUNT"]],
qs:[
["What is a primary key?","A field that uniquely identifies each record in a table."],
["Write SQL to show Name and Age of students older than 15, sorted by Name.","SELECT Name, Age\nFROM Students\nWHERE Age > 15\nORDER BY Name;"],
["Write SQL to count how many students are in Year 11.","SELECT COUNT(*)\nFROM Students\nWHERE Year = 11;"],
["Suggest a data type for: phone number, price, has paid.","Phone number: text (leading 0, no maths). Price: real. Has paid: Boolean."]]}
]},

{
id:"maths", name:"Maths", board:"Edexcel iGCSE 4MA1 Higher, 48 min calculator paper",
date:"2026-11-06", when:"Fri 6 Nov, P1",
sections:[
{title:"Year 11 topics", items:[
["Y11.1","Irrational numbers"],
["Y11.2","Surds: simplifying"],
["Y11.3","Surds: rationalising"],
["Y11.4","Curve gradient"],
["Y11.5","Histograms"],
["Y11.6","Graph transformations: translation"],
["Y11.7","Graph transformations: reflection"],
["Y11.8","Graph transformations: stretch"],
["Y11.9","Algebraic fractions: simplifying"],
["Y11.10","Algebraic fractions: addition and subtraction"],
["Y11.11","Algebraic fractions: multiplication and division"],
["Y11.12","Algebraic fractions: solving equations"]],
qs:[
["Which are irrational: √9, √7, π, 0.3 recurring?","√7 and π."],
["Simplify √72.","6√2"],
["Rationalise 6/√3, then 1/(2 + √3).","6/√3 = 2√3. 1/(2 + √3) = 2 − √3."],
["How do you estimate the gradient of a curve at a point?","Draw a tangent at that point, pick two points on it, gradient = change in y ÷ change in x."],
["A class 10 < x ≤ 25 has frequency 30. Frequency density?","30 ÷ 15 = 2"],
["Describe y = f(x + 3) and y = f(x) + 2 from y = f(x).","f(x + 3): translation 3 left, vector (−3, 0). f(x) + 2: translation 2 up, vector (0, 2)."],
["Describe y = −f(x) and y = f(−x).","−f(x): reflection in the x-axis. f(−x): reflection in the y-axis."],
["Describe y = 2f(x) and y = f(2x).","2f(x): vertical stretch, scale factor 2. f(2x): horizontal stretch, scale factor ½."],
["Simplify (x² − 9)/(x² + 5x + 6).","(x − 3)/(x + 2)"],
["Write 2/x + 3/(x + 1) as a single fraction.","(5x + 2)/(x(x + 1))"],
["Simplify (x/4) ÷ (x²/8).","2/x"],
["Solve 3/(x − 1) + 2/x = 1.","3x + 2(x − 1) = x(x − 1) → x² − 6x + 2 = 0 → x = 3 ± √7 (5.65 or 0.354)"]]},
{title:"Year 10 topics", items:[
["Y10.1","Transformations: translation"],
["Y10.2","Transformations: rotation"],
["Y10.3","Transformations: reflection"],
["Y10.4","Transformations: enlargement"],
["Y10.5","Simultaneous equations (linear and non-linear)"],
["Y10.6","Proof: counterexamples and deduction"],
["Y10.7","Proof: even and odd numbers"],
["Y10.8","Completing the square"]],
qs:[
["What three things must you state to describe a rotation?","Angle, direction (clockwise/anticlockwise) and centre of rotation."],
["What does a negative scale factor enlargement do?","The image is on the opposite side of the centre and upside down."],
["Solve y = x + 1 and x² + y² = 13.","x² + (x + 1)² = 13 → x² + x − 6 = 0 → x = 2, y = 3 or x = −3, y = −2"],
["Give a counterexample to 'all prime numbers are odd'.","2"],
["Prove the sum of two odd numbers is even.","(2a + 1) + (2b + 1) = 2a + 2b + 2 = 2(a + b + 1), a multiple of 2, so even."],
["Write x² + 6x + 11 in the form (x + a)² + b. State the turning point.","(x + 3)² + 2. Turning point (−3, 2)."]]}
]}
];

SUBJECTS.push({
id:"dt", name:"DT NEA", board:"OCR GCSE J310 Iterative Design Challenge, 100 marks",
date:null, when:"Ongoing coursework",
sections:[
{title:"Strand 1 Explore (AO1), 20 marks", items:[
["1a","Investigations of the context"],
["1b","Design brief"],
["1c","Stakeholder needs and wants, stakeholder requirements"],
["1d","Existing products and design practices"],
["1e","Materials and possible technical requirements"],
["1f","Technical specification"]],
qs:[
["Does your spec cover needs and wants, technical needs, and a technical specification for the final prototype?","Band 4 needs all three. Check each requirement is measurable and traces back to a stakeholder answer (e.g. Q4 lightweight)."],
["Have you interviewed your second stakeholder yet?","A second voice makes the stakeholder investigation 'comprehensive' rather than relying on one person."]]},
{title:"Strand 2 Design thinking (AO2), 24 marks", items:[
["2a","Generation of initial ideas"],
["2b","Design developments"],
["2c","Development of final design solution"],
["2d","Critical thinking"],
["2e","Evidence of innovation"]],
qs:[
["Do your ideas fully avoid design fixation?","Band 4 wording. Show ideas that are genuinely different (probe, cultivator, leave-in stake), not three versions of one."],
["Does each development respond to a next-step you identified?","Every change should point back to a test result or stakeholder comment, e.g. swapping the 0.96\" OLED for 2.42\" for readability."]]},
{title:"Strand 3 Design communication (AO2), 16 marks", items:[
["3a","Chronological progression"],
["3b","Quality of initial ideas"],
["3c","Quality of design developments"],
["3d","Quality of final design solution"]],
qs:[
["Is the portfolio in the order things actually happened?","It must be chronological, not the order that presents best."]]},
{title:"Strand 4 Final prototype (AO2), 20 marks", items:[
["4a","Planning for making"],
["4b","Quality of final prototype"],
["4c","Specialist techniques and processes"],
["4d","Specialist tools and equipment"],
["4e","Viability of the final prototype"]],
qs:[
["Have you got photos or video of every moving part and perspective?","Required evidence alongside the portfolio and teacher observations."]]},
{title:"Strand 5 Evaluate (AO3), 20 marks", items:[
["5a","Analysis and evaluation of primary and secondary sources"],
["5b","Ongoing evaluation to manage progression"],
["5c","Feasibility of the design solution"],
["5d","Evaluation of the final prototype"]],
qs:[
["After each iteration, did you write down the problem found and the next step?","Band 4 needs ongoing reviews, not just an evaluation at the end. E.g. after the submersion test and the foam display models."]]}
]});

// Day plan: "YYYY-MM-DD": {shift, tasks:[[text, subjectId or null]]}
const PLAN = {
"2026-10-19":{tasks:[["Tick through the Bio audit and mark your weakest points","bio"]]},
"2026-10-20":{shift:"7–11am",tasks:[["Bio weak points, sections 1 to 2(d)","bio"]]},
"2026-10-21":{shift:"7–11am",tasks:[["Maths: surds, irrational numbers, algebraic fractions","maths"]]},
"2026-10-22":{shift:"7–11am",tasks:[["Bio: nutrition and respiration","bio"]]},
"2026-10-23":{tasks:[["Morning: scholarship full draft",null],["Afternoon: Maths graph transformations, curve gradient, histograms","maths"]]},
"2026-10-24":{tasks:[["Bio: gas exchange, transport, excretion","bio"],["CS: procedures and functions, file handling","cs"],["1 hour on the DT NEA","dt"]]},
"2026-10-25":{shift:"9am–1pm",tasks:[["Maths Year 10 topics","maths"],["Spanish flashcards","cards"]]},
"2026-10-26":{tasks:[["Polish the scholarship",null],["Bio: co-ordination, reproduction, ecology","bio"]]},
"2026-10-27":{shift:"7–11am",tasks:[["Maths textbook exercises, mark in green pen to finish the prep","maths"]]},
"2026-10-28":{shift:"7–11am",tasks:[["CS: Boolean logic, SQL, maintainable programs","cs"],["Chem: electrolysis","chem"]]},
"2026-10-29":{shift:"7–11am",tasks:[["Bio Section 5 and mixed questions","bio"],["1 hour on the DT NEA","dt"]]},
"2026-10-30":{tasks:[["Submit the scholarship",null],["Bio: anything still half-filled","bio"]]},
"2026-10-31":{tasks:[["Chem electrolysis questions","chem"],["Spanish translations and dictado","spa"],["CS past paper questions","cs"]]},
"2026-11-01":{shift:"9am–1pm",tasks:[["Bio final recap only","bio"]]},
"2026-11-02":{tasks:[["Bio test today","bio"],["Evening: Spanish or CS, whichever is first","spa"]]},
"2026-11-03":{tasks:[["Hand in the Maths prep work","maths"],["CS and Spanish recap","cs"]]},
"2026-11-04":{tasks:[["Chem recap","chem"]]},
"2026-11-05":{tasks:[["Chem test today","chem"],["Evening: Maths practice paper","maths"]]},
"2026-11-06":{tasks:[["Maths test today","maths"],["Scholarship deadline, it should already be in",null]]}
};
