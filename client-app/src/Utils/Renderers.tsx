import React from "react";
import { Label, SearchResultProps } from "semantic-ui-react";

export const searchResultRenderer : (p: SearchResultProps) => React.ReactElement = (item) => <Label content={item.name} />
