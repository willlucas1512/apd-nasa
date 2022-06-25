import { formatDate, isBefore } from "../utils/date";
import { handleNameSearch } from "../utils/search";

// Teste da função utilitária de formatação de data de YYYY-MM-DD para YYYY Month DD
describe("Utility function", function () {
  describe("formatDate()", function () {
    it("Should return the date in YYYY Month DD format", () => {
      const xFormattedDate = formatDate("2022-06-24");
      expect(xFormattedDate).toBe("2022 June 24");
    });
  });
});

// Teste da função de pesquisa por nome
describe("Search by name", function () {
  describe("handleNameSearch()", function () {
    it("Should return the element(s) that includes the search query", () => {
      const xSearchResult = handleNameSearch("nebula", [
        {
          date: "2005-12-17",
          explanation:
            "In December of 1972, Apollo 17 astronauts Eugene Cernan and Harrison Schmitt spent about 75 hours on the Moon, in the Taurus-Littrow valley, while colleague Ronald Evans orbited overhead. Near the beginning of their third and final excursion across the lunar surface, Schmitt took this picture of Cernan flanked by an American flag and their lunar rover's umbrella-shaped high-gain antenna. The prominent Sculptured Hills lie in the background while Schmitt's reflection can just be made out in Cernan's helmet. The Apollo 17 crew returned with 110 kilograms of rock and soil samples, more than from any of the other lunar landing sites. Cernan and Schmitt are still the last to walk on the Moon.",
          hdurl: "https://apod.nasa.gov/apod/image/0512/as17-140-21391.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Apollo 17: Last on the Moon",
          url: "https://apod.nasa.gov/apod/image/0512/as17-140-21391c1.jpg",
        },
        {
          date: "2006-07-01",
          explanation:
            "Binary star system GRO J1655-40 consists of a relatively normal star about twice as massive as the Sun co-orbiting with a black hole of about seven solar masses. This striking artist's vision of the exotic binary system helps visualize matter drawn from the normal star by gravity and swirling toward the black hole. But it also includes a wind of material escaping from the black hole's accretion disk. In fact, astronomers now argue that Chandra Observatory x-ray data indicate a high-speed wind is being driven from this system's disk by magnetic forces. Internal magnetic fields also help drive material in the swirling disk into the black hole itself. If you had x-ray eyes as good as Chandra's, you could find GRO J1655-40 about 11,000 light-years away in the constellation Scorpius.",
          hdurl: "https://apod.nasa.gov/apod/image/0607/j1655_ill_disk.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Wind from a Black Hole",
          url: "https://apod.nasa.gov/apod/image/0607/j1655_ill_disk78.jpg",
        },
        {
          copyright: "Jean-Charles Cuillandre",
          date: "2003-04-07",
          explanation:
            "NGC 281 is a busy workshop of star formation.  Prominent features include a small open cluster of stars, a diffuse red-glowing emission nebula, large lanes of obscuring  gas and dust, and dense knots of dust and gas in which stars may still be forming.  The open cluster of stars IC 1590 visible around the center has formed only in the last few million years.  The brightest member of this cluster is actually a multiple-star system shining light that helps ionize the nebula's gas, causing the red glow visible throughout.  The lanes of dust visible below the center are likely homes of future star formation.  Particularly striking in the above photograph are the dark Bok globules visible against the bright nebula.  Stars are surely forming there right now.  The entire NGC 281 system lies about 10 thousand light years distant.   Have you seen today's: Earth Science Picture of the Day?",
          hdurl: "https://apod.nasa.gov/apod/image/0304/ngc281_cfht_big.jpg",
          media_type: "image",
          service_version: "v1",
          title: "NGC 281: Cluster, Clouds, and Globules",
          url: "https://apod.nasa.gov/apod/image/0304/ngc281_cfht.jpg",
        },
        {
          date: "2003-03-04",
          explanation:
            "The center of the Lagoon Nebula is busy with the awesome spectacle of star formation.  Visible in the lower left, at least two long funnel-shaped clouds, each roughly half a light-year long, have been formed by extreme stellar winds and intense energetic starlight.  The tremendously bright nearby star, Hershel 36, lights the area.  Vast walls of dust hide and redden other hot young stars.  As energy from these stars pours into the cool dust and gas, large temperature differences in adjoining regions can be created generating shearing winds which may cause the funnels.  This picture, spanning about 5 light years, was taken in 1995 by the orbiting Hubble Space Telescope.  The Lagoon Nebula, also known as M8, lies about 5000 light years distant toward the constellation of Sagittarius.",
          hdurl: "https://apod.nasa.gov/apod/image/0303/lagoon_hst_big.jpg",
          media_type: "image",
          service_version: "v1",
          title: "In the Center of the Lagoon Nebula",
          url: "https://apod.nasa.gov/apod/image/0303/lagoon_hst.jpg",
        },
        {
          date: "2004-03-11",
          explanation:
            "Peering into a dusty nebula in nearby galaxy the Large Magellanic Cloud, infrared cameras on board the Spitzer Space Telescope recorded this detailed view of stellar nursery Henize 206 filled with newborn stars. The stars appear as white spots within the swirls of dust and gas in the false-color infrared image. Near the top, the sweeping telltale arcs of a supernova remnant are also visible, expanding debris from the final explosion of a massive star. The proximity of the ancient supernova indicates that the shockwave from that stellar death explosion itself likely triggered the formation of the new generation of emerging stars, compressing the gas and dust within Henize 206 and continuing the cosmic cycle of star death and star birth. At the distance of the Large Magellanic Cloud, about 163,000 light-years, this image covers an area about 1,000 light-years across.",
          hdurl: "https://apod.nasa.gov/apod/image/0403/hen206_sst_full.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Henize 206: Cosmic Generations",
          url: "https://apod.nasa.gov/apod/image/0403/hen206_sst_c1.jpg",
        },
        {
          date: "2018-06-16",
          explanation:
            "It's storm season on Mars. Dusty with a chance of dust is the weather report for Gale crater as a recent planet-scale dust storm rages. On June 10 looking toward the east-northeast crater rim about 30 kilometers away, the Curiosity rover's Mastcam captured this image of its local conditions so far. Meanwhile over 2,000 kilometers away, the Opportunity rover ceased science operations as the storm grew thicker at its location on the west rim of Endeavour crater, and has stopped communicating, waiting out the storm for now. Curiosity is powered by a radioisotope thermoelectric generator, but the smaller Opportunity rover uses solar panels to charge its batteries. For Opportunity, the increasingly severe lack of sunlight has caused its batteries to run low.",
          hdurl:
            "https://apod.nasa.gov/apod/image/1806/DustStormJune2018_PIA22520_fig2.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Dusty With a Chance of Dust",
          url: "https://apod.nasa.gov/apod/image/1806/DustStormJune2018_PIA22520_fig21024.jpg",
        },
        {
          date: "2010-04-11",
          explanation:
            "What is creating the strange texture of IC 418?  Dubbed the Spirograph Nebula for its resemblance to drawings from a cyclical drawing tool, planetary nebula IC 418 shows patterns that are not well understood. Perhaps they are related to chaotic winds from the variable central star, which changes brightness unpredictably in just a few hours.  By contrast, evidence indicates that only a few million years ago, IC 418 was probably a well-understood star similar to our Sun.  Only a few thousand years ago, IC 418 was probably a common red giant star.  Since running out of nuclear fuel, though, the outer envelope has begun expanding outward leaving a hot remnant core destined to become a white-dwarf star, visible in the image center. The light from the central core excites surrounding atoms in the nebula causing them to glow. IC 418 lies about 2000 light-years away and spans 0.3 light-years across.  This false-color image taken from the Hubble Space Telescope reveals the unusual details.",
          hdurl: "https://apod.nasa.gov/apod/image/1004/spirograph_hst_big.jpg",
          media_type: "image",
          service_version: "v1",
          title: "IC 418: The Spirograph Nebula",
          url: "https://apod.nasa.gov/apod/image/1004/spirograph_hst.jpg",
        },
        {
          date: "2015-06-07",
          explanation:
            "It's the dim star, not the bright one, near the center of NGC 3132 that created this odd but beautiful planetary nebula.  Nicknamed the Eight-Burst Nebula and the Southern Ring Nebula, the glowing gas originated in the outer layers of a star like our Sun.  In this representative color picture, the hot blue pool of light seen surrounding this binary system is energized by the hot surface of the faint star. Although photographed to explore unusual symmetries, it's the asymmetries that help make this planetary nebula so intriguing.  Neither the unusual shape of the surrounding cooler shell nor the structure and placements of the cool filamentary dust lanes running across NGC 3132 are well understood.",
          hdurl: "https://apod.nasa.gov/apod/image/1506/ngc3132_hubble_935.jpg",
          media_type: "image",
          service_version: "v1",
          title: "NGC 3132: The Eight Burst Nebula",
          url: "https://apod.nasa.gov/apod/image/1506/ngc3132_hubble_960.jpg",
        },
        {
          copyright: "Jack Fusco",
          date: "2019-06-08",
          explanation:
            "At the end of last year's northern summer, after its dazzling opposition, Mars still shone brightly in the night. The celestial beacon easily attracted the attention of these two night skygazers who stood still for just a while, but long enough to be captured in the sea and night skyscape from Big Sur, planet Earth. Its central bulge near the southwestern horizon, the Milky Way runs through the scene too, while the long exposure also reveals a faint blue bioluminescence blooming in the waves along Pfeiffer Beach. Now much fainter, Mars can be spotted near the western horizon after sunset, but this month Jupiter is near its closest and brightest, reaching its own opposition on June 10. Night skygazers can spot brilliant Jupiter over southern horizons, glaring next to the stars toward the central Milky Way.",
          hdurl:
            "https://apod.nasa.gov/apod/image/1906/Fusco-BigSurKonaMWBioluminescenceMars-exif.jpg",
          media_type: "image",
          service_version: "v1",
          title: "On the Beach with Mars",
          url: "https://apod.nasa.gov/apod/image/1906/Fusco-BigSurKonaMWBioluminescenceMars-exif1024.jpg",
        },
        {
          copyright: "José Mtanous",
          date: "2021-01-05",
          explanation:
            "What is the Small Magellanic Cloud? It has turned out to be a galaxy.  People who have wondered about this little fuzzy patch in the southern sky included Portuguese navigator Ferdinand Magellan and his crew, who had plenty of time to study the unfamiliar night sky of the south during the first circumnavigation of planet Earth in the early 1500s. As a result, two celestial wonders easily visible for southern hemisphere skygazers are now known in Western culture as the Clouds of Magellan. Within the past 100 years, research has shown that these cosmic clouds are dwarf irregular galaxies, satellites of our larger spiral Milky Way Galaxy. The Small Magellanic Cloud actually spans 15,000 light-years or so and contains several hundred million stars. About 210,000 light-years away in the constellation of the Tucan (Tucana), it is more distant than other known Milky Way satellite galaxies, including the Sagittarius Dwarf galaxy and the Large Magellanic Cloud. This sharp image also includes the foreground globular star cluster 47 Tucanae on the right.",
          hdurl: "https://apod.nasa.gov/apod/image/2101/SMC_Mtanous_4464.jpg",
          media_type: "image",
          service_version: "v1",
          title: "The Small Cloud of Magellan",
          url: "https://apod.nasa.gov/apod/image/2101/SMC_Mtanous_960.jpg",
        },
        {
          date: "2006-05-06",
          explanation:
            "This intriguing trio of galaxies is sometimes called the NGC 5985/Draco Group and so (quite reasonably) is located in the northern constellation Draco. From left to right are face-on spiral NGC 5985, elliptical galaxy NGC 5982, and edge-on spiral NGC 5981 -- all within this single telescopic field of view spanning a little more than half the width of the full moon. While this grouping is far too small to be a galaxy cluster and has not been cataloged as a compact group, these galaxies all do lie roughly 100 million light-years from planet Earth. On close examination with spectrographs, the bright core of the striking face-on spiral NGC 5985 shows prominent emission in specific wavelengths of light, prompting astronomers to classify it as a Seyfert, a type of active galaxy. Not as well known as other tight groupings of galaxies, the contrast in visual appearance makes this triplet an attractive subject for astrophotographers. This impressively deep exposure of region also reveals faint and even more distant background galaxies.",
          hdurl: "https://apod.nasa.gov/apod/image/0605/draco3_heutz_f.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Three Galaxies in Draco",
          url: "https://apod.nasa.gov/apod/image/0605/draco3_heutz_f50.jpg",
        },
        {
          copyright: "Sebastien Gauthier",
          date: "2000-12-21",
          explanation:
            "Today the Sun reaches its southernmost point in planet Earth's sky at 13:37 UT. This celestial event is known as a solstice, marking the beginning of Summer in the Southern Hemisphere and Winter in the North. But this year, the solstice will be followed, on December 25th, by another geocentric celestial event -- the last eclipse of the millennium! The Christmas day eclipse will only be a partial one as the silhouetted disk of the Moon obscures the Sun's edge. Visible from much of Canada, The United States and Mexico, the appearance of the partially eclipsed Sun might remind you of the last holiday cookie you took a bite from. Still, the exact timing and degree of the eclipse will depend very much on your location. This image, from an annular eclipse in 1994, shows the lunar disk covering around 55% of the Sun's diameter. It is representative of what could be seen from Washington D. C. during the December 25 eclipse maximum which, for that location, occurs at 12:41 PM ET. As always, if you view the eclipse be extremely careful to protect your eyes.",
          hdurl: "https://apod.nasa.gov/apod/image/0012/eclipse_gauthier_c.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Solstice And Season's Eclipse",
          url: "https://apod.nasa.gov/apod/image/0012/eclipse_gauthier_c1.jpg",
        },
      ]);
      expect(xSearchResult).toStrictEqual([
        {
          date: "2003-03-04",
          explanation:
            "The center of the Lagoon Nebula is busy with the awesome spectacle of star formation.  Visible in the lower left, at least two long funnel-shaped clouds, each roughly half a light-year long, have been formed by extreme stellar winds and intense energetic starlight.  The tremendously bright nearby star, Hershel 36, lights the area.  Vast walls of dust hide and redden other hot young stars.  As energy from these stars pours into the cool dust and gas, large temperature differences in adjoining regions can be created generating shearing winds which may cause the funnels.  This picture, spanning about 5 light years, was taken in 1995 by the orbiting Hubble Space Telescope.  The Lagoon Nebula, also known as M8, lies about 5000 light years distant toward the constellation of Sagittarius.",
          hdurl: "https://apod.nasa.gov/apod/image/0303/lagoon_hst_big.jpg",
          media_type: "image",
          service_version: "v1",
          title: "In the Center of the Lagoon Nebula",
          url: "https://apod.nasa.gov/apod/image/0303/lagoon_hst.jpg",
        },
        {
          date: "2010-04-11",
          explanation:
            "What is creating the strange texture of IC 418?  Dubbed the Spirograph Nebula for its resemblance to drawings from a cyclical drawing tool, planetary nebula IC 418 shows patterns that are not well understood. Perhaps they are related to chaotic winds from the variable central star, which changes brightness unpredictably in just a few hours.  By contrast, evidence indicates that only a few million years ago, IC 418 was probably a well-understood star similar to our Sun.  Only a few thousand years ago, IC 418 was probably a common red giant star.  Since running out of nuclear fuel, though, the outer envelope has begun expanding outward leaving a hot remnant core destined to become a white-dwarf star, visible in the image center. The light from the central core excites surrounding atoms in the nebula causing them to glow. IC 418 lies about 2000 light-years away and spans 0.3 light-years across.  This false-color image taken from the Hubble Space Telescope reveals the unusual details.",
          hdurl: "https://apod.nasa.gov/apod/image/1004/spirograph_hst_big.jpg",
          media_type: "image",
          service_version: "v1",
          title: "IC 418: The Spirograph Nebula",
          url: "https://apod.nasa.gov/apod/image/1004/spirograph_hst.jpg",
        },
        {
          date: "2015-06-07",
          explanation:
            "It's the dim star, not the bright one, near the center of NGC 3132 that created this odd but beautiful planetary nebula.  Nicknamed the Eight-Burst Nebula and the Southern Ring Nebula, the glowing gas originated in the outer layers of a star like our Sun.  In this representative color picture, the hot blue pool of light seen surrounding this binary system is energized by the hot surface of the faint star. Although photographed to explore unusual symmetries, it's the asymmetries that help make this planetary nebula so intriguing.  Neither the unusual shape of the surrounding cooler shell nor the structure and placements of the cool filamentary dust lanes running across NGC 3132 are well understood.",
          hdurl: "https://apod.nasa.gov/apod/image/1506/ngc3132_hubble_935.jpg",
          media_type: "image",
          service_version: "v1",
          title: "NGC 3132: The Eight Burst Nebula",
          url: "https://apod.nasa.gov/apod/image/1506/ngc3132_hubble_960.jpg",
        },
      ]);
    });
  });
});

