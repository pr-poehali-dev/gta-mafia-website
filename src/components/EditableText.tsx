import { useState, useRef, useEffect } from 'react';

interface EditableTextProps {
  text: string;
  onSave: (newText: string) => void;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  multiline?: boolean;
}

const EditableText = ({ text, onSave, className = '', tag = 'p', multiline = false }: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if ('select' in inputRef.current) {
        inputRef.current.select();
      }
    }
  }, [isEditing]);

  const handleSave = () => {
    if (value.trim() !== text) {
      onSave(value.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      setValue(text);
      setIsEditing(false);
    }
  };

  const Tag = tag;

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className={`${className} bg-black/50 border border-red-600 rounded px-2 py-1 resize-none`}
          rows={4}
        />
      );
    }
    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className={`${className} bg-black/50 border border-red-600 rounded px-2 py-1`}
      />
    );
  }

  return (
    <Tag
      onClick={() => setIsEditing(true)}
      className={`${className} cursor-pointer hover:bg-white/5 rounded px-2 py-1 transition-all group relative`}
    >
      {text}
      <span className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 text-white text-xs px-2 py-1 rounded">
        ✏️ Редактировать
      </span>
    </Tag>
  );
};

export default EditableText;
