// Add your code here
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * Custom IoTeach blocks
 */
//% weight=100 color=#FF1493
namespace IoTeach {
    /**
    * Blow on the virtual propeller!
    */
    //% block
    export function Blow (person: string, lung_capacity: number, diameter_bronchioli_mm: number) {
    let datapunt
    datapunt = 0
    basic.pause(100 / diameter_bronchioli_mm)
    serial.writeValue(person, datapunt)
    for (let index = 0; index <= 7; index++) {
        datapunt = datapunt + lung_capacity * diameter_bronchioli_mm / (index + 1)
        basic.pause(100 / diameter_bronchioli_mm)
        serial.writeValue(person, datapunt)
    }
    for (let index = 0; index < lung_capacity / 2; index++) {
        datapunt += lung_capacity * diameter_bronchioli_mm / 40
        basic.pause(100 / diameter_bronchioli_mm)
        serial.writeValue(person, datapunt)
    }
    for (let index = 0; index < lung_capacity / 2; index++) {
        datapunt += lung_capacity * diameter_bronchioli_mm / -40
        basic.pause(100 / diameter_bronchioli_mm)
        serial.writeValue(person, datapunt)
    }
    while (datapunt > 1.5) {
        datapunt = datapunt - datapunt / 10
        serial.writeValue(person, datapunt)
        basic.pause(100)
    }
    basic.pause(500)
};
}