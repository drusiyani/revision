// Biology notes written for this site, organised to match each spec section.
const PMT_B = "https://www.physicsandmathstutor.com/biology-revision/igcse-edexcel/";
const SME_B = "https://www.savemyexams.com/igcse/biology/edexcel/19/";
const bl = (p) => [["PMT notes and topic questions", PMT_B+p+"/"],["Save My Exams (log in on your phone)", SME_B]];
const NOTES = {bio:[
{links:bl("nature-and-variety-of-living-organisms"), html:`
<h3>Characteristics of life (MRS GREN plus control)</h3>
<p>All living things: need <b>nutrition</b>, <b>respire</b>, <b>excrete</b> waste, <b>respond</b> to their surroundings, <b>move</b>, <b>control their internal conditions</b>, <b>reproduce</b>, and <b>grow and develop</b>.</p>
<h3>Eukaryotes (cells with a nucleus)</h3>
<ul>
<li><b>Plants</b>: multicellular; chloroplasts, photosynthesise; cellulose cell walls; store carbohydrate as <b>starch</b> or sucrose. E.g. maize, peas, beans.</li>
<li><b>Animals</b>: multicellular; no chloroplasts, no cell walls; usually have nervous coordination and can move; store carbohydrate as <b>glycogen</b>. E.g. humans, housefly.</li>
<li><b>Fungi</b>: can't photosynthesise; body made of thread-like <b>hyphae</b> forming a <b>mycelium</b>; cell walls of <b>chitin</b>; <b>saprotrophic nutrition</b>, secreting enzymes onto food then absorbing the products; store glycogen. Some are single-celled (yeast). E.g. Mucor.</li>
<li><b>Protoctists</b>: mostly microscopic single cells. Some are plant-like with chloroplasts (Chlorella), some animal-like (Amoeba). Plasmodium causes malaria.</li>
</ul>
<h3>Prokaryotes: bacteria</h3>
<p>Single cells, much smaller than eukaryotic cells. <b>No nucleus</b>: a circular chromosome of DNA plus small rings called <b>plasmids</b>. Have a cell wall (not cellulose), cell membrane, cytoplasm, ribosomes. Some have flagella. Some photosynthesise but most feed off other organisms. E.g. <i>Lactobacillus bulgaricus</i> (yoghurt), <i>Pneumococcus</i> (pneumonia).</p>
<h3>Viruses and pathogens</h3>
<p>Viruses are not cells: a protein coat around DNA or RNA. They can only reproduce <b>inside living cells</b> and infect every type of organism (e.g. tobacco mosaic virus, influenza, HIV). A <b>pathogen</b> is any organism that causes disease: it can be a fungus, bacterium, protoctist or virus.</p>`,
exam:[
["Give two features of fungi that are not found in plants. ",2,"Cell walls made of chitin (1). No chloroplasts / can't photosynthesise (1). Saprotrophic nutrition / extracellular digestion (1). Made of hyphae / mycelium (1). Store glycogen (1). Any two."],
["Describe the structure of a virus. ",2,"Protein coat (1). Contains genetic material, DNA or RNA (1)."],
["Explain why viruses are not considered to be living organisms. ",2,"Can't reproduce on their own / only inside a host cell (1). Don't carry out life processes such as respiration or nutrition / not made of cells (1)."]]},

{links:bl("structures-and-functions-in-living-organisms"), figs:["cells"], html:`
<h3>Levels of organisation</h3>
<p><b>Organelle</b> → <b>cell</b> → <b>tissue</b> (group of similar cells doing one job) → <b>organ</b> (several tissues working together) → <b>organ system</b> (several organs working together).</p>
<h3>Cell structures and functions</h3>
<ul>
<li><b>Nucleus</b>: contains genetic material (chromosomes) and controls the cell's activities.</li>
<li><b>Cytoplasm</b>: where most chemical reactions happen; contains enzymes.</li>
<li><b>Cell membrane</b>: partially permeable, controls what enters and leaves.</li>
<li><b>Mitochondria</b>: site of aerobic respiration, releasing energy.</li>
<li><b>Ribosomes</b>: protein synthesis.</li>
<li><b>Cell wall</b> (plants): made of cellulose, strengthens the cell and keeps its shape.</li>
<li><b>Chloroplasts</b> (plants): contain chlorophyll, absorb light for photosynthesis.</li>
<li><b>Vacuole</b> (plants): large and permanent, filled with cell sap, keeps the cell turgid.</li>
</ul>
<h3>Plant vs animal</h3>
<p>Both have nucleus, cytoplasm, membrane, mitochondria, ribosomes. Only plant cells have a cell wall, chloroplasts and a large permanent vacuole. Animal cells may have small temporary vacuoles.</p>`,
exam:[
["Name the structure in a plant cell that (a) controls what enters the cell (b) contains chlorophyll (c) is made of cellulose. ",3,"(a) cell membrane (1) (b) chloroplast (1) (c) cell wall (1)."],
["A root hair cell has no chloroplasts. Suggest why. ",2,"Root is underground so receives no light (1), so it can't photosynthesise / chloroplasts would be no use (1)."],
["State the difference between a tissue and an organ. ",2,"Tissue: group of similar cells with a similar function (1). Organ: group of different tissues working together for a function (1)."]]},

{links:bl("structures-and-functions-in-living-organisms"), figs:["enzyme"], html:`
<h3>Elements and building blocks</h3>
<ul>
<li><b>Carbohydrates</b>: C, H, O. Starch and glycogen are made of many <b>simple sugars</b> (glucose) joined together.</li>
<li><b>Proteins</b>: C, H, O, N (some S). Made of <b>amino acids</b>.</li>
<li><b>Lipids</b>: C, H, O. Made of <b>fatty acids and glycerol</b> (3 fatty acids to 1 glycerol).</li>
</ul>
<h3>Food tests (practical 2.9)</h3>
<ul>
<li><b>Glucose</b>: add Benedict's solution, heat in a water bath. Blue → green → yellow → orange → brick red, depending on how much glucose.</li>
<li><b>Starch</b>: add iodine solution. Orange-brown → blue-black.</li>
<li><b>Protein</b>: add biuret reagent (sodium hydroxide then copper sulfate). Blue → lilac/purple.</li>
<li><b>Fat</b>: shake with ethanol, then pour into water. A cloudy white emulsion forms.</li>
</ul>
<h3>Enzymes</h3>
<p>Enzymes are <b>biological catalysts</b>: proteins that speed up metabolic reactions without being used up. Each has an <b>active site</b> with a specific shape. Only a substrate with a complementary shape fits, forming an <b>enzyme–substrate complex</b> (lock and key).</p>
<p><b>Temperature</b>: rising temperature gives particles more kinetic energy, so more successful collisions and a faster rate, up to the <b>optimum</b> (about 37 °C for human enzymes). Above it, bonds holding the enzyme's shape break, the active site changes shape and the enzyme is <b>denatured</b>. The substrate no longer fits. Denaturing is permanent.</p>
<p><b>pH</b>: each enzyme has an optimum pH (most around 7, pepsin in the stomach about 2). Too far either side changes the active site shape and denatures it.</p>
<h3>Practicals (2.12, 2.14B)</h3>
<p>E.g. amylase and starch in water baths at different temperatures (or with buffers at different pH). Take a drop every 30 s and test with iodine on a spotting tile. Record the time until it stays orange-brown (starch all digested). Shorter time = faster rate. Keep volumes, concentrations and the other variable (pH or temperature) the same.</p>`,
exam:[
["A student adds Benedict's solution to a food sample and it stays blue. What does this show? ",1,"No (reducing) sugar / glucose present (1). Note the solution must have been heated."],
["Explain why an enzyme stops working at 70 °C. ",3,"Enzyme denatured (1). Active site changes shape (1). Substrate no longer fits / no enzyme–substrate complexes form (1)."],
["Describe how you could investigate the effect of pH on amylase activity. ",5,"Use buffer solutions of different pH (1). Mix amylase and starch and keep at the same temperature in a water bath (1). Test samples with iodine at regular intervals, e.g. every 30 s, on a spotting tile (1). Record time for iodine to stay orange-brown (1). Control volumes / concentrations of starch and amylase (1). Repeat and calculate a mean (1). Max 5."]]},

{links:bl("structures-and-functions-in-living-organisms"), html:`
<h3>Three processes</h3>
<ul>
<li><b>Diffusion</b>: the net movement of particles from a high concentration to a low concentration, down a concentration gradient. Passive, no energy needed. E.g. oxygen into blood in the alveoli.</li>
<li><b>Osmosis</b>: the net movement of water molecules from a dilute solution to a more concentrated solution through a <b>partially permeable membrane</b>. Passive.</li>
<li><b>Active transport</b>: movement of substances <b>against</b> a concentration gradient (low to high), using <b>energy from respiration</b> and carrier proteins in the membrane. E.g. mineral ions into root hair cells, glucose reabsorption in the kidney.</li>
</ul>
<h3>What affects the rate</h3>
<ul>
<li><b>Surface area to volume ratio</b>: bigger SA:V, faster exchange. Small cells and flattened shapes have a large SA:V.</li>
<li><b>Distance</b>: shorter diffusion distance, faster (thin walls).</li>
<li><b>Temperature</b>: higher, particles move faster, faster rate.</li>
<li><b>Concentration gradient</b>: steeper, faster.</li>
</ul>
<h3>Practicals (2.17)</h3>
<p><b>Non-living</b>: Visking tubing filled with sugar solution in water, tube level rises (osmosis). Agar cubes with indicator in acid, time to change colour shows effect of size/SA:V.</p>
<p><b>Living</b>: potato cylinders in sucrose solutions of different concentrations. Blot dry and weigh before and after. Calculate <b>percentage change in mass</b> = (final − initial) ÷ initial × 100. Gains mass in dilute solutions, loses in concentrated ones. Where the graph crosses 0% is where concentration equals that of the cell sap.</p>
<p>Plant cells in pure water become <b>turgid</b> (wall stops bursting). In concentrated solution they lose water and become <b>plasmolysed</b> (membrane pulls away from the wall). Animal cells in water can burst (no wall).</p>`,
exam:[
["Potato mass went from 2.50 g to 2.20 g. Calculate the percentage change. ",2,"(2.20 − 2.50) ÷ 2.50 × 100 (1) = −12% (1)."],
["Explain why the potato lost mass. ",3,"Solution more concentrated than the cell sap / lower water potential outside (1). Water left the cells by osmosis (1). Through partially permeable membrane (1)."],
["Why do cubes of agar with a smaller side length change colour faster all the way through? ",2,"Larger surface area to volume ratio (1). Shorter distance for acid to diffuse to the centre (1)."]]},

{links:bl("structures-and-functions-in-living-organisms"), figs:["light"], html:`
<h3>Photosynthesis</h3>
<p>Plants convert <b>light energy</b> into <b>chemical energy</b> stored in glucose. Chlorophyll in chloroplasts absorbs the light.</p>
<p><b>carbon dioxide + water → glucose + oxygen</b> (light, chlorophyll)</p>
<p><b>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</b></p>
<p>Glucose is used for respiration, converted to starch for storage, cellulose for cell walls, sucrose for transport, or combined with nitrate to make amino acids and proteins.</p>
<h3>Limiting factors</h3>
<p>The rate is limited by whichever of <b>light intensity</b>, <b>CO₂ concentration</b> or <b>temperature</b> is in shortest supply. On a graph, the rate rises while that factor limits, then levels off when something else becomes limiting. Temperature affects the enzymes, so too high a temperature lowers the rate.</p>
<h3>Leaf adaptations</h3>
<ul>
<li>Broad and flat: large surface area to absorb light.</li>
<li>Thin: short diffusion distance for CO₂.</li>
<li><b>Waxy cuticle</b> and upper epidermis are transparent, letting light through; cuticle reduces water loss.</li>
<li><b>Palisade mesophyll</b> near the top, packed with chloroplasts.</li>
<li><b>Spongy mesophyll</b> with air spaces for gas diffusion.</li>
<li><b>Stomata</b> (mostly underneath) let CO₂ in, opened and closed by guard cells.</li>
<li>Veins: xylem brings water, phloem takes sugars away.</li>
</ul>
<h3>Mineral ions</h3>
<p><b>Magnesium</b> is needed to make chlorophyll; lack of it causes yellow leaves. <b>Nitrate</b> is needed to make amino acids (proteins); lack of it causes stunted growth.</p>
<h3>Practicals (2.23)</h3>
<p><b>Oxygen</b>: count bubbles from pondweed (Elodea) at different distances from a lamp. Light intensity ∝ 1/distance². Keep temperature the same (heat shield or water) and add sodium hydrogen carbonate for CO₂.</p>
<p><b>Starch test on a leaf</b>: destarch the plant in the dark for 48 h first. Then boil the leaf in water (kills cells, stops reactions), warm in ethanol in a water bath (removes chlorophyll, ethanol is flammable so no flame), rinse in water (softens), add iodine. Blue-black = starch.</p>
<p><b>Requirements</b>: cover part of a leaf with foil (light), use a variegated leaf (chlorophyll; only green parts go blue-black), or seal a leaf in a flask with sodium hydroxide / soda lime to absorb CO₂.</p>`,
exam:[
["Explain why a leaf is boiled in ethanol when testing for starch. ",2,"Removes chlorophyll / green colour (1) so the colour change of iodine can be seen (1)."],
["Explain the shape of a graph of rate of photosynthesis against light intensity that rises then levels off. ",3,"At first rate increases as light intensity increases, light is limiting (1). Then levels off (1) because another factor, e.g. CO₂ concentration or temperature, is now limiting (1)."],
["A plant is grown in soil lacking magnesium. Explain why it grows slowly. ",3,"Magnesium needed to make chlorophyll (1). Less light absorbed (1). Less photosynthesis so less glucose for growth (1)."]]},

{links:bl("structures-and-functions-in-living-organisms"), figs:["villus"], html:`
<h3>Balanced diet</h3>
<ul>
<li><b>Carbohydrate</b> (bread, pasta, rice): main energy source.</li>
<li><b>Protein</b> (meat, fish, eggs, beans): growth and repair, making enzymes.</li>
<li><b>Lipid</b> (butter, oil): energy store, insulation, cell membranes.</li>
<li><b>Vitamin A</b> (carrots, liver): vision in dim light; lack causes night blindness.</li>
<li><b>Vitamin C</b> (citrus fruit): healthy skin and gums, connective tissue; lack causes scurvy.</li>
<li><b>Vitamin D</b> (oily fish, sunlight on skin): helps absorb calcium; lack causes rickets.</li>
<li><b>Calcium</b> (milk, cheese): bones and teeth, blood clotting.</li>
<li><b>Iron</b> (red meat, spinach): making haemoglobin; lack causes anaemia.</li>
<li><b>Water</b>: solvent, transport, temperature control.</li>
<li><b>Fibre</b> (vegetables, wholegrain): gives food bulk for peristalsis, prevents constipation.</li>
</ul>
<h3>Energy needs</h3>
<p>More active people need more energy. Teenagers need more than young children (growing) and usually more than elderly people. Pregnant women need extra energy for the growing fetus.</p>
<h3>Alimentary canal</h3>
<ul>
<li><b>Mouth</b>: teeth chew (mechanical digestion), salivary amylase starts starch digestion.</li>
<li><b>Oesophagus</b>: carries food to the stomach by peristalsis.</li>
<li><b>Stomach</b>: muscular churning, <b>pepsin</b> (protease), hydrochloric acid kills bacteria and gives the low pH for pepsin.</li>
<li><b>Pancreas</b>: makes amylase, protease and lipase, released into the duodenum.</li>
<li><b>Small intestine</b>: <b>duodenum</b> (digestion continues) and <b>ileum</b> (absorption).</li>
<li><b>Large intestine</b>: <b>colon</b> absorbs water; <b>rectum</b> stores faeces until egestion through the anus.</li>
</ul>
<p><b>Peristalsis</b>: circular and longitudinal muscles contract and relax in waves to push food along.</p>
<h3>Digestive enzymes</h3>
<ul>
<li>Starch → maltose by <b>amylase</b>; maltose → glucose by <b>maltase</b>.</li>
<li>Proteins → amino acids by <b>proteases</b> (e.g. pepsin, trypsin).</li>
<li>Lipids → fatty acids and glycerol by <b>lipases</b>.</li>
</ul>
<h3>Bile</h3>
<p>Made in the <b>liver</b>, stored in the <b>gall bladder</b>, released into the duodenum. It is <b>alkaline</b>, so neutralises stomach acid giving the right pH for enzymes in the small intestine. It <b>emulsifies</b> fats into small droplets, increasing surface area for lipase. Bile is not an enzyme.</p>
<h3>Villi</h3>
<p>The ileum is long and lined with villi, each covered in microvilli: a huge surface area. Villus walls are one cell thick (short distance). Each has a dense <b>capillary network</b> that absorbs glucose and amino acids and carries them away, keeping a steep gradient, and a <b>lacteal</b> that absorbs fatty acids and glycerol.</p>
<h3>Energy in food (2.33B)</h3>
<p>Burn a weighed food sample under a boiling tube of known volume of water. Measure the temperature rise. <b>Energy (J) = mass of water (g) × 4.2 × temperature rise (°C)</b>. Divide by the mass of food for J/g. The result is an underestimate because heat is lost to the air and the tube, and burning may be incomplete.</p>`,
exam:[
["State the role of bile in digestion. ",2,"Neutralises stomach acid / provides alkaline conditions (1). Emulsifies fats / breaks into droplets to increase surface area for lipase (1)."],
["1.0 g of crisp heated 20 cm³ of water from 21 °C to 46 °C. Calculate the energy per gram. ",3,"Temperature rise = 25 °C (1). 20 × 4.2 × 25 = 2100 J (1). 2100 J/g (1)."],
["Explain why the value from the burning food experiment is lower than the true value. ",2,"Heat lost to the surroundings / to the boiling tube (1). Food not completely burned (1)."],
["Describe how the ileum is adapted for absorption. ",4,"Long (1). Villi and microvilli give large surface area (1). Walls one cell thick, short diffusion distance (1). Good blood supply / capillaries maintain the concentration gradient (1). Lacteals absorb fatty acids and glycerol (1). Max 4."]]},

{links:bl("structures-and-functions-in-living-organisms"), html:`
<h3>ATP</h3>
<p>Respiration releases energy from glucose and uses it to make <b>ATP</b>. ATP provides the energy cells need for muscle contraction, active transport, protein synthesis, cell division and keeping body temperature. Respiration happens in every living cell, all the time.</p>
<h3>Aerobic respiration (in mitochondria)</h3>
<p><b>glucose + oxygen → carbon dioxide + water</b></p>
<p><b>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O</b></p>
<h3>Anaerobic respiration (in cytoplasm, no oxygen)</h3>
<p>Animals: <b>glucose → lactic acid</b></p>
<p>Plants and yeast: <b>glucose → ethanol + carbon dioxide</b></p>
<h3>Differences</h3>
<ul>
<li>Aerobic needs oxygen; anaerobic doesn't.</li>
<li>Aerobic releases much more energy (ATP) per glucose because glucose is fully broken down.</li>
<li>Products differ: CO₂ and water vs lactic acid (animals) or ethanol and CO₂ (plants, yeast).</li>
</ul>
<p>During hard exercise muscles can't get enough oxygen so they also respire anaerobically. Lactic acid builds up, causing fatigue. Afterwards, extra oxygen is needed to break it down (the <b>oxygen debt</b>).</p>
<h3>Practical (2.39)</h3>
<p><b>CO₂</b>: put germinating seeds in a tube with <b>hydrogen-carbonate indicator</b> (on a gauze so they don't touch it). Indicator goes orange → yellow as CO₂ rises. Or limewater turns cloudy.</p>
<p><b>Heat</b>: germinating seeds in a vacuum flask with a thermometer, sealed with cotton wool. Control: <b>boiled seeds</b> (dead), soaked in disinfectant to stop microbes respiring. The living seeds' flask gets warmer.</p>`,
exam:[
["Give two differences between aerobic and anaerobic respiration in humans. ",2,"Aerobic uses oxygen, anaerobic doesn't (1). Aerobic releases more energy (1). Aerobic produces CO₂ and water, anaerobic produces lactic acid (1). Any two."],
["Why are the seeds in the control flask boiled and treated with disinfectant? ",2,"Boiling kills the seeds so they don't respire (1). Disinfectant kills microorganisms, which would respire and release heat (1)."],
["Write the balanced chemical equation for aerobic respiration. ",2,"C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. Correct formulae (1), balanced (1)."]]},

{links:bl("structures-and-functions-in-living-organisms"), html:`
<h3>Diffusion in the leaf</h3>
<p>Gases move in and out of leaves by <b>diffusion</b> through the <b>stomata</b>, then through air spaces in the spongy mesophyll to the cells.</p>
<h3>Respiration vs photosynthesis</h3>
<ul>
<li>Respiration happens all the time, day and night: takes in O₂, gives out CO₂.</li>
<li>Photosynthesis happens only in light: takes in CO₂, gives out O₂.</li>
<li><b>Bright light</b>: photosynthesis faster than respiration, net uptake of CO₂, net release of O₂.</li>
<li><b>Dim light</b> (compensation point): rates equal, no net exchange.</li>
<li><b>Dark</b>: only respiration, net release of CO₂, net uptake of O₂.</li>
</ul>
<h3>Leaf adapted for gas exchange</h3>
<p>Thin and flat (large surface area, short distance), many stomata on the lower surface, air spaces in the spongy layer, moist cell surfaces for gases to dissolve.</p>
<h3>Stomata</h3>
<p>Each stoma is surrounded by two <b>guard cells</b>. In light they take in water, become turgid and bend apart, opening the pore. When the plant is short of water they become flaccid and close the stoma, reducing water loss but also stopping CO₂ getting in.</p>
<h3>Hydrogen-carbonate indicator practical (2.45B)</h3>
<p>Indicator starts <b>orange-red</b> (atmospheric CO₂). More CO₂ → <b>yellow</b>. Less CO₂ → <b>purple</b>.</p>
<p>Set up tubes with a leaf: one in the dark (foil), one in gauze shade, one in full light, plus a control with no leaf. After a few hours: dark → yellow; shade → orange-red (no change); bright light → purple. Control stays orange-red, showing the leaf caused the change.</p>`,
exam:[
["Predict the colour of hydrogen-carbonate indicator after 4 hours in a sealed tube with a leaf in bright light, and explain. ",3,"Purple (1). Rate of photosynthesis greater than respiration (1). CO₂ taken up / concentration falls (1)."],
["Why is a tube with no leaf included? ",1,"Control: shows the change in colour is due to the leaf (1)."],
["Explain why stomata close when a plant is short of water, and a disadvantage of this. ",3,"Guard cells lose water / become flaccid (1). Reduces water loss by transpiration (1). Less CO₂ enters so less photosynthesis (1)."]]},

{links:bl("structures-and-functions-in-living-organisms"), html:`
<h3>The thorax</h3>
<p><b>Trachea</b> (held open by rings of cartilage) splits into two <b>bronchi</b>, which divide into <b>bronchioles</b>, ending in air sacs called <b>alveoli</b>. The lungs sit inside the ribcage, protected by the <b>ribs</b>, with <b>intercostal muscles</b> between them. <b>Pleural membranes</b> line the lungs and chest wall; fluid between them reduces friction. The <b>diaphragm</b> is a sheet of muscle underneath.</p>
<h3>Ventilation</h3>
<p><b>Breathing in</b>: external intercostal muscles contract, ribs move up and out. Diaphragm contracts and flattens. Volume of thorax increases, pressure decreases below atmospheric, air rushes in.</p>
<p><b>Breathing out</b>: external intercostals relax, ribs move down and in. Diaphragm relaxes and domes up. Volume decreases, pressure increases, air is forced out. (Internal intercostals contract in forced breathing out.)</p>
<h3>Alveoli</h3>
<ul>
<li>Millions of them: huge surface area.</li>
<li>Walls one cell thick, and capillary walls one cell thick: short diffusion distance.</li>
<li>Moist lining: gases dissolve.</li>
<li>Dense capillary network and constant ventilation: maintain a steep concentration gradient.</li>
</ul>
<h3>Smoking</h3>
<ul>
<li><b>Tar</b>: carcinogen, causes lung cancer; also paralyses cilia so mucus builds up, leading to smoker's cough and bronchitis.</li>
<li><b>Emphysema</b>: alveoli walls break down, less surface area, breathlessness.</li>
<li><b>Carbon monoxide</b>: binds to haemoglobin permanently, so less oxygen carried.</li>
<li><b>Nicotine</b>: addictive; raises heart rate and narrows blood vessels, raising blood pressure.</li>
<li>Increases the risk of <b>coronary heart disease</b>: fatty deposits in coronary arteries, which can block blood supply to heart muscle (heart attack).</li>
</ul>
<h3>Practical (2.50)</h3>
<p>Breathe out through limewater (goes cloudy faster than with inhaled air), or hydrogen-carbonate indicator. Measure breathing rate (breaths per minute) at rest and after exercise; it increases to supply more oxygen and remove CO₂ faster.</p>`,
exam:[
["Describe how the diaphragm and intercostal muscles cause air to enter the lungs. ",4,"Intercostal muscles contract, ribs move up and out (1). Diaphragm contracts and flattens (1). Volume of thorax increases (1). Pressure decreases, air moves in (1)."],
["Explain how emphysema makes a person breathless. ",3,"Alveoli walls break down (1). Smaller surface area (1). Less oxygen diffuses into the blood (1)."],
["Explain two ways the alveoli are adapted for gas exchange. ",4,"Thin walls (1) short diffusion distance (1). Large surface area (1) more diffusion at once (1). Good blood supply (1) maintains concentration gradient (1). Any two pairs."]]},

{links:bl("structures-and-functions-in-living-organisms"), html:`
<h3>Why a transport system?</h3>
<p>Single-celled organisms have a <b>large SA:V</b> and short distances, so diffusion is fast enough. Large multicellular organisms have a small SA:V and cells far from the surface, so diffusion would be too slow. They need a transport system.</p>
<h3>Xylem and phloem</h3>
<ul>
<li><b>Xylem</b>: dead cells forming hollow tubes strengthened with lignin. Carries <b>water and mineral ions</b> from the roots up to the leaves. One direction.</li>
<li><b>Phloem</b>: living cells. Carries <b>sucrose and amino acids</b> from the leaves to growing and storage parts (translocation). Both directions.</li>
</ul>
<h3>Root hair cells</h3>
<p>Long projection gives a large surface area. Water enters by <b>osmosis</b> because the cell sap is more concentrated than soil water. Mineral ions enter by <b>active transport</b> (against the gradient, needs energy).</p>
<h3>Transpiration</h3>
<p>The <b>evaporation of water from the surface of a plant</b>, mainly from the leaves. Water evaporates from mesophyll cells into air spaces and diffuses out through stomata. This pulls water up the xylem in a continuous column (transpiration stream). It supplies water for photosynthesis, minerals, and cools the leaf.</p>
<ul>
<li><b>Higher temperature</b>: faster evaporation and diffusion, rate increases.</li>
<li><b>Higher light intensity</b>: more stomata open, rate increases.</li>
<li><b>Higher wind speed</b>: blows away water vapour, keeps steep gradient, rate increases.</li>
<li><b>Higher humidity</b>: less steep gradient, rate decreases.</li>
</ul>
<h3>Potometer practical (2.58B)</h3>
<p>Cut the shoot underwater (stops air bubbles entering the xylem), fit to the potometer underwater, seal with petroleum jelly. Measure how far the air bubble moves in a set time. Change one factor (fan for wind, lamp for light, plastic bag for humidity) and keep others constant. It measures water <b>uptake</b>, which is slightly more than water lost (some is used in photosynthesis).</p>`,
exam:[
["Explain why the rate of transpiration increases on a windy day. ",2,"Wind removes water vapour from around the leaf (1). Maintains a steep concentration gradient / faster diffusion out of stomata (1)."],
["Why is the shoot cut underwater when setting up a potometer? ",1,"To stop air entering the xylem / keep a continuous column of water (1)."],
["Explain how water moves from the soil into a root hair cell. ",2,"By osmosis (1). Soil water more dilute than cell sap / from high to low water potential through partially permeable membrane (1)."]]},

{links:bl("structures-and-functions-in-living-organisms"), figs:["heart"], html:`
<h3>Blood</h3>
<ul>
<li><b>Plasma</b>: transports CO₂, digested food (glucose, amino acids), urea, hormones and heat.</li>
<li><b>Red blood cells</b>: biconcave disc (large SA for diffusion), no nucleus (more room for haemoglobin), contain <b>haemoglobin</b> which binds oxygen to form oxyhaemoglobin in the lungs and releases it in tissues.</li>
<li><b>White blood cells</b>: fight pathogens.</li>
<li><b>Platelets</b>: cell fragments that clot blood.</li>
</ul>
<h3>Immune system</h3>
<p><b>Phagocytes</b> engulf and digest pathogens (phagocytosis). <b>Lymphocytes</b> make <b>antibodies</b> specific to the antigens on a particular pathogen. Antibodies stick to pathogens, causing them to clump or be destroyed.</p>
<p><b>Vaccination</b>: a dead or weakened pathogen (or its antigens) is injected. Lymphocytes make antibodies and <b>memory cells</b>. If the real pathogen enters later, memory cells produce antibodies <b>sooner, faster and in greater quantity</b>, destroying it before symptoms appear.</p>
<h3>Clotting</h3>
<p>At a wound, platelets release chemicals that turn soluble <b>fibrinogen</b> into insoluble <b>fibrin</b> threads. These trap red blood cells to form a clot, which stops blood loss and stops microorganisms entering.</p>
<h3>The heart</h3>
<p>Deoxygenated blood from the body enters the <b>right atrium</b> via the <b>vena cava</b>, passes to the <b>right ventricle</b>, then out via the <b>pulmonary artery</b> to the lungs. Oxygenated blood returns via the <b>pulmonary vein</b> to the <b>left atrium</b>, then <b>left ventricle</b>, then out via the <b>aorta</b> to the body. <b>Valves</b> stop backflow. The <b>left ventricle wall is thicker</b> because it pumps blood at higher pressure all round the body. The heart muscle is supplied by <b>coronary arteries</b>. This is a <b>double circulation</b>.</p>
<h3>Heart rate</h3>
<p>During exercise heart rate rises to deliver more oxygen and glucose to muscles for respiration and remove more CO₂. <b>Adrenaline</b> also increases heart rate.</p>
<h3>Coronary heart disease risk factors</h3>
<p>Smoking, high blood pressure, high saturated fat diet (high cholesterol), lack of exercise, obesity, stress, genes. Fatty deposits narrow coronary arteries, cutting oxygen supply to heart muscle.</p>
<h3>Blood vessels</h3>
<ul>
<li><b>Arteries</b>: carry blood away from the heart at high pressure. Thick muscular and elastic walls, narrow lumen.</li>
<li><b>Veins</b>: carry blood back to the heart at low pressure. Thin walls, wide lumen, <b>valves</b>.</li>
<li><b>Capillaries</b>: walls one cell thick for exchange with tissues; very narrow.</li>
</ul>
<h3>Circulation</h3>
<p>Know: <b>vena cava</b> and <b>aorta</b> (body), <b>pulmonary artery and vein</b> (lungs), <b>hepatic artery and hepatic vein</b> (liver), <b>hepatic portal vein</b> (gut to liver), <b>renal artery and renal vein</b> (kidneys).</p>`,
exam:[
["Explain how red blood cells are adapted to carry oxygen. ",3,"Contain haemoglobin which binds oxygen (1). No nucleus so more room for haemoglobin (1). Biconcave shape gives large surface area (1)."],
["Explain why a vaccinated person doesn't become ill when infected. ",4,"Memory cells already present (1). Recognise the antigen (1). Antibodies produced faster / in greater quantity (1). Pathogen destroyed before symptoms develop (1)."],
["Describe the path of blood from the vena cava to the aorta. ",4,"Right atrium (1). Right ventricle, pulmonary artery to lungs (1). Pulmonary vein to left atrium (1). Left ventricle to aorta (1)."],
["Explain how the structure of an artery relates to its function. ",3,"Thick wall withstands high pressure (1). Elastic tissue stretches and recoils to even out flow (1). Muscle can contract to control blood flow (1)."]]},

{links:bl("structures-and-functions-in-living-organisms"), figs:["nephron"], html:`
<h3>Excretion in plants</h3>
<p>CO₂ (from respiration) and O₂ (from photosynthesis) are waste products of metabolism. They leave by diffusion through the stomata.</p>
<h3>Human excretory organs</h3>
<ul>
<li><b>Lungs</b>: carbon dioxide (and water vapour).</li>
<li><b>Kidneys</b>: urea, excess water and ions (urine).</li>
<li><b>Skin</b>: sweat (water, salts, a little urea).</li>
</ul>
<h3>Urinary system</h3>
<p><b>Kidneys</b> filter blood → urine travels down the <b>ureters</b> → stored in the <b>bladder</b> → leaves through the <b>urethra</b>. The kidneys do <b>excretion</b> (removing urea) and <b>osmoregulation</b> (controlling water content).</p>
<h3>The nephron</h3>
<ul>
<li><b>Ultrafiltration</b>: blood enters the <b>glomerulus</b> at high pressure (the vessel in is wider than the vessel out). Small molecules (water, glucose, urea, ions) are forced into the <b>Bowman's capsule</b>. This is the glomerular filtrate. Blood cells and proteins are too big and stay in the blood.</li>
<li><b>Selective reabsorption</b>: in the <b>proximal convoluted tubule</b>, <b>all glucose</b> is reabsorbed into the blood by active transport, because the body needs it for respiration. Some ions and water are too.</li>
<li><b>Loop of Henle</b>: helps make the medulla salty so water can be reabsorbed.</li>
<li><b>Collecting duct</b>: water is reabsorbed by osmosis; how much depends on ADH.</li>
</ul>
<p>Urine contains <b>water, urea and ions</b>. Glucose in urine is a sign of diabetes.</p>
<h3>ADH</h3>
<p>If blood water content is too low (dehydrated, sweating), the brain detects it and the <b>pituitary gland</b> releases more <b>ADH</b>. ADH makes the collecting duct more permeable, so more water is reabsorbed into the blood, producing a small volume of concentrated urine. If you drink lots, less ADH is released, so lots of dilute urine. This is negative feedback.</p>`,
exam:[
["Explain why glucose is not normally found in urine. ",2,"All glucose is reabsorbed (1) in the proximal convoluted tubule (by active transport) (1)."],
["Explain why proteins are not found in the glomerular filtrate. ",1,"Too large to pass through the filter / capillary wall (1)."],
["Describe how the body responds to dehydration to conserve water. ",4,"Detected by the brain (hypothalamus) (1). Pituitary releases more ADH (1). Collecting duct more permeable (1). More water reabsorbed into blood, small volume of concentrated urine (1)."]]},

{links:bl("structures-and-functions-in-living-organisms"), html:`
<h3>Responding to change</h3>
<p>Organisms detect a <b>stimulus</b> (a change in the environment) with a <b>receptor</b>, and respond using an <b>effector</b> (muscle or gland). Responses help them survive. Plants respond too: shoots grow towards light (<b>phototropism</b>) and roots grow with gravity (<b>geotropism</b>), controlled by auxin.</p>
<h3>Homeostasis</h3>
<p>The maintenance of a <b>constant internal environment</b>. Examples: body water content (controlled by the kidneys and ADH) and body temperature (about 37 °C, so enzymes work at their optimum).</p>
<h3>Temperature control by the skin</h3>
<p><b>Too hot</b>: sweat glands release more sweat, which evaporates and takes heat energy from the skin. <b>Vasodilation</b>: arterioles supplying skin capillaries widen, more blood flows near the surface, more heat lost by radiation. Hairs lie flat.</p>
<p><b>Too cold</b>: less sweat. <b>Vasoconstriction</b>: arterioles narrow, less blood near the surface, less heat lost. Shivering (muscles contract, respiration releases heat). Hairs stand up, trapping a layer of insulating air.</p>
<p>Note: blood vessels don't move up or down in the skin. Arterioles widen or narrow.</p>
<h3>Hormones</h3>
<ul>
<li><b>Adrenaline</b> (adrenal glands): increases heart rate and breathing rate, raises blood glucose, widens pupils, diverts blood to muscles. Fight or flight.</li>
<li><b>Insulin</b> (pancreas): lowers blood glucose by making the liver and muscles convert glucose to <b>glycogen</b>.</li>
<li><b>Testosterone</b> (testes): male secondary sexual characteristics, sperm production.</li>
<li><b>Oestrogen</b> (ovaries): female secondary sexual characteristics, repairs and thickens the uterus lining.</li>
<li><b>Progesterone</b> (ovaries): maintains the uterus lining.</li>
<li><b>ADH</b> (pituitary): increases water reabsorption in the kidney.</li>
<li><b>FSH</b> (pituitary): makes an egg mature in the ovary and stimulates oestrogen production.</li>
<li><b>LH</b> (pituitary): triggers ovulation.</li>
</ul>
<p>Hormones are chemical messengers carried in the blood plasma to target organs. Compared with nerves they are slower and longer-lasting.</p>`,
exam:[
["Explain how vasoconstriction helps the body when it is cold. ",3,"Arterioles near the skin surface narrow (1). Less blood flows near the surface (1). Less heat lost by radiation (1)."],
["Name the gland that produces adrenaline and give two of its effects. ",3,"Adrenal gland (1). Increases heart rate (1). Increases blood glucose / breathing rate / widens pupils (1)."],
["Give two differences between nervous and hormonal responses. ",2,"Hormones are slower (1). Hormones last longer (1). Hormones carried in blood, nerves use electrical impulses (1). Any two."]]},

{links:[["PMT notes and topic questions", PMT_B+"reproduction-and-inheritance/"],["Save My Exams (log in on your phone)", SME_B]], html:`
<h3>Sexual vs asexual</h3>
<p><b>Sexual</b>: two parents, fusion of male and female gametes, offspring genetically different (variation). <b>Asexual</b>: one parent, no gametes, offspring are genetically identical clones. Asexual is faster and needs no partner, but gives no variation.</p>
<p><b>Fertilisation</b>: male and female gametes fuse to form a <b>zygote</b>, which divides by mitosis to form an <b>embryo</b>.</p>
<h3>Flowers</h3>
<ul>
<li><b>Insect-pollinated</b>: large brightly coloured petals, scent and nectar to attract insects; anthers and stigma inside the flower; sticky stigma; small amounts of large, sticky or spiky pollen.</li>
<li><b>Wind-pollinated</b>: small dull petals or none, no scent or nectar; anthers hang outside to release pollen into the wind; large feathery stigma to catch pollen; huge amounts of small, light, smooth pollen.</li>
</ul>
<p>After pollination a <b>pollen tube</b> grows down the style to the ovule. The male nucleus travels down it and fuses with the female nucleus (fertilisation). The ovule becomes the <b>seed</b>, the ovary becomes the <b>fruit</b>.</p>
<h3>Germination</h3>
<p>Needs <b>water</b> (activates enzymes, swells seed), <b>oxygen</b> (aerobic respiration) and a <b>suitable temperature</b> (enzymes). Light is not needed. Practical: set up tubes with seeds missing one condition each (dry cotton wool, boiled water with oil layer, fridge) plus a control. The seed uses stored <b>food reserves</b> (starch broken down to sugars by enzymes) until its leaves can photosynthesise.</p>
<h3>Asexual in plants</h3>
<p>Natural: <b>runners</b> (strawberry plants send out stems that grow new plants). Artificial: <b>cuttings</b>, part of a plant cut off and grown, often with rooting powder.</p>
<h3>Human reproduction</h3>
<p><b>Male</b>: testes make sperm and testosterone; scrotum keeps testes cooler; sperm duct carries sperm; prostate and seminal vesicles add fluid; urethra; penis.</p>
<p><b>Female</b>: ovaries release eggs and make oestrogen and progesterone; oviduct (fertilisation happens here, cilia move the egg); uterus (embryo implants in lining); cervix; vagina.</p>
<h3>Menstrual cycle (about 28 days)</h3>
<ul>
<li>Days 1–5: menstruation, uterus lining breaks down.</li>
<li><b>FSH</b> (pituitary) makes an egg mature and stimulates <b>oestrogen</b>.</li>
<li><b>Oestrogen</b> rebuilds the uterus lining and inhibits FSH.</li>
<li><b>LH</b> (pituitary) peaks around day 14, triggering <b>ovulation</b>.</li>
<li><b>Progesterone</b> (from the corpus luteum) maintains the lining. If no pregnancy, progesterone falls and the lining breaks down.</li>
</ul>
<h3>Pregnancy</h3>
<p>The <b>placenta</b> lets substances diffuse between mother and fetus without the blood mixing: oxygen, glucose, amino acids, water and antibodies go to the fetus; CO₂ and urea go back. It has a large surface area (villi) and thin walls. Harmful substances like alcohol, nicotine and some viruses can cross. The embryo is protected by <b>amniotic fluid</b> in the amniotic sac, which cushions it from bumps.</p>
<h3>Puberty</h3>
<p><b>Testosterone</b>: deeper voice, facial and body hair, muscle growth, sperm production. <b>Oestrogen</b>: breasts develop, hips widen, periods start. Both: pubic and underarm hair.</p>`,
exam:[
["Give three ways a wind-pollinated flower is adapted for pollination. ",3,"Anthers hang outside flower (1). Large feathery stigma (1). Lots of light, small pollen (1). No need for bright petals / scent / nectar (1). Max 3."],
["Describe the roles of FSH and LH. ",3,"FSH causes an egg to mature (1) and stimulates oestrogen production (1). LH triggers ovulation / egg release (1)."],
["Describe how you would show that oxygen is needed for germination. ",3,"Seeds in boiled water with oil layer on top / with pyrogallol (1). Control with oxygen, all else the same (1). Compare number germinated after some days (1)."]]},

{links:[["PMT notes and topic questions", PMT_B+"ecology-and-environment/"],["Save My Exams (log in on your phone)", SME_B]], figs:["pyramid"], html:`
<h3>Key terms</h3>
<ul>
<li><b>Population</b>: all organisms of one species in an area.</li>
<li><b>Community</b>: all the populations of different species in an area.</li>
<li><b>Habitat</b>: the place where an organism lives.</li>
<li><b>Ecosystem</b>: a community and its physical (abiotic) environment interacting.</li>
<li><b>Biodiversity</b>: the variety of species (and genes and ecosystems) in an area.</li>
</ul>
<h3>Quadrats</h3>
<p><b>Population size (4.2)</b>: place quadrats at <b>random</b> (random number coordinates on a grid) in each area. Count organisms or percentage cover in each. Calculate a mean per quadrat, then estimate: mean × (total area ÷ quadrat area). Use lots of quadrats.</p>
<p><b>Distribution (4.4B)</b>: use a <b>transect</b>, a line across the habitat with quadrats at regular intervals. Record species and measure abiotic factors (light, moisture, pH) at each point to see how distribution changes.</p>
<h3>Factors</h3>
<p><b>Abiotic</b> (non-living): light, temperature, water, pH, oxygen, CO₂, mineral ions. <b>Biotic</b> (living): food availability, predators, competition, disease.</p>
<h3>Feeding relationships</h3>
<p><b>Producers</b> (plants) → <b>primary consumers</b> (herbivores) → <b>secondary consumers</b> → <b>tertiary consumers</b>. <b>Decomposers</b> (bacteria, fungi) break down dead material. Arrows show the direction of energy flow.</p>
<ul>
<li><b>Pyramid of numbers</b>: number of organisms at each level. Can be odd shapes (one tree feeds many insects).</li>
<li><b>Pyramid of biomass</b>: dry mass at each level. Almost always pyramid-shaped.</li>
<li><b>Pyramid of energy</b>: energy transferred per level per year. Always pyramid-shaped.</li>
</ul>
<h3>Energy transfer</h3>
<p>Only about <b>10%</b> passes to the next level. The rest is lost: <b>heat from respiration</b>, used in <b>movement</b>, <b>not eaten</b> (bones, roots), <b>egested</b> in faeces, excreted in urine. This is why food chains rarely have more than 4 or 5 levels.</p>
<h3>Carbon cycle</h3>
<p>CO₂ removed from the air by <b>photosynthesis</b>. Returned by <b>respiration</b> (plants, animals, decomposers), <b>decomposition</b> of dead organisms and waste, and <b>combustion</b> of fossil fuels and wood. Carbon passes along food chains by feeding. Dead material that doesn't decay can form fossil fuels over millions of years.</p>
<h3>Nitrogen cycle</h3>
<ul>
<li><b>Nitrogen-fixing bacteria</b> (in soil and in root nodules of legumes) turn N₂ from air into ammonium/nitrogen compounds. Lightning also fixes nitrogen.</li>
<li>Plants absorb <b>nitrates</b> to make proteins; animals eat them.</li>
<li><b>Decomposers</b> break down dead organisms and waste (urea) into <b>ammonium</b>.</li>
<li><b>Nitrifying bacteria</b> turn ammonium → nitrites → <b>nitrates</b> (need oxygen).</li>
<li><b>Denitrifying bacteria</b> turn nitrates back into N₂ gas, in waterlogged, anaerobic soil.</li>
</ul>`,
exam:[
["A field is 2000 m². Mean of 6 daisies per 0.25 m² quadrat. Estimate the population. ",2,"2000 ÷ 0.25 = 8000 quadrats (1). 6 × 8000 = 48 000 daisies (1)."],
["Explain why quadrats should be placed randomly. ",1,"To avoid bias / to get a representative sample (1)."],
["Explain why energy transfer between trophic levels is inefficient. ",3,"Energy lost as heat in respiration (1). Used for movement (1). Not all of the organism eaten / some egested in faeces (1)."],
["Describe the role of decomposers in the nitrogen cycle. ",2,"Break down proteins / urea in dead organisms and waste (1) into ammonium compounds (1)."]]},

{links:[["PMT notes and topic questions", PMT_B+"ecology-and-environment/"],["Save My Exams (log in on your phone)", SME_B]], html:`
<h3>Air pollution</h3>
<p><b>Sulfur dioxide</b> (burning fossil fuels containing sulfur) dissolves in rain to form <b>acid rain</b>. This damages leaves and kills trees, acidifies lakes killing fish and other organisms, leaches minerals from soil, and damages buildings. It also irritates the lungs.</p>
<p><b>Carbon monoxide</b> (incomplete combustion, e.g. car engines) binds irreversibly to haemoglobin, reducing oxygen transport. Can cause drowsiness and death.</p>
<h3>Greenhouse gases</h3>
<p><b>Water vapour, carbon dioxide, nitrous oxide, methane and CFCs</b>.</p>
<ul>
<li>CO₂: burning fossil fuels, deforestation (less photosynthesis, and burning trees).</li>
<li>Methane: cattle, rice paddies, landfill.</li>
<li>Nitrous oxide: fertilisers, vehicle engines.</li>
<li>CFCs: old fridges and aerosols (now banned).</li>
</ul>
<h3>Enhanced greenhouse effect</h3>
<p>Short-wavelength radiation from the Sun passes through the atmosphere and warms the Earth, which emits longer-wavelength infrared. Greenhouse gases absorb and re-emit some of it back, keeping Earth warm. More greenhouse gases trap more heat: the <b>enhanced greenhouse effect</b>, leading to <b>global warming</b>. Consequences: melting ice caps and rising sea levels (flooding), more extreme weather, changes in species distribution, extinctions, changes to crop growing.</p>
<h3>Water pollution</h3>
<p><b>Sewage</b> and <b>fertiliser</b> cause <b>eutrophication</b>: nitrates and phosphates enter rivers → <b>algal bloom</b> → algae block light from plants below → plants (and algae) die → <b>decomposers</b> (bacteria) break them down and respire aerobically, using up oxygen → fish and other animals die. Sewage also adds organic matter directly for bacteria to decompose, and may carry pathogens.</p>
<h3>Deforestation</h3>
<ul>
<li><b>Leaching</b>: no trees to take up nutrients, rain washes minerals out of the soil.</li>
<li><b>Soil erosion</b>: no roots holding soil, washed or blown away.</li>
<li><b>Evapotranspiration</b> disturbed: less water returned to the air, less rainfall, risk of drought.</li>
<li><b>Carbon cycle</b>: less photosynthesis, and burning or decaying trees release CO₂.</li>
<li><b>Atmospheric gases</b>: more CO₂ and less O₂ released.</li>
<li>Loss of habitats and biodiversity.</li>
</ul>`,
exam:[
["Describe how fertiliser running into a lake can cause fish to die. ",5,"Nitrates leach into lake (1). Algae grow rapidly / algal bloom (1). Light blocked, plants die (1). Bacteria decompose dead plants (1). Bacteria respire, using up oxygen (1). Fish die from lack of oxygen (1). Max 5."],
["Explain how an increase in carbon dioxide leads to global warming. ",3,"CO₂ is a greenhouse gas (1). Absorbs infrared radiation emitted by Earth / re-radiates it back (1). Less heat escapes, so temperature rises / enhanced greenhouse effect (1)."],
["Explain how deforestation can lead to flooding further downstream. ",2,"Fewer roots to hold soil / less water absorbed (1). More runoff into rivers / soil erosion blocks rivers (1)."]]},

{links:[["PMT notes and topic questions", PMT_B+"use-of-biological-resources/"],["Save My Exams (log in on your phone)", SME_B]], html:`
<h3>Glasshouses and polythene tunnels</h3>
<p>Let crops be grown out of season and in colder climates. Control conditions: they trap heat (warmer), protect from weather and pests, and allow control of <b>CO₂</b>, <b>temperature</b>, <b>light</b> and <b>water</b>. Paraffin heaters add both heat and CO₂. Artificial lights extend the day.</p>
<p><b>Increased CO₂</b> and <b>temperature</b> raise the rate of photosynthesis (they are often limiting), so yield increases. Too high a temperature denatures enzymes, and extra cost must be worth the extra yield.</p>
<h3>Fertilisers</h3>
<p>Supply mineral ions, mainly <b>nitrates</b> (proteins, growth), <b>phosphates</b> and <b>potassium</b>. Plants grow bigger and faster, increasing yield. Natural (manure, compost) or artificial (NPK). Overuse risks eutrophication.</p>
<h3>Pest control</h3>
<p>Pests eat or damage crops, reducing yield. <b>Pesticides</b>: fast and effective, but can kill harmless species, persist and build up along food chains (bioaccumulation), pests can become resistant, need reapplying. <b>Biological control</b>: introduce a predator or parasite of the pest (e.g. ladybirds eat aphids). Specific, no chemicals, keeps working, but slow, doesn't wipe out the pest, and the introduced species could become a pest itself.</p>
<h3>Micro-organisms</h3>
<p><b>Bread</b>: yeast respires anaerobically, producing CO₂ that makes the dough rise. Ethanol evaporates when baked. Sugar is food for the yeast; warmth speeds up its enzymes.</p>
<p><b>Yeast practical (5.6)</b>: yeast and sugar solution in a tube, with a layer of oil to keep it anaerobic. Count CO₂ bubbles or measure gas volume at different temperatures or sugar concentrations.</p>
<p><b>Yoghurt</b>: milk is pasteurised (heated to kill bacteria), cooled, then <b>Lactobacillus</b> added and incubated around 40 °C. The bacteria ferment <b>lactose into lactic acid</b>. This lowers pH, which makes the milk proteins coagulate (thicken), gives the sour taste and stops other bacteria growing.</p>
<h3>Industrial fermenters</h3>
<ul>
<li><b>Aseptic precautions</b>: sterilised with steam to stop contamination by other microbes that would compete or make toxins.</li>
<li><b>Nutrients</b>: sugars and amino acids for growth.</li>
<li><b>Optimum temperature</b>: a water jacket removes heat produced by respiration.</li>
<li><b>Optimum pH</b>: monitored by a probe, acid or alkali added.</li>
<li><b>Oxygenation</b>: sterile air bubbled in for aerobic respiration.</li>
<li><b>Agitation</b>: paddles stir to mix nutrients, oxygen and microbes and keep temperature even.</li>
</ul>
<h3>Fish farming</h3>
<ul>
<li><b>Water quality</b>: oxygen levels, cleaned water, waste removed.</li>
<li><b>Predation</b>: fish of different species (interspecific) kept apart; sizes kept apart to stop large fish eating small (intraspecific); nets keep birds out.</li>
<li><b>Disease</b>: antibiotics and pesticides, but fish kept close together spread disease easily.</li>
<li><b>Waste removal</b>: filtering keeps water clean.</li>
<li><b>Feeding</b>: controlled quality and frequency, so little is wasted and fish grow fast.</li>
<li><b>Selective breeding</b>: fast-growing, disease-resistant fish.</li>
</ul>`,
exam:[
["Explain why a farmer might use a paraffin heater in a glasshouse. ",3,"Increases temperature (1). Produces CO₂ (1). Both increase rate of photosynthesis, giving higher yield (1)."],
["Explain why the pH falls during yoghurt making. ",2,"Lactobacillus ferments lactose (1) into lactic acid (1)."],
["Explain why a fermenter needs a water jacket and paddles. ",4,"Water jacket: removes heat released by respiration (1), keeps optimum temperature for enzymes (1). Paddles: mix nutrients and oxygen with microbes (1), keep temperature even (1)."]]}
]};
