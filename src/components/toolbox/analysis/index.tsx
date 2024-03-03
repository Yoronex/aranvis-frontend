import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import CyclicalDependencies from './CyclicalDependencies';
import SubLayerViolations from './SubLayerViolations';
import { ViolationsContext } from '../../../context';
import IntermediateCheckbox from '../../IntermediateCheckbox';
import { VisibilityOptions } from '../../../helpers/enums';
import ColoringMode from './ColoringMode';

export default function ToolboxAnalysis() {
  const { visibility, setVisibility } = useContext(ViolationsContext);

  const toggleNonViolationsVisibility = () => {
    const newValue = visibility.nonViolations === VisibilityOptions.VISIBLE
      ? VisibilityOptions.INVISIBLE : VisibilityOptions.VISIBLE;
    setVisibility({
      ...visibility,
      nonViolations: newValue,
    });
  };

  return (
    <div className="d-flex flex-column gap-3">
      <ColoringMode />
      <h4>Violations</h4>
      <Form>
        <IntermediateCheckbox
          label="Show non-violations in visualization"
          indeterminate={visibility.nonViolations === VisibilityOptions.VISIBLE}
          checked={false}
          onChange={toggleNonViolationsVisibility}
          id="non-violations-visibility-checkbox"
        />
      </Form>
      <CyclicalDependencies />
      <SubLayerViolations />
    </div>
  );
}
