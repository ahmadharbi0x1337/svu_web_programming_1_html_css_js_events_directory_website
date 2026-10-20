/*
     1) Data
     2) Eelements   select every element the page script need
     3) Functions   define all the functions
     4) Execution   start the code of the current page
 */

// 1) Data
const events = [
  {
    id: 1,
    title: "مهرجان المسرح الجامعي",
    category: "culture",
    place: "القاعة الكبرى",
    date: "2026-10-14",
    time: "18:00",
    dateText: "الأربعاء 14 أكتوبر 2026",
    image: "event-1.svg",
    summary:
      "عروض مسرحية يقدمها طلاب الجامعة الافتراضية على مدى ثلاث ليالٍ، تتضمن مسرحيات قصيرة وورش تمثيل وجلسات نقاش مع مخرجين ضيوف.",
    description:
      "ينظّم النادي المسرحي في الجامعة هذا المهرجان السنوي لاكتشاف المواهب الطلابية. يتضمن البرنامج عروضًا كوميدية وتراجيدية، وورشة في الإلقاء وأخرى في تصميم الإضاءة، إضافة إلى مسابقة أفضل ممثل وأفضل نص.",
  },
  {
    id: 2,
    title: "بطولة كرة القدم بين الكليات",
    category: "sports",
    place: "الملعب الرياضي",
    date: "2026-10-16",
    time: "16:00",
    dateText: "الجمعة 16 أكتوبر 2026",
    image: "event-2.svg",
    summary:
      "تنافس بين فرق الكليات المختلفة على كأس الجامعة مع مباريات مباشرة وجوائز قيّمة.",
    description:
      "تشارك ثمانية فرق تمثل كليات الجامعة في بطولة بنظام خروج المغلوب. تُبثّ المباريات مباشرة عبر المنصة، وتُوزَّع الجوائز على الفرق الثلاثة الأولى وأفضل لاعب وأفضل حارس.",
  },
  {
    id: 3,
    title: "أمسية موسيقى الشرق",
    category: "music",
    place: "المسرح المفتوح",
    date: "2026-10-11",
    time: "20:00",
    dateText: "الأحد 11 أكتوبر 2026",
    image: "event-3.svg",
    summary:
      "أمسية موسيقية تضم العود والقانون والإيقاع بمشاركة فرقة الجامعة وضيوف من الفنانين.",
    description:
      "تحتفي الأمسية بالتراث الموسيقي العربي من خلال مقطوعات كلاسيكية ومعاصرة تؤديها فرقة الجامعة، وتتخللها فقرة تعريفية بالآلات الشرقية للجمهور.",
  },
  {
    id: 4,
    title: "يوم العائلة الجامعي",
    category: "family",
    place: "حديقة الجامعة",
    date: "2026-10-18",
    time: "10:00",
    dateText: "الأحد 18 أكتوبر 2026",
    image: "event-4.svg",
    summary:
      "يوم ترفيهي لعائلات الطلاب: ألعاب أطفال، مسابقات، ومعارض طعام وحِرَف يدوية.",
    description:
      "يوم مفتوح لجميع أفراد العائلة يضم ركنًا للأطفال، ومسابقات جماعية، ومعرضًا للمشاريع الطلابية، وأكشاك طعام من مطبخ الطلاب الدولي.",
  },
  {
    id: 5,
    title: "معرض الفنون التشكيلية",
    category: "culture",
    place: "قاعة المعارض",
    date: "2026-10-20",
    time: "09:00",
    dateText: "الثلاثاء 20 أكتوبر 2026",
    image: "event-5.svg",
    summary:
      "معرض للوحات والمنحوتات من إبداع طلاب كلية الفنون مع جولات إرشادية.",
    description:
      "يعرض أكثر من 60 عملًا فنيًا بين الرسم الزيتي والتصوير والنحت الرقمي. تُقام جولات إرشادية كل ساعة مع الفنانين الطلاب، ويحق للزوار التصويت لأفضل عمل.",
  },
  {
    id: 6,
    title: "ماراثون الجامعة الأخضر",
    category: "sports",
    place: "كورنيش المدينة",
    date: "2026-10-24",
    time: "07:00",
    dateText: "السبت 24 أكتوبر 2026",
    image: "event-6.svg",
    summary:
      "سباق جري لمسافة 5 كم بهدف دعم حملة التشجير، مفتوح لجميع المستويات.",
    description:
      "ينطلق السباق من بوابة الجامعة الرئيسية ويمتد 5 كم. يحصل كل مشارك على قميص تذكاري، وتُغرس شجرة باسم كل مشارك ضمن حملة الجامعة الخضراء.",
  },
  {
    id: 7,
    title: "ملتقى التقنية والابتكار",
    category: "academic",
    place: "مبنى كلية المعلوماتية",
    date: "2026-10-27",
    time: "11:00",
    dateText: "الثلاثاء 27 أكتوبر 2026",
    image: "event-7.svg",
    summary:
      "محاضرات وورش عن الذكاء الاصطناعي وتطوير الويب مع عرض مشاريع التخرج.",
    description:
      "يجمع الملتقى باحثين ومطورين لعرض أحدث الاتجاهات التقنية، وفيه ورش عملية في تطوير الويب والأمن السيبراني، ومعرض لمشاريع التخرج المتميزة.",
  },
  {
    id: 8,
    title: "ليلة الشعر والأدب",
    category: "culture",
    place: "المكتبة المركزية",
    date: "2026-10-30",
    time: "19:00",
    dateText: "الجمعة 30 أكتوبر 2026",
    image: "event-8.svg",
    summary: "أمسية شعرية وأدبية يشارك فيها شعراء شباب وأساتذة الأدب العربي.",
    description:
      "أمسية تجمع الشعر الفصيح والعامي وقراءات من النثر، مع فقرة مفتوحة للطلاب لإلقاء نصوصهم أمام الجمهور، وتوقيع إصدارات أدبية جديدة.",
  },
];

