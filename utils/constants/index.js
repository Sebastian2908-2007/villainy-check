export const COOKIE_NAME ="logincookie";
export const ADMIN_COOKIE_NAME ="superadmincookie";
export const PAID_ADMIN_COOKIE_NAME = 'paidadmincookie';
export const MAX_AGE = 60 * 60 * 24 * 30; // days;

export const recommendOptions = [
    "ideal right start left",
    "ideal right mid left",
    "ideal right far left",
    "start right ideal left",
    "start right start left",
    "start right mid left",
    "start right far left",
    "mid right ideal left",
    "mid right start left",
    "mid right mid left",
    "mid right far left",
    "far right ideal left",
    "far right start left",
    "far right mid left",
    "far right far left",
    "Ideal"
];

export const answerTypeOptions = [
    "far right",
    "mid right",
    "start right",
    "far left",
    "mid left",
    "start left",
    "mid"
];

export const trueFalseOptions = [
    "false",
    "true"
];
//A=Right
//B=Left
//start = mild
// mid = high
// far = severly high
/*
ideal right ideal left  =  "Ideal"
* ideal right start left  =  "start left",
* ideal right mid left  =  "mid left",
* ideal right far left  =  "far left",
* start right ideal left  =  "start right",
* start right start left  =  "equals b&a start",
* start right mid left  

* start right far left  =  

* mid right ideal left  =  "mid right",

 mid right start left  =  
 mid right mid left  =  "equals b&a mid",
 mid right far left  =  
 far right ideal left  =  "far right"
 far right start left  =  
far right mid left  =  
 far right far left  =  "equals b&a far",

*/