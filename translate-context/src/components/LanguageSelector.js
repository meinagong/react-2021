import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag cn"
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          className="flag de"
          onClick={() => this.context.onLanguageChange('dutsch')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
