/**
 * Author : Amit Kumar <eramitec9@gmail.com>
 * Sr. software Engineer
 * 
 * @param {*} inputSentence If you require an algorithm with a logarithmic time complexity, you would need to change the nature of the problem you're solving, as string manipulation inherently involves processing each character. If you have a different specific problem in mind that could be solved with 
 * @returns 
 */

exports.capitalisedString =  (inputSentence) => {
    let splitLearnCoding = inputSentence.split(" ");
    let capletter = splitLearnCoding.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capletter.join(" ");
};
// Testing 
//let index =require('./index.js');
// let input ="If you require an algorithm with a logarithmic time complexity, you would need to change the nature of the problem you're solving, as string manipulation inherently involves processing each character. If you have a different specific problem in mind that could be solved with "
// let output =  index.capitalisedString(input)
// console.log(output)