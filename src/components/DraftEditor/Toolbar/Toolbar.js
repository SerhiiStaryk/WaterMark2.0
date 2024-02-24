import React, { useContext } from 'react';
import { RichUtils } from 'draft-js';
import { FaBold, FaItalic, FaUnderline } from 'react-icons/fa';

import { AppContext } from '../../../store/app-context';

const Toolbar = ({ setEditorState }) => {
  const { content, setContentHtml } = useContext(AppContext);

  const tools = [
    {
      label: 'bold',
      style: 'BOLD',
      icon: <FaBold />,
      method: 'inline'
    },
    {
      label: 'italic',
      style: 'ITALIC',
      icon: <FaItalic />,
      method: 'inline'
    },
    {
      label: 'underline',
      style: 'UNDERLINE',
      icon: <FaUnderline />,
      method: 'inline'
    }
  ];

  const applyStyle = (e, style, method) => {
    e.preventDefault();
    method === 'block'
      ? setContentHtml(RichUtils.toggleBlockType(content, style))
      : setContentHtml(RichUtils.toggleInlineStyle(content, style));
  };

  const isActive = (style, method) => {
    if (method === 'block') {
      const selection = content.getSelection();
      const blockType = content
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
      return blockType === style;
    } else {
      const currentStyle = content.getCurrentInlineStyle();
      return currentStyle.has(style);
    }
  };

  return (
    <div className="toolbar-grid">
      {tools.map((item, idx) => (
        <button
          style={{
            color: isActive(item.style, item.method)
              ? 'rgba(0, 0, 0, 1)'
              : 'rgba(0, 0, 0, 0.3)'
          }}
          key={`${item.label}-${idx}`}
          title={item.label}
          onClick={e => applyStyle(e, item.style, item.method)}
          onMouseDown={e => e.preventDefault()}
        >
          {item.icon || item.label}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
