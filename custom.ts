/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * Custom radio blocks
 */
//% weight=100 color=#FF1493
namespace IoTeach {
    /**
    * niks
    */
    //% block
    export function Blazen () {
    let datapunt
    datapunt = 0
    basic.pause(100 / diameter_bronchioli_mm)
    serial.writeValue(Persoon, datapunt)
    for (let index = 0; index <= 7; index++) {
        datapunt = datapunt + longcapaciteit_L * diameter_bronchioli_mm / (index + 1)
        basic.pause(100 / diameter_bronchioli_mm)
        serial.writeValue(Persoon, datapunt)
    }
    for (let index = 0; index < longcapaciteit_L / 2; index++) {
        datapunt += longcapaciteit_L * diameter_bronchioli_mm / 40
        basic.pause(100 / diameter_bronchioli_mm)
        serial.writeValue(Persoon, datapunt)
    }
    for (let index = 0; index < longcapaciteit_L / 2; index++) {
        datapunt += longcapaciteit_L * diameter_bronchioli_mm / -40
        basic.pause(100 / diameter_bronchioli_mm)
        serial.writeValue(Persoon, datapunt)
    }
    while (datapunt > 1.5) {
        datapunt = datapunt - datapunt / 10
        serial.writeValue(Persoon, datapunt)
        basic.pause(100)
    }
    basic.pause(500)
};
}