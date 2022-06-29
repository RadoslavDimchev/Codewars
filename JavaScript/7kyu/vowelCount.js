/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    let count = 0;

    for (const char of str) {
        switch (char) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
                break;
        }
    }

    return count;
}

//second solution
/* function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    const characters = str.split('');
    for (const char of characters) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
} */

console.log(getCount('abracadabra'));