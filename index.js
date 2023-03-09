// condicion ? true : flase 

const variable = true

variable ? console.log('es true') : console.log ('es false')

if (variable) {
    console.log('es true')
} else {
    console.log('es false')
}

// spread 

const names = ['Juan', 'Pepito', 'Maria']

const copy = [...names]

const copyMap = names.map(name => name)

