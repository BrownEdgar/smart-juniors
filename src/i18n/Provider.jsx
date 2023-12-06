import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import messages from './messages';
import { LOCALES } from './locale';

export default function Provider({ children, locale }) {
	return (
		<IntlProvider textComponent={Fragment} locale={locale} messages={messages[locale]}>
			{children}
		</IntlProvider>
	);
}

Provider.defaultProps = {
	locale: LOCALES.ENGLISH,
};

Provider.propTypes = {
	children: PropTypes.object.isRequired,
	locale: PropTypes.string,
};