// Arabic name of every category key (the keys are also used as CSS class names)
const categoryNames = {
  culture: "ثقافة",
  sports: "رياضة",
  music: "موسيقى",
  family: "عائلي",
  academic: "أكاديمي",
};

// 2) Elements
const currentPage = document.body.id;

// --- events.html: filter toolbar and event cards ---
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const placeFilter = document.getElementById("placeFilter");
const dateFilter = document.getElementById("dateFilter");
const resetButton = document.getElementById("resetButton");
const resultCount = document.getElementById("resultCount");
const noResultsAlert = document.getElementById("noResults");

// one card per event, in the same order as the events array
const eventCards = [];
for (let cardIndex = 0; cardIndex < events.length; cardIndex++) {
  eventCards.push(document.getElementById("eventCard" + events[cardIndex].id));
}

// --- event.html: event details, buttons and related cards ---
const eventTitle = document.getElementById("eventTitle");
const eventCategory = document.getElementById("eventCategory");
const eventDate = document.getElementById("eventDate");
const eventPlace = document.getElementById("eventPlace");
const eventDescription = document.getElementById("eventDescription");
const eventImage = document.getElementById("eventImage");
const calendarButton = document.getElementById("calendarButton");
const shareButton = document.getElementById("shareButton");

// the page contains 4 related cards: relatedCard1 ... relatedCard4
const RELATED_CARDS_IN_PAGE = 4;
const relatedCards = [];
for (
  let relatedIndex = 1;
  relatedIndex <= RELATED_CARDS_IN_PAGE;
  relatedIndex++
) {
  relatedCards.push(document.getElementById("relatedCard" + relatedIndex));
}

// --- contact.html: form, fields and messages ---
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successAlert = document.getElementById("successAlert");
const errorAlert = document.getElementById("errorAlert");

// 3) Functions Definitions
// ----- values used by the functions below -----
const MINIMUM_NAME_LENGTH = 3;
const MINIMUM_MESSAGE_LENGTH = 10;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // text@text.text
let selectedEvent; // the event shown in event.html

// -----  helpers -----

// Returns the text after "=" in the page address.
// Example: event.html?id=3 -> "3"   and   events.html?category=music -> "music"
// Returns an empty text when the address has no "=".
function getQueryValue() {
  const addressQuery = window.location.search;
  const equalsPosition = addressQuery.indexOf("=");

  if (equalsPosition === -1) {
    return "";
  }
  return addressQuery.substring(equalsPosition + 1);
}

function showElement(element) {
  element.style.display = "block";
}

function hideElement(element) {
  element.style.display = "none";
}

// Returns the event with the given id, or null when there is none
function findEventById(eventId) {
  for (let i = 0; i < events.length; i++) {
    if (events[i].id === eventId) {
      return events[i];
    }
  }
  return null;
}

// ----- events.html: search and filter -----

// Returns true when the event passes every filter the visitor filled in
function matchesFilters(eventItem, searchText, category, place, fromDate) {
  const textToSearch = eventItem.title + " " + eventItem.summary;

  if (searchText !== "" && textToSearch.indexOf(searchText) === -1) {
    return false;
  }
  if (category !== "" && eventItem.category !== category) {
    return false;
  }
  if (place !== "" && eventItem.place !== place) {
    return false;
  }
  // dates are written as YYYY-MM-DD, so comparing them as text compares them as dates
  if (fromDate !== "" && eventItem.date < fromDate) {
    return false;
  }
  return true;
}

