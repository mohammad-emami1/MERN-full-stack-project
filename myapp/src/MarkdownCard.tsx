import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PropTypes from 'prop-types';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import './MarkdownCard.css';

interface MarkdownCardProps {
  color?: string;
  title?: string;
  content?: string;
  titlePosition?: 'left' | 'center' | 'right';
}

const MarkdownCard: React.FC<MarkdownCardProps> = ({ 
  color = '#3498db', 
  title = 'Default Title', 
  content = '', 
  titlePosition = 'center' 
}) => {

  const renderers = {
    text: (props: { children?: string }) => {
      const text = props.children || '';
      if (text.match(/\$\$[^\$]*\$\$/)) {
        return <MathJax dynamic>{text}</MathJax>;
      } else if (text.match(/\$[^\$]*\$/)) {
        return <MathJax inline dynamic>{text}</MathJax>;
      } else {
        return <span>{text}</span>;
      }
    },
  };

  // Ensure MathJax re-renders LaTeX expressions after content updates
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typeset();
    }
  }, [content]);

  return (
    <MathJaxContext>
      <div 
        className="markdown-card" 
        style={{ backgroundColor: `${color}33` }}
      >
        <div 
          className={`markdown-card-title ${titlePosition}`} 
          style={{ backgroundColor: color }}
        >
          {title}
        </div>
        <div className="markdown-card-content">
          <ReactMarkdown 
            components={renderers} 
            children={content} 
            remarkPlugins={[remarkGfm]} 
          />
        </div>
      </div>
    </MathJaxContext>
  );
};

MarkdownCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  titlePosition: PropTypes.oneOf(['left', 'center', 'right'])
};

export default MarkdownCard;
