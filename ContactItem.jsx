var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  },

  render: function() {
    return (<li className='Contact'>
      <h2>{ this.props.name }</h2>
      <a href={ "mailto:" + this.props.email }>{ this.props.email }</a>
    </li>);
    }
});

module.exports = ContactItem;
