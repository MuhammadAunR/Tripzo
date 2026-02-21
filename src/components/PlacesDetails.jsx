import place1 from '../assets/place-1.webp'
import place3 from '../assets/place-3.webp'
import place5 from '../assets/place-5.webp'
import place4 from '../assets/place-4.webp'
import place6 from '../assets/place-6.webp'
import place7 from '../assets/place-7.webp'
import place8 from '../assets/place-8.webp'
import place9 from '../assets/place-9.webp'
import place10 from '../assets/place-10.webp'
import place11 from '../assets/place-11.webp'
import place12 from '../assets/place-12.webp'
import place13 from '../assets/place-13.webp'
import place14 from '../assets/place-14.webp'
import place15 from '../assets/place-15.webp'
import place16 from '../assets/place-16.webp'
import place17 from '../assets/place-17.webp'
import place18 from '../assets/place-18.webp'
import place19 from '../assets/place-19.webp'
import place20 from '../assets/place-20.webp'

/* ---------- Helper to generate details ---------- */

const createDetails = (img, placeName) => ({
    gallery: [img, img, img, img, img, img],

    specialFeatures: [
        {
            icon: "🌍",
            title: `Explore ${placeName}`,
            desc: `Discover the most famous attractions and hidden gems of ${placeName}.`
        },
        {
            icon: "🏛️",
            title: "Historic Sites",
            desc: `Visit iconic landmarks and historical architecture in ${placeName}.`
        },
        {
            icon: "🍽️",
            title: "Local Cuisine",
            desc: `Enjoy authentic food experiences unique to ${placeName}.`
        },
        {
            icon: "🌄",
            title: "Scenic Views",
            desc: `Capture breathtaking landscapes and city views across ${placeName}.`
        },
        {
            icon: "🎉",
            title: "Culture & Festivals",
            desc: `Experience traditions and vibrant local events in ${placeName}.`
        },
        {
            icon: "🧭",
            title: "Guided Experiences",
            desc: `Professional guided tours to explore ${placeName} comfortably.`
        }
    ],

    itinerary: [
        {
            day: "Day 1",
            title: `Arrival in ${placeName}`,
            desc: `Airport pickup, hotel check-in, and relaxed evening exploration.`
        },
        {
            day: "Day 2",
            title: "City Highlights",
            desc: `Visit major attractions and famous landmarks of the destination.`
        },
        {
            day: "Day 3",
            title: "Nature & Scenic Tour",
            desc: `Explore beautiful landscapes, viewpoints, and nature spots.`
        },
        {
            day: "Day 4",
            title: "Cultural Exploration",
            desc: `Experience local markets, traditions, and cultural sites.`
        },
        {
            day: "Day 5",
            title: "Leisure Day",
            desc: `Relax, explore freely, or enjoy optional activities.`
        },
        {
            day: "Day 6",
            title: "Departure",
            desc: `Hotel checkout and transfer to airport.`
        }
    ],

    reviews: [
        {
            name: "Alex Johnson",
            rating: 5.0,
            comment: `Amazing experience visiting ${placeName}. Everything was well organized.`
        },
        {
            name: "Sophia Miller",
            rating: 4.5,
            comment: `Beautiful destination and great itinerary plan.`
        },
        {
            name: "Daniel Carter",
            rating: 4.9,
            comment: `Highly recommended tour package for ${placeName}.`
        }
    ],
    features: [
        "🏝️ Scenic Views",
        "🍜 Local Cuisine",
        "📸 Photography Spots",
        "🚶 Walking Tours",
    ],
    tourTime: {
        bestSeason: "Best Throughout the Year",
        totalDays: 6,
        groupSize: "2-15 People"
    }
})

/* ---------- Main Places Array ---------- */

