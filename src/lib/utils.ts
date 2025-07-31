const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export function displayDate(d: Date): string {
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}