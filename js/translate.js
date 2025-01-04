var formSuccessMessageEnglish = "Thank you for filling out the form! We will be reaching out back to you very soon with more information.";
var formSuccessMessageSpanish = "¡Muchas gracias por rellenar nuestro formulario! Nos pondremos en contacto con más información a la mayor brevedad.";


function sendMail() {

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        location: document.getElementById("location").value,
        message: document.getElementById("message").value,
        event_type: document.getElementById("event-type").value,
        event_date: document.getElementById("date").value
    };


    var currentLanguage = document.body.getAttribute('lang'); // Assuming lang attribute is used to store the language (e.g., 'en' or 'es')



    //moi
    //zWIw_YHvGUyZFJIPr
    const serviceID = "service_j4zfgbl";
    const templateID = "template_in5h2cm";

    //Rebel 
    //pk uszj9LtkA0ytQ8LF2
    // const serviceID = "service_9cbzpys";
    // const templateID = "template_krz074s";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Reset dropdown to default
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("location").value = "";
            document.getElementById("event-type").value = "";
            document.getElementById("date").value = "mm/dd/yyyy";

            document.getElementById("message").value = "";
            console.log(res);


            if (currentLanguage === "es") {
                
                // Spanish message
                alert(formSuccessMessageSpanish);
            } else {
                // Default to English message
                alert(formSuccessMessageEnglish);
            }

        })
        .catch(err => {
            console.log(err);
            alert("There was an error sending your message. Please try again.");
        });



}



// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiry time in days
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie value by its name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to delete a cookie by its name
function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
}

// Function to update content based on selected language
function updateLanguage(language) {
    var langData = data[language]; // Get the corresponding language data
    var page = document.body.getAttribute('page'); // Get the current page from the body attribute

    // Needed to let the form alert success what language to use for the message
    if (language === "english") {
        document.body.setAttribute("lang", "en");
    } else {
        document.body.setAttribute("lang", "es");  // Set to Spanish
    }

    // Check if the page has data in the selected language
    if (langData[page]) {
        var sectionData = langData[page];

        // Iterate through the keys in the selected page's section and update elements on the page
        for (var id in sectionData) {
            var element = document.getElementById(id);
            if (element) {
                element.innerText = sectionData[id]; // Update the element's content
            }
        }
    } else {
        console.warn('No translation data available for page: ' + page);
    }

    // Update additional sections like navbar and footer using explicitUpdate function
    explicitUpdate('navbar', langData);
    explicitUpdate("footer-slogan", langData);

    // Set a cookie to remember the selected language
    setCookie("language", language, 30); // Save the language choice for 30 days
}

// Function to update a specific section of the page (navbar, footer, etc.)
function explicitUpdate(section, langData) {
    var sectionData = langData[section];
    for (var itemId in sectionData) {
        var navElement = document.getElementById(itemId);
        if (navElement) {
            navElement.innerText = sectionData[itemId]; // Update navbar link text
        }
    }
}

// Check the cookie on page load and update the language accordingly
window.onload = function () {
    var storedLang = getCookie("language"); // Get the stored language from the cookie
    if (storedLang) {
        updateLanguage(storedLang); // Apply the stored language if found
    } else {
        // Default to English if no language cookie is found
        updateLanguage("english");
    }
};

// Event listener for the English button
document.getElementById("englishBtn").addEventListener("click", function () {
    updateLanguage("english");
});

// Event listener for the Spanish button
document.getElementById("spanishBtn").addEventListener("click", function () {
    updateLanguage("spanish");
});



