const firebaseConfig = {
    apiKey: "AIzaSyCq_QvmdfC68G_vKYE-UdLJCn7JoqsJ7kc",
    authDomain: "statuschecker-83fef.firebaseapp.com",
    projectId: "statuschecker-83fef",
    storageBucket: "statuschecker-83fef.appspot.com",
    messagingSenderId: "326054019156",
    appId: "1:326054019156:web:ad02edd21d4b9e338eadc1",
    measurementId: "G-GE2J0QW2C5"
};

firebase.initializeApp(firebaseConfig);

let orderData = [{
        orderNumber: "00430",
        status: "started",
        item: "Disco Chill Pill",
    },
    {
        orderNumber: "00429",
        status: "not started",
        item: "Custom Mirror for Lulus store",
    },
    {
        orderNumber: "00427",
        status: "not started",
        item: "Mini Disco Earth",
    },
    {
        orderNumber: "00426",
        status: "started",
        item: "Custom 9 inch Disco Letters/Disco Queen",
    },
    {
        orderNumber: "00424",
        status: "not started",
        item: "Small Disco Mirror with Large Mirror Tiles",
    },
    {
        orderNumber: "00423",
        status: "not started",
        item: "Medium disco mirror",
    },
    {
        orderNumber: "00422",
        status: "not started",
        item: "24 inch Disco Saturn ball",
    },
    {
        orderNumber: "00420",
        status: "not started",
        item: "Medium Rectangular Disco Mirror",
    },
    {
        orderNumber: "00419",
        status: "not started",
        item: "10x8 inch custom heart mirror",
    },
    {
        orderNumber: "00415",
        status: "started",
        item: "Blue and Silver Striped Disco Mirror",
    },
    {
        orderNumber: "00414",
        status: "not started",
        item: "Custom Flower Disco Ball",
    },
    {
        orderNumber: "00413",
        status: "started",
        item: "Disco lightning bolt",
    },
    {
        orderNumber: "00412",
        status: "started",
        item: "Disco Shark second listing",
    },
    {
        orderNumber: "00411",
        status: "started",
        item: "Custom 5 foot Disco Shark",
    },
    {
        orderNumber: "00210",
        status: "started",
        item: "14 inch Saturn",
    },
];

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

var database = firebase.database().ref();

// Add data to the database
database.set({
        orderData
        // Add more key-value pairs as needed
    })
    .then(function() {
        console.log("Data added successfully.");
    })
    .catch(function(error) {
        console.error("Error adding data: ", error);
    });

var usersRef = firebase.database().ref("info");
usersRef.set({
    orderData
    // Add more key-value pairs as needed
});