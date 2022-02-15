console.log(document.querySelector(".note-form"));

// Try using these one at a time
document.querySelector(".note-form").style.removeProperty("top", "bottom", "margin-left", "width")

document.querySelector(".note-form").removeAttribute('style'); document.querySelector(".note-form").style.cssText = 'z-index:1061;display:block;height:68%';


// Serial or GSX Repair
const target = document.querySelector(".claim-number").children;
const serial = target[0].nextSibling.textContent.trim();
const serialLink = "https://gsx2.apple.com/product-details/";
const gsxLink = "https://gsx2.apple.com/repairs/";
if (target.length < 2) {
    window.open(serialLink + serial, "_blank");
} else {
    const gsx = target[1].nextSibling.textContent.trim();
    window.open(gsxLink + gsx, "_blank");
};

// Single Line
const target = document.querySelector(".claim-number").children; const serial = target[0].nextSibling.textContent.trim(); const serialLink = "https://gsx2.apple.com/product-details/"; const gsxLink = "https://gsx2.apple.com/repairs/"; if (target.length < 2) { window.open(serialLink + serial, "_blank"); } else { const gsx = target[1].nextSibling.textContent.trim(); window.open(gsxLink + gsx, "_blank"); };


// document.querySelector(".claim-number").append(`<a href=https://gsx2.apple.com/repairs/G525538951> GSX Link </a>`)


// GSX to RepairQ
const rpq = document.querySelectorAll(".content")[0].textContent;
const ticket = rpq.substring(5);
console.log(ticket);
const url = `https://simplymac.repairq.io/ticket/view/${ticket}`;
window.open(url, "_blank");


// RepairQ Info to GSX

const infoTarget = document.querySelectorAll(".controls");
const emailRaw = document.querySelectorAll(".span6")[0].textContent.trim();

const customerInfo = {
    name: "Place Holder",
    email: emailRaw.substring(28),
    phone: infoTarget[3].textContent.trim(),
    address: infoTarget[15].textContent.trim(),
    addressTwo: infoTarget[16].textContent.trim(),
    city: infoTarget[17].textContent.trim(),
    zip: infoTarget[19].textContent.trim(),
}

console.log(customerInfo);

const dummy = {
    name: "Place Holder",
    email: "paul.anies@bengroup.com",
    phone: "(323) 360-2503",
    address: "1712 SE Bay blvd",
    addressTwo: "Suite 101",
    city: "Provo",
    zip: "84606",
}


const phone = infoTarget[3].textContent.trim();

const address = infoTarget[15].textContent.trim();

const addressTwo = infoTarget[16].textContent.trim();

const city = infoTarget[17].textContent.trim();

const zip = infoTarget[17].textContent.trim();
