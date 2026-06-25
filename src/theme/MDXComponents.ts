import MDXComponents from '@theme-original/MDXComponents';
import Card from '@site/src/components/Card';
import CardGroup from '@site/src/components/CardGrid';

// Make <Card> and <CardGroup> available in every MDX page (Mintlify-style) without imports.
export default {
  ...MDXComponents,
  Card,
  CardGroup,
};