// Teste da API, solicitando imagens aleatórias
describe("Fetch API", () => {
  test("Should return an array of objects, objects containing an url, title, date, explanation, and other attributes", async () => {
    const rResponse = await fetch(process.env.REACT_APP_API_URL + `&count=5`);
    expect(rResponse.status).toBe(200);
  });
});

// Teste da API, solicitando uma imagem de data específica
describe("Fetch API by date", () => {
  test("Should return one object, containg an url, title, date, explanation of the chosen date Picture of the Day", async () => {
    const rResponse = await fetch(
      process.env.REACT_APP_API_URL + `&date=2022-06-24`
    );
    let xJsonData = await rResponse.json();
    expect(xJsonData).toStrictEqual({
      copyright: "Martin Wise",
      date: "2022-06-24",
      explanation:
        "A solar filament is an enormous stream of incandescent plasma suspended above the active surface of the Sun by looping magnetic fields. Seen against the solar disk it looks dark only because it's a little cooler, and so slightly dimmer, than the solar photosphere. Suspended above the solar limb the same structure looks bright when viewed against the blackness of space and is called a solar prominence. A filaprom would be both of course, a stream of magnetized plasma that crosses in front of the solar disk and extends beyond the Sun's edge. In this hydrogen-alpha close-up of the Sun captured on June 22, active region AR3038 is near the center of the frame. Active region AR3032 is seen at the far right, close to the Sun's western limb. As AR3032 is carried by rotation toward the Sun's visible edge, what was once a giant filament above it is now partly seen as a prominence, How big is AR3032's filaprom? For scale planet Earth is shown near the top right corner.",
      hdurl:
        "https://apod.nasa.gov/apod/image/2206/AR3038_Filaprom_HA_DS_150mmF20_IMX174_Color_06222022.jpg",
      media_type: "image",
      service_version: "v1",
      title: "Filaprom on the Western Limb",
      url: "https://apod.nasa.gov/apod/image/2206/AR3038_Filaprom_HA_DS_150mmF20_IMX174_Color_06222022_1024.jpg",
    });
    expect(rResponse.status).toBe(200);
  });
});

// Teste da função utilitária que testa se uma data é anterior à outra
describe("Utility function", function () {
  describe("isBefore()", function () {
    it("Should return true or false if date1 is before than date2", () => {
      const xIsBefore = isBefore("2022-06-24", "2022-12-25");
      expect(xIsBefore).toBe(true);
    });
  });
});
