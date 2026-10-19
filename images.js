// Images from Wikimedia Commons under free licences (public domain, CC0, CC BY, CC BY-SA, GFDL). Credits shown under each image.
const IMAGES = {
 "bio": {
  "0": [
   {
    "src": "img/average-prokaryote-cell-en.jpg",
    "cap": "Bacterial (prokaryotic) cell: no nucleus, circular DNA and plasmids",
    "credit": "Mariana Ruiz Villarreal, LadyofHats",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Average_prokaryote_cell-_en.svg"
   }
  ],
  "1": [
   {
    "src": "img/animal-cell-structure-en.jpg",
    "cap": "Animal cell",
    "credit": "LadyofHats (Mariana Ruiz)",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Animal_cell_structure_en.svg"
   },
   {
    "src": "img/plant-cell-structure-en.jpg",
    "cap": "Plant cell: cell wall, chloroplasts and large vacuole",
    "credit": "LadyofHats",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Plant_cell_structure-en.svg"
   }
  ],
  "2": [
   {
    "src": "img/lock-and-key-enzyme-mechanism.jpg",
    "cap": "Lock and key model: substrate fits the active site, products released",
    "credit": "domdomegg",
    "lic": "CC BY 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Lock_and_key_enzyme_mechanism.svg"
   }
  ],
  "3": [
   {
    "src": "img/osmosis-diagram.jpg",
    "cap": "Osmosis across a partially permeable membrane",
    "credit": "KDS4444",
    "lic": "CC0",
    "page": "https://commons.wikimedia.org/wiki/File:Osmosis_diagram.svg"
   }
  ],
  "4": [
   {
    "src": "img/leaf-tissue-structure.jpg",
    "cap": "Cross-section of a leaf",
    "credit": "Zephyris",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Leaf_Tissue_Structure.svg"
   }
  ],
  "5": [
   {
    "src": "img/digestive-system-diagram-en.jpg",
    "cap": "The human digestive system",
    "credit": "Mariana Ruiz, Jmarchn",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Digestive_system_diagram_en.svg"
   },
   {
    "src": "img/intestinal-villus-simplified.jpg",
    "cap": "A villus: capillaries and lacteal",
    "credit": "Snow93",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Intestinal_villus_simplified.svg"
   }
  ],
  "6": [
   {
    "src": "img/mitochondrion-structure.jpg",
    "cap": "Mitochondrion, site of aerobic respiration",
    "credit": "Kelvinsong; modified by Sowlos",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Mitochondrion_structure.svg"
   }
  ],
  "7": [
   {
    "src": "img/opening-and-closing-of-stoma.jpg",
    "cap": "Guard cells: turgid (open) and flaccid (closed)",
    "credit": "Ali Zifan",
    "lic": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Opening_and_Closing_of_Stoma.svg"
   }
  ],
  "8": [
   {
    "src": "img/respiratory-system-complete-en.jpg",
    "cap": "The human respiratory system",
    "credit": "LadyofHats, Jmarchn",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg"
   },
   {
    "src": "img/alveolus-diagram.jpg",
    "cap": "Alveoli and their capillary network",
    "credit": "LadyofHats",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Alveolus_diagram.svg"
   }
  ],
  "9": [
   {
    "src": "img/xylem-and-phloem-diagram.jpg",
    "cap": "Xylem carries water up; phloem carries sugars",
    "credit": "Nefronus",
    "lic": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Xylem_and_phloem_diagram.svg"
   },
   {
    "src": "img/potometer.jpg",
    "cap": "A potometer for measuring water uptake",
    "credit": "Theresa knott (numbers added)",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Potometer.png"
   }
  ],
  "10": [
   {
    "src": "img/diagram-of-the-human-heart-cropped.jpg",
    "cap": "The human heart (blue: deoxygenated, red: oxygenated)",
    "credit": "Wapcaplet",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Diagram_of_the_human_heart_(cropped).svg"
   },
   {
    "src": "img/red-white-blood-cells.jpg",
    "cap": "Red blood cells, a white blood cell and platelets (electron micrograph)",
    "credit": "NCI Electron Microscopy Facility (numbers added)",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Red_White_Blood_cells.jpg"
   }
  ],
  "11": [
   {
    "src": "img/2611-blood-flow-in-the-nephron.jpg",
    "cap": "A nephron and its blood supply",
    "credit": "OpenStax College",
    "lic": "CC BY 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:2611_Blood_Flow_in_the_Nephron.jpg"
   }
  ],
  "12": [
   {
    "src": "img/endocrine-english.jpg",
    "cap": "Endocrine glands: pituitary, adrenal, pancreas, ovaries, testes",
    "credit": "OpenStax & Tomáš Kebert & umimeto.org",
    "lic": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Endocrine_English.svg"
   }
  ],
  "13": [
   {
    "src": "img/mature-flower-diagram.jpg",
    "cap": "Parts of a flower",
    "credit": "Mariana Ruiz LadyofHats",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Mature_flower_diagram.svg"
   },
   {
    "src": "img/germination-en.jpg",
    "cap": "Germination: radicle then plumule",
    "credit": "Kat19 and contributors",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Germination-en.svg"
   },
   {
    "src": "img/menstrualcycle-en.jpg",
    "cap": "Hormone levels and uterus lining through the menstrual cycle",
    "credit": "Speck-Made",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:MenstrualCycle_en.svg"
   },
   {
    "src": "img/placenta-system.jpg",
    "cap": "Fetus in the uterus with the placenta and amniotic sac",
    "credit": "Wilfredor (one label removed, numbers added)",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Placenta_system.svg"
   }
  ],
  "14": [
   {
    "src": "img/food-web-diagram.jpg",
    "cap": "A food web",
    "credit": "LadyofHats",
    "lic": "CC0",
    "page": "https://commons.wikimedia.org/wiki/File:Food_web_diagram.svg"
   },
   {
    "src": "img/carbon-cycle-cute-diagram.jpg",
    "cap": "The carbon cycle (numbers in gigatonnes of carbon)",
    "credit": "Original: Kevin Saff Vector: FischX",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Carbon_cycle-cute_diagram.svg"
   },
   {
    "src": "img/nitrogen-cycle.jpg",
    "cap": "The nitrogen cycle",
    "credit": "Wikimedia Commons contributors",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Nitrogen_Cycle.svg"
   }
  ],
  "15": [
   {
    "src": "img/greenhouse-effect.jpg",
    "cap": "The greenhouse effect",
    "credit": "Robert A. Rohde (Dragons flight at English Wi",
    "lic": "GFDL 1.2",
    "page": "https://commons.wikimedia.org/wiki/File:Greenhouse_Effect.svg"
   },
   {
    "src": "img/july-12-2013-dc-algal-bloom-9321802631.jpg",
    "cap": "An algal bloom caused by excess nutrients",
    "credit": "USEPA Environmental-Protection-Agency",
    "lic": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:July_12,_2013_-_DC_Algal_Bloom_(9321802631).jpg"
   },
   {
    "src": "img/oil-palm-clearing-aerial-borneo.jpg",
    "cap": "Rainforest cleared for oil palm in Borneo",
    "credit": "T. R. Shankar Raman",
    "lic": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Oil_Palm_clearing_aerial_Borneo.JPG"
   }
  ],
  "16": [
   {
    "src": "img/inside-a-polytunnel-geograph-org-uk-1614227.jpg",
    "cap": "Inside a polytunnel",
    "credit": "Nigel Chadwick",
    "lic": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Inside_a_polytunnel_-_geograph.org.uk_-_1614227.jpg"
   },
   {
    "src": "img/bioreactor-principle.jpg",
    "cap": "An industrial fermenter: motor and paddles, air in, water jacket",
    "credit": "GYassineMrabetTalk✉",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Bioreactor_principle.svg"
   }
  ]
 },
 "chem": {
  "0": [
   {
    "src": "img/electrolysis-copper-sulphate.jpg",
    "cap": "Electrolysis of copper(II) sulfate. In your practical the electrodes are inert graphite",
    "credit": "The original uploader was Theresa knott at En",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Electrolysis_copper_sulphate.png"
   }
  ]
 },
 "spa": {
  "1": [
   {
    "src": "img/instituto-de-educaci-n-secundaria-alhama-en-corell.jpg",
    "cap": "An instituto (IES), a Spanish state secondary school",
    "credit": "Zarateman",
    "lic": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Instituto_de_Educaci%C3%B3n_Secundaria_Alhama,_en_Corella_(Navarra).jpg"
   }
  ]
 }
};
