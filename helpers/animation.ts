

export const slideUp = {
    hidden: {y: 100, opacity: 0},
    visible: (i=0) => ({y: 0, opacity: 1, transition: {
        ease: 'easeInOut',
        duration: .9,
        delay: i
    }})
}

export const fadeIn = {
    hidden: { opacity: 0},
    visible: (i=0) => ({ opacity: 1, transition: {
        ease: 'easeInOut',
        duration: .9,
        delay: i
    }})
}


export const slideToRight = {
    hidden: {x: -100, opacity: 0},
    visible: (i=0) => ({x: 0, opacity: 1, transition: {
    ease: 'easeInOut',
    duration: .9,
    delay: i
}}) 
}

export const slideToLeft = {
    hidden: {x: 100, opacity: 0},
    visible: (i=0) => ({x: 0, opacity: 1, transition: {
    ease: 'easeInOut',
    duration: .9,
    delay: i
}}) 
}

export const slideDown = {
    hidden: {y: -100, opacity: 0},
    visible: (i = 0) => ({y: 0, opacity: 1,  transition: {
    ease: 'easeInOut',
    duration: .9,
    delay: i
}}),
   
}

export const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 0.6
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
}

export const item = {
    visible: { opacity: 1, x: 0,  transition: {
        ease: 'easeInOut',
        duration: .9,
    } },
    hidden: { opacity: 0, x: -100,   },
}

export const itemSlideUp = {
    visible: { opacity: 1, y: 0, transition: {
        ease: 'easeInOut',
        duration: .9,
    } },
    hidden: { opacity: 0, y: 100 },
}