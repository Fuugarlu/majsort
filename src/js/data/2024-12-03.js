dataSetVersion = "2024-12-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to restrict to certain gender.",
    checked: false,
    sub: [
      { name: "Male", key: "male", checked: true },
      { name: "Female", key: "female", checked: true },
    ]
  },
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to Majsoul characters or Collab characters.",
    checked: false,
    sub: [
      { name: "Majsoul characters", key: "majsoul", checked: true },
      { name: "Collab characters", key: "collab", checked: true },
    ]
  },
  {
    name: "Filter by outfit",
    key: "outfit",
    tooltip: "Check this to restrict to certain outfit.",
    checked: true,
    sub: [
      { name: "Default outfits", key: "default", checked: true },
      { name: "Bond outfits", key: "bond", checked: false },
      { name: "Other outfits", key: "paid", checked: false }
    ]
  },
];


dataSet[dataSetVersion].characterData = [
  {
    name: "A-37 (Bond of the Restless Night.png)",
    img: "A-37 Bond of the Restless Night.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "A-37 (Bond)",
    img: "A-37 Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "A-37",
    img: "A-37 Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "A-37 (Firework Date)",
    img: "A-37 Firework Date.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "A-37 (Summertime Coffeeshop)",
    img: "A-37 Summertime Coffeeshop.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ai Hayasaka (Bond)",
    img: "Ai Hayasaka Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ai Hayasaka (Heart Thief)",
    img: "Ai Hayasaka Collab.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ai Hayasaka",
    img: "Ai Hayasaka Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Ako Atarashi (Bond)",
    img: "Ako Atarashi Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ako Atarashi (Bunny Ears Party)",
    img: "Ako Atarashi Bunny Ears Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ako Atarashi",
    img: "Ako Atarashi Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Anju Suzumiya (Bedtime Stories)",
    img: "Anju Suzumiya Bedtime Stories.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Anju Suzumiya (Bond)",
    img: "Anju Suzumiya Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Anju Suzumiya (Day of Celebration)",
    img: "Anju Suzumiya Day of Celebration.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Anju Suzumiya",
    img: "Anju Suzumiya Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Anju Suzumiya (Firework Date)",
    img: "Anju Suzumiya Firework Date.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Aru (Bond)",
    img: "Aru Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Aru",
    img: "Aru Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Aru (Flowery Charms)",
    img: "Aru Flowery Charms.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ayako Morikawa (Bond of the Restless Night)",
    img: "Ayako Morikawa Bond of the Restless Night.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ayako Morikawa (Bond)",
    img: "Ayako Morikawa Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ayako Morikawa (Daybreak in G Major)",
    img: "Ayako Morikawa Daybreak in G Major.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ayako Morikawa",
    img: "Ayako Morikawa Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Ayako Morikawa (Perfect Holiday)",
    img: "Ayako Morikawa Perfect Holiday.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ayane Kisaragi (Bond)",
    img: "Ayane Kisaragi Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ayane Kisaragi",
    img: "Ayane Kisaragi Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Ayane Kisaragi (Winter Warmth)",
    img: "Ayane Kisaragi Winter Warmth.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "C.C (Bond)",
    img: "C.C Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "C.C (Chessboard Party)",
    img: "C.C Chessboard Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "C.C",
    img: "C.C Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Chihori Terasaki (Bond)",
    img: "Chihori Terasaki Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Chihori Terasaki",
    img: "Chihori Terasaki Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Chihori Terasaki (Playful Summertime)",
    img: "Chihori Terasaki Playful Summertime.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Chihori Terasaki (Seize the Date)",
    img: "Chihori Terasaki Seize the Date.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Chiori Mikami (Beach Party)",
    img: "Chiori Mikami Beach Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Chiori Mikami (Bond)",
    img: "Chiori Mikami Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Chiori Mikami (Christmas Carnival)",
    img: "Chiori Mikami Christmas Carnival.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Chiori Mikami (Close Your Eyes)",
    img: "Chiori Mikami Close Your Eyes.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Chiori Mikami",
    img: "Chiori Mikami Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Chiori Mikami (Sweet Refreshment)",
    img: "Chiori Mikami Sweet Refreshment.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ciri (Bond)",
    img: "Ciri Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ciri",
    img: "Ciri Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Cynthia (Bond)",
    img: "Cynthia Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Cynthia",
    img: "Cynthia Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Ein (Bond)",
    img: "Ein Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ein (Close Your Eyes)",
    img: "Ein Close Your Eyes.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ein",
    img: "Ein Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Ein (Summer of Destiny)",
    img: "Ein Summer of Destiny.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Eliisa (Bedtime Stories)",
    img: "Eliisa Bedtime Stories.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Eliisa (Bond)",
    img: "Eliisa Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Eliisa (Close Your Eyes)",
    img: "Eliisa Close Your Eyes.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Eliisa",
    img: "Eliisa Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Eliisa (Heartbeat Velocity)",
    img: "Eliisa Heartbeat Velocity.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Eliisa (Spring Celebration)",
    img: "Eliisa Spring Celebration.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Eve Krist (Bond)",
    img: "Eve Krist Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Eve Krist",
    img: "Eve Krist Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Fu Ji (Beachside Vacation)",
    img: "Fu Ji Beachside Vacation.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Fu Ji (Bond)",
    img: "Fu Ji Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Fu Ji",
    img: "Fu Ji Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Fu Ji (Fantastic & Romantic)",
    img: "Fu Ji Fantastic & Romantic.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Fu Ji (Spring Relaxation)",
    img: "Fu Ji Spring Relaxation.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Fu Ji (Sugary Magic)",
    img: "Fu Ji Sugary Magic.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Fuuka Minami (Bond)",
    img: "Fuuka Minami Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Fuuka Minami",
    img: "Fuuka Minami Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Fuyumi Shinomiya (Bond)",
    img: "Fuyumi Shinomiya Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Fuyumi Shinomiya",
    img: "Fuyumi Shinomiya Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Fuyumi Shinomiya (Encountering Starlight)",
    img: "Fuyumi Shinomiya Encountering Starlight.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Fuyumi Shinomiya (Roomful of Aroma)",
    img: "Fuyumi Shinomiya Roomful of Aroma.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Fuyumi Shinomiya (Winter Warmth)",
    img: "Fuyumi Shinomiya Winter Warmth.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Gil (Bond)",
    img: "Gil Bond.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Gil",
    img: "Gil Default.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Gil (Prism Live)",
    img: "Gil Prism Live.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hana Ninomiya (Bond)",
    img: "Hana Ninomiya Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Hana Ninomiya",
    img: "Hana Ninomiya Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Hana Ninomiya (Roomful of Aroma)",
    img: "Hana Ninomiya Roomful of Aroma.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hana Ninomiya (Spring Celebration)",
    img: "Hana Ninomiya Spring Celebration.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hana Ninomiya (Summer of Destiny)",
    img: "Hana Ninomiya Summer of Destiny.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hannah (Bond)",
    img: "Hannah Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Hannah",
    img: "Hannah Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Hannah (Ode to Grace)",
    img: "Hannah Ode to Grace.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Haruna Igarashi (Beach Party)",
    img: "Haruna Igarashi Beach Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Haruna Igarashi (Bond)",
    img: "Haruna Igarashi Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Haruna Igarashi (Cozy Playtime)",
    img: "Haruna Igarashi Cozy Playtime.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Haruna Igarashi",
    img: "Haruna Igarashi Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Haruna Igarashi (Fortuitous Beginning)",
    img: "Haruna Igarashi Fortuitous Beginning.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Haruna Igarashi (Spring Homecoming)",
    img: "Haruna Igarashi Spring Homecoming.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hibiki Himekawa (Bond)",
    img: "Hibiki Himekawa Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Hibiki Himekawa",
    img: "Hibiki Himekawa Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Hibiki Himekawa (Encountering Starlight)",
    img: "Hibiki Himekawa Encountering Starlight.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hibiki Himekawa (Fortuitous Beginning)",
    img: "Hibiki Himekawa Fortuitous Beginning.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hideki Akechi (Bond)",
    img: "Hideki Akechi Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Hideki Akechi",
    img: "Hideki Akechi Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Hideki Akechi (Halloween Party)",
    img: "Hideki Akechi Halloween Party.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hideki Akechi (Seize the Date)",
    img: "Hideki Akechi Seize the Date.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hideki Akechi (Summer of Destiny)",
    img: "Hideki Akechi Summer of Destiny.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hinana Ichikawa (Bond)",
    img: "Hinana Ichikawa Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Hinana Ichikawa",
    img: "Hinana Ichikawa Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Hinana Ichikawa (Leisurely Grace)",
    img: "Hinana Ichikawa Leisurely Grace.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hinata Takanashi (Bond)",
    img: "Hinata Takanashi Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Hinata Takanashi (Cozy Playtime)",
    img: "Hinata Takanashi Cozy Playtime.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hinata Takanashi",
    img: "Hinata Takanashi Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Hinata Takanashi (Firework Date)",
    img: "Hinata Takanashi Firework Date.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hinata Takanashi (Soul-Colored Fantasy)",
    img: "Hinata Takanashi Soul-Colored Fantasy.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hinata Takanashi (Sweet Refreshment)",
    img: "Hinata Takanashi Sweet Refreshment.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hisa Takei (Bond)",
    img: "Hisa Takei Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Hisa Takei (Bunny Ears Party)",
    img: "Hisa Takei Bunny Ears Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Hisa Takei",
    img: "Hisa Takei Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Hoshino (Bond)",
    img: "Hoshino Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Hoshino",
    img: "Hoshino Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Hoshino (Flowery Charms)",
    img: "Hoshino Flowery Charms.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ichihime (Beach Party)",
    img: "Ichihime Beach Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ichihime (Bond)",
    img: "Ichihime Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ichihime",
    img: "Ichihime Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Ichihime (Invincible Ichihime)",
    img: "Ichihime Invincible Ichihime.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ichihime (New Year's First Visit)",
    img: "Ichihime New Year's First Visit.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ichihime (Spring Song)",
    img: "Ichihime Spring Song.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Illya (Bond)",
    img: "Illya Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Illya",
    img: "Illya Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Illya (Prism Live)",
    img: "Illya Prism Live.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Iwao Washizu (Bond)",
    img: "Iwao Washizu Bond.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Iwao Washizu (Showdown of Light and Shadow)",
    img: "Iwao Washizu Collab.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Iwao Washizu",
    img: "Iwao Washizu Default.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Joseph (Bond)",
    img: "Joseph Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Joseph",
    img: "Joseph Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Joseph (Snowy New Year)",
    img: "Joseph New Year.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ju (Bond)",
    img: "Ju Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ju",
    img: "Ju Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Kaavi (Bond)",
    img: "Kaavi Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kaavi (Daybreak in G Major)",
    img: "Kaavi Daybreak in G Major.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kaavi",
    img: "Kaavi Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Kaavi (Summer of Destiny)",
    img: "Kaavi Summer of Destiny.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kaguya Shinomiya (Bond)",
    img: "Kaguya Shinomiya Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kaguya Shinomiya (Heart Thief)",
    img: "Kaguya Shinomiya Collab.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kaguya Shinomiya",
    img: "Kaguya Shinomiya Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Kaguyahime (Bond)",
    img: "Kaguyahime Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kaguyahime",
    img: "Kaguyahime Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Kaguyahime (Dripping Glamour)",
    img: "Kaguyahime Dripping Glamour.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kaguyahime (Festive Aroma)",
    img: "Kaguyahime Festive Aroma.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kaguyahime (Snowy Night Whisper)",
    img: "Kaguyahime Snowy Night Whisper.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kallen Kouzuki (Bond)",
    img: "Kallen Kouzuki Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kallen Kouzuki (Chessboard Party)",
    img: "Kallen Kouzuki Chessboard Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kallen Kouzuki",
    img: "Kallen Kouzuki Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Kana Fujita (Beachside Vacation)",
    img: "Kana Fujita Beachside Vacation.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kana Fujita (Bond)",
    img: "Kana Fujita Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kana Fujita (Christmas Carnival)",
    img: "Kana Fujita Christmas Carnival.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kana Fujita (Code of Shadows)",
    img: "Kana Fujita Code of Shadows.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kana Fujita",
    img: "Kana Fujita Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Kazuha Saionji (Bond)",
    img: "Kazuha Saionji Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kazuha Saionji",
    img: "Kazuha Saionji Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Kei Shirogane (Bond)",
    img: "Kei Shirogane Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kei Shirogane (Heart Thief)",
    img: "Kei Shirogane Collab.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kei Shirogane",
    img: "Kei Shirogane Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Keikumusume (Beach Party)",
    img: "Keikumusume Beach Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Keikumusume (Bond)",
    img: "Keikumusume Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Keikumusume",
    img: "Keikumusume Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Kirara Fujimoto (Bond)",
    img: "Kirara Fujimoto Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kirara Fujimoto",
    img: "Kirara Fujimoto Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Kirara Fujimoto (Snowy New Year)",
    img: "Kirara Fujimoto New Year.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kirara Fujimoto (Perfect Holiday)",
    img: "Kirara Fujimoto Perfect Holiday.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kirara Fujimoto (Savoring the Warmth)",
    img: "Kirara Fujimoto Savoring the Warmth.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kirari Momobami (Bond)",
    img: "Kirari Momobami Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kirari Momobami (Floral Dance)",
    img: "Kirari Momobami Collab.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kirari Momobami",
    img: "Kirari Momobami Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Koito Fukumaru (Bond)",
    img: "Koito Fukumaru Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Koito Fukumaru",
    img: "Koito Fukumaru Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Koito Fukumaru (Leisurely Grace)",
    img: "Koito Fukumaru Leisurely Grace.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Koromo Amae (Bond)",
    img: "Koromo Amae Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Koromo Amae (Bunny Ears Party)",
    img: "Koromo Amae Bunny Ears Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Koromo Amae",
    img: "Koromo Amae Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Koromo Amae (The Exalted Blossom)",
    img: "Koromo Amae The Exalted Blossom.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kuro (Bond)",
    img: "Kuro Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kuro",
    img: "Kuro Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Kuro (Prism Live)",
    img: "Kuro Prism Live.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Kuro (Bond)",
    img: "Kurone Toujou Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kuro",
    img: "Kurone Toujou Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Kurone Toujou (Bond)",
    img: "Kurone Toujou Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kurone Toujou",
    img: "Kurone Toujou Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Kutsuji (Bond)",
    img: "Kutsuji Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Kutsuji",
    img: "Kutsuji Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Leia (Bond)",
    img: "Leia Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Leia",
    img: "Leia Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Lelouch Lamperouge (Bond)",
    img: "Lelouch Lamperouge Bond.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Lelouch Lamperouge (Chessboard Party)",
    img: "Lelouch Lamperouge Chessboard Party.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Lelouch Lamperouge",
    img: "Lelouch Lamperouge Default.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Lily Kitahara (Bond)",
    img: "Lily Kitahara Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Lily Kitahara",
    img: "Lily Kitahara Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Lin Lang (Bond)",
    img: "Lin Lang Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Lin Lang",
    img: "Lin Lang Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Lin Lang (Encountering Starlight)",
    img: "Lin Lang Encountering Starlight.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ling (Bond)",
    img: "Ling Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ling",
    img: "Ling Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Ling (Summertime)",
    img: "Ling Playful Summertime.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Madoka Higuchi (Bond)",
    img: "Madoka Higuchi Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Madoka Higuchi",
    img: "Madoka Higuchi Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Madoka Higuchi (Leisurely Grace)",
    img: "Madoka Higuchi Leisurely Grace.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Mai Aihara (Beach Party)",
    img: "Mai Aihara Beach Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Mai Aihara (Bond)",
    img: "Mai Aihara Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Mai Aihara",
    img: "Mai Aihara Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Mai Aihara (Fantastic & Romantic)",
    img: "Mai Aihara Fantastic & Romantic.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Mai Aihara (Forbidden Land)",
    img: "Mai Aihara Forbidden Land.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Mai Aihara (Savoring the Warmth)",
    img: "Mai Aihara Savoring the Warmth.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Mai Aihara (Wonderful Youth)",
    img: "Mai Aihara Wonderful Youth.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Mary Saotome (Bond)",
    img: "Mary Saotome Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Mary Saotome (Floral Dance)",
    img: "Mary Saotome Collab.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Mary Saotome",
    img: "Mary Saotome Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Midari Ikishima (Bond)",
    img: "Midari Ikishima Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Midari Ikishima (Floral Dance)",
    img: "Midari Ikishima Collab.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Midari Ikishima",
    img: "Midari Ikishima Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Mihoko Fukuji (Bond)",
    img: "Mihoko Fukuji Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Mihoko Fukuji (Bunny Ears Party)",
    img: "Mihoko Fukuji Bunny Ears Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Mihoko Fukuji",
    img: "Mihoko Fukuji Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Miki Nikaidou (Bond)",
    img: "Miki Nikaidou Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Miki Nikaidou",
    img: "Miki Nikaidou Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Miki Nikaidou (Halloween Party)",
    img: "Miki Nikaidou Halloween Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Miki Nikaidou (Night of the Iris)",
    img: "Miki Nikaidou Night of the Iris.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Miki Nikaidou (Playful Summertime)",
    img: "Miki Nikaidou Playful Summertime.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Miki Nikaidou (Spring Celebration)",
    img: "Miki Nikaidou Spring Celebration.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Mirai (Bond)",
    img: "Mirai Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Mirai",
    img: "Mirai Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Mirai (Ode to Grace)",
    img: "Mirai Ode to Grace.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Miyu (Bond)",
    img: "Miyu Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Miyu",
    img: "Miyu Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Miyu (Prism Live)",
    img: "Miyu Prism Live.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Miyuki Shirogane (Bond)",
    img: "Miyuki Shirogane Bond.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Miyuki Shirogane (Heart Thief)",
    img: "Miyuki Shirogane Collab.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Miyuki Shirogane",
    img: "Miyuki Shirogane Default.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Momo Hina (Bond)",
    img: "Momo Hina Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Momo Hina",
    img: "Momo Hina Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Momo Hina (Summertime Coffeeshop)",
    img: "Momo Hina Summertime Coffeeshop.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Momo Hina (Wonderful Youth)",
    img: "Momo Hina Wonderful Youth.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Musa (Bond)",
    img: "Musa Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Musa",
    img: "Musa Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Mutsuki (Bond)",
    img: "Mutsuki Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Mutsuki",
    img: "Mutsuki Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Mutsuki (Flowery Charms)",
    img: "Mutsuki Flowery Charms.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Nadeshiko (Auspicious Snow.png)",
    img: "Nadeshiko Auspicious Snow.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Nadeshiko (Beach Party)",
    img: "Nadeshiko Beach Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Nadeshiko (Bond)",
    img: "Nadeshiko Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Nadeshiko (Cozy Playtime)",
    img: "Nadeshiko Cozy Playtime.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Nadeshiko",
    img: "Nadeshiko Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Nadeshiko (Quadrupath Adventurer)",
    img: "Nadeshiko Quadrupath Adventurer.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Nana Shiraishi (Beach Party)",
    img: "Nana Shiraishi Beach Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Nana Shiraishi (Bond)",
    img: "Nana Shiraishi Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Nana Shiraishi",
    img: "Nana Shiraishi Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Nana Shiraishi (Roomful of Aroma)",
    img: "Nana Shiraishi Roomful of Aroma.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Nanaha Onodera (Bond)",
    img: "Nanaha Onodera Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Nanaha Onodera",
    img: "Nanaha Onodera Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Nanaha Onodera (Traditions of Summer)",
    img: "Nanaha Onodera Traditions of Summer.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Natsuhiko Takigawa (Bond)",
    img: "Natsuhiko Takigawa Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Natsuhiko Takigawa (Day of Celebration)",
    img: "Natsuhiko Takigawa Day of Celebration.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Natsuhiko Takigawa",
    img: "Natsuhiko Takigawa Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Natsuhiko Takigawa (Dripping Glamour)",
    img: "Natsuhiko Takigawa Dripping Glamour.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Natsuki Shinomiya (Auspicious Snow)",
    img: "Natsuki Shinomiya Auspicious Snow.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Natsuki Shinomiya (Bond)",
    img: "Natsuki Shinomiya Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Natsuki Shinomiya",
    img: "Natsuki Shinomiya Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Natsuki Shinomiya (Halloween Party)",
    img: "Natsuki Shinomiya Halloween Party.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Natsuki Shinomiya (Heartfelt Summer)",
    img: "Natsuki Shinomiya Heartfelt Summer.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Nodoka Haramura (Bond)",
    img: "Nodoka Haramura Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Nodoka Haramura (Bunny Ears Party)",
    img: "Nodoka Haramura Bunny Ears Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Nodoka Haramura (The Exalted Blossom)",
    img: "Nodoka Haramura Collab.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Nodoka Haramura",
    img: "Nodoka Haramura Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Osamu Saitou (Bond)",
    img: "Osamu Saitou Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Osamu Saitou",
    img: "Osamu Saitou Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Osamu Saitou (Firework Date)",
    img: "Osamu Saitou Firework Date.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Osamu Saitou (Winter Warmth)",
    img: "Osamu Saitou Winter Warmth.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Qi Xi (Bond)",
    img: "Qi Xi Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Qi Xi",
    img: "Qi Xi Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Qi Xi (Heartfelt Summer)",
    img: "Qi Xi Heartfelt Summer.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Qi Xi (Quadrupath Adventurer)",
    img: "Qi Xi Quadrupath Adventurer.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Qing Luan (Bond)",
    img: "Qing Luan Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Qing Luan (Day of Celebration)",
    img: "Qing Luan Day of Celebration.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Qing Luan",
    img: "Qing Luan Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Ransei (Bond of the Restless Night)",
    img: "Ransei Bond of the Restless Night.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ransei (Bond)",
    img: "Ransei Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ransei",
    img: "Ransei Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Reina Nanami (Bond)",
    img: "Reina Nanami Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Reina Nanami",
    img: "Reina Nanami Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Reina Nanami (Pillow Whispers)",
    img: "Reina Nanami Pillow Whispers.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Reina Nanami (White Hymn)",
    img: "Reina Nanami White Hymn.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ren Kisaragi (Bond)",
    img: "Ren Kisaragi Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ren Kisaragi (Brilliant New Year)",
    img: "Ren Kisaragi Brilliant New Year.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ren Kisaragi (Code of Shadows)",
    img: "Ren Kisaragi Code of Shadows.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ren Kisaragi",
    img: "Ren Kisaragi Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Riu Kujou (Beach Party)",
    img: "Riu Kujou Beach Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Riu Kujou (Bond)",
    img: "Riu Kujou Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Riu Kujou",
    img: "Riu Kujou Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Riu Kujou (Heartbeat Velocity)",
    img: "Riu Kujou Heartbeat Velocity.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Riu Kujou (Snowy New Year)",
    img: "Riu Kujou New Year.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Riu Kujou (Soul-Colored Fantasy)",
    img: "Riu Kujou Soul-Colored Fantasy.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ryan (Bond)",
    img: "Ryan Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Ryan (Close Your Eyes)",
    img: "Ryan Close Your Eyes.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Ryan",
    img: "Ryan Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Ryan (Sugary Magic)",
    img: "Ryan Sugary Magic.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Saki Miyanaga (Bond)",
    img: "Saki Miyanaga Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Saki Miyanaga (Bunny Ears Party)",
    img: "Saki Miyanaga Bunny Ears Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Saki Miyanaga (The Exalted Blossom)",
    img: "Saki Miyanaga Collab.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Saki Miyanaga",
    img: "Saki Miyanaga Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Sammir (Bond)",
    img: "Sammir Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Sammir",
    img: "Sammir Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Sammir (Ode to Grace)",
    img: "Sammir Ode to Grace.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sammir (Spring Relaxation)",
    img: "Sammir Spring Relaxation.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sara (Bond)",
    img: "Sara Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Sara",
    img: "Sara Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Sara (Heartfelt Summer)",
    img: "Sara Heartfelt Summer.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sara (New Year's First Visit)",
    img: "Sara New Year's First Visit.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sara (Quadrupath Adventurer)",
    img: "Sara Quadrupath Adventurer.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sara (Spring Homecoming)",
    img: "Sara Spring Homecoming.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sawako Kitami (Bond)",
    img: "Sawako Kitami Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Sawako Kitami",
    img: "Sawako Kitami Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Sawako Kitami (Heartbeat Velocity)",
    img: "Sawako Kitami Heartbeat Velocity.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sawako Kitami (Moonlight Waltz)",
    img: "Sawako Kitami Moonlight Waltz.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sawako Kitami (Pillow Whispers)",
    img: "Sawako Kitami Pillow Whispers.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sawako Kitami (Snowy Night Whisper)",
    img: "Sawako Kitami Snowy Night Whisper.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Shigeru Akagi (Bond)",
    img: "Shigeru Akagi Bond.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Shigeru Akagi (Showdown of Light and Shadow)",
    img: "Shigeru Akagi Collab.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Shigeru Akagi",
    img: "Shigeru Akagi Default.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Shiroko (Bond)",
    img: "Shiroko Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Shiroko",
    img: "Shiroko Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Shiroko (Flowery Charms)",
    img: "Shiroko Flowery Charms.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sora Ichinose (Bond of the Restless Night)",
    img: "Sora Ichinose Bond of the Restless Night.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sora Ichinose (Bond)",
    img: "Sora Ichinose Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Sora Ichinose (Christmas Carnival)",
    img: "Sora Ichinose Christmas Carnival.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sora Ichinose",
    img: "Sora Ichinose Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Sora Ichinose (Spring Homecoming)",
    img: "Sora Ichinose Spring Homecoming.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Sora Ichinose (Spring Song)",
    img: "Sora Ichinose Spring Song.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Suzaku Kururugi (Bond)",
    img: "Suzaku Kururugi Bond.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Suzaku Kururugi (Chessboard Party)",
    img: "Suzaku Kururugi Chessboard Party.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Suzaku Kururugi",
    img: "Suzaku Kururugi Default.png",
    opts: {
      gender: ["male"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Teru Miyanaga (Bond)",
    img: "Teru Miyanaga Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Teru Miyanaga (Bunny Ears Party)",
    img: "Teru Miyanaga Bunny Ears Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Teru Miyanaga (The Exalted Blossom)",
    img: "Teru Miyanaga Collab.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Teru Miyanaga",
    img: "Teru Miyanaga Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Toki Onjoji (Bond)",
    img: "Toki Onjoji Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Toki Onjoji (Bunny Ears Party)",
    img: "Toki Onjoji Bunny Ears Party.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Toki Onjoji",
    img: "Toki Onjoji Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Toru Asakura (Bond)",
    img: "Toru Asakura Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Toru Asakura",
    img: "Toru Asakura Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Toru Asakura (Leisurely Grace)",
    img: "Toru Asakura Leisurely Grace.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Usumi Ishihara (Beachside Vacation)",
    img: "Usumi Ishihara Beachside Vacation.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Usumi Ishihara (Bond)",
    img: "Usumi Ishihara Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Usumi Ishihara",
    img: "Usumi Ishihara Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Usumi Ishihara (White Hymn)",
    img: "Usumi Ishihara White Hymn.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Wanjirou (Beachside Vacation)",
    img: "Wanjirou Beachside Vacation.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Wanjirou (Bond)",
    img: "Wanjirou Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Wanjirou",
    img: "Wanjirou Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Wanjirou (Halloween Party)",
    img: "Wanjirou Halloween Party.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Xenia (Beach Party)",
    img: "Xenia Beach Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Xenia (Bond)",
    img: "Xenia Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Xenia",
    img: "Xenia Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Xenia (Fantastic & Romantic)",
    img: "Xenia Fantastic & Romantic.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Xenia (Halloween Party)",
    img: "Xenia Halloween Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Xenia (Spring Song)",
    img: "Xenia Spring Song.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Yuan Feng (Bond)",
    img: "Yuan Feng Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Yuan Feng",
    img: "Yuan Feng Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Yui Yagi (Bond)",
    img: "Yui Yagi Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Yui Yagi (Christmas Carnival)",
    img: "Yui Yagi Christmas Carnival.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Yui Yagi",
    img: "Yui Yagi Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Yui Yagi (Fantastic & Romantic)",
    img: "Yui Yagi Fantastic & Romantic.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Yui Yagi (Halloween Party)",
    img: "Yui Yagi Halloween Party.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Yui Yagi (Heartfelt Summer)",
    img: "Yui Yagi Heartfelt Summer.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Yui Yagi (Moonlight Waltz)",
    img: "Yui Yagi Moonlight Waltz.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Yui Yagi (Quadrupath Adventurer)",
    img: "Yui Yagi Quadrupath Adventurer.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Yumeko Jabami (Bond)",
    img: "Yumeko Jabami Bond.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["bond"],
    },
  },
  {
    name: "Yumeko Jabami (Floral Dance)",
    img: "Yumeko Jabami Collab.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["paid"],
    },
  },
  {
    name: "Yumeko Jabami",
    img: "Yumeko Jabami Default.png",
    opts: {
      gender: ["female"],
      series: ["collab"],
      outfit: ["default"],
    },
  },
  {
    name: "Yuzu (Bond)",
    img: "Yuzu Bond.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Yuzu (Brilliant New Year)",
    img: "Yuzu Brilliant New Year.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Yuzu",
    img: "Yuzu Default.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Yuzu (Pillow Whispers)",
    img: "Yuzu Pillow Whispers.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Yuzu (Playful Summertime)",
    img: "Yuzu Playful Summertime.png",
    opts: {
      gender: ["female"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Zan Tsukimi (Bond)",
    img: "Zan Tsukimi Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Zan Tsukimi",
    img: "Zan Tsukimi Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Zan Tsukimi (Forbidden Land)",
    img: "Zan Tsukimi Forbidden Land.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Zan Tsukimi (Savoring the Warmth)",
    img: "Zan Tsukimi Savoring the Warmth.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Zan Tsukimi (Spring Homecoming)",
    img: "Zan Tsukimi Spring Homecoming.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
  {
    name: "Zechs (Bond)",
    img: "Zechs Bond.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["bond"],
    },
  },
  {
    name: "Zechs",
    img: "Zechs Default.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["default"],
    },
  },
  {
    name: "Zechs (Traditions of Summer)",
    img: "Zechs Traditions of Summer.png",
    opts: {
      gender: ["male"],
      series: ["majsoul"],
      outfit: ["paid"],
    },
  },
];
