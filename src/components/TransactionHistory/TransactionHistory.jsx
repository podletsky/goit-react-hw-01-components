import PropTypes from 'prop-types';
import {TransactionTable,  TransactionHead, TransactionText, TransactionBody} from 'components/TransactionHistory/TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <TransactionHead>
                <tr>
                    <TransactionText>Type</TransactionText>
                    <TransactionText>Amount</TransactionText>
                    <TransactionText>Currency</TransactionText>
                </tr>
            </TransactionHead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} >
                        <TransactionBody>{type}</TransactionBody>
                        <TransactionBody>{amount}</TransactionBody>
                        <TransactionBody>{currency}</TransactionBody>
                    </tr>
                ))}
            </tbody>
        </TransactionTable>
    );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};