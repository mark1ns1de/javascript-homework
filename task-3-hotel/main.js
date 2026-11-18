import { bookRoom, findRoom, getAvailableRooms } from "./booking.js";

console.log("Доступні номери до бронювання", getAvailableRooms().map((room) => room.id));
console.log("Пошук номера №2", findRoom(2));

console.log("Номер №1 на 3 ночі", bookRoom(1, 3));
console.log("Номер №2 на 5 ночей", bookRoom(2, 5));
console.log("Номер №3 на 2 ночі", bookRoom(3, 2));

console.log("Доступні номери після бронювання", getAvailableRooms().map((room) => room.id));
