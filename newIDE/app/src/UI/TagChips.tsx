import {
  RefObject,
  SyntheticEvent,
  createRef,
  useCallback,
  useRef,
  useState,
} from 'react';

import Chip, { ChipInterface } from '../UI/Chip';

type Tags = Array<string>;

const styles = {
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    marginTop: 4,
  },
  chip: {
    marginRight: 4,
    marginBottom: 4,
  },
} as const;

type Props = {
  tags: Tags;
  onRemove: (arg1: string) => void;
};

const TagChips = ({ tags, onRemove }: Props) => {
  const [focusedTag, setFocusedTag] = useState<string | null | undefined>(null);
  const tagsRefs = useRef<RefObject<ChipInterface>[]>([]);

  const getChipStyle = useCallback(
    (tag: string) => {
      const isFocused = !!focusedTag && focusedTag === tag;
      return {
        ...styles.chip,
        filter: isFocused ? 'brightness(1.2)' : undefined,
      };
    },
    [focusedTag]
  );

  const handleDeleteTag = (tag: string) => (event: SyntheticEvent) => {
    const deletedTagIndex = tags.indexOf(tag);
    tagsRefs.current.splice(deletedTagIndex, 1);
    if (event.nativeEvent instanceof KeyboardEvent) {
      const newIndexToFocus = Math.min(
        tagsRefs.current.length - 1,
        deletedTagIndex
      );
      const newTagToFocus = tagsRefs.current[newIndexToFocus];
      if (newTagToFocus && newTagToFocus.current) {
        newTagToFocus.current.focus();
      }
    }
    onRemove(tag);
  };

  if (!tags.length) return null;

  return (
    <div style={styles.chipContainer}>
      {tags.map((tag, index) => {
        const newRef = createRef<ChipInterface>();
        tagsRefs.current[index] = newRef;
        return (
          <Chip
            key={tag}
            size="small"
            style={getChipStyle(tag)}
            onBlur={() => setFocusedTag(null)}
            onFocus={() => setFocusedTag(tag)}
            onDelete={handleDeleteTag(tag)}
            label={tag}
            ref={newRef}
          />
        );
      })}
    </div>
  );
};

export default TagChips;
