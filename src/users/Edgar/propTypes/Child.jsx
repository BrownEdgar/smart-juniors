import PropTypes from 'prop-types'

export default function Child({ count, name }) {
  return (
    <div>
      <h2>Count {count}</h2>
      <h2>{name.toUpperCase()}</h2>
    </div>
  )
}

Child.defaultProps = {
  name: "Karen"
}

Child.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  handleClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string,
  gender: PropTypes.oneOf(['male', "female"]).isRequired,
  age: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  obj: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      userId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  )
}

////////////////////////////////////////////////////////////////////////////////
// PropTypes: Ծառայում է Տիպային ստուգումներ անցկացնելու համար։
// - Գտնվում է առանձին 'prop-types' գրադարանի մեջ!
////////////////////////////////////////////////////////////////////////////////

// Տիպերի ստուգման Օրինակներ
// value: PropTypes.array, 
// value: PropTypes.bool,
// value: PropTypes.func,
// value: PropTypes.number,
// value: PropTypes.object,
// value: PropTypes.string,
// value: PropTypes.symbol,


// Կարելի է ավելացնել `isRequired` ցանկացած տիպի համար,
// որպեսզի հարուցվի զգուշացում, եթե այն փոխանցած չէ,
// requiredFunc: PropTypes.func.isRequired,

// --------------------------------------------------------------

// Ցանկացած տիպի արժեք
//  requiredAny: PropTypes.any.isRequired,

// --------------------------------------------------------------

//  React-элемент
//  PropTypes.element,

// --------------------------------------------------------------

// Կոնկրետ նշվածներից մեկը
// PropTypes.oneOf(['male', 'female']),

// --------------------------------------------------------------

// Օբյեկտ, նշված տիպերի ինչ-որ մեկը
// optionalUnion: PropTypes.oneOfType([
//   PropTypes.oneOf(['male', 'female']),
//   PropTypes.number
// ])

// --------------------------------------------------------------

// Կոնկրետ տիպով օբյեկտների զանգված
//optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

// --------------------------------------------------------------

// Օբյեկտ, որի հատկությունները ունեն կոնկրետ տիպ
//optionalObjectOf: PropTypes.objectOf(PropTypes.number),

// --------------------------------------------------------------

// Օբյեկտ նախորոք որոշված կառուցվածքով
// optionalObjectWithShape: PropTypes.shape({
// 	color: PropTypes.string,
// 	fontSize: PropTypes.number
// }),

// --------------------------------------------------------------

// Օբյեկտ ԽԻՍՏ  կառուցվածքով
// Չհայտարարված հատկություններ դեպքում կգեներացվեն warning-ներ
// optionalObjectWithStrictShape: PropTypes.exact({
// 	name: PropTypes.string,
// 	quantity: PropTypes.number
// }),

// --------------------------------------------------------------



