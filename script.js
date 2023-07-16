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
        orderNumber: "430",
        status: "started",
        item: "Disco Chill Pill",
        checks: 0,
    },
    {
        orderNumber: "429",
        status: "not started",
        item: "Custom Mirror for Lulus store",
        checks: 0,
    },
    {
        orderNumber: "427",
        status: "not started",
        item: "Mini Disco Earth",
        checks: 0,
    },
    {
        orderNumber: "426",
        status: "started",
        item: "Custom 9 inch Disco Letters/Disco Queen",
        checks: 0,
    },
    {
        orderNumber: "424",
        status: "not started",
        item: "Small Disco Mirror with Large Mirror Tiles",
        checks: 0,
    },
    {
        orderNumber: "423",
        status: "not started",
        item: "Medium disco mirror",
        checks: 0,
    },
    {
        orderNumber: "422",
        status: "not started",
        item: "24 inch Disco Saturn ball",
        checks: 0,
    },
    {
        orderNumber: "420",
        status: "not started",
        item: "Medium Rectangular Disco Mirror",
        checks: 0,
    },
    {
        orderNumber: "419",
        status: "not started",
        item: "10x8 inch custom heart mirror",
        checks: 0,
    },
    {
        orderNumber: "415",
        status: "started",
        item: "Blue and Silver Striped Disco Mirror",
        checks: 0,
    },
    {
        orderNumber: "414",
        status: "not started",
        item: "Custom Flower Disco Ball",
        checks: 0,
    },
    {
        orderNumber: "413",
        status: "started",
        item: "Disco lightning bolt",
        checks: 0,
    },
    {
        orderNumber: "412",
        status: "started",
        item: "Disco Shark second listing",
        checks: 0,
    },
    {
        orderNumber: "411",
        status: "started",
        item: "Custom 5 foot Disco Shark",
        checks: 0,
    },
    {
        orderNumber: "210",
        status: "started",
        item: "14 inch Saturn",
        checks: 0,
    },
];

var input = $(".orderNoInput").val();
var statusResult = $(".statusOutput");
var purchasedItem = $(".itemOutput");

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

$(".status-btn").on("click", function() {
    orderData.forEach(function() {
        if ($(".orderNoInput").val() == orderData.orderNumber) {
            console.log("Match found! Status: " + orderData.status);
        } else {
        	console.log("No match found for " + $(".orderNoInput").val());
        }
    });
});