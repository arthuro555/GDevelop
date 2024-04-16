import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from '../UI/Chip';

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
  tags: Tags,
  onRemove: (arg1: string) => void
};

const TagChips = ({
  tags,
  onRemove,
}: Props) => {
  const [focusedTag, setFocusedTag] = React.useState<string | null | undefined>(null);
  const tagsRefs = React.useRef([]);

  const getChipStyle = React.useCallback(
    (tag: string) => {
      const isFocused = !!focusedTag && focusedTag === tag;
      return {
        ...styles.chip,
        filter: isFocused ? 'brightness(1.2)' : undefined,
      };
    },
    [focusedTag]
  );

// @ts-expect-error - TS1005 - ',' expected. | TS7005 - Variable 'any' implicitly has an 'any' type. | TS1005 - ';' expected.
  const handleDeleteTag = (tag: string) => event: any => {
    const deletedTagIndex = tags.indexOf(tag);
    tagsRefs.current.splice(deletedTagIndex, 1);
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2339 - Property 'nativeEvent' does not exist on type 'Event'.
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
        const newRef = React.createRef();
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
// @ts-expect-error - TS1128 - Declaration or statement expected.
};

export default TagChips;
