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
        categories: "Domestic, Baby, Childcare",
        book: "Every Moment Holy: Volume I",
        page: "53",
        description: "A prayer to pray before changing your baby's diapar."
    },
    {
        id: "23",
        title: "A Liturgy for Changing Diapars II",
        categories: "Domestic, Baby, Childcare",
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
]

export default prayerData;