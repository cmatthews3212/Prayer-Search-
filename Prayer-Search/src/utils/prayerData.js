const prayerData = [
    {
        id: "1",
        title: "A Liturgy for the Writing of Liturgies",
        categories: "Writing Prayers",
        book: "Every Moment Holy: Volume I",
        page: "XXII",
        description: "A prayer to pray before writing my own prayer."
    },
    {
        id: "2",   
        title: "A Liturgy of The Hours: Daybreak",
        categories: "Hours of the Day, Morning",
        book: "Every Moment Holy: Volume I",
        page: "3",
        description: "A prayer to pray in the morning."
    },
    {
        id: "3",
        title: "A Liturgy of The Hours: Midday",
        categories: "Hours of the Day, Midday",
        book: "Every Moment Holy: Volume I",
        page: "6",
        description: "A prayer to pray in the middle of the day."
    },
    {
        id: "4",
        title: "A Liturgy of The Hours: Nightfall",
        categories: "Hours of the Day, Night",
        book: "Every Moment Holy: Volume I",
        page: "8",
        description: "A prayer to pray in the end of the day."
    },
    {
        id: "5",
        title: "A Liturgy for Domestic Days",
        categories: "Homekeeping, Chores, Domestic",
        book: "Every Moment Holy: Volume I",
        page: "15",
        description: "A prayer to pray before taking care of the house."
    },
    {
        id: "6",
        title: "A Liturgy for One Who is Employed",
        categories: "Work, Employment",
        book: "Every Moment Holy: Volume I",
        page: "17",
        description: "A prayer to pray before starting the workday."
    },
    {
        id: "7",
        title: "A Liturgy for those Who Employ Others",
        categories: "Work, Employment",
        book: "Every Moment Holy: Volume I",
        page: "19",
        description: "A prayer to pray as someone who manages employees."
    },
    {
        id: "8",
        title: "A Liturgy for Laundering",
        categories: "Homekeeping, Chores, Domestic, Laundry",
        book: "Every Moment Holy: Volume I",
        page: "22",
        description: "A prayer to pray before doing laundry."
    },
    {
        id: "9",
        title: "A Liturgy for the Preperation of a Meal",
        categories: "Homekeeping, Chores, Domestic, Cooking, Meals",
        book: "Every Moment Holy: Volume I",
        page: "23",
        description: "A prayer to pray before cooking a meal."
    },
    {
        id: "10",
        title: "A Liturgy for the Preperation of an Artisanal Meal",
        categories: "Homekeeping, Chores, Domestic, Cooking, Meals",
        book: "Every Moment Holy: Volume I",
        page: "25",
        description: "A prayer to pray before cooking a fancy meal."
    },
    {
        id: "11",
        title: "A Liturgy for the Hurried Preperation of a Meal",
        categories: "Homekeeping, Chores, Domestic, Cooking, Meals",
        book: "Every Moment Holy: Volume I",
        page: "29",
        description: "A prayer to pray before cooking a meal when you're in a rush."
    },
    {
        id: "12",
        title: "A Liturgy for the Keeping of Bees",
        categories: "Homekeeping, Chores, Domestic, Bees, Pets",
        book: "Every Moment Holy: Volume I",
        page: "30",
        description: "A prayer to pray before tending to your bees that you keep."
    },
    {
        id: "13",
        title: "A Liturgy for the Washing of Windows",
        categories: "Homekeeping, Chores, Domestic, Windows",
        book: "Every Moment Holy: Volume I",
        page: "33",
        description: "A prayer to pray before washing your windows."
    },
    {
        id: "15",
        title: "A Liturgy for Home Repairs",
        categories: "Homekeeping, Chores, Domestic",
        book: "Every Moment Holy: Volume I",
        page: "35",
        description: "A prayer to pray before fixing up your house."
    },
    {
        id: "16",
        title: "A Liturgy for Students & Scholars",
        categories: "Students, School, Studying",
        book: "Every Moment Holy: Volume I",
        page: "38",
        description: "A prayer to pray before studying."
    },
    {
        id: "17",
        title: "A Liturgy for Waiters & Watresses",
        categories: "Work, Employment, Restaurant",
        book: "Every Moment Holy: Volume I",
        page: "41",
        description: "A prayer to pray before working your job at a restaurant."
    },
    {
        id: "18",
        title: "A Liturgy for First Responders",
        categories: "Work, Employment, Emergency",
        book: "Every Moment Holy: Volume I",
        page: "43",
        description: "A prayer to pray before work your job as a first responder."
    },
    {
        id: "19",
        title: "A Liturgy for Medical Providers",
        categories: "Work, Employment, Emergency, Hospital, Medical",
        book: "Every Moment Holy: Volume I",
        page: "44",
        description: "A prayer to pray before working your job as a medical provider......"
    },
    {
        id: "20",
        title: "A Liturgy for Taking the Stage",
        categories: "Performance, Public Speaking",
        book: "Every Moment Holy: Volume I",
        page: "48",
        description: "A prayer to pray before getting to perform or speak in front of an audience."
    },
    {
        id: "21",
        title: "A Liturgy for Fiction Writers",
        categories: "Writing, Books",
        book: "Every Moment Holy: Volume I",
        page: "50",
        description: "A prayer to pray before writing a book."
    },
    {
        id: "22",
        title: "A Liturgy for Changing Diapars I",
        categories: "Domestic, Baby, Childcare, Parenting",
        book: "Every Moment Holy: Volume I",
        page: "53",
        description: "A prayer to pray before changing your baby's diapar."
    },
    {
        id: "23",
        title: "A Liturgy for Changing Diapars II",
        categories: "Domestic, Baby, Childcare, Parenting",
        book: "Every Moment Holy: Volume I",
        page: "56",
        description: "A shorter prayer to pray before changing your baby's diapar."
    },
    {
        id: "24",
        title: "A Liturgy for Those who Work in Wood & Stone & Metal & Clay",
        categories: "Work, Employment, Labor",
        book: "Every Moment Holy: Volume I",
        page: "57",
        description: "A prayer to pray before working a labor-intensive job with your hands. "
    },
    {
        id: "25",
        title: "A Liturgy for the Labors of Community",
        categories: "Work, Employment, Community",
        book: "Every Moment Holy: Volume I",
        page: "60",
        description: "A prayer to pray with your coworkers or community before working together, either at your job, or on a community project."
    },
    {
        id: "26",
        title: "A Liturgy for Arriving at the Ocean",
        categories: "Creation, Ocean",
        book: "Every Moment Holy: Volume I",
        page: "65",
        description: "A prayer to pray when sitting at the ocean."
    },
    {
        id: "27",
        title: "A Liturgy for Leaving on Holiday",
        categories: "Vacation, Travel",
        book: "Every Moment Holy: Volume I",
        page: "68",
        description: "A prayer to pray while traveling for vacation."
    },
    {
        id: "28",
        title: "A Liturgy for those who Sleep in Tents",
        categories: "Vacation, Camping, Nature, Creation",
        book: "Every Moment Holy: Volume I",
        page: "71",
        description: "A prayer to pray while camping in tents."
    },
    {
        id: "29",
        title: "A Liturgy for the Enjoyment of Bonfires in the Night",
        categories: "Creation, Camping, Nature, Community",
        book: "Every Moment Holy: Volume I",
        page: "73",
        description: "A prayer to pray while sitting at a bonfire."
    },
    {
        id: "30",
        title: "A Liturgy for Sunsets",
        categories: "Creation, Sky, Sun",
        book: "Every Moment Holy: Volume I",
        page: "76",
        description: "A prayer to pray while looking at a sunset."
    },
    {
        id: "31",
        title: "A Liturgy for Stargazing",
        categories: "Creation, Sky, Stars",
        book: "Every Moment Holy: Volume I",
        page: "78",
        description: "A prayer to pray when looking at the stars."
    },
    {
        id: "32",
        title: "A Liturgy for the Watching of Storms",
        categories: "Creation, Sky, Storm, Rain",
        book: "Every Moment Holy: Volume I",
        page: "80",
        description: "A prayer to pray while watching a storm."
    },
    {
        id: "33",
        title: "A Liturgy for the First Snow",
        categories: "Creation, Sky, Snow, Seasons",
        book: "Every Moment Holy: Volume I",
        page: "82",
        description: "A prayer to pray at the first snowfall"
    },
    {
        id: "34",
        title: "A Liturgy before Consuming Media",
        categories: "Media",
        book: "Every Moment Holy: Volume I",
        page: "83",
        description: "A prayer to pray before going on social media, watching a movie or show, reading a book, or consuming any other form of media."
    },
    {
        id: "35",
        title: "A Liturgy for the Planting of Flowers",
        categories: "Creation, Garden, Flowers",
        book: "Every Moment Holy: Volume I",
        page: "87",
        description: "A prayer to pray before planting flowers."
    },
    {
        id: "36",
        title: "A Liturgy for Gardening",
        categories: "Creation, Garden",
        book: "Every Moment Holy: Volume I",
        page: "91",
        description: "A prayer to pray before gardening."
    },
    {
        id: "37",
        title: "A Liturgy before Beginning a Book",
        categories: "Media, Books",
        book: "Every Moment Holy: Volume I",
        page: "94",
        description: "A prayer to pray before starting a new book."
    },
    {
        id: "38",
        title: "Lament Upon the Finishing of a Beloved Book",
        categories: "Media, Books",
        book: "Every Moment Holy: Volume I",
        page: "95",
        description: "A prayer to pray after finishing a book you love."
    },
    {
        id: "39",
        title: "A Liturgy for those Who Compete",
        categories: "Hobbies, Competition",
        book: "Every Moment Holy: Volume I",
        page: "99",
        description: "A prayer to pray before competing in something you love."
    },
    {
        id: "40",
        title: "A Liturgy for those Gathered On the Eve of a Wedding",
        categories: "Wedding, Celabrations, Community",
        book: "Every Moment Holy: Volume I",
        page: "105",
        description: "A prayer to pray after a wedding with the guests."
    },
    {
        id: "41",
        title: "A Liturgy to Begin a Purposeful Gathering",
        categories: "Community",
        book: "Every Moment Holy: Volume I",
        page: "111",
        description: "A prayer to pray with those you are gathering with."
    },
    {
        id: "42",
        title: "A Liturgy for Feasting with Friends",
        categories: "Community, Meals",
        book: "Every Moment Holy: Volume I",
        page: "112",
        description: "A prayer to pray before a meal with loved ones."
    },
    {
        id: "43",
        title: "A Liturgy for Moving into a New Home",
        categories: "Celabrations, Home",
        book: "Every Moment Holy: Volume I",
        page: "117",
        description: "A prayer to pray after moving into a new home."
    },
    {
        id: "44",
        title: "A Liturgy to Mark the First Hearthfire of the Season",
        categories: "Seasons, Winter, Bonfire",
        book: "Every Moment Holy: Volume I",
        page: "119",
        description: "A prayer to pray at the start of winter while keeping warm."
    },
    {
        id: "45",
        title: "A Liturgy to Mark the Start of the Christmas Season",
        categories: "Celabrations, Seasons, Christmas",
        book: "Every Moment Holy: Volume I",
        page: "121",
        description: "A prayer to pray when Christmas seasons starts."
    },
    {
        id: "46",
        title: "A Liturgy for Setting up a Christmas Tree",
        categories: "Celabrations, Seasons, Christmas",
        book: "Every Moment Holy: Volume I",
        page: "123",
        description: "A prayer to pray before setting up your Christmas tree."
    },
    {
        id: "47",
        title: "A Liturgy for Welcoming Home a New Pet",
        categories: "Pets",
        book: "Every Moment Holy: Volume I",
        page: "125",
        description: "A prayer to pray when bringing home a new pet."
    },
    {
        id: "48",
        title: "A Liturgy for the a Yard Sale",
        categories: "Community, Selling, Clutter",
        book: "Every Moment Holy: Volume I",
        page: "128",
        description: "A prayer to pray when doing a yard sale."
    },
    {
        id: "49",
        title: "A Liturgy for the Marking of Birthdays",
        categories: "Celabrations, Birthday, Community",
        book: "Every Moment Holy: Volume I",
        page: "130",
        description: "A prayer to pray at someone's birthday."
    },
    {
        id: "50",
        title: "A Liturgy for the Ritual of Morning Coffee",
        categories: "Rituals, Habits, Morning",
        book: "Every Moment Holy: Volume I",
        page: "135",
        description: "A prayer to pray before drinking your morning coffee."
    },
    {
        id: "51",
        title: "A Liturgy for a Sick Day",
        categories: "Sick, Health",
        book: "Every Moment Holy: Volume I",
        page: "136",
        description: "A prayer to pray when taking a sick day."
    },
    {
        id: "52",
        title: "A Liturgy for the Morning of a Medical Procedure",
        categories: "Health, Medical, Morning",
        book: "Every Moment Holy: Volume I",
        page: "138",
        description: "A prayer to pray the morning before a medical procedure."
    },
    {
        id: "53",
        title: "A Liturgy for the a Husband & Wife at Start of Day",
        categories: "Marriage, Morning",
        book: "Every Moment Holy: Volume I",
        page: "141",
        description: "A prayer to pray with your spouse in the morning."
    },
    {
        id: "54",
        title: "A Liturgy for the a Husband & Wife at Close of Day",
        categories: "Marriage, Night, Evening",
        book: "Every Moment Holy: Volume I",
        page: "143",
        description: "A prayer to pray with your spouse at the end of the day."
    },
    {
        id: "55",
        title: "A Liturgy for those whom Suffer Loss from Fire, Flood, or Storm",
        categories: "Loss, Storm, Suffering",
        book: "Every Moment Holy: Volume I",
        page: "146",
        description: "A prayer to pray when you've suffered loss from a natural disaster."
    },
    {
        id: "56",
        title: "A Liturgy for the Loss of Electricity",
        categories: "Loss, Home, Suffering",
        book: "Every Moment Holy: Volume I",
        page: "",
        description: "A prayer to pray when you've lossed electricity."
    },
    {
        id: "57",
        title: "A Liturgy before Serving Others",
        categories: "Community, Serving, Volunteering",
        book: "Every Moment Holy: Volume I",
        page: "155",
        description: "A prayer to pray before serving or volunteering somewhere."
    },
    {
        id: "58",
        title: "A Liturgy before a Meal Eaten Alone",
        categories: "Meals, Lonliness",
        book: "Every Moment Holy: Volume I",
        page: "156",
        description: "A prayer to pray when You are eating a meal by yourself."
    },
    {
        id: "59",
        title: "A Liturgy for those Flooded by Too Much Information",
        categories: "Media, Overwhelmed",
        book: "Every Moment Holy: Volume I",
        page: "157",
        description: "A prayer to pray when you feel drained from scrolling for too long or feel overwhelmed by the news."
    },
    {
        id: "60",
        title: "A Liturgy for those Who Covet the Latest Technology",
        categories: "Desire, Covetousness, Incontentment, Struggle",
        book: "Every Moment Holy: Volume I",
        page: "160",
        description: "A prayer to pray when you feel incontent with what you have."
    },
    {
        id: "61",
        title: "A Liturgy for One Battling a Desctructive Desire",
        categories: "Desire, Temptation, Struggle",
        book: "Every Moment Holy: Volume I",
        page: "162",
        description: "A prayer to pray when you're struggling with temptation on a regular basis."
    },
    {
        id: "62",
        title: "A Liturgy for Nights & Days of Doubt",
        categories: "Doubt, Struggle",
        book: "Every Moment Holy: Volume I",
        page: "163",
        description: "A prayer to pray when struggling with doubting God."
    },
    {
        id: "63",
        title: "A Liturgy for those with a Sudden Burden to Intercede",
        categories: "Desire, Control, Community, Struggle",
        book: "Every Moment Holy: Volume I",
        page: "168",
        description: "A prayer to pray when feeling overwhelmed to intercede in on someone's life."
    },
    {
        id: "64",
        title: "A Liturgy for those who feel Awkward in Social Gatherings",
        categories: "Community, Struggle",
        book: "Every Moment Holy: Volume I",
        page: "146",
        description: "A prayer to pray when you struggle with feeling like an awkward person."
    },
    {
        id: "65",
        title: "A Liturgy for Dating or Courtship",
        categories: "Dating",
        book: "Every Moment Holy: Volume I",
        page: "175",
        description: "A prayer to pray when you are dating someone."
    },
    {
        id: "66",
        title: "A Liturgy before Giving I",
        categories: "Giving, Tithe",
        book: "Every Moment Holy: Volume I",
        page: "178",
        description: "A prayer to pray before giving to the needy."
    },
    {
        id: "67",
        title: "A Liturgy before Giving II",
        categories: "Giving, Tithe",
        book: "Every Moment Holy: Volume I",
        page: "181",
        description: "A prayer to pray before giving to the needy."
    },
    {
        id: "68",
        title: "A Liturgy for those with an Impulse to Buy",
        categories: "Temptation, Struggle, Desire",
        book: "Every Moment Holy: Volume I",
        page: "183",
        description: "A prayer to pray when you struggle with impulsive purchases or when you are feeling tempted to make an impuslive purchase."
    },
    {
        id: "69",
        title: "A Liturgy before Shopping",
        categories: "Errants, Chores, Shopping",
        book: "Every Moment Holy: Volume I",
        page: "186",
        description: "A prayer to pray before going out to shop."
    },
    {
        id: "70",
        title: "A Liturgy for the Paying of Bills",
        categories: "Chores, Bills, Income",
        book: "Every Moment Holy: Volume I",
        page: "190",
        description: "A prayer to pray before paying the bills."
    },
    {
        id: "71",
        title: "A Liturgy for one who has Suffered a Nightmare",
        categories: "Sleep, Suffering",
        book: "Every Moment Holy: Volume I",
        page: "193",
        description: "A prayer to pray when waking from a nightmare."
    },
    {
        id: "72",
        title: "A Liturgy for those who Cannot Sleep",
        categories: "Sleep, Suffering",
        book: "Every Moment Holy: Volume I",
        page: "195",
        description: "A prayer to pray when struggling to fall asleep."
    },
    {
        id: "73",
        title: "A Liturgy for First Waking",
        categories: "Hours of the Day, Morning",
        book: "Every Moment Holy: Volume I",
        page: "197",
        description: "A prayer to pray when you first wake up."
    },
    {
        id: "74",
        title: "A Liturgy for those who have not Done Great Things for God",
        categories: "Lament, Serving",
        book: "Every Moment Holy: Volume I",
        page: "201",
        description: "A prayer to pray when you feel sad about not serving God well."
    },
    {
        id: "75",
        title: "A Liturgy for the Anniversary of a Loss",
        categories: "Loss, Anniversary",
        book: "Every Moment Holy: Volume I",
        page: "208",
        description: "A prayer to pray when remembering someone you've lost."
    },
    {
        id: "76",
        title: "A Liturgy for the Loss of a Living Thing",
        categories: "Loss, Pets, Garden",
        book: "Every Moment Holy: Volume I",
        page: "193",
        description: "A prayer to pray when losing a pet or a plant."
    },
    {
        id: "77",
        title: "A Liturgy for Missing Someone",
        categories: "Loss, Lament",
        book: "Every Moment Holy: Volume I",
        page: "215",
        description: "A prayer to pray when you miss someone, whether they are far away or gone from this side of eternity."
    },
    {
        id: "78",
        title: "A Liturgy for Leavings",
        categories: "Leaving, Goodbyes",
        book: "Every Moment Holy: Volume I",
        page: "218",
        description: "A prayer to pray when saying goodbye to someone."
    },
    {
        id: "79",
        title: "A Liturgy for an Inconsolable Homesickness",
        categories: "Homesick, Desire",
        book: "Every Moment Holy: Volume I",
        page: "221",
        description: "A prayer to pray when feeling homesick."
    },
    {
        id: "80",
        title: "A Liturgy for the Feeling of Infirmities",
        categories: "Health, Weakness, Mental Health",
        book: "Every Moment Holy: Volume I",
        page: "226",
        description: "A prayer to pray when feeling mentally or physically weak."
    },
    {
        id: "81",
        title: "A Liturgy forthose Fearing Failure",
        categories: "Fear, Failure",
        book: "Every Moment Holy: Volume I",
        page: "228",
        description: "A prayer to pray when you fear failing."
    },
    {
        id: "82",
        title: "A Liturgy for the Death of a Dream",
        categories: "Desire, Lament",
        book: "Every Moment Holy: Volume I",
        page: "233",
        description: "A prayer to pray when your dreams don't come true or you have to give them up."
    },
    {
        id: "83",
        title: "A Liturgy for those who have Done Harm",
        categories: "Lament, Apology, Remorse",
        book: "Every Moment Holy: Volume I",
        page: "237",
        description: "A prayer to pray when feeling remorse over doing harm."
    },
    {
        id: "84",
        title: "A Liturgy for one who Weep without Knowing Why",
        categories: "Crying, Sad",
        book: "Every Moment Holy: Volume I",
        page: "241",
        description: "A prayer to pray when feeling sad for no reason."
    },
    {
        id: "85",
        title: "Upon Seeing a Beautiful Person",
        categories: "Memorize, Beauty, Temptation, Lust",
        book: "Every Moment Holy: Volume I",
        page: "249",
        description: "A prayer to memorize for when you see someone beautiful."
    },
    {
        id: "86",
        title: "Upon Tasting a Pleasurable Food",
        categories: "Memorize, Meals",
        book: "Every Moment Holy: Volume I",
        page: "249",
        description: "A prayer to memorize for when you eat something delicious."
    },
    {
        id: "87",
        title: "Upon Experiencing Cheering Laughter",
        categories: "Memorize, Community",
        book: "Every Moment Holy: Volume I",
        page: "249",
        description: "A prayer to memorize for when you can't stop laughing."
    },
    {
        id: "88",
        title: "Upon Randomly Thinking of Another Person",
        categories: "Memorize, Loved Ones",
        book: "Every Moment Holy: Volume I",
        page: "250",
        description: "A prayer to memorize for when thinking of someone you know or love."
    },
    {
        id: "89",
        title: "Upon Being Moved by a Song or a Piece of Music",
        categories: "Memorize, Media",
        book: "Every Moment Holy: Volume I",
        page: "250",
        description: "A prayer to memorize for when you are moved by a piece of media."
    },
    {
        id: "90",
        title: "Upon Hearing  Birdson",
        categories: "Memorize, Nature",
        book: "Every Moment Holy: Volume I",
        page: "250",
        description: "A prayer to memorize for when you hear a bird chirping."
    },
    {
        id: "91",
        title: "UPon Sighting a Flower in Bloom",
        categories: "Memorize, Flowers",
        book: "Every Moment Holy: Volume I",
        page: "250",
        description: "A prayer to memorize for when you see a beautiful flower."
    },
    {
        id: "92",
        title: "Upon an Unexpected Sighting of Wildlife",
        categories: "Memorize, Nature",
        book: "Every Moment Holy: Volume I",
        page: "250",
        description: "A prayer to memorize for when you see a wild animal."
    },
    {
        id: "93",
        title: "Upon Feeling the Pleasance of a Warm Shower",
        categories: "Memorize, Warmth, Home",
        book: "Every Moment Holy: Volume I",
        page: "250",
        description: "A prayer to memorize for when you get into a nice hot shower."
    },
    {
        id: "94",
        title: "A Liturgy for the Sound of Sirens",
        categories: "Medical, Emergency",
        book: "Every Moment Holy: Volume I",
        page: "251",
        description: "A prayer to pray when hearing sirens outside."
    },
    {
        id: "95",
        title: "A Liturgy for a Fleeting Irritation",
        categories: "Struggle, Anger",
        book: "Every Moment Holy: Volume I",
        page: "252",
        description: "A prayer to pray when feeling irritated."
    },
    {
        id: "96",
        title: "A Liturgy for Moments of Emergency",
        categories: "Emergency",
        book: "Every Moment Holy: Volume I",
        page: "253",
        description: "A prayer to pray when experiencing an emergency."
    },
    {
        id: "97",
        title: "A Liturgy for a Moment of Frustration at a Child",
        categories: "Childcare, Parenting, baby, Anger",
        book: "Every Moment Holy: Volume I",
        page: "254",
        description: "A prayer to pray when feeling frustrated at a child."
    },
    {
        id: "98",
        title: "A Liturgy for the Sound of Sirens",
        categories: "Medical, Emergency",
        book: "Every Moment Holy: Volume I",
        page: "251",
        description: "A prayer to pray when hearing sirens outside."
    },
    {
        id: "99",
        title: "A Liturgy for Experiencing Road Rage",
        categories: "Struggle, Anger",
        book: "Every Moment Holy: Volume I",
        page: "254",
        description: "A prayer to pray when you struggle with road rage."
    },
    {
        id: "100",
        title: "A Liturgy for Waiting in Lines",
        categories: "Patience, Waiting",
        book: "Every Moment Holy: Volume I",
        page: "251=5",
        description: "A prayer to pray when waiting in a long line."
    },
    {
        id: "101",
        title: "A Liturgy for Sunday's Table Blessing",
        categories: "Sunday, Meals",
        book: "Every Moment Holy: Volume I",
        page: "259",
        description: "A prayer to pray at Sunday dinner."
    },
    {
        id: "102",
        title: "A Liturgy for Monday's Table Blessing",
        categories: "Monday, Meals",
        book: "Every Moment Holy: Volume I",
        page: "260",
        description: "A prayer to pray at Monday dinner."
    },
    {
        id: "103",
        title: "A Liturgy for Tuesday's Table Blessing",
        categories: "Tuesday, Meals",
        book: "Every Moment Holy: Volume I",
        page: "262",
        description: "A prayer to pray at Tuesday dinner."
    },
    {
        id: "104",
        title: "A Liturgy for Wednesday's Table Blessing",
        categories: "Wednesday, Meals",
        book: "Every Moment Holy: Volume I",
        page: "263",
        description: "A prayer to pray at Wednesday dinner."
    },
    {
        id: "105",
        title: "A Liturgy for Thursday's Table Blessing",
        categories: "Thursday, Meals",
        book: "Every Moment Holy: Volume I",
        page: "264",
        description: "A prayer to pray at Thursday dinner."
    },
    {
        id: "106",
        title: "A Liturgy for Friday's Table Blessing",
        categories: "Friday, Meals",
        book: "Every Moment Holy: Volume I",
        page: "266",
        description: "A prayer to pray at Friday dinner."
    },
    {
        id: "107",
        title: "A Liturgy for Saturday's Table Blessing",
        categories: "Saturday, Meals",
        book: "Every Moment Holy: Volume I",
        page: "267",
        description: "A prayer to pray at Saturday dinner."
    },
    {
        id: "108",
        title: "A Liturgy of Praise to the King of Creation",
        categories: "Worship, Praise, Creation",
        book: "Every Moment Holy: Volume I",
        page: "273",
        description: "A prayer of praise to King Jesus."
    },
    {
        id: "109",
        title: "Rest for Your Soul",
        categories: "Rest",
        book: "Prayers of Rest",
        page: "20",
        description: "A prayer of to pray to rest in Jesus."
    },
    {
        id: "110",
        title: "God is Our Refuge",
        categories: "Strength, Rest",
        book: "Prayers of Rest",
        page: "21",
        description: "A prayer of to pray to find strength in God."
    },
    {
        id: "111",
        title: "Resting in God's Salvation",
        categories: "Salvation, Rest",
        book: "Prayers of Rest",
        page: "22",
        description: "A prayer of to pray to rest in God's salvation."
    },
    {
        id: "112",
        title: "Resting in the Finished Work of Jesus",
        categories: "Salvation, Jesus, Rest",
        book: "Prayers of Rest",
        page: "23",
        description: "A prayer of to pray to rest Jesus' finished work."
    },
    {
        id: "113",
        title: "Resting with the Good Shepherd",
        categories: "Shepherd, Rest",
        book: "Prayers of Rest",
        page: "24",
        description: "A prayer of to pray to rest as a follower of Christ."
    },
    {
        id: "114",
        title: "Resting in God's Sovereignty",
        categories: "Rest",
        book: "Prayers of Rest",
        page: "25",
        description: "A prayer of to pray to rest in God's sovereignty."
    },
    {
        id: "115",
        title: "Resting in the Spirit's Intercession",
        categories: "Prayer, Spirit",
        book: "Prayers of Rest",
        page: "26",
        description: "A prayer about the Holy Spirit's intercession."
    },
    {
        id: "116",
        title: "Resting in God's Power",
        categories: "Power, Rest",
        book: "Prayers of Rest",
        page: "27",
        description: "A prayer to rest in God's power."
    },
    {
        id: "117",
        title: "Resting in Jesus' Love",
        categories: "Love, Jesus, Rest",
        book: "Prayers of Rest",
        page: "28",
        description: "A prayer to rest in the love of Jesus."
    },
    {
        id: "118",
        title: "Resting in Jesus' Reign",
        categories: "Jesus, Reign, Rest",
        book: "Prayers of Rest",
        page: "29",
        description: "A prayer to rest in the reign of Jesus."
    },
    {
        id: "119",
        title: "Resting in the Assurance of a Beautiful Future",
        categories: "Hope, Future, Rest",
        book: "Prayers of Rest",
        page: "30",
        description: "A prayer about the hope of a beautiful future with God."
    },
    {
        id: "120",
        title: "Returning to Rest",
        categories: "Rest",
        book: "Prayers of Rest",
        page: "31",
        description: "A prayer about returning to a state of rest in God."
    },
    {
        id: "121",
        title: "Teach Us to Pray",
        categories: "Prayer",
        book: "Prayers of Rest",
        page: "34",
        description: "A prayer asking God to teach us how to pray."
    },
    {
        id: "122",
        title: "Holy Father in Heaven",
        categories: "Prayer, Father",
        book: "Prayers of Rest",
        page: "35",
        description: "A prayer acknowledging God as our Holy Father."
    },
    {
        id: "123",
        title: "God's Kingdom on Earth",
        categories: "Prayer, Kingdom",
        book: "Prayers of Rest",
        page: "36",
        description: "A prayer for God's kingdom to come on Earth."
    },
    {
        id: "124",
        title: "Daily Dependence on God",
        categories: "Prayer, Dependence",
        book: "Prayers of Rest",
        page: "37",
        description: "A prayer for daily dependence on God."
    },
    {
        id: "125",
        title: "Forgiven to Forgive",
        categories: "Prayer, Forgiveness",
        book: "Prayers of Rest",
        page: "38",
        description: "A prayer about being forgiven and forgiving others."
    },
    {
        id: "126",
        title: "Delivered from Evil",
        categories: "Prayer, Deliverance",
        book: "Prayers of Rest",
        page: "39",
        description: "A prayer for deliverance from evil."
    },
    {
        id: "127",
        title: "Withdrawing to Pray",
        categories: "Prayer",
        book: "Prayers of Rest",
        page: "40",
        description: "A prayer about the importance of withdrawing to pray."
    },
    {
        id: "128",
        title: "Morning Whispers",
        categories: "Prayer, Morning",
        book: "Prayers of Rest",
        page: "41",
        description: "A prayer for the morning."
    },
    {
        id: "129",
        title: "Pleased to Reveal",
        categories: "Prayer, Revelation",
        book: "Prayers of Rest",
        page: "42",
        description: "A prayer about God's pleasure in revealing Himself."
    },
    {
        id: "130",
        title: "Your Will Be Done",
        categories: "Prayer, Surrender",
        book: "Prayers of Rest",
        page: "43",
        description: "A prayer for God's will to be done."
    },
    {
        id: "131",
        title: "One with God and One Another",
        categories: "Prayer, Unity",
        book: "Prayers of Rest",
        page: "44",
        description: "A prayer for unity with God and fellow believers."
    },
    {
        id: "132",
        title: "Being with Jesus",
        categories: "Prayer, Jesus",
        book: "Prayers of Rest",
        page: "45",
        description: "A prayer about the desire to be with Jesus."
    },
    {
        id: "133",
        title: "King of Kings",
        categories: "Jesus, Kingship, Worship",
        book: "Prayers of Rest",
        page: "48",
        description: "A prayer to worship Jesus as the King of Kings."
    },
    {
        id: "134",
        title: "Light of the World",
        categories: "Jesus, Light, Hope",
        book: "Prayers of Rest",
        page: "49",
        description: "A prayer acknowledging Jesus as the Light of the World."
    },
    {
        id: "135",
        title: "Good Shepherd",
        categories: "Jesus, Shepherd, Guidance",
        book: "Prayers of Rest",
        page: "50",
        description: "A prayer to the Good Shepherd for guidance and care."
    },
    {
        id: "136",
        title: "Bread of Life",
        categories: "Jesus, Sustenance, Satisfaction",
        book: "Prayers of Rest",
        page: "51",
        description: "A prayer to Jesus, the Bread of Life, for spiritual nourishment."
    },
    {
        id: "137",
        title: "Man of Sorrows",
        categories: "Jesus, Suffering, Comfort",
        book: "Prayers of Rest",
        page: "52",
        description: "A prayer to Jesus, the Man of Sorrows, who understands our pain."
    },
    {
        id: "138",
        title: "The Resurrection and the Life",
        categories: "Jesus, Resurrection, Hope, Life",
        book: "Prayers of Rest",
        page: "53",
        description: "A prayer to Jesus, who is the Resurrection and the Life."
    },
    {
        id: "139",
        title: "Prince of Peace",
        categories: "Jesus, Peace",
        book: "Prayers of Rest",
        page: "54",
        description: "A prayer to Jesus, the Prince of Peace."
    },
    {
        id: "140",
        title: "Lion of Judah",
        categories: "Jesus, Power, Majesty",
        book: "Prayers of Rest",
        page: "55",
        description: "A prayer to the Lion of Judah, acknowledging His power."
    },
    {
        id: "141",
        title: "Immanuel",
        categories: "Jesus, Presence, God with us",
        book: "Prayers of Rest",
        page: "56",
        description: "A prayer to Immanuel, celebrating God's presence with us."
    },
    {
        id: "142",
        title: "Jesus",
        categories: "Jesus, Salvation",
        book: "Prayers of Rest",
        page: "57",
        description: "A prayer to the name of Jesus, our savior."
    },
    {
        id: "143",
        title: "Jesus Doesn't Give Up",
        categories: "Jesus, Love, Perseverance",
        book: "Prayers of Rest",
        page: "58",
        description: "A prayer about Jesus' persevering love."
    },
    {
        id: "144",
        title: "Jesus Protects His Own",
        categories: "Jesus, Protection",
        book: "Prayers of Rest",
        page: "59",
        description: "A prayer about Jesus' protection over His followers."
    },
    {
        id: "145",
        title: "Jesus Loves His Enemies",
        categories: "Jesus, Love, Forgiveness",
        book: "Prayers of Rest",
        page: "60",
        description: "A prayer reflecting on Jesus' love for His enemies."
    },
    {
        id: "146",
        title: "Jesus Keeps No Record of Wrongs",
        categories: "Jesus, Forgiveness, Grace",
        book: "Prayers of Rest",
        page: "61",
        description: "A prayer about Jesus' forgiveness and grace."
    },
    {
        id: "147",
        title: "Jesus Rejoices in the Truth",
        categories: "Jesus, Truth",
        book: "Prayers of Rest",
        page: "62",
        description: "A prayer about Jesus as the embodiment of truth."
    },
    {
        id: "148",
        title: "Jesus Is Not Self-Seeking",
        categories: "Jesus, Humility, Love",
        book: "Prayers of Rest",
        page: "63",
        description: "A prayer on Jesus' selfless love."
    },
    {
        id: "149",
        title: "Jesus' Love Forgives",
        categories: "Jesus, Love, Forgiveness",
        book: "Prayers of Rest",
        page: "64",
        description: "A prayer about the forgiving nature of Jesus' love."
    },
    {
        id: "150",
        title: "Jesus Offers Hope",
        categories: "Jesus, Hope, Salvation",
        book: "Prayers of Rest",
        page: "65",
        description: "A prayer on the hope that Jesus offers to all."
    },
    {
        id: "151",
        title: "Jesus Sacrificed Everything",
        categories: "Jesus, Sacrifice, Love",
        book: "Prayers of Rest",
        page: "66",
        description: "A prayer reflecting on the ultimate sacrifice of Jesus."
    },
    {
        id: "152",
        title: "Jesus' Love Never Fails",
        categories: "Jesus, Love, Resurrection",
        book: "Prayers of Rest",
        page: "67",
        description: "A prayer on the unfailing love of Jesus, confirmed by His resurrection."
    },
    {
        id: "153",
        title: "Empowered Witnesses",
        categories: "Holy Spirit, Witnessing, Power",
        book: "Prayers of Rest",
        page: "68",
        description: "A prayer to be an empowered witness for Jesus."
    },
    {
        id: "154",
        title: "Poured-Out Spirit",
        categories: "Holy Spirit, Pentecost",
        book: "Prayers of Rest",
        page: "69",
        description: "A prayer celebrating the outpouring of the Holy Spirit."
    },
    {
        id: "155",
        title: "Ordinary People with Jesus",
        categories: "Discipleship, Jesus, Transformation",
        book: "Prayers of Rest",
        page: "70",
        description: "A prayer about how being with Jesus transforms ordinary people."
    },
    {
        id: "156",
        title: "Unstoppable",
        categories: "God's Will, Sovereignty",
        book: "Prayers of Rest",
        page: "71",
        description: "A prayer acknowledging that God's work is unstoppable."
    },
    {
        id: "157",
        title: "Sent",
        categories: "Mission, Calling",
        book: "Prayers of Rest",
        page: "72",
        description: "A prayer about being sent by God on His mission."
    },
    {
        id: "158",
        title: "Jesus Heals You",
        categories: "Jesus, Healing",
        book: "Prayers of Rest",
        page: "73",
        description: "A prayer acknowledging the healing power of Jesus."
    },
    {
        id: "159",
        title: "I Now Realize",
        categories: "Revelation, God's Nature",
        book: "Prayers of Rest",
        page: "74",
        description: "A prayer about the realization that God shows no favoritism."
    },
    {
        id: "160",
        title: "The Spirit Wouldn't Let Me",
        categories: "Holy Spirit, Guidance",
        book: "Prayers of Rest",
        page: "75",
        description: "A prayer about being guided and redirected by the Holy Spirit."
    },
    {
        id: "161",
        title: "His Presence Is Our Protection",
        categories: "God's Presence, Protection, Courage",
        book: "Prayers of Rest",
        page: "76",
        description: "A prayer on finding protection and boldness in God's presence."
    },
    {
        id: "162",
        title: "May Jesus Be Lifted Up",
        categories: "Jesus, Exaltation, Worship",
        book: "Prayers of Rest",
        page: "77",
        description: "A prayer for the name of Jesus to be honored and exalted."
    },
    {
        id: "163",
        title: "Called by the Resurrected One",
        categories: "Resurrection, Calling, Jesus",
        book: "Prayers of Rest",
        page: "80",
        description: "A prayer about being called by the resurrected Jesus."
    },
    {
        id: "164",
        title: "The Fullness of Christ in Us",
        categories: "Christ in us, Church, Fullness",
        book: "Prayers of Rest",
        page: "81",
        description: "A prayer about the church being the fullness of Christ."
    },
    {
        id: "165",
        title: "Living As Those Who Never Die",
        categories: "Eternal Life, Resurrection, Hope",
        book: "Prayers of Rest",
        page: "82",
        description: "A prayer on living with the hope of eternal life."
    },
    {
        id: "166",
        title: "A Kingdom of Priests",
        categories: "Kingdom, Priesthood of Believers",
        book: "Prayers of Rest",
        page: "83",
        description: "A prayer about our identity as a kingdom of priests."
    },
    {
        id: "167",
        title: "An Anthem of Worship",
        categories: "Worship, Praise, Jesus",
        book: "Prayers of Rest",
        page: "84",
        description: "A prayer joining with all creation in worship to Jesus."
    },
    {
        id: "168",
        title: "An Everlasting Love",
        categories: "Love, God's Love",
        book: "Prayers of Rest",
        page: "85",
        description: "A prayer reflecting on God's everlasting love."
    },
    {
        id: "169",
        title: "Living in Christ",
        categories: "Christ in us, Identity, Faith",
        book: "Prayers of Rest",
        page: "86",
        description: "A prayer about our new life and identity in Christ."
    },
    {
        id: "170",
        title: "Knowing the Power and Presence of Jesus",
        categories: "Jesus, Power, Presence, Resurrection",
        book: "Prayers of Rest",
        page: "87",
        description: "A prayer to know Christ and the power of His resurrection."
    },
    {
        id: "171",
        title: "Raised with Christ",
        categories: "Resurrection, New Life, Grace",
        book: "Prayers of Rest",
        page: "88",
        description: "A prayer about being made alive and raised with Christ."
    },
    {
        id: "172",
        title: "Hidden with Christ",
        categories: "Identity in Christ, Hope, Glory",
        book: "Prayers of Rest",
        page: "89",
        description: "A prayer about our life being hidden with Christ in God."
    },
    {
        id: "173",
        title: "Working with Christ's Energy",
        categories: "Work, Power, Christ in us",
        book: "Prayers of Rest",
        page: "90",
        description: "A prayer about working with the energy Christ provides."
    },
    {
        id: "174",
        title: "God's Resurrected People",
        categories: "Hope, New Creation, God's Presence",
        book: "Prayers of Rest",
        page: "91",
        description: "A prayer about the future hope of dwelling with God as His people."
    },
    {
        id: "175",
        title: "Abide",
        categories: "Abiding, Fruitfulness, Jesus",
        book: "Prayers of Rest",
        page: "92",
        description: "A prayer on the importance of abiding in Christ to bear fruit."
    },
    {
        id: "176",
        title: "Love",
        categories: "Fruit of the Spirit, Love",
        book: "Prayers of Rest",
        page: "93",
        description: "A prayer to love others as Christ has loved us."
    },
    {
        id: "177",
        title: "Joy",
        categories: "Fruit of the Spirit, Joy",
        book: "Prayers of Rest",
        page: "94",
        description: "A prayer to be filled with inexpressible and glorious joy."
    },
    {
        id: "178",
        title: "Peace",
        categories: "Fruit of the Spirit, Peace",
        book: "Prayers of Rest",
        page: "95",
        description: "A prayer to receive and live in the peace of Christ."
    },
    {
        id: "179",
        title: "Patience",
        categories: "Fruit of the Spirit, Patience",
        book: "Prayers of Rest",
        page: "96",
        description: "A prayer for patience, rooted in the hope of the Lord's coming."
    },
    {
        id: "180",
        title: "Kindness",
        categories: "Fruit of the Spirit, Kindness, Service",
        book: "Prayers of Rest",
        page: "97",
        description: "A prayer to show kindness to others, as if to Jesus himself."
    },
    {
        id: "181",
        title: "Goodness",
        categories: "Fruit of the Spirit, Goodness, Humility",
        book: "Prayers of Rest",
        page: "98",
        description: "A prayer to live a good life through deeds done in humility."
    },
    {
        id: "182",
        title: "Faithfulness",
        categories: "Fruit of the Spirit, Faithfulness",
        book: "Prayers of Rest",
        page: "99",
        description: "A prayer to be a good and faithful servant."
    },
    {
        id: "183",
        title: "Gentleness",
        categories: "Fruit of the Spirit, Gentleness",
        book: "Prayers of Rest",
        page: "100",
        description: "A prayer for our gentleness to be evident to all."
    },
    {
        id: "184",
        title: "Self-Control",
        categories: "Fruit of the Spirit, Self-Control, Grace",
        book: "Prayers of Rest",
        page: "101",
        description: "A prayer to live a self-controlled life through God's grace."
    },
    {
        id: "185",
        title: "People of the Coming Kingdom",
        categories: "Kingdom, Inheritance, Blessing",
        book: "Prayers of Rest",
        page: "102",
        description: "A prayer about receiving our inheritance in God's kingdom."
    },
    {
        id: "186",
        title: "The Poor in Spirit",
        categories: "Beatitudes, Humility, Kingdom",
        book: "Prayers of Rest",
        page: "103",
        description: "A prayer for those who are poor in spirit."
    },
    {
        id: "187",
        title: "Those Who Mourn",
        categories: "Beatitudes, Mourning, Comfort",
        book: "Prayers of Rest",
        page: "104",
        description: "A prayer for those who mourn, that they will be comforted."
    },
    {
        id: "188",
        title: "The Meek",
        categories: "Beatitudes, Meekness, Inheritance",
        book: "Prayers of Rest",
        page: "105",
        description: "A prayer for the meek, who will inherit the earth."
    },
    {
        id: "189",
        title: "Those Who Hunger and Thirst for Righteousness",
        categories: "Beatitudes, Righteousness, Satisfaction",
        book: "Prayers of Rest",
        page: "106",
        description: "A prayer for those who hunger and thirst for righteousness."
    },
    {
        id: "190",
        title: "The Merciful",
        categories: "Beatitudes, Mercy",
        book: "Prayers of Rest",
        page: "107",
        description: "A prayer for the merciful, who will be shown mercy."
    },
    {
        id: "191",
        title: "The Pure in Heart",
        categories: "Beatitudes, Purity, Holiness",
        book: "Prayers of Rest",
        page: "108",
        description: "A prayer for the pure in heart, who will see God."
    },
    {
        id: "192",
        title: "The Peacemakers",
        categories: "Beatitudes, Peace",
        book: "Prayers of Rest",
        page: "109",
        description: "A prayer for the peacemakers, who will be called children of God."
    },
    {
        id: "193",
        title: "The Persecuted Because of Righteousness",
        categories: "Beatitudes, Persecution, Righteousness",
        book: "Prayers of Rest",
        page: "110",
        description: "A prayer for those persecuted for righteousness' sake."
    },
    {
        id: "194",
        title: "Rejoice and Be Glad",
        categories: "Beatitudes, Joy, Persecution, Reward",
        book: "Prayers of Rest",
        page: "111",
        description: "A prayer to rejoice in persecution, for our reward is in heaven."
    },
    {
        id: "195",
        title: "Lonely",
        categories: "Sadness, Loneliness, Comfort",
        book: "Prayers of Rest",
        page: "114",
        description: "A prayer for when you feel lonely."
    },
    {
        id: "196",
        title: "Vulnerable",
        categories: "Sadness, Vulnerability, Grace",
        book: "Prayers of Rest",
        page: "115",
        description: "A prayer for when you feel vulnerable and afflicted."
    },
    {
        id: "197",
        title: "Desperate",
        categories: "Sadness, Desperation, Hope",
        book: "Prayers of Rest",
        page: "116",
        description: "A prayer for when you feel desperate and forgotten by God."
    },
    {
        id: "198",
        title: "Guilty",
        categories: "Sadness, Guilt, Forgiveness",
        book: "Prayers of Rest",
        page: "117",
        description: "A prayer for when you feel guilty and need cleansing."
    },
    {
        id: "199",
        title: "Depressed",
        categories: "Sadness, Depression, Hope",
        book: "Prayers of Rest",
        page: "118",
        description: "A prayer for when you are in distress and feel depressed."
    },
    {
        id: "200",
        title: "Hurt",
        categories: "Sadness, Hurt, Healing",
        book: "Prayers of Rest",
        page: "119",
        description: "A prayer for when you are afflicted and in pain."
    },
    {
        id: "201",
        title: "Regret",
        categories: "Sadness, Regret, Confession",
        book: "Prayers of Rest",
        page: "120",
        description: "A prayer for when you are troubled by sin and regret."
    },
    {
        id: "202",
        title: "Sorrow",
        categories: "Sadness, Sorrow, Anguish",
        book: "Prayers of Rest",
        page: "121",
        description: "A prayer for when your life is consumed by anguish and sorrow."
    },
    {
        id: "203",
        title: "Sympathy",
        categories: "Sadness, Sympathy, Affliction",
        book: "Prayers of Rest",
        page: "122",
        description: "A prayer of sympathy for the afflicted."
    },
    {
        id: "204",
        title: "Distressed",
        categories: "Sadness, Distress, Hope",
        book: "Prayers of Rest",
        page: "123",
        description: "A prayer for when your soul is downcast and disturbed."
    },
    {
        id: "205",
        title: "Celebratory",
        categories: "Happiness, Celebration, Praise",
        book: "Prayers of Rest",
        page: "124",
        description: "A prayer of celebration and praise to the Lord."
    },
    {
        id: "206",
        title: "Contented",
        categories: "Happiness, Contentment, Rest",
        book: "Prayers of Rest",
        page: "125",
        description: "A prayer to find rest and contentment in God."
    },
    {
        id: "207",
        title: "Delighted",
        categories: "Happiness, Delight, Salvation",
        book: "Prayers of Rest",
        page: "126",
        description: "A prayer of delight in the Lord's salvation."
    },
    {
        id: "208",
        title: "Glad",
        categories: "Happiness, Gladness, Praise",
        book: "Prayers of Rest",
        page: "127",
        description: "A prayer of gladness and praise."
    },
    {
        id: "209",
        title: "Hopeful",
        categories: "Happiness, Hope, Love",
        book: "Prayers of Rest",
        page: "128",
        description: "A prayer of hope in God's unfailing love."
    },
    {
        id: "210",
        title: "Optimistic",
        categories: "Happiness, Optimism, Confidence",
        book: "Prayers of Rest",
        page: "129",
        description: "A prayer of confidence and optimism in God."
    },
    {
        id: "211",
        title: "Peaceful",
        categories: "Happiness, Peace, Safety",
        book: "Prayers of Rest",
        page: "130",
        description: "A prayer for peace and safety in the Lord."
    },
    {
        id: "212",
        title: "Relieved",
        categories: "Happiness, Relief, Refuge",
        book: "Prayers of Rest",
        page: "131",
        description: "A prayer of relief, finding refuge in God."
    },
    {
        id: "213",
        title: "Awe",
        categories: "Happiness, Awe, Reverence",
        book: "Prayers of Rest",
        page: "132",
        description: "A prayer of awe and reverence for the Lord."
    },
    {
        id: "214",
        title: "Wonder",
        categories: "Happiness, Wonder, Joy",
        book: "Prayers of Rest",
        page: "133",
        description: "A prayer of wonder and joy in God's unfailing love."
    },
    {
        id: "215",
        title: "Betrayed",
        categories: "Anger, Betrayal, Trust",
        book: "Prayers of Rest",
        page: "134",
        description: "A prayer for when you feel betrayed."
    },
    {
        id: "216",
        title: "Outraged",
        categories: "Anger, Outrage, Justice",
        book: "Prayers of Rest",
        page: "135",
        description: "A prayer for when you are outraged by evil."
    },
    {
        id: "217",
        title: "Humiliated",
        categories: "Anger, Humiliation, Fearlessness",
        book: "Prayers of Rest",
        page: "136",
        description: "A prayer for when you feel humiliated."
    },
    {
        id: "218",
        title: "Bitter",
        categories: "Anger, Bitterness, Justice",
        book: "Prayers of Rest",
        page: "137",
        description: "A prayer against bitterness, trusting in God's justice."
    },
    {
        id: "219",
        title: "Envious",
        categories: "Anger, Envy, Contentment",
        book: "Prayers of Rest",
        page: "138",
        description: "A prayer for overcoming envy."
    },
    {
        id: "220",
        title: "Hostile",
        categories: "Anger, Hostility, Patience",
        book: "Prayers of Rest",
        page: "139",
        description: "A prayer against hostility, waiting on the Lord."
    },
    {
        id: "221",
        title: "Frustrated",
        categories: "Anger, Frustration, Justice",
        book: "Prayers of Rest",
        page: "140",
        description: "A prayer for when you are frustrated with injustice."
    },
    {
        id: "222",
        title: "Annoyed",
        categories: "Anger, Annoyance, Love",
        book: "Prayers of Rest",
        page: "141",
        description: "A prayer for when you are annoyed with others."
    },
    {
        id: "223",
        title: "Offended",
        categories: "Anger, Offense, Forgiveness",
        book: "Prayers of Rest",
        page: "142",
        description: "A prayer for when you feel offended."
    },
    {
        id: "224",
        title: "Judgmental",
        categories: "Anger, Judgment, Humility",
        book: "Prayers of Rest",
        page: "143",
        description: "A prayer against a judgmental spirit."
    },
    {
        id: "225",
        title: "Afraid",
        categories: "Fear, Trust",
        book: "Prayers of Rest",
        page: "144",
        description: "A prayer for when you are afraid."
    },
    {
        id: "226",
        title: "Confused",
        categories: "Fear, Confusion, Guidance",
        book: "Prayers of Rest",
        page: "145",
        description: "A prayer for when you are confused and need guidance."
    },
    {
        id: "227",
        title: "Anxious",
        categories: "Fear, Anxiety, Help",
        book: "Prayers of Rest",
        page: "146",
        description: "A prayer for when you feel anxious."
    },
    {
        id: "228",
        title: "Worried",
        categories: "Fear, Worry, Trust",
        book: "Prayers of Rest",
        page: "147",
        description: "A prayer for when you are worried."
    },
    {
        id: "229",
        title: "Insecure",
        categories: "Fear, Insecurity, Sorrow",
        book: "Prayers of Rest",
        page: "148",
        description: "A prayer for when you feel insecure."
    },
    {
        id: "230",
        title: "Uneasy",
        categories: "Fear, Unease, Trust",
        book: "Prayers of Rest",
        page: "149",
        description: "A prayer for when you feel uneasy."
    },
    {
        id: "231",
        title: "Worthless",
        categories: "Fear, Worthlessness, Identity",
        book: "Prayers of Rest",
        page: "150",
        description: "A prayer for when you feel worthless."
    },
    {
        id: "232",
        title: "Dismayed",
        categories: "Fear, Dismay, Refuge",
        book: "Prayers of Rest",
        page: "151",
        description: "A prayer for when your heart grows faint and dismayed."
    },
    {
        id: "233",
        title: "Inadequate",
        categories: "Fear, Inadequacy, Love",
        book: "Prayers of Rest",
        page: "152",
        description: "A prayer for when you feel inadequate."
    },
    {
        id: "234",
        title: "Nervous",
        categories: "Fear, Nervousness, Trust",
        book: "Prayers of Rest",
        page: "153",
        description: "A prayer for when you are nervous."
    },
    {
        id: "235",
        title: "Bored",
        categories: "Affliction, Boredom, Delight",
        book: "Prayers of Rest",
        page: "154",
        description: "A prayer for when you are bored."
    },
    {
        id: "236",
        title: "Disappointed",
        categories: "Affliction, Disappointment, Trust",
        book: "Prayers of Rest",
        page: "155",
        description: "A prayer for when you are disappointed."
    },
    {
        id: "237",
        title: "Weak",
        categories: "Affliction, Weakness, Mercy",
        book: "Prayers of Rest",
        page: "156",
        description: "A prayer for when you are faint and weak."
    },
    {
        id: "238",
        title: "Busy",
        categories: "Affliction, Busyness, Trust",
        book: "Prayers of Rest",
        page: "157",
        description: "A prayer for when you are too busy."
    },
    {
        id: "239",
        title: "Stressed",
        categories: "Affliction, Stress, Refuge",
        book: "Prayers of Rest",
        page: "158",
        description: "A prayer for when you are stressed."
    },
    {
        id: "240",
        title: "Overwhelmed",
        categories: "Affliction, Overwhelm, Expectation",
        book: "Prayers of Rest",
        page: "159",
        description: "A prayer for when you feel overwhelmed."
    },
    {
        id: "241",
        title: "Sleepy",
        categories: "Affliction, Sleep, Rest",
        book: "Prayers of Rest",
        page: "160",
        description: "A prayer for when you are sleepy and need rest."
    },
    {
        id: "242",
        title: "Sleepless",
        categories: "Affliction, Sleeplessness, Peace",
        book: "Prayers of Rest",
        page: "161",
        description: "A prayer for when you are sleepless."
    },
    {
        id: "243",
        title: "Shame",
        categories: "Affliction, Shame, Forgiveness",
        book: "Prayers of Rest",
        page: "162",
        description: "A prayer for when you are covered with shame."
    },
    {
        id: "244",
        title: "Tempted",
        categories: "Affliction, Temptation, Sin",
        book: "Prayers of Rest",
        page: "163",
        description: "A prayer for when you are tempted."
    },
    {
        id: "245",
        title: "Salvation",
        categories: "Children, Salvation, Parenting",
        book: "Prayers of Rest",
        page: "166",
        description: "A prayer for a child's salvation."
    },
    {
        id: "246",
        title: "Hunger and Thirst for God",
        categories: "Children, Spiritual Growth",
        book: "Prayers of Rest",
        page: "167",
        description: "A prayer for a child to hunger and thirst for God."
    },
    {
        id: "247",
        title: "Humility",
        categories: "Children, Humility, Parenting",
        book: "Prayers of Rest",
        page: "168",
        description: "A prayer for a child to have humility."
    },
    {
        id: "248",
        title: "Health to Do Good Works",
        categories: "Children, Health, Service, Parenting",
        book: "Prayers of Rest",
        page: "169",
        description: "A prayer for a child's health to do good works."
    },
    {
        id: "249",
        title: "Wisdom and Integrity",
        categories: "Children, Wisdom, Integrity, Parenting",
        book: "Prayers of Rest",
        page: "170",
        description: "A prayer for a child to have wisdom and integrity."
    },
    {
        id: "250",
        title: "Divine Protection",
        categories: "Children, Protection, Parenting",
        book: "Prayers of Rest",
        page: "171",
        description: "A prayer for a child's divine protection."
    },
    {
        id: "251",
        title: "Marriage and Sexuality",
        categories: "Children, Marriage, Sexuality, Parenting",
        book: "Prayers of Rest",
        page: "172",
        description: "A prayer for a child's future marriage and sexuality."
    },
    {
        id: "252",
        title: "Boldness and Steadfastness",
        categories: "Children, Boldness, Steadfastness, Parenting",
        book: "Prayers of Rest",
        page: "173",
        description: "A prayer for a child to have boldness and steadfastness."
    },
    {
        id: "253",
        title: "Body Image and Beauty",
        categories: "Children, Body Image, Beauty, Parenting",
        book: "Prayers of Rest",
        page: "174",
        description: "A prayer for a child's body image and understanding of true beauty."
    },
    {
        id: "254",
        title: "Sibling Friendships",
        categories: "Children, Siblings, Friendship, Family",
        book: "Prayers of Rest",
        page: "175",
        description: "A prayer for sibling friendships."
    },
    {
        id: "255",
        title: "Wholehearted Love",
        categories: "Spouse, Love",
        book: "Prayers of Rest",
        page: "176",
        description: "A prayer for your spouse to love God wholeheartedly."
    },
    {
        id: "256",
        title: "Absolute Surrender",
        categories: "Spouse, Surrender",
        book: "Prayers of Rest",
        page: "177",
        description: "A prayer for your spouse's absolute surrender to God."
    },
    {
        id: "257",
        title: "Friendship and Fun",
        categories: "Spouse, Friendship",
        book: "Prayers of Rest",
        page: "178",
        description: "A prayer for your spouse's friendships."
    },
    {
        id: "258",
        title: "Marital Pleasure and Intimacy",
        categories: "Spouse, Marriage, Intimacy",
        book: "Prayers of Rest",
        page: "179",
        description: "A prayer for marital pleasure and intimacy."
    },
    {
        id: "259",
        title: "Wisdom and Discernment",
        categories: "Spouse, Wisdom, Discernment",
        book: "Prayers of Rest",
        page: "180",
        description: "A prayer for your spouse to have wisdom and discernment."
    },
    {
        id: "260",
        title: "Favored Skill",
        categories: "Spouse, Work, Skill",
        book: "Prayers of Rest",
        page: "181",
        description: "A prayer for your spouse's work and skills."
    },
    {
        id: "261",
        title: "A Generous Heart",
        categories: "Spouse, Generosity",
        book: "Prayers of Rest",
        page: "182",
        description: "A prayer for your spouse to have a generous heart."
    },
    {
        id: "262",
        title: "Strength and Health",
        categories: "Spouse, Strength, Health",
        book: "Prayers of Rest",
        page: "183",
        description: "A prayer for your spouse's strength and health."
    },
    {
        id: "263",
        title: "Eternal Perspective",
        categories: "Spouse, Eternity",
        book: "Prayers of Rest",
        page: "184",
        description: "A prayer for your spouse to have an eternal perspective."
    },
    {
        id: "264",
        title: "Legacy of Integrity",
        categories: "Spouse, Integrity, Legacy",
        book: "Prayers of Rest",
        page: "185",
        description: "A prayer for your spouse to leave a legacy of integrity."
    },
    {
        id: "265",
        title: "Those Who Are Sick",
        categories: "Suffering, Sickness, Healing",
        book: "Prayers of Rest",
        page: "186",
        description: "A prayer for those who are sick."
    },
    {
        id: "266",
        title: "Grieving the Death of an Unsaved Friend",
        categories: "Suffering, Grief, Death",
        book: "Prayers of Rest",
        page: "187",
        description: "A prayer for grieving the death of an unsaved friend."
    },
    {
        id: "267",
        title: "Family of a Suicide Victim",
        categories: "Suffering, Suicide, Grief",
        book: "Prayers of Rest",
        page: "188",
        description: "A prayer for the family of a suicide victim."
    },
    {
        id: "268",
        title: "Parents Who Have Lost a Child",
        categories: "Suffering, Grief, Child Loss, Parenting",
        book: "Prayers of Rest",
        page: "189",
        description: "A prayer for parents who have lost a child."
    },
    {
        id: "269",
        title: "Infertility and Miscarriage",
        categories: "Suffering, Infertility, Miscarriage",
        book: "Prayers of Rest",
        page: "190",
        description: "A prayer for those experiencing infertility and miscarriage."
    },
    {
        id: "270",
        title: "Labor and Delivery",
        categories: "Suffering, Childbirth, Parenting",
        book: "Prayers of Rest",
        page: "191",
        description: "A prayer for a woman in labor and delivery."
    },
    {
        id: "271",
        title: "Young Mothers",
        categories: "Suffering, Motherhood",
        book: "Prayers of Rest",
        page: "192",
        description: "A prayer for young mothers."
    },
    {
        id: "272",
        title: "Aging Parents",
        categories: "Suffering, Aging, Parents",
        book: "Prayers of Rest",
        page: "193",
        description: "A prayer for aging parents."
    },
    {
        id: "273",
        title: "Straying Children",
        categories: "Suffering, Children, Parenting",
        book: "Prayers of Rest",
        page: "194",
        description: "A prayer for straying children."
    },
    {
        id: "274",
        title: "Estranged Family Members",
        categories: "Suffering, Family, Estrangement",
        book: "Prayers of Rest",
        page: "195",
        description: "A prayer for estranged family members."
    },
    {
        id: "275",
        title: "Divorced Friends",
        categories: "Suffering, Divorce",
        book: "Prayers of Rest",
        page: "196",
        description: "A prayer for divorced friends."
    },
    {
        id: "276",
        title: "Neighbors in Need",
        categories: "Suffering, Neighbors, Love",
        book: "Prayers of Rest",
        page: "197",
        description: "A prayer for neighbors in need."
    },
    {
        id: "277",
        title: "Lost Souls",
        categories: "Suffering, Evangelism, Salvation",
        book: "Prayers of Rest",
        page: "198",
        description: "A prayer for lost souls."
    },
    {
        id: "278",
        title: "The Oppressed",
        categories: "Suffering, Oppression, Justice",
        book: "Prayers of Rest",
        page: "199",
        description: "A prayer for the oppressed."
    },
    {
        id: "279",
        title: "The Persecuted",
        categories: "Suffering, Persecution",
        book: "Prayers of Rest",
        page: "200",
        description: "A prayer for the persecuted."
    },
    {
        id: "280",
        title: "Medical Staff",
        categories: "Service, Healthcare, Medical",
        book: "Prayers of Rest",
        page: "201",
        description: "A prayer for medical staff."
    },
    {
        id: "281",
        title: "National Leaders",
        categories: "Service, Government, Leaders",
        book: "Prayers of Rest",
        page: "202",
        description: "A prayer for national leaders."
    },
    {
        id: "282",
        title: "Local Community Leaders",
        categories: "Service, Community, Leaders",
        book: "Prayers of Rest",
        page: "203",
        description: "A prayer for local community leaders."
    },
    {
        id: "283",
        title: "Church Leaders",
        categories: "Service, Church, Leaders",
        book: "Prayers of Rest",
        page: "204",
        description: "A prayer for church leaders."
    },
    {
        id: "284",
        title: "Schoolteachers",
        categories: "Service, Education, Teachers",
        book: "Prayers of Rest",
        page: "205",
        description: "A prayer for schoolteachers."
    },
    {
        id: "285",
        title: "In Christ, I Am Dearly Loved",
        categories: "Identity in Christ, Love",
        book: "Prayers of Rest",
        page: "208",
        description: "A prayer about being dearly loved in Christ."
    },
    {
        id: "286",
        title: "In Christ, I Am Chosen",
        categories: "Identity in Christ, Chosen",
        book: "Prayers of Rest",
        page: "209",
        description: "A prayer about being chosen in Christ."
    },
    {
        id: "287",
        title: "In Christ, I Am Redeemed",
        categories: "Identity in Christ, Redemption",
        book: "Prayers of Rest",
        page: "210",
        description: "A prayer about being redeemed in Christ."
    },
    {
        id: "288",
        title: "In Christ, I Am a Child of God",
        categories: "Identity in Christ, Child of God",
        book: "Prayers of Rest",
        page: "211",
        description: "A prayer about being a child of God in Christ."
    },
    {
        id: "289",
        title: "In Christ, I Am a New Creation",
        categories: "Identity in Christ, New Creation",
        book: "Prayers of Rest",
        page: "212",
        description: "A prayer about being a new creation in Christ."
    },
    {
        id: "290",
        title: "In Christ, I Am a Citizen of Heaven",
        categories: "Identity in Christ, Heaven",
        book: "Prayers of Rest",
        page: "213",
        description: "A prayer about being a citizen of heaven in Christ."
    },
    {
        id: "291",
        title: "In Christ, I Am Richly Cared For",
        categories: "Identity in Christ, Provision",
        book: "Prayers of Rest",
        page: "214",
        description: "A prayer about being richly cared for in Christ."
    },
    {
        id: "292",
        title: "In Christ, I Am Holy and Blameless",
        categories: "Identity in Christ, Holiness",
        book: "Prayers of Rest",
        page: "215",
        description: "A prayer about being holy and blameless in Christ."
    },
    {
        id: "293",
        title: "In Christ, I Am God's Workmanship",
        categories: "Identity in Christ, Purpose",
        book: "Prayers of Rest",
        page: "216",
        description: "A prayer about being God's workmanship in Christ."
    },
    {
        id: "294",
        title: "In Christ, I Am More Than a Conqueror",
        categories: "Identity in Christ, Victory",
        book: "Prayers of Rest",
        page: "217",
        description: "A prayer about being more than a conqueror in Christ."
    },
    {
        id: "295",
        title: "The Call to Engage",
        categories: "Spiritual Warfare, Armor of God",
        book: "Prayers of Rest",
        page: "218",
        description: "A prayer to put on the full armor of God."
    },
    {
        id: "296",
        title: "The Real Enemy",
        categories: "Spiritual Warfare, Armor of God",
        book: "Prayers of Rest",
        page: "219",
        description: "A prayer recognizing the true spiritual enemy."
    },
    {
        id: "297",
        title: "The Armor of God",
        categories: "Spiritual Warfare, Armor of God",
        book: "Prayers of Rest",
        page: "220",
        description: "A prayer to put on the full armor of God to stand firm."
    },
    {
        id: "298",
        title: "The Belt of Truth",
        categories: "Spiritual Warfare, Armor of God, Truth",
        book: "Prayers of Rest",
        page: "221",
        description: "A prayer to buckle on the belt of truth."
    },
    {
        id: "299",
        title: "The Breastplate of Righteousness",
        categories: "Spiritual Warfare, Armor of God, Righteousness",
        book: "Prayers of Rest",
        page: "222",
        description: "A prayer to put on the breastplate of righteousness."
    },
    {
        id: "300",
        title: "The Shoes of Peace",
        categories: "Spiritual Warfare, Armor of God, Peace",
        book: "Prayers of Rest",
        page: "223",
        description: "A prayer to fit your feet with the readiness of the gospel of peace."
    },
    {
        id: "301",
        title: "The Shield of Faith",
        categories: "Spiritual Warfare, Armor of God, Faith",
        book: "Prayers of Rest",
        page: "224",
        description: "A prayer to take up the shield of faith."
    },
    {
        id: "302",
        title: "The Helmet of Salvation",
        categories: "Spiritual Warfare, Armor of God, Salvation",
        book: "Prayers of Rest",
        page: "225",
        description: "A prayer to take the helmet of salvation."
    },
    {
        id: "303",
        title: "The Sword of the Spirit",
        categories: "Spiritual Warfare, Armor of God, Word of God",
        book: "Prayers of Rest",
        page: "226",
        description: "A prayer to take up the sword of the Spirit."
    },
    {
        id: "304",
        title: "The Weapon of Prayer",
        categories: "Spiritual Warfare, Prayer",
        book: "Prayers of Rest",
        page: "227",
        description: "A prayer to always keep on praying for all the Lord's people."
    },
    {
        id: "305",
        title: "Overcoming Addiction",
        categories: "Overcoming, Addiction, Deliverance",
        book: "Prayers of Rest",
        page: "228",
        description: "A prayer for overcoming addiction."
    },
    {
        id: "306",
        title: "Overcoming Spiritual Apathy",
        categories: "Overcoming, Apathy, Renewal",
        book: "Prayers of Rest",
        page: "229",
        description: "A prayer for overcoming spiritual apathy."
    },
    {
        id: "307",
        title: "Overcoming Temptation",
        categories: "Overcoming, Temptation",
        book: "Prayers of Rest",
        page: "230",
        description: "A prayer for overcoming temptation."
    },
    {
        id: "308",
        title: "Overcoming Generational Sin",
        categories: "Overcoming, Sin, Freedom",
        book: "Prayers of Rest",
        page: "231",
        description: "A prayer for overcoming generational sin."
    },
    {
        id: "309",
        title: "Overcoming Pride",
        categories: "Overcoming, Pride, Humility",
        book: "Prayers of Rest",
        page: "232",
        description: "A prayer for overcoming pride."
    },
    {
        id: "310",
        title: "Overcoming Despair",
        categories: "Overcoming, Despair, Hope",
        book: "Prayers of Rest",
        page: "233",
        description: "A prayer for overcoming despair."
    },
    {
        id: "311",
        title: "Overcoming Fear",
        categories: "Overcoming, Fear, Faith",
        book: "Prayers of Rest",
        page: "234",
        description: "A prayer for overcoming fear."
    },
    {
        id: "312",
        title: "Overcoming Doubt",
        categories: "Overcoming, Doubt, Belief",
        book: "Prayers of Rest",
        page: "235",
        description: "A prayer for overcoming doubt and unbelief."
    },
    {
        id: "313",
        title: "Overcoming Shame",
        categories: "Overcoming, Shame, Forgiveness",
        book: "Prayers of Rest",
        page: "236",
        description: "A prayer for overcoming shame."
    },
    {
        id: "314",
        title: "Overcoming Insecurity",
        categories: "Overcoming, Insecurity, Love",
        book: "Prayers of Rest",
        page: "237",
        description: "A prayer for overcoming insecurity."
    },
    {
        id: "315",
        title: "Craving What Truly Satisfies",
        categories: "Food Freedom, Satisfaction",
        book: "Prayers of Rest",
        page: "238",
        description: "A prayer for craving what truly satisfies."
    },
    {
        id: "316",
        title: "Hungry for God",
        categories: "Food Freedom, Spiritual Hunger",
        book: "Prayers of Rest",
        page: "239",
        description: "A prayer to be hungry for God."
    },
    {
        id: "317",
        title: "Feasting on the Bread of Life",
        categories: "Food Freedom, Jesus, Sustenance",
        book: "Prayers of Rest",
        page: "240",
        description: "A prayer about feasting on Jesus, the Bread of Life."
    },
    {
        id: "318",
        title: "Tasting the Goodness of God",
        categories: "Food Freedom, God's Goodness",
        book: "Prayers of Rest",
        page: "241",
        description: "A prayer to taste and see that the Lord is good."
    },
    {
        id: "319",
        title: "Divine Dietitian",
        categories: "Food Freedom, God's Power",
        book: "Prayers of Rest",
        page: "242",
        description: "A prayer acknowledging God's divine power for a godly life."
    },
    {
        id: "320",
        title: "A Spirit of Self-Discipline",
        categories: "Food Freedom, Self-Discipline",
        book: "Prayers of Rest",
        page: "243",
        description: "A prayer for a spirit of self-discipline."
    },
    {
        id: "321",
        title: "Eating for God's Glory",
        categories: "Food Freedom, God's Glory",
        book: "Prayers of Rest",
        page: "244",
        description: "A prayer to do all things, including eating, for God's glory."
    },
    {
        id: "322",
        title: "Living Free Indeed",
        categories: "Food Freedom, Freedom in Christ",
        book: "Prayers of Rest",
        page: "245",
        description: "A prayer about being set free by the Son."
    },
    {
        id: "323",
        title: "No Longer Mastered by Cravings",
        categories: "Food Freedom, Cravings, Mastery",
        book: "Prayers of Rest",
        page: "246",
        description: "A prayer to not be mastered by anything."
    },
    {
        id: "324",
        title: "Immediate Obedience",
        categories: "Food Freedom, Obedience, Grace",
        book: "Prayers of Rest",
        page: "247",
        description: "A prayer for immediate obedience, taught by grace."
    },
    {
        id: "325",
        title: "Fully Satisfied",
        categories: "Food Freedom, Satisfaction, Praise",
        book: "Prayers of Rest",
        page: "248",
        description: "A prayer to be fully satisfied in God."
    },
    {
        id: "326",
        title: "Life to the Full",
        categories: "Food Freedom, Abundant Life",
        book: "Prayers of Rest",
        page: "249",
        description: "A prayer for the full life that Jesus offers."
    },
    {
        id: "327",
        title: "On a Birthday",
        categories: "Anytime, Birthday, Delight",
        book: "Prayers of Rest",
        page: "252",
        description: "A prayer for someone on their birthday."
    },
    {
        id: "328",
        title: "When Leaving on a Trip",
        categories: "Anytime, Travel, Protection",
        book: "Prayers of Rest",
        page: "253",
        description: "A prayer for protection when leaving on a trip."
    },
    {
        id: "329",
        title: "Goodbyes",
        categories: "Anytime, Goodbyes, Peace",
        book: "Prayers of Rest",
        page: "254",
        description: "A prayer for times of saying goodbye."
    },
    {
        id: "330",
        title: "Running Late",
        categories: "Anytime, Time, Wisdom",
        book: "Prayers of Rest",
        page: "255",
        description: "A prayer for when you are running late."
    },
    {
        id: "331",
        title: "Cleaning the House",
        categories: "Anytime, Chores, Cleansing, Domestic, Home",
        book: "Prayers of Rest",
        page: "256",
        description: "A prayer for while cleaning the house."
    },
    {
        id: "332",
        title: "Before Apologizing",
        categories: "Anytime, Apology, Peace",
        book: "Prayers of Rest",
        page: "257",
        description: "A prayer to say before apologizing."
    },
    {
        id: "333",
        title: "Welcoming Guests",
        categories: "Anytime, Hospitality, Community",
        book: "Prayers of Rest",
        page: "258",
        description: "A prayer for welcoming guests."
    },
    {
        id: "334",
        title: "Waiting in Line",
        categories: "Anytime, Waiting, Patience",
        book: "Prayers of Rest",
        page: "259",
        description: "A prayer for when you are waiting in line."
    },
    {
        id: "335",
        title: "Balancing the Budget",
        categories: "Anytime, Finances, Contentment",
        book: "Prayers of Rest",
        page: "260",
        description: "A prayer for balancing the budget."
    },
    {
        id: "336",
        title: "Weekend Rest",
        categories: "Anytime, Rest, Satisfaction",
        book: "Prayers of Rest",
        page: "261",
        description: "A prayer for weekend rest."
    },
    {
        id: "337",
        title: "New Year's Day",
        categories: "Calendar Time, Seasons, New Year, Celabrations, Holidays",
        book: "Prayers of Rest",
        page: "262",
        description: "A prayer for New Year's Day."
    },
    {
        id: "338",
        title: "Ash Wednesday",
        categories: "Calendar Time, Seasons, Ash Wednesday, Humility, Celabrations, Holidays",
        book: "Prayers of Rest",
        page: "263",
        description: "A prayer for Ash Wednesday."
    },
    {
        id: "339",
        title: "Maundy Thursday",
        categories: "Calendar Time, Seasons, Maundy Thursday, Love, Service, Celabrations, Holidays",
        book: "Prayers of Rest",
        page: "264",
        description: "A prayer for Maundy Thursday."
    },
    {
        id: "340",
        title: "Good Friday",
        categories: "Calendar Time, Seasons, Good Friday, Sacrifice, Celabrations, Holidays",
        book: "Prayers of Rest",
        page: "265",
        description: "A prayer for Good Friday."
    },
    {
        id: "341",
        title: "Resurrection Sunday",
        categories: "Calendar Time, Seasons, Easter, Resurrection, Celabrations, Holidays",
        book: "Prayers of Rest",
        page: "266",
        description: "A prayer for Resurrection Sunday."
    },
    {
        id: "342",
        title: "Jesus' Ascension",
        categories: "Calendar Time, Seasons, Ascension, Celabrations, Holidays",
        book: "Prayers of Rest",
        page: "267",
        description: "A prayer for Jesus' Ascension."
    },
    {
        id: "343",
        title: "Pentecost",
        categories: "Calendar Time, Seasons, Pentecost, Holy Spirit, Celabrations, Holidays",
        book: "Prayers of Rest",
        page: "268",
        description: "A prayer for Pentecost."
    },
    {
        id: "344",
        title: "Thanksgiving",
        categories: "Calendar Time, Seasons, Thanksgiving, Celabrations, Holidays",
        book: "Prayers of Rest",
        page: "269",
        description: "A prayer for Thanksgiving."
    },
    {
        id: "345",
        title: "The Beginning of Advent",
        categories: "Calendar Time, Seasons, Advent, Celabrations, Holidays",
        book: "Prayers of Rest",
        page: "270",
        description: "A prayer for the beginning of Advent."
    },
    {
        id: "346",
        title: "Christmas Morning",
        categories: "Calendar Time, Seasons, Christmas, Celabrations, Holidays",
        book: "Prayers of Rest",
        page: "271",
        description: "A prayer for Christmas morning."
    },
    {
        id: "347",
        title: "First Thing in the Morning",
        categories: "Hours of the Day, Morning",
        book: "Prayers of Rest",
        page: "272",
        description: "A prayer for first thing in the morning."
    },
    {
        id: "348",
        title: "Starting Your Work Day",
        categories: "Hours of the Day, Work, Employment, Morning",
        book: "Prayers of Rest",
        page: "273",
        description: "A prayer for starting your work day."
    },
    {
        id: "349",
        title: "Midday Grace",
        categories: "Hours of the Day, Midday",
        book: "Prayers of Rest",
        page: "274",
        description: "A prayer for midday grace."
    },
    {
        id: "350",
        title: "Meal Time",
        categories: "Hours of the Day, Meals, Thanksgiving",
        book: "Prayers of Rest",
        page: "275",
        description: "A prayer for meal time."
    },
    {
        id: "351",
        title: "Bedtime Prayer",
        categories: "Hours of the Day, Bedtime, Sleep, Night, Evening",
        book: "Prayers of Rest",
        page: "276",
        description: "A prayer for bedtime."
    },
    {
        id: "352",
        title: "A Prayer for the Middle of the Night",
        categories: "Hours of the Day, Night, Rest, Sleep",
        book: "Prayers of Rest",
        page: "277",
        description: "A prayer for the middle of the night."
    },
    {
        id: "353",
        title: "Springtime and New Life",
        categories: "Seasons, Spring, New Life",
        book: "Prayers of Rest",
        page: "278",
        description: "A prayer for springtime and new life."
    },
    {
        id: "354",
        title: "Summertime and Sweet Labor",
        categories: "Seasons, Summer, Work",
        book: "Prayers of Rest",
        page: "279",
        description: "A prayer for summertime and sweet labor."
    },
    {
        id: "355",
        title: "Fall Time and Harvest",
        categories: "Seasons, Fall, Harvest",
        book: "Prayers of Rest",
        page: "280",
        description: "A prayer for fall time and harvest."
    },
    {
        id: "356",
        title: "Wintertime and Rest",
        categories: "Seasons, Winter, Rest",
        book: "Prayers of Rest",
        page: "281",
        description: "A prayer for wintertime and rest."
    },
    {
        id: "357",
        title: "Front Porch",
        categories: "House Prayers, Domestic, Hospitality, Witness",
        book: "Prayers of Rest",
        page: "284",
        description: "A prayer for the front porch, to be a light to the world."
    },
    {
        id: "358",
        title: "Living Room",
        categories: "House Prayers, Domestic, Family, Relationships",
        book: "Prayers of Rest",
        page: "285",
        description: "A prayer for the living room, for family unity and joy."
    },
    {
        id: "359",
        title: "Kitchen",
        categories: "House Prayers, Domestic, Service, Provision",
        book: "Prayers of Rest",
        page: "286",
        description: "A prayer for the kitchen, to serve with love."
    },
    {
        id: "360",
        title: "Dining Room",
        categories: "House Prayers, Domestic, Fellowship, Hospitality",
        book: "Prayers of Rest",
        page: "287",
        description: "A prayer for the dining room, for fellowship and connection."
    },
    {
        id: "361",
        title: "Bedroom",
        categories: "House Prayers, Domestic, Rest, Marriage",
        book: "Prayers of Rest",
        page: "288",
        description: "A prayer for the bedroom, for rest and marital intimacy."
    },
    {
        id: "362",
        title: "Kids' Rooms",
        categories: "House Prayers, Domestic, Children, Baby, Parenting",
        book: "Prayers of Rest",
        page: "289",
        description: "A prayer for kids' rooms, for them to walk in truth."
    },
    {
        id: "363",
        title: "Guest Room",
        categories: "House Prayers, Domestic, Hospitality",
        book: "Prayers of Rest",
        page: "290",
        description: "A prayer for the guest room, to show hospitality."
    },
    {
        id: "364",
        title: "Bathroom",
        categories: "House Prayers, Domestic, Cleansing, Purity",
        book: "Prayers of Rest",
        page: "291",
        description: "A prayer for the bathroom, for physical and spiritual cleansing."
    },
    {
        id: "365",
        title: "Laundry Room",
        categories: "House Prayers, Domestic, Service, Cleansing, Laundry",
        book: "Prayers of Rest",
        page: "292",
        description: "A prayer for the laundry room, to be clothed with Christ."
    },
    {
        id: "366",
        title: "Backyard",
        categories: "House Prayers, Domestic, Creation, Rest",
        book: "Prayers of Rest",
        page: "293",
        description: "A prayer for the backyard, to be like a well-watered garden."
    },
    {
        id: "367",
        title: "Listen to Him!",
        categories: "Treasuring God's Word, Listening",
        book: "Prayers of Rest",
        page: "296",
        description: "A prayer to listen to Jesus."
    },
    {
        id: "368",
        title: "Precious Treasure",
        categories: "Treasuring God's Word",
        book: "Prayers of Rest",
        page: "297",
        description: "A prayer to treasure God's words more than daily food."
    },
    {
        id: "369",
        title: "Pondering His Promises",
        categories: "Treasuring God's Word, Meditation",
        book: "Prayers of Rest",
        page: "298",
        description: "A prayer about treasuring and meditating on God's works."
    },
    {
        id: "370",
        title: "Led by the Light",
        categories: "Treasuring God's Word, Guidance, Light",
        book: "Prayers of Rest",
        page: "299",
        description: "A prayer to be led by God's light and truth."
    },
    {
        id: "371",
        title: "All My Days",
        categories: "Treasuring God's Word, Scripture",
        book: "Prayers of Rest",
        page: "300",
        description: "A prayer about knowing the Scriptures from infancy."
    },
    {
        id: "372",
        title: "Blessed to Read and Keep",
        categories: "Treasuring God's Word, Blessing",
        book: "Prayers of Rest",
        page: "301",
        description: "A prayer on the blessing of reading and keeping God's Word."
    },
    {
        id: "373",
        title: "Eagerness to Examine",
        categories: "Treasuring God's Word, Scripture, Eagerness",
        book: "Prayers of Rest",
        page: "302",
        description: "A prayer to eagerly examine the Scriptures daily."
    },
    {
        id: "374",
        title: "Speak . . . I'm Listening",
        categories: "Treasuring God's Word, Listening",
        book: "Prayers of Rest",
        page: "303",
        description: "A prayer to listen when God speaks."
    },
    {
        id: "375",
        title: "Perfect Renewal",
        categories: "Treasuring God's Word, Renewal",
        book: "Prayers of Rest",
        page: "304",
        description: "A prayer on the renewing power of God's perfect instruction."
    },
    {
        id: "376",
        title: "All Day Long",
        categories: "Treasuring God's Word, Meditation, Love",
        book: "Prayers of Rest",
        page: "305",
        description: "A prayer to love and meditate on God's instruction all day."
    },
    {
        id: "377",
        title: "Desiring the Word",
        categories: "Treasuring God's Word, Spiritual Growth",
        book: "Prayers of Rest",
        page: "306",
        description: "A prayer to desire the pure milk of the word."
    },
    {
        id: "378",
        title: "Stored in My Heart",
        categories: "Treasuring God's Word, Scripture Memory",
        book: "Prayers of Rest",
        page: "307",
        description: "A prayer about having God's instruction in your heart."
    },
    {
        id: "379",
        title: "Genesis",
        categories: "66 Verses, Creation, Goodness",
        book: "Prayers of Rest",
        page: "310",
        description: "A prayer reflecting on God's very good creation in Genesis."
    },
    {
        id: "380",
        title: "Exodus",
        categories: "66 Verses, Deliverance, Slavery",
        book: "Prayers of Rest",
        page: "311",
        description: "A prayer reflecting on God's deliverance from slavery in Exodus."
    },
    {
        id: "381",
        title: "Leviticus",
        categories: "66 Verses, Holiness",
        book: "Prayers of Rest",
        page: "312",
        description: "A prayer on being set apart as holy, from Leviticus."
    },
    {
        id: "382",
        title: "Numbers",
        categories: "66 Verses, God's Character, Forgiveness",
        book: "Prayers of Rest",
        page: "313",
        description: "A prayer on God's faithful love and forgiveness from Numbers."
    },
    {
        id: "383",
        title: "Deuteronomy",
        categories: "66 Verses, Faithfulness, Covenant",
        book: "Prayers of Rest",
        page: "314",
        description: "A prayer on God's faithfulness to His covenant from Deuteronomy."
    },
    {
        id: "384",
        title: "Joshua",
        categories: "66 Verses, Courage, God's Presence",
        book: "Prayers of Rest",
        page: "315",
        description: "A prayer for strength and courage from Joshua."
    },
    {
        id: "385",
        title: "Judges",
        categories: "66 Verses, Kingship, Obedience",
        book: "Prayers of Rest",
        page: "316",
        description: "A prayer reflecting on the chaos when everyone does what is right in their own eyes, from Judges."
    },
    {
        id: "386",
        title: "Ruth",
        categories: "66 Verses, Redemption",
        book: "Prayers of Rest",
        page: "317",
        description: "A prayer on God providing a family redeemer, from Ruth."
    },
    {
        id: "387",
        title: "1 Samuel",
        categories: "66 Verses, Rejection, Kingship",
        book: "Prayers of Rest",
        page: "318",
        description: "A prayer on the people's rejection of God as their king, from 1 Samuel."
    },
    {
        id: "388",
        title: "2 Samuel",
        categories: "66 Verses, Kingdom, Promise",
        book: "Prayers of Rest",
        page: "319",
        description: "A prayer on God's promise of an enduring kingdom, from 2 Samuel."
    },
    {
        id: "389",
        title: "1 Kings",
        categories: "66 Verses, Idolatry, Worship",
        book: "Prayers of Rest",
        page: "320",
        description: "A prayer declaring 'The Lord, he is God!', from 1 Kings."
    },
    {
        id: "390",
        title: "2 Kings",
        categories: "66 Verses, Faithfulness, David",
        book: "Prayers of Rest",
        page: "321",
        description: "A prayer on God's faithfulness for the sake of His servant David, from 2 Kings."
    },
    {
        id: "391",
        title: "1 Chronicles",
        categories: "66 Verses, Sovereignty, Praise",
        book: "Prayers of Rest",
        page: "322",
        description: "A prayer of praise for God's greatness and sovereignty, from 1 Chronicles."
    },
    {
        id: "392",
        title: "2 Chronicles",
        categories: "66 Verses, Repentance, Humility",
        book: "Prayers of Rest",
        page: "323",
        description: "A prayer on humbling ourselves and seeking God's face, from 2 Chronicles."
    },
    {
        id: "393",
        title: "Ezra",
        categories: "66 Verses, Goodness, Faithfulness",
        book: "Prayers of Rest",
        page: "324",
        description: "A prayer of praise for God's goodness and enduring love, from Ezra."
    },
    {
        id: "394",
        title: "Nehemiah",
        categories: "66 Verses, Prayer, Success",
        book: "Prayers of Rest",
        page: "325",
        description: "A prayer for success and compassion, from Nehemiah."
    },
    {
        id: "395",
        title: "Esther",
        categories: "66 Verses, Purpose, Providence",
        book: "Prayers of Rest",
        page: "326",
        description: "A prayer on being in a royal position for such a time as this, from Esther."
    },
    {
        id: "396",
        title: "Job",
        categories: "66 Verses, Redemption, Hope",
        book: "Prayers of Rest",
        page: "327",
        description: "A prayer declaring 'I know that my Redeemer lives', from Job."
    },
    {
        id: "397",
        title: "Psalms",
        categories: "66 Verses, Compassion, Salvation",
        book: "Prayers of Rest",
        page: "328",
        description: "A prayer on God's gracious and compassionate nature, from Psalms."
    },
    {
        id: "398",
        title: "Proverbs",
        categories: "66 Verses, Wisdom, Fear of the Lord",
        book: "Prayers of Rest",
        page: "329",
        description: "A prayer on the fear of the Lord as the beginning of knowledge, from Proverbs."
    },
    {
        id: "399",
        title: "Ecclesiastes",
        categories: "66 Verses, Obedience, Fear of the Lord",
        book: "Prayers of Rest",
        page: "330",
        description: "A prayer on the conclusion of the matter: fear God and keep his commands, from Ecclesiastes."
    },
    {
        id: "400",
        title: "Song of Songs",
        categories: "66 Verses, Love",
        book: "Prayers of Rest",
        page: "331",
        description: "A prayer on the unquenchable nature of love, from Song of Songs."
    },
    {
        id: "401",
        title: "Isaiah",
        categories: "66 Verses, Redemption, Identity",
        book: "Prayers of Rest",
        page: "332",
        description: "A prayer on being redeemed and called by name, from Isaiah."
    },
    {
        id: "402",
        title: "Jeremiah",
        categories: "66 Verses, New Covenant",
        book: "Prayers of Rest",
        page: "333",
        description: "A prayer on the new covenant written on our hearts, from Jeremiah."
    },
    {
        id: "403",
        title: "Lamentations",
        categories: "66 Verses, Faithfulness, Mercy",
        book: "Prayers of Rest",
        page: "334",
        description: "A prayer on God's great faithfulness and new mercies, from Lamentations."
    },
    {
        id: "404",
        title: "Ezekiel",
        categories: "66 Verses, New Heart, Renewal",
        book: "Prayers of Rest",
        page: "335",
        description: "A prayer for a new heart of flesh, from Ezekiel."
    },
    {
        id: "405",
        title: "Daniel",
        categories: "66 Verses, Dominion, Kingdom",
        book: "Prayers of Rest",
        page: "336",
        description: "A prayer on God's everlasting dominion, from Daniel."
    },
    {
        id: "406",
        title: "Hosea",
        categories: "66 Verses, Love, Knowledge of God",
        book: "Prayers of Rest",
        page: "337",
        description: "A prayer on God's desire for faithful love and knowledge of Him, from Hosea."
    },
    {
        id: "407",
        title: "Joel",
        categories: "66 Verses, Repentance, Compassion",
        book: "Prayers of Rest",
        page: "338",
        description: "A prayer to return to the Lord with a torn heart, from Joel."
    },
    {
        id: "408",
        title: "Amos",
        categories: "66 Verses, Justice, Righteousness",
        book: "Prayers of Rest",
        page: "339",
        description: "A prayer for justice to flow like water, from Amos."
    },
    {
        id: "409",
        title: "Obadiah",
        categories: "66 Verses, Kingdom",
        book: "Prayers of Rest",
        page: "340",
        description: "A prayer declaring that the kingdom will be the Lord's, from Obadiah."
    },
    {
        id: "410",
        title: "Jonah",
        categories: "66 Verses, Grace, Compassion",
        book: "Prayers of Rest",
        page: "341",
        description: "A prayer on God's gracious and compassionate nature, from Jonah."
    },
    {
        id: "411",
        title: "Micah",
        categories: "66 Verses, Justice, Faithfulness, Humility",
        book: "Prayers of Rest",
        page: "342",
        description: "A prayer on what the Lord requires: to act justly, love faithfulness, and walk humbly, from Micah."
    },
    {
        id: "412",
        title: "Nahum",
        categories: "66 Verses, Goodness, Refuge",
        book: "Prayers of Rest",
        page: "343",
        description: "A prayer on the Lord being a good stronghold in distress, from Nahum."
    },
    {
        id: "413",
        title: "Habakkuk",
        categories: "66 Verses, Joy, Strength",
        book: "Prayers of Rest",
        page: "344",
        description: "A prayer to celebrate in the Lord, the God of our salvation, from Habakkuk."
    },
    {
        id: "414",
        title: "Zephaniah",
        categories: "66 Verses, God's Presence, Joy",
        book: "Prayers of Rest",
        page: "345",
        description: "A prayer on God rejoicing over us with gladness, from Zephaniah."
    },
    {
        id: "415",
        title: "Haggai",
        categories: "66 Verses, Glory, Peace",
        book: "Prayers of Rest",
        page: "346",
        description: "A prayer on the future glory and peace God will provide, from Haggai."
    },
    {
        id: "416",
        title: "Zechariah",
        categories: "66 Verses, Refinement, Covenant",
        book: "Prayers of Rest",
        page: "347",
        description: "A prayer on being refined and claimed as God's people, from Zechariah."
    },
    {
        id: "417",
        title: "Malachi",
        categories: "66 Verses, Healing, Righteousness",
        book: "Prayers of Rest",
        page: "348",
        description: "A prayer on the sun of righteousness rising with healing, from Malachi."
    },
    {
        id: "418",
        title: "Matthew",
        categories: "66 Verses, Repentance, Kingdom",
        book: "Prayers of Rest",
        page: "349",
        description: "A prayer to repent for the kingdom of heaven is near, from Matthew."
    },
    {
        id: "419",
        title: "Mark",
        categories: "66 Verses, Service, Ransom",
        book: "Prayers of Rest",
        page: "350",
        description: "A prayer on Jesus coming to serve and give his life as a ransom, from Mark."
    },
    {
        id: "420",
        title: "Luke",
        categories: "66 Verses, Salvation",
        book: "Prayers of Rest",
        page: "351",
        description: "A prayer on Jesus coming to seek and save the lost, from Luke."
    },
    {
        id: "421",
        title: "John",
        categories: "66 Verses, Jesus, Word of God",
        book: "Prayers of Rest",
        page: "352",
        description: "A prayer on Jesus being the Word who was with God and was God, from John."
    },
    {
        id: "422",
        title: "Acts",
        categories: "66 Verses, Holy Spirit, Witnessing",
        book: "Prayers of Rest",
        page: "353",
        description: "A prayer on receiving power from the Holy Spirit to be witnesses, from Acts."
    },
    {
        id: "423",
        title: "Romans",
        categories: "66 Verses, Sin, Justification, Grace",
        book: "Prayers of Rest",
        page: "354",
        description: "A prayer on being justified freely by grace, from Romans."
    },
    {
        id: "424",
        title: "1 Corinthians",
        categories: "66 Verses, Faithfulness, Fellowship",
        book: "Prayers of Rest",
        page: "355",
        description: "A prayer on God's faithfulness in calling us to fellowship, from 1 Corinthians."
    },
    {
        id: "425",
        title: "2 Corinthians",
        categories: "66 Verses, Grace, Power, Weakness",
        book: "Prayers of Rest",
        page: "356",
        description: "A prayer on God's grace being sufficient and His power perfected in weakness, from 2 Corinthians."
    },
    {
        id: "426",
        title: "Galatians",
        categories: "66 Verses, Grace, Righteousness",
        book: "Prayers of Rest",
        page: "357",
        description: "A prayer on not setting aside the grace of God, from Galatians."
    },
    {
        id: "427",
        title: "Ephesians",
        categories: "66 Verses, Salvation, Grace, Faith",
        book: "Prayers of Rest",
        page: "358",
        description: "A prayer on being saved by grace through faith, from Ephesians."
    },
    {
        id: "428",
        title: "Philippians",
        categories: "66 Verses, Purpose, Christ",
        book: "Prayers of Rest",
        page: "359",
        description: "A prayer declaring 'to live is Christ and to die is gain', from Philippians."
    },
    {
        id: "429",
        title: "Colossians",
        categories: "66 Verses, Jesus, Sovereignty",
        book: "Prayers of Rest",
        page: "360",
        description: "A prayer on all things holding together in Christ, from Colossians."
    },
    {
        id: "430",
        title: "1 Thessalonians",
        categories: "66 Verses, Joy, Prayer, Thanksgiving",
        book: "Prayers of Rest",
        page: "361",
        description: "A prayer to rejoice always, pray constantly, and give thanks, from 1 Thessalonians."
    },
    {
        id: "431",
        title: "2 Thessalonians",
        categories: "66 Verses, Love, Endurance",
        book: "Prayers of Rest",
        page: "362",
        description: "A prayer for hearts to be directed to God's love and Christ's endurance, from 2 Thessalonians."
    },
    {
        id: "432",
        title: "1 Timothy",
        categories: "66 Verses, Salvation, Sinners",
        book: "Prayers of Rest",
        page: "363",
        description: "A prayer on Christ Jesus coming to save sinners, from 1 Timothy."
    },
    {
        id: "433",
        title: "2 Timothy",
        categories: "66 Verses, Scripture, Equipping",
        book: "Prayers of Rest",
        page: "364",
        description: "A prayer on all Scripture being inspired by God and profitable, from 2 Timothy."
    },
    {
        id: "434",
        title: "Titus",
        categories: "66 Verses, Salvation, Mercy, Renewal",
        book: "Prayers of Rest",
        page: "365",
        description: "A prayer on being saved according to His mercy, from Titus."
    },
    {
        id: "435",
        title: "Philemon",
        categories: "66 Verses, Love, Appeal",
        book: "Prayers of Rest",
        page: "366",
        description: "A prayer on appealing on the basis of love, from Philemon."
    },
    {
        id: "436",
        title: "Hebrews",
        categories: "66 Verses, Endurance, Faith, Jesus",
        book: "Prayers of Rest",
        page: "367",
        description: "A prayer to run with endurance, keeping our eyes on Jesus, from Hebrews."
    },
    {
        id: "437",
        title: "James",
        categories: "66 Verses, Joy, Trials, Endurance",
        book: "Prayers of Rest",
        page: "368",
        description: "A prayer to consider trials a great joy, from James."
    },
    {
        id: "438",
        title: "1 Peter",
        categories: "66 Verses, Hope, Resurrection, Inheritance",
        book: "Prayers of Rest",
        page: "369",
        description: "A prayer on our new birth into a living hope, from 1 Peter."
    },
    {
        id: "439",
        title: "2 Peter",
        categories: "66 Verses, God's Power, Godliness",
        book: "Prayers of Rest",
        page: "370",
        description: "A prayer on God's divine power giving us everything for life and godliness, from 2 Peter."
    },
    {
        id: "440",
        title: "1 John",
        categories: "66 Verses, Forgiveness, Sin",
        book: "Prayers of Rest",
        page: "371",
        description: "A prayer on our sins being forgiven on account of His name, from 1 John."
    },
    {
        id: "441",
        title: "2 John",
        categories: "66 Verses, Love, Obedience",
        book: "Prayers of Rest",
        page: "372",
        description: "A prayer on walking according to His commands, which is love, from 2 John."
    },
    {
        id: "442",
        title: "3 John",
        categories: "66 Verses, Joy, Truth",
        book: "Prayers of Rest",
        page: "373",
        description: "A prayer on the joy of hearing that our children are walking in truth, from 3 John."
    },
    {
        id: "443",
        title: "Jude",
        categories: "66 Verses, Protection, Glory",
        book: "Prayers of Rest",
        page: "374",
        description: "A prayer to Him who is able to protect you from stumbling, from Jude."
    },
    {
        id: "444",
        title: "Revelation",
        categories: "66 Verses, Alpha and Omega, Fulfillment",
        book: "Prayers of Rest",
        page: "375",
        description: "A prayer to the Alpha and the Omega, the beginning and the end, from Revelation."
    },
    {
        id: "445",
        title: "God Promises to Keep His Promises",
        categories: "Promises of God, Faithfulness",
        book: "Prayers of Rest",
        page: "378",
        description: "A prayer resting in the promise that all God's promises are 'Yes' in Christ."
    },
    {
        id: "446",
        title: "God Promises to Listen to Our Prayers",
        categories: "Promises of God, Prayer",
        book: "Prayers of Rest",
        page: "379",
        description: "A prayer resting in the promise that God's ears are attentive to our prayers."
    },
    {
        id: "447",
        title: "God Promises to Answer Our Prayers",
        categories: "Promises of God, Prayer, Faith",
        book: "Prayers of Rest",
        page: "380",
        description: "A prayer resting in the promise that whatever we ask for in prayer, we will receive."
    },
    {
        id: "448",
        title: "God Promises Eternal Salvation to All Who Believe in Him",
        categories: "Promises of God, Salvation, Eternal Life",
        book: "Prayers of Rest",
        page: "381",
        description: "A prayer resting in the promise of eternal life for all who believe."
    },
    {
        id: "449",
        title: "God Promises Forgiveness to All Who Confess and Repent",
        categories: "Promises of God, Forgiveness, Repentance",
        book: "Prayers of Rest",
        page: "382",
        description: "A prayer resting in the promise of forgiveness for those who confess their sins."
    },
    {
        id: "450",
        title: "God Promises to Always Love Us",
        categories: "Promises of God, Love",
        book: "Prayers of Rest",
        page: "383",
        description: "A prayer resting in the promise that nothing can separate us from God's love."
    },
    {
        id: "451",
        title: "God Promises to Give Us His Own Spirit",
        categories: "Promises of God, Holy Spirit",
        book: "Prayers of Rest",
        page: "384",
        description: "A prayer resting in the promise that God has given us His Spirit."
    },
    {
        id: "452",
        title: "God Promises to Protect Us from Evil",
        categories: "Promises of God, Protection",
        book: "Prayers of Rest",
        page: "385",
        description: "A prayer resting in the promise that the Lord will protect us from the evil one."
    },
    {
        id: "453",
        title: "God Promises to Always Be With Us",
        categories: "Promises of God, God's Presence",
        book: "Prayers of Rest",
        page: "386",
        description: "A prayer resting in the promise that Jesus is with us always."
    },
    {
        id: "454",
        title: "God Promises to Fulfill His Plans for Us",
        categories: "Promises of God, God's Plan, Purpose",
        book: "Prayers of Rest",
        page: "387",
        description: "A prayer resting in the promise that God works all things for the good of those who love Him."
    },
    {
        id: "455",
        title: "God Promises to Always Be Found by Us",
        categories: "Promises of God, Seeking God",
        book: "Prayers of Rest",
        page: "388",
        description: "A prayer resting in the promise that we can find God when we seek Him."
    },
    {
        id: "456",
        title: "God Promises to Bear Much Fruit in Us",
        categories: "Promises of God, Fruitfulness",
        book: "Prayers of Rest",
        page: "389",
        description: "A prayer resting in the promise that we will bear fruit that will last."
    },
    {
        id: "457",
        title: "God Promises His Spiritual Gifts Are Irrevocable",
        categories: "Promises of God, Spiritual Gifts",
        book: "Prayers of Rest",
        page: "390",
        description: "A prayer resting in the promise that God's gifts and call are irrevocable."
    },
    {
        id: "458",
        title: "God Promises to Give Us His Kingdom",
        categories: "Promises of God, Kingdom",
        book: "Prayers of Rest",
        page: "391",
        description: "A prayer resting in the promise that the Father is pleased to give us the kingdom."
    },
    {
        id: "459",
        title: "God Promises Complete Joy in His Presence",
        categories: "Promises of God, Joy, God's Presence",
        book: "Prayers of Rest",
        page: "392",
        description: "A prayer resting in the promise that our joy may be complete."
    },
    {
        id: "460",
        title: "God Promises Perfect Peace (to Those Who Trust Him)",
        categories: "Promises of God, Peace, Trust",
        book: "Prayers of Rest",
        page: "393",
        description: "A prayer resting in the promise of peace in Christ."
    },
    {
        id: "461",
        title: "God Promises Rest",
        categories: "Promises of God, Rest",
        book: "Prayers of Rest",
        page: "394",
        description: "A prayer resting in the promise of entering His rest."
    },
    {
        id: "462",
        title: "God Promises Spiritual Power",
        categories: "Promises of God, Power",
        book: "Prayers of Rest",
        page: "395",
        description: "A prayer resting in the promise of God's incomparably great power for us."
    },
    {
        id: "463",
        title: "God Promises Complete Sanctification",
        categories: "Promises of God, Sanctification",
        book: "Prayers of Rest",
        page: "396",
        description: "A prayer resting in the promise that He who began a good work will complete it."
    },
    {
        id: "464",
        title: "God Promises Wisdom to Those Who Ask",
        categories: "Promises of God, Wisdom",
        book: "Prayers of Rest",
        page: "397",
        description: "A prayer resting in the promise that God gives wisdom generously."
    },
    {
        id: "465",
        title: "God Promises to Teach Us Through His Word",
        categories: "Promises of God, Teaching, Holy Spirit",
        book: "Prayers of Rest",
        page: "398",
        description: "A prayer resting in the promise that the Holy Spirit will teach us all things."
    },
    {
        id: "466",
        title: "God Promises to Guide Us Through His Spirit",
        categories: "Promises of God, Guidance, Holy Spirit",
        book: "Prayers of Rest",
        page: "399",
        description: "A prayer resting in the promise that the Good Shepherd leads His sheep."
    },
    {
        id: "467",
        title: "God Promises to Provide for Us",
        categories: "Promises of God, Provision",
        book: "Prayers of Rest",
        page: "400",
        description: "A prayer resting in the promise that God will meet all our needs."
    },
    {
        id: "468",
        title: "God Promises to Reward Faith",
        categories: "Promises of God, Faith, Reward",
        book: "Prayers of Rest",
        page: "401",
        description: "A prayer resting in the promise that God rewards those who earnestly seek Him."
    },
    {
        id: "469",
        title: "God Promises Escape from Temptation",
        categories: "Promises of God, Temptation",
        book: "Prayers of Rest",
        page: "402",
        description: "A prayer resting in the promise to resist the devil and he will flee."
    },
    {
        id: "470",
        title: "God Promises Victory Over Suffering",
        categories: "Promises of God, Victory, Suffering",
        book: "Prayers of Rest",
        page: "403",
        description: "A prayer resting in the promise of the crown of life for those who persevere."
    },
    {
        id: "471",
        title: "God Promises Eternal Life",
        categories: "Promises of God, Eternal Life",
        book: "Prayers of Rest",
        page: "404",
        description: "A prayer resting in the promise that no one can snatch us out of His hand."
    },
    {
        id: "472",
        title: "God Promises Jesus Will Return Soon",
        categories: "Promises of God, Second Coming",
        book: "Prayers of Rest",
        page: "405",
        description: "A prayer resting in the promise that the Lord's coming is near."
    },
    {
        id: "473",
        title: "God Promises to Restore Heaven and Earth",
        categories: "Promises of God, New Creation",
        book: "Prayers of Rest",
        page: "406",
        description: "A prayer looking forward to a new heaven and a new earth."
    },
    {
        id: "474",
        title: "God Promises to Again Dwell in Us",
        categories: "Promises of God, God's Presence",
        book: "Prayers of Rest",
        page: "407",
        description: "A prayer resting in the promise that God will live with His people."
    },
    {
        id: "475",
        title: "His Wife",
        categories: "Marriage, Praying as a Wife",
        book: "The Power of a Praying Wife",
        page: "6",
        description: "A prayer to pray in being the wife God called you to be."
    },
    {
        id: "476",
        title: "His Wife",
        categories: "Marriage, Praying as a Wife, Confession",
        book: "The Power of a Praying Wife",
        page: "8",
        description: "A prayer to pray for confessing where you have done wrong as a wife."
    },
    {
        id: "477",
        title: "His Wife",
        categories: "Marriage, Praying as a Wife, Expectations",
        book: "The Power of a Praying Wife",
        page: "10",
        description: "A prayer to pray, laying down any expectations for your husband."
    },
    {
        id: "478",
        title: "His Wife",
        categories: "Marriage, Praying as a Wife, Unity, Prayers",
        book: "The Power of a Praying Wife",
        page: "12",
        description: "A prayer to pray for your marraige to make you a team, united as one."
    },
    {
        id: "479",
        title: "His Wife",
        categories: "Marriage, Praying as a Wife, Commitment, Love",
        book: "The Power of a Praying Wife",
        page: "14",
        description: "A prayer to pray to help you see your husband as God sees him."
    },
    {
        id: "480",
        title: "His Work",
        categories: "Marriage, Praying as a Wife, Work",
        book: "The Power of a Praying Wife",
        page: "16",
        description: "A prayer to pray as a blessing for your husband's work."
    },
    {
        id: "481",
        title: "His Work",
        categories: "Marriage, Praying as a Wife, Work",
        book: "The Power of a Praying Wife",
        page: "18",
        description: "A prayer to pray that the Lord would be over your husband's work."
    },
    {
        id: "482",
        title: "His Finances",
        categories: "Marriage, Praying as a Wife, Finances",
        book: "The Power of a Praying Wife",
        page: "20",
        description: "A prayer to pray to commit your finances to the Lord."
    },
    {
        id: "483",
        title: "His Work",
        categories: "Marriage, Praying as a Wife, Finances, Wisdom",
        book: "The Power of a Praying Wife",
        page: "22",
        description: "A prayer to pray for your husband to have wisdom over the finances."
    },
    {
        id: "484",
        title: "His Sexuality",
        categories: "Marriage, Praying as a Wife, Sexuality",
        book: "The Power of a Praying Wife",
        page: "24",
        description: "A prayer to pray for your husband's sexual fulfillment."
    },
    {
        id: "486",
        title: "His Sexuality",
        categories: "Marriage, Praying as a Wife, Sexuality",
        book: "The Power of a Praying Wife",
        page: "26",
        description: "A prayer to pray that you and your husband would only desire each other."
    },
    {
        id: "488",
        title: "His Affection",
        categories: "Marriage, Praying as a Wife, Affection, Love",
        book: "The Power of a Praying Wife",
        page: "28",
        description: "A prayer to pray for you and your husband's affection to be only for each other."
    },
    {
        id: "489",
        title: "His Temptations",
        categories: "Marriage, Praying as a Wife, Tempatation",
        book: "The Power of a Praying Wife",
        page: "30",
        description: "A prayer to pray over your husband's temptations."
    },
    {
        id: "490",
        title: "His Mind",
        categories: "Marriage, Praying as a Wife, Mental Health, Lies",
        book: "The Power of a Praying Wife",
        page: "32",
        description: "A prayer to pray over your husband's thoughts and against lies he may believe."
    },
    {
        id: "491",
        title: "His Mind",
        categories: "Marriage, Praying as a Wife, Mental Health, Anxiety",
        book: "The Power of a Praying Wife",
        page: "34",
        description: "A prayer to pray over your husband's thoughts and against any anxiety he may struggle with."
    },
    {
        id: "492",
        title: "His Fears",
        categories: "Marriage, Praying as a Wife, Fear, Anxiety",
        book: "The Power of a Praying Wife",
        page: "36",
        description: "A prayer to pray against your husband's fears."
    },
    {
        id: "493",
        title: "His Fears",
        categories: "Marriage, Praying as a Wife, Fear, Anxiety",
        book: "The Power of a Praying Wife",
        page: "38",
        description: "A prayer to pray against your husband's fears and that he would rely on God."
    },
    {
        id: "494",
        title: "His Fears",
        categories: "Marriage, Praying as a Wife, Fear, Anxiety",
        book: "The Power of a Praying Wife",
        page: "40",
        description: "A prayer to pray against your husband's fears and that he would have rest in Christ."
    },
    {
        id: "495",
        title: "His Purpose",
        categories: "Marriage, Praying as a Wife, Purpose",
        book: "The Power of a Praying Wife",
        page: "42",
        description: "A prayer to pray over your husband's purpose on earth and that he would have encouragement."
    },
    {
        id: "496",
        title: "His Choices",
        categories: "Marriage, Praying as a Wife, Choices",
        book: "The Power of a Praying Wife",
        page: "44",
        description: "A prayer to pray that your husband would make Godly choices."
    },
    {
        id: "497",
        title: "His Health",
        categories: "Marriage, Praying as a Wife, Health",
        book: "The Power of a Praying Wife",
        page: "46",
        description: "A prayer to pray of healing over your husband's body."
    },
    {
        id: "498",
        title: "His Health",
        categories: "Marriage, Praying as a Wife, Health",
        book: "The Power of a Praying Wife",
        page: "48",
        description: "A prayer to pray over a specific physical ailment your husband is struggling with."
    },
    {
        id: "499",
        title: "His Protection",
        categories: "Marriage, Praying as a Wife, Protection",
        book: "The Power of a Praying Wife",
        page: "50",
        description: "A prayer to pray of protection over your husband's safety."
    },
    {
        id: "500",
        title: "His Trials",
        categories: "Marriage, Praying as a Wife, Struggle",
        book: "The Power of a Praying Wife",
        page: "52",
        description: "A prayer to pray over the trials your husband is struggling with."
    },
    {
        id: "501",
        title: "His Trials",
        categories: "Marriage, Praying as a Wife, Struggle",
        book: "The Power of a Praying Wife",
        page: "54",
        description: "A prayer to pray for strength for your husband during his trials."
    },
    {
        id: "502",
        title: "His Trials",
        categories: "Marriage, Praying as a Wife, Struggle",
        book: "The Power of a Praying Wife",
        page: "56",
        description: "A prayer to pray that your husband would find rest and strength in Christ during his trials."
    },
    {
        id: "503",
        title: "His Integrity",
        categories: "Marriage, Praying as a Wife, Integrity, Choices",
        book: "The Power of a Praying Wife",
        page: "58",
        description: "A prayer to pray for your husband to be true to his word."
    },
    {
        id: "504",
        title: "His Integrity",
        categories: "Marriage, Praying as a Wife, Integrity, Confession",
        book: "The Power of a Praying Wife",
        page: "60",
        description: "A prayer to pray that your husband would be honest and confess his mistakes."
    },
    {
        id: "505",
        title: "His Reputation",
        categories: "Marriage, Praying as a Wife, Reputation",
        book: "The Power of a Praying Wife",
        page: "62",
        description: "A prayer to pray over your husband's reputation, that it would be protected."
    },
    {
        id: "506",
        title: "His Reputation",
        categories: "Marriage, Praying as a Wife, Reputation",
        book: "The Power of a Praying Wife",
        page: "64",
        description: "A prayer to pray that your husband's reputation would reflect the fruit of the Spirit."
    },
    {
        id: "507",
        title: "His Reputation",
        categories: "Marriage, Praying as a Wife, Reputation",
        book: "The Power of a Praying Wife",
        page: "66",
        description: "A prayer to pray to keep gossip away from being about my husband."
    },
    {
        id: "508",
        title: "His Priorities",
        categories: "Marriage, Praying as a Wife, Choices, Priorities",
        book: "The Power of a Praying Wife",
        page: "68",
        description: "A prayer to pray to help your husband prioritize well."
    },
    {
        id: "509",
        title: "His Relationships",
        categories: "Marriage, Praying as a Wife, Relationships, Friendship, Community",
        book: "The Power of a Praying Wife",
        page: "70",
        description: "A prayer to pray over your husband's relationships and friendships."
    },
    {
        id: "510",
        title: "His Relationships",
        categories: "Marriage, Praying as a Wife, Relationships, Friendship, Community",
        book: "The Power of a Praying Wife",
        page: "72",
        description: "A prayer to pray that your husband would be a good friend."
    },
    {
        id: "511",
        title: "His Fatherhood",
        categories: "Marriage, Praying as a Wife, Parenting",
        book: "The Power of a Praying Wife",
        page: "74",
        description: "A prayer to pray over your husband as a father and that he would lean on his heavenly Father."
    },
    {
        id: "512",
        title: "His Fatherhood",
        categories: "Marriage, Praying as a Wife, Parenting",
        book: "The Power of a Praying Wife",
        page: "76",
        description: "A prayer to pray over your husband in disciplining his children."
    },
    {
        id: "513",
        title: "His Fatherhood",
        categories: "Marriage, Praying as a Wife, Parenting",
        book: "The Power of a Praying Wife",
        page: "78",
        description: "A prayer to pray that your husband would delight in fatherhood."
    },
    {
        id: "514",
        title: "His past",
        categories: "Marriage, Praying as a Wife, Regrets",
        book: "The Power of a Praying Wife",
        page: "80",
        description: "A prayer to pray that your husband would be able to let go of the past."
    },
    {
        id: "515",
        title: "His Past",
        categories: "Marriage, Praying as a Wife, Forgiveness",
        book: "The Power of a Praying Wife",
        page: "82",
        description: "A prayer to pray that your husband would be able to forgive those who have hurt him in the past."
    },
    {
        id: "516",
        title: "His Attitude",
        categories: "Marriage, Praying as a Wife, Attitude, Peace",
        book: "The Power of a Praying Wife",
        page: "84",
        description: "A prayer to pray that your husband would have an attitude of peace and light."
    },
    {
        id: "517",
        title: "His Attitude",
        categories: "Marriage, Praying as a Wife, Attitude, Thanksgiving",
        book: "The Power of a Praying Wife",
        page: "86",
        description: "A prayer to pray that your husband would have an attitude of thanksgiving."
    },
    {
        id: "518",
        title: "His Marriage",
        categories: "Marriage, Praying as a Wife",
        book: "The Power of a Praying Wife",
        page: "88",
        description: "A prayer to pray of protection over your marriage."
    },
    {
        id: "519",
        title: "His Marriage",
        categories: "Marriage, Praying as a Wife",
        book: "The Power of a Praying Wife",
        page: "90",
        description: "A prayer to pray for unity within your marraige."
    },
    {
        id: "520",
        title: "His Emotions",
        categories: "Marriage, Praying as a Wife, Mental Health",
        book: "The Power of a Praying Wife",
        page: "92",
        description: "A prayer to pray for your husband to give his emotions to the Lord."
    },
    {
        id: "521",
        title: "His Emotions",
        categories: "Marriage, Praying as a Wife, Mental Health",
        book: "The Power of a Praying Wife",
        page: "94",
        description: "A prayer to pray that your husband would be freed from negative emotions."
    },
    {
        id: "522",
        title: "His Walk",
        categories: "Marriage, Praying as a Wife, Faith, Walk",
        book: "The Power of a Praying Wife",
        page: "96",
        description: "A prayer to pray that your husband would have a deeper walk with Christ."
    },
    {
        id: "523",
        title: "His Walk",
        categories: "Marriage, Praying as a Wife, Faith, Walk",
        book: "The Power of a Praying Wife",
        page: "98",
        description: "A prayer to pray that your husband would walk in the Spirit."
    },
    {
        id: "524",
        title: "His Talk",
        categories: "Marriage, Praying as a Wife, Temptations",
        book: "The Power of a Praying Wife",
        page: "100",
        description: "A prayer to pray for your husband to speak edifying words."
    },
    {
        id: "525",
        title: "His Talk",
        categories: "Marriage, Praying as a Wife, Temptations",
        book: "The Power of a Praying Wife",
        page: "102",
        description: "A prayer to pray that you and your husband would speak words of life to each other."
    },
    {
        id: "526",
        title: "His Repentance",
        categories: "Marriage, Praying as a Wife, Confession, Repentance, Conviction",
        book: "The Power of a Praying Wife",
        page: "104",
        description: "A prayer to pray for your husband would be convicted by the Holy Spirit to repent."
    },
    {
        id: "527",
        title: "His Deliverance",
        categories: "Marriage, Praying as a Wife, Struggle",
        book: "The Power of a Praying Wife",
        page: "106",
        description: "A prayer to pray that your husband would be delivered from evil."
    },
    {
        id: "528",
        title: "His Deliverance",
        categories: "Marriage, Praying as a Wife, Struggle",
        book: "The Power of a Praying Wife",
        page: "108",
        description: "A prayer to pray that your husband would be delivered from his enemies."
    },
    {
        id: "529",
        title: "His Obedience",
        categories: "Marriage, Praying as a Wife, Obedience",
        book: "The Power of a Praying Wife",
        page: "110",
        description: "A prayer to pray that your husband would live in obedience."
    },
    {
        id: "530",
        title: "His Obedience",
        categories: "Marriage, Praying as a Wife, Obedience",
        book: "The Power of a Praying Wife",
        page: "112",
        description: "A prayer to pray that your husband would walk in a way that is sensitive to God's instructions."
    },
    {
        id: "531",
        title: "His Self-Image",
        categories: "Marriage, Praying as a Wife, Body Image, Self-Image, Insecurity",
        book: "The Power of a Praying Wife",
        page: "114",
        description: "A prayer to pray that your husband would find his identity in Christ."
    },
    {
        id: "532",
        title: "His Self-Image",
        categories: "Marriage, Praying as a Wife, Body Image, Self-Image, Insecurity",
        book: "The Power of a Praying Wife",
        page: "116",
        description: "A prayer to pray that your husband would have peace and security of knowing who he is in Christ."
    },
    {
        id: "533",
        title: "His Faith",
        categories: "Marriage, Praying as a Wife, Faith",
        book: "The Power of a Praying Wife",
        page: "118",
        description: "A prayer to pray that your husband would have added faith on this day."
    },
    {
        id: "534",
        title: "His Faith",
        categories: "Marriage, Praying as a Wife, Faith",
        book: "The Power of a Praying Wife",
        page: "120",
        description: "A prayer to pray that your husband would have complete certainty in Christ."
    },
    {
        id: "535",
        title: "His Hearing",
        categories: "Marriage, Praying as a Wife, Listening",
        book: "The Power of a Praying Wife",
        page: "122",
        description: "A prayer to pray that your husband would open his ears to the words of God."
    },
    {
        id: "536",
        title: "His Future",
        categories: "Marriage, Praying as a Wife, Future",
        book: "The Power of a Praying Wife",
        page: "124",
        description: "A prayer to pray that God would give your husband a vision for his future."
    },
    {
        id: "537",
        title: "His Future",
        categories: "Marriage, Praying as a Wife, Future",
        book: "The Power of a Praying Wife",
        page: "126",
        description: "A prayer to pray that your husband would invest into his future."
    },
    {
        id: "538",
        title: "Lord, Draw Me into a Closer Walk with You",
        categories: "Praying as a Woman, Walk",
        book: "The Power of a Praying Woman",
        page: "6",
        description: "A prayer to pray for a woman to grow closer in her walk with Christ."
    },
    {
        id: "539",
        title: "Lord, Draw Me into a Closer Walk with You",
        categories: "Praying as a Woman, Walk",
        book: "The Power of a Praying Woman",
        page: "8",
        description: "A prayer to pray for a woman to set aside time each day to spend with Christ."
    },
    {
        id: "540",
        title: "Lord, Cleanse Me and Make My Heart Right Before You",
        categories: "Praying as a Woman, Confession, Repentance, Forgiveness",
        book: "The Power of a Praying Woman",
        page: "10",
        description: "A prayer to pray for a woman to pray for forgiveness of her sins."
    },
    {
        id: "541",
        title: "Lord, Cleanse Me and Make My Heart Right Before You",
        categories: "Praying as a Woman, Confession, Repentance, Forgiveness",
        book: "The Power of a Praying Woman",
        page: "12",
        description: "A prayer to pray for a woman to pray that God would search her heart."
    },
    {
        id: "542",
        title: "Lord, Help Me to Be a Forgiving Person",
        categories: "Praying as a Woman, Forgiveness",
        book: "The Power of a Praying Woman",
        page: "14",
        description: "A prayer to pray for a woman to pray to handle unforgiveness."
    },
    {
        id: "543",
        title: "Lord, Help Me to Be a Forgiving Person",
        categories: "Praying as a Woman, Forgiveness",
        book: "The Power of a Praying Woman",
        page: "16",
        description: "A prayer to pray for a woman to pray for God to soften the hearts that she may need forgiveness from."
    },
    {
        id: "544",
        title: "Lord, Teach Me to Walk in Obedience to Your Ways",
        categories: "Praying as a Woman, Obedience",
        book: "The Power of a Praying Woman",
        page: "18",
        description: "A prayer to pray for a woman to pray to find help in her daily walk of obedience."
    },
    {
        id: "545",
        title: "Lord, Teach Me to Walk in Obedience to Your Ways",
        categories: "Praying as a Woman, Obedience",
        book: "The Power of a Praying Woman",
        page: "20",
        description: "A prayer to pray for a woman to pray to listen to God's voice of conviction and areas where she is not being obedient."
    },
    {
        id: "546",
        title: "Lord, Strengthen Me to Stand Against the Enemy",
        categories: "Praying as a Woman, Spiritual Warfare",
        book: "The Power of a Praying Woman",
        page: "22",
        description: "A prayer to pray for a woman to pray to use the authority given by God to fight the enemy's strongholds."
    },
    {
        id: "547",
        title: "Lord, Strengthen Me to Stand Against the Enemy",
        categories: "Praying as a Woman, Spiritual Warfare",
        book: "The Power of a Praying Woman",
        page: "24",
        description: "A prayer to pray for a woman to pray for protection from evil plans of the enemy."
    },
    {
        id: "548",
        title: "Lord, Show Me How to Take Control of My Mind",
        categories: "Praying as a Woman, Mental Health",
        book: "The Power of a Praying Woman",
        page: "26",
        description: "A prayer to pray for a woman to pray to fight against lies she may believe."
    },
    {
        id: "549",
        title: "Lord, Show Me How to Take Control of My Mind",
        categories: "Praying as a Woman, Mental Health",
        book: "The Power of a Praying Woman",
        page: "28",
        description: "A prayer to pray for a woman to pray to think thoughts that are glorifying to God."
    },
    {
        id: "550",
        title: "Lord, Rule Me in Every Area of My Life",
        categories: "Praying as a Woman, Obedience, Walk",
        book: "The Power of a Praying Woman",
        page: "30",
        description: "A prayer to pray for a woman to pray to live every part of her life for Christ."
    },
    {
        id: "551",
        title: "Lord, Rule Me in Every Area of My Life",
        categories: "Praying as a Woman, Obedience, Walk",
        book: "The Power of a Praying Woman",
        page: "32",
        description: "A prayer to pray for a woman to pray to give all passions to Christ."
    },
    {
        id: "552",
        title: "Lord, Take Me Deeper in Your Word",
        categories: "Praying as a Woman, Obedience, Word of God, Disciplines",
        book: "The Power of a Praying Woman",
        page: "34",
        description: "A prayer to pray for a woman to pray to learn what God is teaching her through His Word."
    },
    {
        id: "553",
        title: "Lord, Take Me Deeper in Your Word",
        categories: "Praying as a Woman, Obedience, Word of God, Disciplines",
        book: "The Power of a Praying Woman",
        page: "36",
        description: "A prayer to pray for a woman to pray that God's Word would lead her life."
    },
    {
        id: "554",
        title: "Lord, Instruct Me as I Put My Life in Right Order",
        categories: "Praying as a Woman, Obedience, Priorities",
        book: "The Power of a Praying Woman",
        page: "38",
        description: "A prayer to pray for a woman to pray for God's guidance in where her priorities lie."
    },
    {
        id: "555",
        title: "Lord, Instruct Me as I Put My Life in Right Order",
        categories: "Praying as a Woman, Obedience, Priorities",
        book: "The Power of a Praying Woman",
        page: "40",
        description: "A prayer to pray for a woman to pray that she would submit to those she is called to submit to."
    },
    {
        id: "556",
        title: "Lord, Prepare Me to Be a True Worshiper",
        categories: "Praying as a Woman, Worship",
        book: "The Power of a Praying Woman",
        page: "42",
        description: "A prayer to pray for a woman to pray as worship to God."
    },
    {
        id: "557",
        title: "Lord, Prepare Me to Be a True Worshiper",
        categories: "Praying as a Woman, Worship",
        book: "The Power of a Praying Woman",
        page: "44",
        description: "A prayer to pray for a woman to pray for God's teachings on how to Worship properly."
    },
    {
        id: "558",
        title: "Lord, Bless Me in the Work I Do",
        categories: "Praying as a Woman, Work, Listening",
        book: "The Power of a Praying Woman",
        page: "46",
        description: "A prayer to pray for a woman to pray for God to show her the work she should be doing."
    },
    {
        id: "559",
        title: "Lord, Bless Me in the Work I Do",
        categories: "Praying as a Woman, Work",
        book: "The Power of a Praying Woman",
        page: "48",
        description: "A prayer to pray for a woman to pray for God to show her opportunities she should take and to always love her work."
    },
    {
        id: "560",
        title: "Lord, Plant Me so I Will Bear the Fruit of Your Spirit",
        categories: "Praying as a Woman, Fruit of the Spirit, Obedience",
        book: "The Power of a Praying Woman",
        page: "50",
        description: "A prayer to pray for a woman to pray for God that people would sense God when around her."
    },
    {
        id: "561",
        title: "Lord, Plant Me so I Will Bear the Fruit of Your Spirit",
        categories: "Praying as a Woman, Fruit of the Spirit, Obedience",
        book: "The Power of a Praying Woman",
        page: "52",
        description: "A prayer to pray for a woman to pray for God to prune her where she needs pruning."
    },
    {
        id: "562",
        title: "Lord, Preserve Me in Purity and Holiness",
        categories: "Praying as a Woman, Purity, Holiness",
        book: "The Power of a Praying Woman",
        page: "54",
        description: "A prayer to pray for a woman to pray that she would be clean and blameless before the Lord."
    },
    {
        id: "563",
        title: "Lord, Preserve Me in Purity and Holiness",
        categories: "Praying as a Woman, Purity, Holiness",
        book: "The Power of a Praying Woman",
        page: "56",
        description: "A prayer to pray for a woman to pray for God to examine her heart and show her where she is impure."
    },
    {
        id: "564",
        title: "Lord, Move Me into the Purpose for Which I was Created",
        categories: "Praying as a Woman, Purpose",
        book: "The Power of a Praying Woman",
        page: "58",
        description: "A prayer to pray for a woman to pray that she would walk in the purpose God has called her to."
    },
    {
        id: "565",
        title: "Lord, Move Me into the Purpose for Which I was Created",
        categories: "Praying as a Woman, Purpose",
        book: "The Power of a Praying Woman",
        page: "60",
        description: "A prayer to pray for a woman to pray that God would give her a vision for her life."
    },
    {
        id: "566",
        title: "Lord, Guide Me in All My Relationships",
        categories: "Praying as a Woman, Relationships, Friendship",
        book: "The Power of a Praying Woman",
        page: "62",
        description: "A prayer to pray for a woman to pray that God would bless her relationships."
    },
    {
        id: "567",
        title: "Lord, Guide Me in All My Relationships",
        categories: "Praying as a Woman, Relationships, Friendship, Conviction",
        book: "The Power of a Praying Woman",
        page: "64",
        description: "A prayer to pray for a woman to pray that she would be a source of light in her relationships."
    },
    {
        id: "568",
        title: "Lord, Keep Me in the Center of Your Will",
        categories: "Praying as a Woman, Obedience, God's Will",
        book: "The Power of a Praying Woman",
        page: "66",
        description: "A prayer to pray for a woman to pray that she would do not her will but God's will."
    },
    {
        id: "569",
        title: "Lord, Keep Me in the Center of Your Will",
        categories: "Praying as a Woman, Obedience, God's Will, Listening",
        book: "The Power of a Praying Woman",
        page: "68",
        description: "A prayer to pray for a woman to pray that she would listen to the Voice of God and do His will."
    },
    {
        id: "570",
        title: "Lord, Protect Me and All I Care About",
        categories: "Praying as a Woman, Protection, Spiritual Warfare",
        book: "The Power of a Praying Woman",
        page: "70",
        description: "A prayer to pray for a woman to pray that God would protect her and be her Sheild."
    },
    {
        id: "571",
        title: "Lord, Protect Me and All I Care About",
        categories: "Praying as a Woman, Protection, Spiritual Warfare",
        book: "The Power of a Praying Woman",
        page: "72",
        description: "A prayer to pray for a woman to pray that she would lean on God in times of need."
    },
    
    
]

export default prayerData;