var data = {
    "english": {
        "aboutus": {
            "p1": "Welcome to Rebel Strings, where the vibrancy of music meets the elegance of string performance. Founded by a group of passionate musicians, Rebel Strings has quickly become a premier entertainment company specializing in high-end events. Our signature electric violin performances infuse traditional string music with modern flair, creating an unforgettable experience for every audience.",
            "p2": "At Rebel Strings, we believe that music is not just heard—it's felt. That's why we strive to deliver performances that not only entertain but also inspire. Each member of our team is a master of their craft, bringing years of training and experience to the stage. From corporate events and private parties to grand weddings and cultural celebrations, we tailor our performances to suit the unique atmosphere of your event.",
            "p3": "Our commitment to excellence is evident in every note we play. We pride ourselves on our professionalism, creativity, and flexibility, ensuring that every aspect of the musical entertainment is seamless and impactful. Choose Rebel Strings for your next event and let us bring the magic of live music to your special occasion.",
            "p4": "Join us in our journey of musical exploration and innovation. Rebel Strings is not just a performance group; we are a movement that celebrates the power and beauty of music.",

        },
        "services": {
            "p1": "At Rebel Strings, we believe your event deserves a unique soundtrack! Let us help you customize the perfect musical experience, whether it’s an enchanting atmosphere for your ceremony or high-energy vibes for a celebration. Our talented musicians are here to bring your vision to life and create unforgettable memories for you and your guests.",
            "p2": "Check out some of our most sought-after services to inspire your planning!",
            "heading1": "Electric Strings",
            "p3": "Light up your event with our electrifying Electric Strings! Our dynamic professional violinists bring high energy and versatility, rocking everything from classical to pop. Get ready for a captivating fusion of sound that will leave your audience buzzing with excitement!",
            "heading2": "Electric Strings + DJ Fusion",
            "p4": "Elevate your event with our Electric Strings + DJ combo! Enjoy the magic of live electric strings paired with a skilled DJ who reads the room, creating the perfect atmosphere for both cocktail hours and lively parties. This interactive experience keeps the energy flowing and your guests engaged, making every moment unforgettable!",
            "heading3": "Acoustic Strings",
            "p5": "Transform your event with our amplified Acoustic Strings! Perfect for any genre, our elegant ensembles bring a sophisticated vibe to intimate settings. Experience the magic of classical instruments that will leave your guests spellbound and elevate every moment!",
            "heading4": "Acoustic Strings + Piano",
            "p6": "Celebrate your special day with the timeless elegance of our Acoustic Strings + Piano duo! Perfect for ceremonies, this beautiful blend of piano and strings creates a classic atmosphere that enhances every moment. Let us add a touch of sophistication and charm to your celebration, creating lasting memories for you and your guests!",
            "heading5": "Your Vision, Our Expertise",
            "p7": "No matter your musical needs, we’re here to adapt and create the perfect soundtrack for your event. Let’s make your celebration memorable together!",

        },
        "multimedia": {
            "p1": "Discover photos, and video samples that showcase our dynamic performances and the magic we bring to every high-end event.",
            "heading1": "PHOTOS/VIDEOS",
            "p2": "Stay tuned for the latest news and updates by following us on social media!",

        },

        "contact": {
            "heading1": "Contact Form",
            "p1": "Please, fill the following form with as much detail as you can provide. Any information given will be used to provide you with a better personalized answer, the more we know about you and your event, the better we can tailor our approach.",
            "name-form": "Name",
            "email-form": "Email",
            "message-form": "Message",
            "submit-form": "Submit",

            "date-label" : "Preferred Date",
            "location-form" : "Location",
            "dropdown-label" : "Event Type",
            "option-1" : "Wedding",
            "option-2" : "Birthday",
            "option-3" : "Corporate Event",
            "option-4" : "Nightlife(Club/Lounge/Restaurant)",
            "option-5" : "General Inquiry",
            
        },

        "index": {
            "exploreButton": "Explore"
        },
        "navbar": {
            "aboutus": "About Us",
            "services": "Services",
            "multimedia": "Multimedia",
            "contact": "Contact",
        },
        "footer-slogan": {
            "slogan": "MAKE IT MEMORABLE | MAKE IT REBEL",
            "book-now": "Book Now",
        }

    },
    "spanish": {
        "aboutus": {
            "introText": "",
            "p1": "Bienvenido a Rebel Strings, donde la vitalidad de la música se une a la elegancia de la interpretación con instrumentos de cuerda. Fundada por un grupo de músicos profesionales apasionados, Rebel Strings se ha convertido rápidamente en una empresa de entretenimiento de primer nivel especializada en eventos de lujo. Nuestras características actuaciones con violín eléctrico aportan un toque moderno a la música de cuerda tradicional, creando una experiencia inolvidable para todos los públicos.",
            "p2": "En Rebel Strings creemos que la música no solo se escucha, sino que también se siente. Por eso nos esforzamos en ofrecer actuaciones que cautiven y inspiren. Todos y cada uno de los miembros que conforman nuestro equipo son profesionales altamente cualificados, con años de formación y una amplia experiencia en el escenario, lo que garantiza un alto nivel de excelencia en cada actuación. Adaptamos nuestras actuaciones a la atmósfera única de cada ocasión, ya sean eventos corporativos, fiestas privadas, bodas o celebraciones culturales.",
            "p3": "Nuestro compromiso con la excelencia se refleja en cada aspecto del entretenimiento musical. Nos enorgullecemos de nuestra profesionalidad, creatividad y flexibilidad, y garantizamos que cada aspecto del servicio musical sea perfecto e impactante. Elija Rebel Strings para su próximo evento y permítanos llevar la magia de la música en vivo a su ocasión especial.",
            "p4": "Únase a nosotros en nuestro viaje de exploración e innovación musical. Rebel Strings no es simplemente un elenco de artistas; somos un movimiento que celebra el poder y la belleza de la música.",
            "slogan": "MAKE IT MEMORABLE | MAKE IT REBEL",
        },
        "services": {
            "p1": "En Rebel Strings, creemos que cada evento merece todo el mimo y la mejor música para ser un rotundo éxito. Permitidnos ayudaros a personalizar vuestra experiencia y la de vuestros invitados. Desde una elegante ceremonia a una fiesta totalmente exclusiva para vuestra celebración. Nuestro equipo trabajará para hacer realidad vuestra visión y conseguir que vuestro día sea único y memorable.",
            "p2": "¡Descubre algunos de nuestros servicios más solicitados y comienza a tomar inspiración!",
            "heading1": "Electric Strings",
            "p3": "¡Dadle un toque diferente a vuestro evento con nuestros violines eléctricos! Nuestros talentosos violinistas profesionales ofrecen una energía y versatilidad increíbles, interpretando desde clásicos hasta los éxitos más modernos. ¡Preparáos para una fusión de estilos cautivadora que dejará a vuestros invitados vibrando de emoción!",
            "heading2": "Electric Strings + DJ Fusion",
            "p4": "¡Haced de vuestro cóctel o fiesta una experiencia exclusiva! Disfrutad de la energía y la magia de nuestra pareja de violines eléctricos en vivo interactuando con un DJ experto en crear la atmósfera y energía más selecta para vuestros invitados. ¡La opción más exclusiva para un día memorable!",
            "heading3": "Acoustic Strings",
            "p5": "¡Dadle un toque de sofisticación y elegancia a vuestro evento con nuestros ensembles clásicos amplificados! Perfectos para todos los géneros. Experimentad la magia y versatilidad de los instrumentos clásicos amplificados mientras nuestra música os envuelve por completo. ¡Un toque distintivo para vuestra ceremonia!",
            "heading4": "Acoustic Strings + Piano",
            "p6": "¡Recordad vuestro día de la manera más especial con un clásico atemporal! Nuestro dúo Piano y Violín es la combinación perfecta para ceremonias con una atmósfera clásica y elegante. Permitidnos añadir el toque de sofisticación y encanto a vuestra celebración creando momentos inolvidables para vosotros y vuestros invitados.",
            "heading5": "Su Visión, Nuestra Especialidad",
            "p7": "No hay petición musical que no podamos hacer realidad, nuestro objetivo es escuchar y aconsejar a la hora de crear la banda sonora perfecta para tu evento. ¡Haced de vuestra celebración un recuerdo inolvidable para todos!",
        },
        "multimedia": {
            "p1": "Disfruta de esta selección de fotos y videos que muestran nuestro dinamismo y profesionalidad mientras creamos magia en cada evento.",
            "heading1": "FOTOS/VIDEOS",
            "p2": "Si todavía no lo haces, síguenos en nuestras redes sociales para ver más vídeos y fotos, así como noticias e información acerca de nuestros servicios.",
        },

        "contact": {
            "heading1": "Contáctanos",
            "p1": "Si has hecho click en esta pestaña es porque quieres ponerte en contacto conmigo. Así que si tienes preguntas, quieres saber un poquito más sobre mí o quieres contar conmigo para algún evento, no dudes en escribirme al siguiente email. Estaré encantada de atender tu consulta.",
            "name-form": "Nombre",
            "email-form": "Correo",
            "message-form": "Mensaje",
            "submit-form": "Enviar",


            "date-label" : "Fecha",
            "location-form" : "Ubicación",
            "dropdown-label" : "Tipo de Evento",
            "option-1" : "Boda",
            "option-2" : "Cumpleaños",
            "option-3" : "Evento Empresa",
            "option-4" : "Nightlife(Club/Lounge/Restaurant)",
            "option-5" : "Otro",
            
        },
        "index": {
            "exploreButton": "Explorar"
        },
        "navbar": {
            "aboutus": "Bio",
            "services": "Servicios",
            "multimedia": "Galería",
            "contact": "Contactar",

        },
        "footer-slogan": {
            "slogan": "MAKE IT MEMORABLE | MAKE IT REBEL",
            "book-now": "Reservar Ahora",
        }


    }
}

