/** The JS equivalent of gd.PropertyDescriptor */
type EnumeratedProperty = {
  name: string;
  type: string;
  description: string;
  group: string;
  label: string;
  value: string;
  extraInfo: Array<string>;
  isHidden: boolean;
};

export const toGdPropertyDescriptor = (
  enumeratedProperty: EnumeratedProperty,
  propertyDescriptor: gd.PropertyDescriptor
): gd.PropertyDescriptor => {
  propertyDescriptor
    .setType(enumeratedProperty.type)
    .setDescription(enumeratedProperty.description)
    .setGroup(enumeratedProperty.group)
    .setLabel(enumeratedProperty.label)
    .setValue(enumeratedProperty.value)
    .setHidden(enumeratedProperty.isHidden);

  enumeratedProperty.extraInfo.forEach((extraInfo) => {
    propertyDescriptor.addExtraInfo(extraInfo);
  });

  return propertyDescriptor;
};
