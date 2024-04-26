const names = ['sakib', 'rahimm', 'khorgosh', 'prio', 'tushar', 'jui'];
const evenLength = [];

const result = names => {
    for (const element of names) {
        if (element.length % 2 === 0) {
            evenLength.push(element, element.length);
        }
    }
    return evenLength ;
}

console.log(result(names));