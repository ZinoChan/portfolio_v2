

export const slideUp = {
    hidden: {y: 100, opacity: 0},
    visible: (i=0) => ({y: 0, opacity: 1, transition: {
        ease: 'easeInOut',
        duration: .5,
        delay: i
    }})
}


export const slideToRight = {
    hidden: {x: -100, opacity: 0},
    visible: (i=0) => ({x: 0, opacity: 1, transition: {
    ease: 'easeInOut',
    duration: .5,
    delay: i
}}) 
}

export const slideToLeft = {
    hidden: {x: 100, opacity: 0},
    visible: (i=0) => ({x: 0, opacity: 1, transition: {
    ease: 'easeInOut',
    duration: .5,
    delay: i
}}) 
}

export const slideDown = {
    hidden: {y: -100, opacity: 0},
    visible: (i = 0) => ({y: 0, opacity: 1,  transition: {
    ease: 'easeInOut',
    duration: .5,
    delay: i
}}),
   
}

