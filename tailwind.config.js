/* eslint-disable */
/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

// let defaultConfig = require('tailwindcss/defaultConfig')

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

module.exports = {
  important: false,
  // prefix: '',
  // separator: ':',

  theme: {

    /*
    |-----------------------------------------------------------------------------
    | Colors                                  https://tailwindcss.com/docs/colors
    |-----------------------------------------------------------------------------
    |
    | The color palette defined above is also assigned to the "colors" key of
    | your Tailwind config. This makes it easy to access them in your CSS
    | using Tailwind's config helper. For example:
    |
    | .error { color: config('colors.red') }
    |
    */

    colors: {
      'transparent'  : 'transparent',
      'blue'         : '#3FC5F4',
      'white'        : '#ffffff',
      'black'        : '#000',
      'gray'         : '#F9FAFB',
      'light-gray'   : '#BEBEBE',
      'lighten-gray' : '#EDEDED',
      'main'         : '#2C66DB',
      'second'       : '#1D284C',
      'success'      : '#00A0E9',
      'light-success': '#F7F9FA',
      'primary'      : '#B20000',
      'info'         : '#44C19A',
      'light-info'   : '#03CF5A',
      'danger'       : '#E93F34',
      'indigo'       : '#182354',
      'warning'      : '#FBE056',
      'contact'      : '#0093D1',
    },

    /*
    |-----------------------------------------------------------------------------
    | Screens                      https://tailwindcss.com/docs/responsive-design
    |-----------------------------------------------------------------------------
    |
    | Screens in Tailwind are translated to CSS media queries. They define the
    | responsive breakpoints for your project. By default Tailwind takes a
    | "mobile first" approach, where each screen size represents a minimum
    | viewport width. Feel free to have as few or as many screens as you
    | want, naming them in whatever way you'd prefer for your project.
    |
    | Tailwind also allows for more complex screen definitions, which can be
    | useful in certain situations. Be sure to see the full responsive
    | documentation for a complete list of options.
    |
    | Class name: .{screen}:{utility}
    |
    */

    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1280px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Z-index                                https://tailwindcss.com/docs/z-index
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your z-index utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .z-{index}
    |
    */

    zIndex: {
      'auto': 'auto',
      '0'   : 0,
      '1'   : 1,
      '2'   : 2,
      '3'   : 3,
      '4'   : 4,
      '5'   : 5,
      '6'   : 6,
      '7'   : 7,
      '8'   : 8,
      '9'   : 9,
      '10'  : 10
    },

    /*
    |-----------------------------------------------------------------------------
    | Fonts                                    https://tailwindcss.com/docs/fonts
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your project's font stack, or font families.
    | Keep in mind that Tailwind doesn't actually load any fonts for you.
    | If you're using custom fonts you'll need to import them prior to
    | defining them here.
    |
    | By default we provide a native font stack that works remarkably well on
    | any device or OS you're using, since it just uses the default fonts
    | provided by the platform.
    |
    | Class name: .font-{name}
    |
    */

    // Set to false in configuration
    fontFamily: {
      'sans' : [
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ],
      'serif': [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif'
      ],
      'mono' : [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },

    /*
    |-----------------------------------------------------------------------------
    | Text sizes                         https://tailwindcss.com/docs/text-sizing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text sizes. Name these in whatever way
    | makes the most sense to you. We use size names by default, but
    | you're welcome to use a numeric scale or even something else
    | entirely.
    |
    | By default Tailwind uses the "rem" unit type for most measurements.
    | This allows you to set a root font size which all other sizes are
    | then based on. That said, you are free to use whatever units you
    | prefer, be it rems, ems, pixels or other.
    |
    | Class name: .text-{size}
    |
    */

    fontSize: {
      '8xs'  : '4px',
      '7xs'  : '5px',
      '6xs'  : '6px',
      '5xs'  : '7px',
      '4xs'  : '8px',
      '3xs'  : '9px',
      '2xs'  : '10px',
      'xs-x' : '11px',
      'xs'   : '12px',
      'sm'   : '14px',
      'body2': '15px',
      'base' : '16px',
      default: '16px',
      'lg'   : '18px',
      'body1': '18px',
      'xl'   : '20px',
      'h4'   : '22px',
      '2xl'  : '24px',
      'h3'   : '24px',
      '3xl'  : '28px',
      '4xl'  : '32px',
      '5xl'  : '36px',
      'h2'   : '34px',
      '6xl'  : '48px',
      'h1'   : '48px',
      '7xl'  : '60px',
      '8xl'  : '120px',
      '9xl'  : '160px',
      'xxl'  : '200px',
      '2xxl' : '240px',
    },

    /*
    |-----------------------------------------------------------------------------
    | Font weights                       https://tailwindcss.com/docs/font-weight
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your font weights. We've provided a list of
    | common font weight names with their respective numeric scale values
    | to get you started. It's unlikely that your project will require
    | all of these, so we recommend removing those you don't need.
    |
    | Class name: .font-{weight}
    |
    */

    fontWeight: {
      'thin'     : 100,
      'light'    : 300,
      default    : 400,
      'normal'   : 400,
      'semi-bold': 500,
      'bold'     : 700,

    },

    /*
    |-----------------------------------------------------------------------------
    | Leading (line height)              https://tailwindcss.com/docs/line-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your line height values, or as we call
    | them in Tailwind, leadings.
    |
    | Class name: .leading-{size}
    |
    */

    lineHeight: {
      'none'  : 1,
      'tight' : 1.25,
      'sm'    : '30px',
      'normal': 1.5,
      'lg'    : '36px',
      'loose' : 2,
      '50'    : '50px',
      '60'    : '60px',
      '100'   : '100px',
      '130'   : '130px',
      '150'   : '150px',
      '160'   : '160px',
      '170'   : '170px',
      '180'   : '180px',
      '190'   : '190px',
    },

    /*
    |-----------------------------------------------------------------------------
    | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your letter spacing values, or as we call
    | them in Tailwind, tracking.
    |
    | Class name: .tracking-{size}
    |
    */

    // set to false in configuration
    letterSpacing: {
      'tight' : '-0.05em',
      'normal': '0',
      'wide'  : '0.05em'
    },

    /*
    |-----------------------------------------------------------------------------
    | Text colors                         https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Class name: .text-{color}
    |
    */

    textColor: theme => ({
      inherit: 'inherit',
      ...theme('colors')
    }),

    /*
    |-----------------------------------------------------------------------------
    | Background colors             https://tailwindcss.com/docs/background-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background colors. By default these use
    | the color palette we defined above, however you're welcome to set
    | these independently if that makes sense for your project.
    |
    | Class name: .bg-{color}
    |
    */

    backgroundColor: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Background sizes               https://tailwindcss.com/docs/background-size
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background sizes. We provide some common
    | values that are useful in most projects, but feel free to add other sizes
    | that are specific to your project here as well.
    |
    | Class name: .bg-{size}
    |
    */

    backgroundSize: {
      'auto'   : 'auto',
      'cover'  : 'cover',
      'contain': 'contain'
    },

    /*
    |-----------------------------------------------------------------------------
    | Border widths                     https://tailwindcss.com/docs/border-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border widths. Take note that border
    | widths require a special "default" value set as well. This is the
    | width that will be used when you do not specify a border width.
    |
    | Class name: .border{-side?}{-width?}
    |
    */

    borderWidth: {
      default: '1px',
      '0'    : '0',
      '2'    : '2px',
      '4'    : '4px',
      '8'    : '8px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Border colors                     https://tailwindcss.com/docs/border-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Take note that border colors require a special "default" value set
    | as well. This is the color that will be used when you do not
    | specify a border color.
    |
    | Class name: .border-{color}
    |
    */

    borderColor: theme => ({
      default: theme('colors.grey-light'),
      ...theme('colors')
    }),

    /*
    |-----------------------------------------------------------------------------
    | Border radius                    https://tailwindcss.com/docs/border-radius
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border radius values. If a `default` radius
    | is provided, it will be made available as the non-suffixed `.rounded`
    | utility.
    |
    | If your scale includes a `0` value to reset already rounded corners, it's
    | a good idea to put it first so other values are able to override it.
    |
    | Class name: .rounded{-side?}{-size?}
    |
    */

    borderRadius: {
      'none' : '0',
      'sm'   : '.125rem',
      default: '.25rem',
      'lg'   : '.5rem',
      'full' : '9999px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Width                                    https://tailwindcss.com/docs/width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your width utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale, a percentage
    | based fraction scale, plus some other common use-cases. You
    | can, of course, modify these values as needed.
    |
    |
    | It's also worth mentioning that Tailwind automatically escapes
    | invalid CSS class name characters, which allows you to have
    | awesome classes like .w-2/3.
    |
    | Class name: .w-{size}
    |
    */

    width: {
      'auto'  : 'auto',
      'px'    : '1px',
      '1'     : '0.25rem',
      '2'     : '0.5rem',
      '3'     : '0.75rem',
      '4'     : '1rem',
      '5'     : '1.25rem',
      '6'     : '1.5rem',
      '8'     : '2rem',
      '10'    : '2.5rem',
      '12'    : '3rem',
      '16'    : '4rem',
      '24'    : '6rem',
      '32'    : '8rem',
      '48'    : '12rem',
      '64'    : '16rem',
      '1/2'   : '50%',
      '1/3'   : '33.33333%',
      '2/3'   : '66.66667%',
      '1/4'   : '25%',
      '3/4'   : '75%',
      '1/5'   : '20%',
      '2/5'   : '40%',
      '3/5'   : '60%',
      '4/5'   : '80%',
      '1/6'   : '16.66667%',
      '5/6'   : '83.33333%',
      '1/10'  : '10%',
      '3/10'  : '30%',
      '4/10'  : '40%',
      '7/10'  : '70%',
      '9/10'  : '90%',
      '1/12'  : '8.33333%',
      '2/12'  : '16.66667%',
      '3/12'  : '25%',
      '5/12'  : '41.66667%',
      '6/12'  : '50%',
      '7/12'  : '58.33333%',
      '8/12'  : '66.66667%',
      '9/12'  : '75%',
      '10/12' : '83.33333%',
      '11/12' : '91.66667%',
      '1/15'  : '6.66667%',
      '2/15'  : '13.33333%',
      '4/15'  : '26.66667%',
      '7/15'  : '46.66667%',
      '8/15'  : '53.33333%',
      '11/15' : '73.33333%',
      '13/15' : '86.66667%',
      '14/15' : '93.33333%',
      'full'  : '100%',
      'screen': '100vw'
    },

    /*
    |-----------------------------------------------------------------------------
    | Height                                  https://tailwindcss.com/docs/height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your height utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale plus some other
    | common use-cases. You can, of course, modify these values as
    | needed.
    |
    | Class name: .h-{size}
    |
    */

    height: {
      'fit'   : 'calc(var(--vh) * 100)',
      'auto'  : 'auto',
      'px'    : '1px',
      '1'     : '0.25rem',
      '2'     : '0.5rem',
      '3'     : '0.75rem',
      '4'     : '1rem',
      '5'     : '1.25rem',
      '6'     : '1.5rem',
      '8'     : '2rem',
      '10'    : '2.5rem',
      '12'    : '3rem',
      '16'    : '4rem',
      '24'    : '6rem',
      '32'    : '8rem',
      '48'    : '12rem',
      '64'    : '16rem',
      'screen': '100vh',
      '1/2'   : '50%',
      '1/3'   : '33.33333%',
      '2/3'   : '66.66667%',
      '1/4'   : '25%',
      '3/4'   : '75%',
      '1/5'   : '20%',
      '2/5'   : '40%',
      '3/5'   : '60%',
      '4/5'   : '80%',
      '1/6'   : '16.66667%',
      '5/6'   : '83.33333%',
      '1/10'  : '10%',
      '3/10'  : '30%',
      '4/10'  : '40%',
      '7/10'  : '70%',
      '9/10'  : '90%',
      '1/12'  : '8.33333%',
      '2/12'  : '16.66667%',
      '3/12'  : '25%',
      '5/12'  : '41.66667%',
      '6/12'  : '50%',
      '7/12'  : '58.33333%',
      '8/12'  : '66.66667%',
      '9/12'  : '75%',
      '10/12' : '83.33333%',
      '11/12' : '91.66667%',
      '1/15'  : '6.66667%',
      '2/15'  : '13.33333%',
      '4/15'  : '26.66667%',
      '7/15'  : '46.66667%',
      '8/15'  : '53.33333%',
      '11/15' : '73.33333%',
      '13/15' : '86.66667%',
      '14/15' : '93.33333%',
      'full'  : '100%'
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum width                        https://tailwindcss.com/docs/min-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .min-w-{size}
    |
    */

    minWidth: {
      '0'   : '0',
      'full': '100%'
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum height                      https://tailwindcss.com/docs/min-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | few common use-cases by default. You can, of course, modify these
    | values as needed.
    |
    | Class name: .min-h-{size}
    |
    */

    minHeight: {
      '0'     : '0',
      'full'  : '100%',
      'screen': '100vh',
      'fit'   : 'calc(var(--vh) * 100)'
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum width                        https://tailwindcss.com/docs/max-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based scale and a "full width" size,
    | which is basically a reset utility. You can, of course,
    | modify these values as needed.
    |
    | Class name: .max-w-{size}
    |
    */

    maxWidth: {
      'xs'  : '20rem',
      'sm'  : '30rem',
      'md'  : '40rem',
      'lg'  : '50rem',
      'xl'  : '60rem',
      '2xl' : '70rem',
      '3xl' : '80rem',
      '4xl' : '90rem',
      '5xl' : '100rem',
      'full': '100%'
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .max-h-{size}
    |
    */

    maxHeight: {
      'full'  : '100%',
      'screen': '100vh'
    },

    /*
    |-----------------------------------------------------------------------------
    | Padding                                https://tailwindcss.com/docs/padding
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your padding utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .p{side?}-{size}
    |
    */

    padding: {
      'px'  : '1px',
      'base': '2.2rem',
      '0'   : '0',
      '1'   : '0.25rem',
      '2'   : '0.5rem',
      '3'   : '0.75rem',
      '4'   : '1rem',
      '5'   : '1.25rem',
      '6'   : '1.5rem',
      '8'   : '2rem',
      '10'  : '2.5rem',
      '12'  : '3rem',
      '16'  : '4rem',
      '20'  : '5rem',
      '24'  : '6rem',
      '28'  : '7rem',
      '32'  : '8rem',
      '36'  : '9rem',
      '40'  : '10rem',
      '44'  : '11rem',
      '48'  : '12rem',
      '52'  : '13rem',
      '56'  : '14rem',
      '60'  : '15rem',
      '70'  : '16rem',
      '74'  : '17rem',
      '78'  : '18rem',
      '82'  : '19rem',
      '84'  : '20rem',
      '90'  : '21rem'
    },

    /*
    |-----------------------------------------------------------------------------
    | Margin                                  https://tailwindcss.com/docs/margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your margin utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .m{side?}-{size}
    |
    */

    margin: {
      'auto': 'auto',
      'px'  : '1px',
      'base': '2.2rem',
      '0'   : '0',
      '1'   : '0.25rem',
      '2'   : '0.5rem',
      '3'   : '0.75rem',
      '4'   : '1rem',
      '5'   : '1.25rem',
      '6'   : '1.5rem',
      '8'   : '2rem',
      '10'  : '2.5rem',
      '12'  : '3rem',
      '16'  : '4rem',
      '20'  : '5rem',
      '24'  : '6rem',
      '32'  : '8rem',
      '40'  : '40px',
      '-px' : '-1px',
      '-1'  : '-0.25rem',
      '-2'  : '-0.5rem',
      '-3'  : '-0.75rem',
      '-4'  : '-1rem'
    },

    order: {
      first : '-1',
      last  : '999',
      normal: '0',
      '1'   : '1',
      '2'   : '2',
      '3'   : '3',
      '4'   : '4',
      '5'   : '5',
      '6'   : '6'
    },

    container: {
      center : true,
      padding: '1rem'
    },

    /*
    |-----------------------------------------------------------------------------
    | Shadows                                https://tailwindcss.com/docs/shadows
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your shadow utilities. As you can see from
    | the defaults we provide, it's possible to apply multiple shadows
    | per utility using comma separation.
    |
    | If a `default` shadow is provided, it will be made available as the non-
    | suffixed `.shadow` utility.
    |
    | Class name: .shadow-{size?}
    |
    */

    boxShadow: {
      default  : '0 2px 4px 0 rgba(0,0,0,0.10)',
      'md'     : '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      'lg'     : '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'inner'  : 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'xl'     : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl'    : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'outline': '0 0 0 3px rgba(52,144,220,0.5)',
      'none'   : 'none',
      'drop'   : '0 2px 8px 0 rgba(0,0,0,0.14)'
    },

    /*
    |-----------------------------------------------------------------------------
    | Opacity                                https://tailwindcss.com/docs/opacity
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your opacity utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .opacity-{name}
    |
    */

    // NOTE: IF YOU WANT TO CUSTOMIZE OPACITY THAN UNCOMMENT BELOW OBJECT AND EDIT
    // ELSE JUST REMOVE IT OR COMMENT IT FOR LATER CUSTOMIZATION
    // opacity: {
    //   '0': '0',
    //   '25': '.25',
    //   '50': '.5',
    //   '75': '.75',
    //   '100': '1',
    // },

    /*
    |-----------------------------------------------------------------------------
    | SVG fill                                   https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG fill colors. By default we just provide
    | `fill-current` which sets the fill to the current text color. This lets you
    | specify a fill color using existing text color utilities and helps keep the
    | generated CSS file size down.
    |
    | Class name: .fill-{name}
    |
    */

    fill: {
      'current': 'currentColor'
    },

    /*
    |-----------------------------------------------------------------------------
    | SVG stroke                                 https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG stroke colors. By default we just provide
    | `stroke-current` which sets the stroke to the current text color. This lets
    | you specify a stroke color using existing text color utilities and helps
    | keep the generated CSS file size down.
    |
    | Class name: .stroke-{name}
    |
    */

    stroke: {
      'current': 'currentColor'
    }
  },

  /*
  |-----------------------------------------------------------------------------
  | variants                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  variants: {
    appearance          : [ 'responsive' ],
    backgroundAttachment: [ 'responsive' ],
    backgroundColor     : [ 'responsive', 'hover', 'focus' ],
    // backgroundPosition: ['responsive'],
    // backgroundRepeat: ['responsive'],
    backgroundSize   : [ 'responsive' ],
    borderCollapse   : [],
    borderColor      : [ 'responsive', 'hover' ],
    borderRadius     : [],
    borderStyle      : [ 'responsive' ],
    borderWidth      : [ 'responsive' ],
    cursor           : [],
    display          : [ 'responsive' ],
    flexDirection    : [ 'responsive' ],
    flexWrap         : [ 'responsive' ],
    alignItems       : [ 'responsive' ],
    alignSelf        : [ 'responsive' ],
    justifyContent   : [ 'responsive' ],
    alignContent     : [ 'responsive' ],
    flex             : [ 'responsive' ],
    flexGrow         : [ 'responsive' ],
    flexShrink       : [ 'responsive' ],
    float            : [ 'responsive' ],
    fontWeight       : [ 'responsive', 'hover' ],
    height           : [ 'responsive' ],
    lineHeight       : [ 'responsive' ],
    listStylePosition: [ 'responsive' ],
    // listStyleType: ['responsive'],
    margin        : [ 'responsive' ],
    maxHeight     : [ 'responsive' ],
    maxWidth      : [ 'responsive' ],
    minHeight     : [ 'responsive' ],
    minWidth      : [ 'responsive' ],
    negativeMargin: [ 'responsive' ],
    opacity       : [ 'responsive' ],
    outline       : [ 'focus' ],
    overflow      : [ 'responsive' ],
    order         : [ 'responsive', 'hover', 'focus' ],
    padding       : [ 'responsive' ],
    pointerEvents : [ 'responsive' ],
    position      : [ 'responsive' ],
    inset         : [ 'responsive' ],
    resize        : [ 'responsive' ],
    boxShadow     : [ 'responsive', 'hover', 'focus' ],
    fill          : [],
    stroke        : [],
    tableLayout   : [ 'responsive' ],
    textAlign     : [ 'responsive' ],
    textColor     : [ 'responsive', 'hover', 'focus' ],
    fontSize      : [ 'responsive' ],
    fontStyle     : [ 'responsive', 'hover', 'focus' ],
    fontSmoothing : [ 'responsive', 'hover', 'focus' ],
    textDecoration: [ 'responsive', 'hover', 'focus' ],
    textTransform : [ 'responsive', 'hover', 'focus' ],
    userSelect    : [ 'responsive' ],
    verticalAlign : [ 'responsive' ],
    visibility    : [ 'responsive' ],
    whitespace    : [ 'responsive' ],
    wordBreak     : [ 'responsive' ],
    width         : [ 'responsive' ],
    zIndex        : [ 'responsive' ]
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [],

  corePlugins: {
    fontFamily        : false,
    letterSpacing     : false,
    backgroundPosition: false,
    backgroundRepeat  : false,
    listStyleType     : false
  }
}
/* eslint-enable */