const Places = [
    {
        place: "Zermatt",
        slug: "zermatt",
        location: "Zermatt, Switzerland",
        desc: "Experience breathtaking alpine views, luxury resorts, and pristine lakes.",
        overview: "Zermatt is a picturesque mountain village located at the foot of the iconic Matterhorn in Switzerland. Known for its world-class skiing and snowboarding, Zermatt also offers scenic hiking trails, mountain biking paths, and climbing routes suitable for all levels. The village is car-free, which enhances its serene and clean atmosphere, with traditional chalets and cozy hotels lining cobblestone streets. Visitors can ride the Gornergrat railway for panoramic views of snow-capped peaks and glaciers. The town boasts gourmet dining options ranging from Swiss fondue to Michelin-starred restaurants, as well as luxury spas and wellness retreats. Summer transforms Zermatt into a paradise of wildflowers and lush meadows, while winter brings a snowy wonderland perfect for snow sports. Cultural experiences include alpine museums, local festivals, and art exhibitions. Its combination of adventure, relaxation, and authentic Swiss charm makes Zermatt a year-round destination for travelers seeking both excitement and tranquility.",
        hotels: "95",
        packages: "28",
        imgSrc: place3
    },
    {
        place: "Kyoto",
        slug: "kyoto",
        location: "Kyoto, Japan",
        desc: "Blend ancient temples, cherry blossoms, and traditional culture with modern amenities.",
        overview: "Kyoto, the cultural heart of Japan, is famous for its centuries-old temples, shrines, and traditional wooden houses. The city hosts over 1,600 Buddhist temples and 400 Shinto shrines, including iconic landmarks such as Kinkaku-ji (Golden Pavilion) and Fushimi Inari Taisha with thousands of vermilion torii gates. Kyoto is renowned for its seasonal beauty, with cherry blossoms in spring and vibrant foliage in autumn creating stunning natural displays. Visitors can experience traditional tea ceremonies, geisha culture, and historic marketplaces selling crafts and local delicacies. Kyoto blends modern conveniences with tradition, offering boutique hotels, contemporary dining, and efficient public transport. Cultural festivals such as Gion Matsuri showcase local customs, performances, and parades. The city also provides serene riverfront walks, zen gardens, and easy access to surrounding mountains for hiking. Kyoto's combination of history, spirituality, culinary delights, and picturesque scenery makes it a quintessential Japanese destination for all types of travelers.",
        hotels: "130",
        packages: "37",
        imgSrc: place5
    },
    {
        place: "Paris",
        slug: "paris",
        location: "Paris, France",
        desc: "From the Eiffel Tower to cobblestone streets, immerse in art, cuisine, and history.",
        overview: "Paris, the capital of France, is celebrated as the city of love, art, and fashion. Iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum attract millions of visitors every year. Strolling along the Seine River or exploring the bohemian Montmartre district provides an immersive experience of Parisian culture. The city offers world-class dining with fresh pastries, gourmet coffee, and haute cuisine, alongside bustling food markets and sidewalk cafes. Fashion enthusiasts enjoy designer boutiques on Champs-Élysées and hidden vintage shops across the city. Cultural experiences abound, including theatre, opera, art exhibitions, and historical tours. Parks like Jardin des Tuileries and Luxembourg Gardens provide peaceful escapes in the urban environment. Seasonal festivals, river cruises, and lively nightlife complete the vibrant Paris experience. Its efficient metro system, bicycle rentals, and pedestrian-friendly streets make navigation simple. Paris combines romance, history, creativity, and contemporary urban life into an unforgettable destination.",
        hotels: "180",
        packages: "50",
        imgSrc: place4
    },
    {
        place: "Venice",
        slug: "venice",
        location: "Venice, Italy",
        desc: "Discover Roman history, Venice canals, and Tuscany's rolling vineyards.",
        overview: "Venice, the enchanting canal city of Italy, is renowned for its labyrinth of waterways, historic architecture, and artistic heritage. Visitors glide through canals on gondolas, crossing iconic bridges like Rialto and exploring the majestic St. Mark's Square and Basilica. Venice is home to centuries-old palaces, museums, and churches, showcasing Renaissance and Gothic artistry. The city hosts world-famous festivals, including the Venice Carnival with its intricate masks and costumes. Culinary experiences include fresh seafood, cicchetti (Venetian tapas), and local wines. The surrounding Veneto region offers charming villages, vineyards, and art-filled towns for day trips. Venice's narrow streets, historic squares, and artisan shops provide endless exploration opportunities. Water taxis, vaporettos, and pedestrian walkways allow easy navigation through the city. Seasonal events, photography opportunities, and cultural performances enrich any visit. Venice uniquely blends romance, history, art, and authentic Italian charm into a timeless travel experience.",
        hotels: "165",
        packages: "42",
        imgSrc: place6
    },
    {
        place: "Cappadocia",
        slug: "cappadocia",
        location: "Cappadocia, Turkey",
        desc: "Experience Istanbul's rich heritage and Cappadocia's magical landscapes.",
        overview: "Cappadocia is a surreal region in central Turkey, famed for its otherworldly landscapes of fairy chimneys, volcanic rock formations, and cave dwellings. Visitors can take hot air balloon rides at sunrise for panoramic views over valleys, vineyards, and ancient villages. The area is rich in history, featuring underground cities, rock-cut churches, and centuries-old monasteries. Cappadocia also offers unique accommodation in boutique cave hotels that blend modern comfort with historical charm. Hiking and horseback tours allow exploration of scenic valleys like Love Valley and Rose Valley. Traditional Turkish cuisine, pottery workshops, and local handicrafts provide cultural immersion. Seasonal festivals, music performances, and guided tours enhance the experience. The region's warm hospitality, combined with natural beauty and historical intrigue, makes Cappadocia a must-visit destination for adventure seekers and cultural enthusiasts alike. Its extraordinary landscapes and activities create an unforgettable travel experience.",
        hotels: "110",
        packages: "30",
        imgSrc: place7
    },
    {
        place: "Neuschwanstein Castle",
        slug: "neuschwanstein-castle",
        location: "Bavaria, Germany",
        desc: "Explore medieval castles, scenic Bavarian Alps, and vibrant Berlin nightlife.",
        overview: "Neuschwanstein Castle, nestled in the Bavarian Alps of Germany, is one of the world's most iconic fairy-tale castles. Built by King Ludwig II, it features elaborate turrets, ornate interiors, and breathtaking mountain views. Visitors can take guided tours through opulent halls adorned with murals and period furnishings. The surrounding landscape offers hiking trails, lakes, and scenic viewpoints that provide picture-perfect vistas of the Alps. Nearby towns like Füssen offer charming streets, local cuisine, and artisan shops. The castle inspires travelers with its romantic architecture, historical significance, and legendary tales of Ludwig II. Photographers and history enthusiasts find endless opportunities to capture its beauty. Seasonal events, Christmas markets, and cultural festivals in Bavaria enrich the visit. Easily accessible via train or road, Neuschwanstein combines history, architecture, nature, and cultural experiences into a captivating journey.",
        hotels: "120",
        packages: "35",
        imgSrc: place1
    },
    {
        place: "London",
        slug: "london",
        location: "London, United Kingdom",
        desc: "Explore historic London landmarks and charming countryside villages.",
        overview: "London, the bustling capital of the United Kingdom, is a city rich in history, culture, and modern attractions. Iconic landmarks such as the Tower of London, Buckingham Palace, Big Ben, and the London Eye draw millions of visitors annually. The city offers world-class museums, including the British Museum and National Gallery, showcasing art and artifacts spanning centuries. The Thames River provides scenic walking routes, river cruises, and picturesque views of historic bridges. London's diverse culinary scene ranges from traditional fish and chips to Michelin-starred restaurants, and its vibrant markets like Borough Market offer local specialties. Theatre enthusiasts can enjoy West End shows and live performances, while historic neighborhoods like Covent Garden and Notting Hill offer charming streets and boutique shopping. Parks such as Hyde Park and Regent's Park provide peaceful escapes amidst urban life. Seasonal events, royal ceremonies, and festivals celebrate local traditions, art, and music. London's efficient public transport, including the Underground and buses, ensures easy exploration of this cosmopolitan metropolis.",
        hotels: "150",
        packages: "40",
        imgSrc: place8
    },
    {
        place: "Grand Canyon",
        slug: "grand-canyon",
        location: "Arizona, United States",
        desc: "From New York skylines to California beaches, enjoy diverse adventures.",
        overview: "The Grand Canyon in Arizona, USA, is one of the most awe-inspiring natural wonders in the world, carved by the Colorado River over millions of years. Visitors can explore its dramatic cliffs, layered rock formations, and panoramic viewpoints such as Mather Point and Yavapai Observation Station. Hiking trails like the Bright Angel and South Kaibab Trails offer opportunities for adventure and close encounters with nature. Guided tours, helicopter rides, and river rafting provide unique perspectives of the canyon's vast scale. The surrounding national park hosts diverse wildlife, including bighorn sheep, eagles, and coyotes. Cultural experiences include learning about the native Navajo and Hopi communities and their traditions. Seasonal events, stargazing programs, and photography workshops enrich the visitor experience. With nearby lodges, campgrounds, and visitor centers, the Grand Canyon provides both adventure and convenience. Its geological marvels, natural beauty, and outdoor activities make it an unforgettable destination for travelers seeking exploration and wonder.",
        hotels: "210",
        packages: "65",
        imgSrc: place9
    },
    {
        place: "Niagara Falls",
        slug: "niagara-falls",
        location: "Ontario, Canada",
        desc: "Witness majestic mountains, Niagara Falls, and vibrant multicultural cities.",
        overview: "Niagara Falls, straddling the border of Canada and the USA, is a breathtaking natural wonder. Visitors are awed by the sheer power and volume of the cascading Horseshoe, American, and Bridal Veil Falls. Popular activities include boat tours like the Hornblower Cruise, which takes guests close to the roaring waters, as well as scenic walking trails and observation decks. The surrounding area offers attractions such as Clifton Hill, casinos, fine dining, and family-friendly entertainment. Seasonal illuminations and fireworks create a magical atmosphere at night. Nearby wine regions, parks, and gardens provide additional exploration opportunities. Cultural centers, museums, and local festivals celebrate the region's heritage. Niagara Falls combines dramatic natural beauty, adventure, and recreational activities, making it a destination for both thrill-seekers and families. Its accessibility from major Canadian cities ensures convenience for travelers seeking a memorable experience.",
        hotels: "125",
        packages: "33",
        imgSrc: place10
    },
    {
        place: "Sydney Opera House",
        slug: "sydney-opera-house",
        location: "Sydney, Australia",
        desc: "Explore Sydney's harbor, Great Barrier Reef, and vast outback landscapes.",
        overview: "The Sydney Opera House, a UNESCO World Heritage Site in Australia, is an architectural masterpiece set against the sparkling harbor. Visitors can attend performances ranging from opera and ballet to contemporary concerts. Guided tours reveal the building's innovative design, history, and engineering marvels. Sydney itself offers pristine beaches, vibrant nightlife, and iconic landmarks like the Sydney Harbour Bridge and Bondi Beach. Water-based activities, including harbor cruises and sailing, provide stunning perspectives of the city skyline. Culinary experiences range from fine dining to multicultural street food markets. Cultural festivals, art exhibitions, and outdoor events enrich visitor experiences year-round. The city combines natural beauty, modern architecture, and cosmopolitan lifestyle. Nearby attractions include the Blue Mountains, wildlife parks, and scenic coastal walks. Sydney's accessibility, efficient transport, and friendly locals ensure a memorable and immersive visit for all travelers.",
        hotels: "140",
        packages: "36",
        imgSrc: place11
    },
    {
        place: "Barcelona",
        slug: "barcelona",
        location: "Barcelona, Spain",
        desc: "Enjoy Barcelona's architecture, Madrid's culture, and sunny beaches.",
        overview: "Barcelona, the cosmopolitan capital of Spain's Catalonia region, is renowned for its unique architecture, Mediterranean beaches, and vibrant cultural life. The city is home to Antoni Gaudí's masterpieces, including the Sagrada Família and Park Güell, showcasing imaginative design and colorful mosaics. Gothic Quarter streets, bustling markets like La Boqueria, and historic squares provide a glimpse into the city's medieval past. Barcelona offers a thriving culinary scene with tapas bars, seafood restaurants, and local Catalan specialties. Visitors can enjoy the sun on Barceloneta Beach or explore nearby mountains for hiking and panoramic views. Festivals such as La Mercè and vibrant street performances add energy and excitement to the city. Museums, galleries, and contemporary art spaces celebrate Barcelona's artistic heritage. Nightlife, shopping, and waterfront promenades provide additional leisure experiences. With efficient public transport and pedestrian-friendly streets, Barcelona balances culture, architecture, beach relaxation, and gastronomy into a full travel experience.",
        hotels: "135",
        packages: "34",
        imgSrc: place12
    },
    {
        place: "Santorini",
        slug: "santorini",
        location: "Santorini, Greece",
        desc: "Relax on Santorini cliffs and explore ancient Athens landmarks.",
        overview: "Santorini, a volcanic island in the Cyclades of Greece, is famous for its stunning sunsets, whitewashed buildings, and blue-domed churches perched on cliffs overlooking the Aegean Sea. Visitors can explore charming villages like Oia and Fira, enjoy luxury resorts with infinity pools, and relax on unique black or red sand beaches. The island has a rich history, including ancient ruins such as Akrotiri and archaeological sites dating back to the Minoan civilization. Culinary experiences feature fresh seafood, Greek wines, and traditional tavernas. Sailing trips, boat tours, and hiking along caldera paths provide breathtaking views and adventure. Festivals celebrating music, dance, and local culture occur throughout the year. Art galleries, museums, and local markets showcase Santorini's creative heritage. The island offers opportunities for photography, relaxation, and exploration. Santorini blends romance, history, culture, and natural beauty, making it a top Mediterranean destination.",
        hotels: "105",
        packages: "29",
        imgSrc: place13
    },
    {
        place: "Burj Khalifa",
        slug: "burj-khalifa",
        location: "Dubai, United Arab Emirates",
        desc: "Experience Dubai's luxury lifestyle and Abu Dhabi's grand architecture.",
        overview: "The Burj Khalifa in Dubai, UAE, is the tallest building in the world, standing as an icon of modern architecture and engineering. Visitors can ascend to observation decks for panoramic views of Dubai's skyline, desert, and coastline. The surrounding Downtown Dubai area offers luxury hotels, shopping at the Dubai Mall, and dining experiences ranging from casual eateries to fine dining. Dubai is known for its futuristic cityscape, extravagant entertainment options, and vibrant nightlife. Cultural attractions include the Dubai Museum, traditional souks, and heritage villages that highlight Emirati traditions. Desert safaris, dune bashing, and camel rides offer adventure experiences outside the city. Seasonal events, concerts, and festivals enrich the cultural calendar. Its combination of modern luxury, entertainment, and cultural heritage provides a unique and unforgettable experience for travelers seeking both glamour and tradition.",
        hotels: "160",
        packages: "45",
        imgSrc: place14
    },
    {
        place: "Phuket",
        slug: "phuket",
        location: "Phuket, Thailand",
        desc: "Discover tropical beaches, vibrant street markets, and ancient temples.",
        overview: "Phuket, Thailand's largest island, is renowned for its white sand beaches, crystal-clear waters, and vibrant nightlife. Visitors can explore Patong Beach, Kata Beach, and Kata Noi, enjoying water sports such as snorkeling, diving, and parasailing. The island features cultural attractions including the Big Buddha, Wat Chalong temple, and Old Phuket Town with its Sino-Portuguese architecture. Phuket offers bustling night markets, street food stalls, and seafood restaurants serving fresh local cuisine. Excursions to nearby islands like Phi Phi and James Bond Island provide adventure and exploration opportunities. Festivals, cultural performances, and traditional Thai music and dance enrich the experience. Nature enthusiasts can explore tropical forests, waterfalls, and hiking trails. Luxury resorts, spas, and wellness centers provide relaxation amidst stunning landscapes. Phuket combines tropical beauty, culture, culinary delights, and entertainment into a memorable travel destination.",
        hotels: "115",
        packages: "31",
        imgSrc: place15
    },
    {
        place: "Kuala Lumpur",
        slug: "kuala-lumpur",
        location: "Kuala Lumpur, Malaysia",
        desc: "Blend modern skyscrapers with lush rainforests and island escapes.",
        overview: "Kuala Lumpur, the capital of Malaysia, is a dynamic city known for its modern skyline dominated by the Petronas Twin Towers. Visitors can explore vibrant neighborhoods, bustling street markets, and multicultural dining options reflecting Malay, Chinese, and Indian influences. Historical landmarks such as Sultan Abdul Samad Building and Batu Caves showcase the city's heritage and religious diversity. Kuala Lumpur offers numerous shopping experiences, from luxury malls to local handicraft markets. Nature escapes include nearby rainforests, the KL Forest Eco Park, and botanical gardens. Festivals, cultural performances, and music events celebrate Malaysia's rich traditions. Day trips to islands like Langkawi and Penang offer tropical beaches and heritage sites. The city is well connected through an efficient metro and road network. Kuala Lumpur balances urban sophistication, cultural richness, natural beauty, and culinary exploration into an immersive travel experience.",
        hotels: "100",
        packages: "27",
        imgSrc: place16
    },
    {
        place: "Marina Bay Sands",
        slug: "marina-bay-sands",
        location: "Singapore, Singapore",
        desc: "Experience futuristic cityscapes, world-class shopping, and gardens.",
        overview: "Marina Bay Sands is a world-famous integrated resort in Singapore, known for its iconic architecture, luxury accommodations, and panoramic infinity pool overlooking the city. Visitors can enjoy the observation deck, world-class casinos, and shopping at high-end boutiques. The resort is situated near cultural attractions like Gardens by the Bay, Merlion Park, and the ArtScience Museum. Singapore's efficient transport system allows easy exploration of diverse neighborhoods, including Chinatown, Little India, and Kampong Glam. Culinary experiences range from Michelin-starred restaurants to vibrant hawker centers offering local delicacies. Seasonal events, light shows, and festivals enrich the city's cultural calendar. Nearby attractions include Sentosa Island, Universal Studios, and pristine beaches. Marina Bay Sands provides a blend of luxury, entertainment, culture, and modern urban design, making it a top destination for global travelers seeking a cosmopolitan experience.",
        hotels: "90",
        packages: "25",
        imgSrc: place17
    },
    {
        place: "Giza Pyramids",
        slug: "giza-pyramids",
        location: "Giza, Egypt",
        desc: "Explore the Pyramids of Giza and cruise along the Nile River.",
        overview: "The Giza Pyramids, located on the outskirts of Cairo, Egypt, are some of the most remarkable ancient monuments in the world. Visitors can marvel at the Great Pyramid of Khufu, the Pyramid of Khafre, and the Sphinx, exploring their historical and architectural significance. Camel rides around the pyramids offer a unique way to experience the desert landscape. The nearby Egyptian Museum provides insight into pharaonic artifacts, including the treasures of Tutankhamun. Cruises on the Nile River showcase the natural beauty and cultural heritage of Egypt, passing by ancient temples and modern cities. Local markets, street food, and traditional music provide immersive cultural experiences. Seasonal festivals, guided tours, and archaeological exploration opportunities enrich visits. Giza combines history, mystery, adventure, and cultural immersion, making it a must-visit destination for travelers fascinated by ancient civilizations and world heritage.",
        hotels: "98",
        packages: "26",
        imgSrc: place18
    },
    {
        place: "Rio de Janeiro",
        slug: "rio-de-janeiro",
        location: "Rio de Janeiro, Brazil",
        desc: "Feel the energy of Rio, Amazon rainforests, and golden beaches.",
        overview: "Rio de Janeiro, Brazil's vibrant coastal city, is renowned for its stunning beaches, lively culture, and iconic landmarks. Visitors can explore Copacabana and Ipanema beaches, Sugarloaf Mountain, and the Christ the Redeemer statue atop Corcovado. Rio hosts world-famous festivals such as Carnival, with parades, music, and dance celebrating Brazilian culture. The city offers rich culinary experiences, including feijoada, churrasco, and street food delights. Outdoor enthusiasts can hike trails in Tijuca National Park or enjoy water sports along the coastline. Samba clubs, music venues, and cultural centers showcase the city's artistic heritage. Local markets, art galleries, and historic neighborhoods like Santa Teresa provide immersive exploration. Rio's tropical climate, scenic landscapes, and vibrant lifestyle combine to create an unforgettable travel experience. Its blend of natural beauty, culture, and energy makes it one of South America's most iconic destinations.",
        hotels: "120",
        packages: "32",
        imgSrc: place19
    },
    {
        place: "Reykjavik",
        slug: "reykjavik",
        location: "Reykjavik, Iceland",
        desc: "Witness northern lights, volcanic landscapes, and geothermal lagoons.",
        overview: "Reykjavik, Iceland's capital, is a gateway to dramatic landscapes featuring glaciers, volcanoes, geysers, and geothermal hot springs. Visitors can explore the city's colorful architecture, museums, art galleries, and cultural landmarks such as Hallgrímskirkja church. The nearby Golden Circle route provides opportunities to witness natural wonders, including Thingvellir National Park, Gullfoss waterfall, and Geysir geothermal area. Northern lights tours in winter offer breathtaking experiences, while summer provides midnight sun and hiking opportunities. Visitors can relax in natural hot springs like the Blue Lagoon or engage in adventure activities such as glacier hiking, whale watching, and horseback riding. Festivals, music performances, and culinary experiences celebrating local Icelandic culture enrich the visit. Reykjavik balances urban amenities, cultural depth, and natural exploration. Its clean environment, friendly locals, and unique landscapes make it an extraordinary destination for travelers seeking both adventure and tranquility.",
        hotels: "85",
        packages: "22",
        imgSrc: place20
    }
].map(place => ({
    ...place,
    details: createDetails(place.imgSrc, place.place)
}))

export default Places