function filterEvents() {
  let visibleCount = 0;

  for (let i = 0; i < events.length; i++) {
    if (
      matchesFilters(
        events[i],
        searchInput.value,
        categoryFilter.value,
        placeFilter.value,
        dateFilter.value,
      )
    ) {
      showElement(eventCards[i]);
      visibleCount++;
    } else {
      hideElement(eventCards[i]);
    }
  }

  resultCount.textContent = visibleCount;
  if (visibleCount === 0) {
    showElement(noResultsAlert);
  } else {
    hideElement(noResultsAlert);
  }
}

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "";
  placeFilter.value = "";
  dateFilter.value = "";
  filterEvents();
}

function setUpEventsPage() {
  searchInput.onkeyup = filterEvents;
  categoryFilter.onchange = filterEvents;
  placeFilter.onchange = filterEvents;
  dateFilter.onchange = filterEvents;
  resetButton.onclick = resetFilters;

  // the quick-category links of the home page open this page as events.html?category=music
  const categoryFromLink = getQueryValue();
  if (categoryFromLink !== "") {
    categoryFilter.value = categoryFromLink;
  }
  filterEvents();
}

// ----- event.html: details of one event -----

// Four related cards are written in the HTML; hide one so that three remain
function hideOneRelatedCard() {
  let cardNumberToHide = RELATED_CARDS_IN_PAGE;

  if (selectedEvent.id <= RELATED_CARDS_IN_PAGE) {
    cardNumberToHide = selectedEvent.id; // do not suggest the event that is already open
  }
  hideElement(relatedCards[cardNumberToHide - 1]);
}

// Turns "2026-10-14" and "18:00" into "20261014T180000" (the format used by Google Calendar)
function toCalendarDate(dateText, timeText) {
  return (
    dateText.split("-").join("") + "T" + timeText.split(":").join("") + "00"
  );
}

function addToCalendar() {
  const startAndEnd = toCalendarDate(selectedEvent.date, selectedEvent.time);
  const calendarAddress =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" +
    encodeURIComponent(selectedEvent.title) +
    "&dates=" +
    startAndEnd +
    "/" +
    startAndEnd +
    "&location=" +
    encodeURIComponent(selectedEvent.place);

  window.open(calendarAddress, "_blank");
}

// A prompt box shows the address in a text field so the visitor can copy and share it
function shareEvent() {
  prompt("انسخ رابط الفعالية وشاركه:", window.location.href);
}

function showEventDetails() {
  selectedEvent = findEventById(parseInt(getQueryValue()));
  if (selectedEvent === null) {
    selectedEvent = events[0]; // unknown or missing id: show the first event
  }

  document.title = selectedEvent.title + " | دليل فعاليات الجامعة الافتراضية";
  eventTitle.textContent = selectedEvent.title;
  eventCategory.className = "badge category-" + selectedEvent.category;
  eventCategory.textContent = categoryNames[selectedEvent.category];
  eventDate.textContent =
    selectedEvent.dateText + " - الساعة " + selectedEvent.time;
  eventPlace.textContent = selectedEvent.place;
  eventDescription.textContent = selectedEvent.description;
  eventImage.src = "assets/img/" + selectedEvent.image;
  eventImage.alt = selectedEvent.title;

  hideOneRelatedCard();

  calendarButton.onclick = addToCalendar;
  shareButton.onclick = shareEvent;
}

// ----- contact.html: form validation -----

function hideAllMessages() {
  hideElement(nameError);
  hideElement(emailError);
  hideElement(messageError);
  hideElement(successAlert);
  hideElement(errorAlert);
}

function validateContactForm() {
  let formIsValid = true;

  hideAllMessages();

  if (nameInput.value.length < MINIMUM_NAME_LENGTH) {
    showElement(nameError);
    formIsValid = false;
  }
  if (emailInput.value.search(EMAIL_PATTERN) === -1) {
    showElement(emailError);
    formIsValid = false;
  }
  if (messageInput.value.length < MINIMUM_MESSAGE_LENGTH) {
    showElement(messageError);
    formIsValid = false;
  }

  if (formIsValid) {
    showElement(successAlert);
    contactForm.reset();
  } else {
    showElement(errorAlert);
  }

  return false; // there is no server, so the form is never really submitted
}

function setUpContactForm() {
  contactForm.onsubmit = validateContactForm;
}

// 4) Execution
if (currentPage === "eventsPage") {
  setUpEventsPage();
} else if (currentPage === "eventPage") {
  showEventDetails();
} else if (currentPage === "contactPage") {
  setUpContactForm();
}
