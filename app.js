// Εδώ λέω στη Javascript να πάει στο html μου και να βρει το html tag που έχει id canvas
const ctx = document.getElementById('canvas').getContext('2d');

const legraObj = new legra(ctx);

// #### Γράμμα C ####
// Δημιουργώ μία καμπύλη
legraObj.arc(5, 5, 5, 5, Math.PI*0.2, Math.PI * 1.7, true, {
    filled: true,
    color: '#f85d6b'
});

// #### Γράμμα O ####
// Δημιουργώ έναν κύκλο
legraObj.circle(17, 5, 5, {
    filled: true,
    color: '#a77bb6'
});

// #### Γράμμα D ####
// Δημιουργώ ένα τετράγωνο
legraObj.rectangle(25, 0, 1, 11, {
    filled: true, color: '#f0b51b'
});
// Δημιουργώ μία καμπύλη
legraObj.arc(26, 5, 5, 5, -Math.PI*0.5, Math.PI * 0.5, true, {
    filled: true,
    color: '#f0b51b'
});

// #### Γράμμα E ####
// Δημιουργώ ένα τετράγωνο
legraObj.rectangle(34, 0, 3, 11, {
    filled: true, color: '#4b78b1'
});

// Δημιουργώ ένα τετράγωνο
legraObj.rectangle(37, 3, 2, 8, {
    filled: true, color: '#4b78b1'
});

// Δημιουργώ ένα τετράγωνο
legraObj.rectangle(39, 5, 2, 6, {
    filled: true, color: '#4b78b1'
});