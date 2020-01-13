# CDebugOverlayScriptHelper
Function|Description|Client
--|--|:--:
[void Axis(Vector_1, Quaternion_2, float_3, bool_4, float_5)](Axis)|Draws an axis. Specify origin + orientation in world space.|✔
[void Box(Vector_1, Vector_2, int_3, int_4, int_5, int_6, bool_7, float_8)](Box)|Draws a world-space axis-aligned box. Specify bounds in world space.|✔
[void BoxAngles(Vector_1, Vector_2, Vector_3, Quaternion_4, int_5, int_6, int_7, int_8, bool_9, float_10)](BoxAngles)|Draws an oriented box at the origin. Specify bounds in local space.|✔
[void Capsule(Vector_1, Quaternion_2, float_3, float_4, int_5, int_6, int_7, int_8, bool_9, float_10)](Capsule)|Draws a capsule. Specify base in world space.|✔
[void Circle(Vector_1, Quaternion_2, float_3, int_4, int_5, int_6, int_7, bool_8, float_9)](Circle)|Draws a circle. Specify center in world space.|✔
[void CircleScreenOriented(Vector_1, float_2, int_3, int_4, int_5, int_6, bool_7, float_8)](CircleScreenOriented)|Draws a circle oriented to the screen. Specify center in world space.|✔
[void Cone(Vector_1, Vector_2, float_3, float_4, int_5, int_6, int_7, int_8, bool_9, float_10)](Cone)|Draws a wireframe cone. Specify endpoint and direction in world space.|✔
[void Cross(Vector_1, float_2, int_3, int_4, int_5, int_6, bool_7, float_8)](Cross)|Draws a screen-aligned cross. Specify origin in world space.|✔
[void Cross3D(Vector_1, float_2, int_3, int_4, int_5, int_6, bool_7, float_8)](Cross3D)|Draws a world-aligned cross. Specify origin in world space.|✔
[void Cross3DOriented(Vector_1, Quaternion_2, float_3, int_4, int_5, int_6, int_7, bool_8, float_9)](Cross3DOriented)|Draws an oriented cross. Specify origin in world space.|✔
[void DrawTickMarkedLine(Vector_1, Vector_2, float_3, int_4, int_5, int_6, int_7, int_8, bool_9, float_10)](DrawTickMarkedLine)|Draws a dashed line. Specify endpoints in world space.|✔
[void EntityAttachments(ehandle_1, float_2, float_3)](EntityAttachments)|Draws the attachments of the entity|✔
[void EntityAxis(ehandle_1, float_2, bool_3, float_4)](EntityAxis)|Draws the axis of the entity origin|✔
[void EntityBounds(ehandle_1, int_2, int_3, int_4, int_5, bool_6, float_7)](EntityBounds)|Draws bounds of an entity|✔
[void EntitySkeleton(ehandle_1, float_2)](EntitySkeleton)|Draws the skeleton of the entity|✔
[void EntityText(ehandle_1, int_2, string_3, int_4, int_5, int_6, int_7, float_8)](EntityText)|Draws text on an entity|✔
[void FilledRect2D(Vector2D_1, Vector2D_2, int_3, int_4, int_5, int_6, float_7)](FilledRect2D)|Draws a screen-space filled 2D rectangle. Coordinates are in pixels.|✔
[void HorzArrow(Vector_1, Vector_2, float_3, int_4, int_5, int_6, int_7, bool_8, float_9)](HorzArrow)|Draws a horizontal arrow. Specify endpoints in world space.|✔
[void Line(Vector_1, Vector_2, int_3, int_4, int_5, int_6, bool_7, float_8)](Line)|Draws a line between two points|✔
[void Line2D(Vector2D_1, Vector2D_2, int_3, int_4, int_5, int_6, float_7)](Line2D)|Draws a line between two points in screenspace|✔
[void PopDebugOverlayScope()](PopDebugOverlayScope)|Pops the identifier used to group overlays. Overlays marked with this identifier can be deleted in a big batch.|✔
[void PushAndClearDebugOverlayScope(utlstringtoken_1)](PushAndClearDebugOverlayScope)|Pushes an identifier used to group overlays. Deletes all existing overlays using this overlay id.|✔
[void PushDebugOverlayScope(utlstringtoken_1)](PushDebugOverlayScope)|Pushes an identifier used to group overlays. Overlays marked with this identifier can be deleted in a big batch.|✔
[void RemoveAllInScope(utlstringtoken_1)](RemoveAllInScope)|Removes all overlays marked with a specific identifier, regardless of their lifetime.|✔
[void SolidCone(Vector_1, Vector_2, float_3, float_4, int_5, int_6, int_7, int_8, bool_9, float_10)](SolidCone)|Draws a solid cone. Specify endpoint and direction in world space.|✔
[void Sphere(Vector_1, float_2, int_3, int_4, int_5, int_6, bool_7, float_8)](Sphere)|Draws a wireframe sphere. Specify center in world space.|✔
[void SweptBox(Vector_1, Vector_2, Vector_3, Vector_4, Quaternion_5, int_6, int_7, int_8, int_9, float_10)](SweptBox)|Draws a swept box. Specify endpoints in world space and the bounds in local space.|✔
[void Text(Vector_1, int_2, string_3, float_4, int_5, int_6, int_7, int_8, float_9)](Text)|Draws 2D text. Specify origin in world space.|✔
[void Texture(string_1, Vector2D_2, Vector2D_3, int_4, int_5, int_6, int_7, Vector2D_8, Vector2D_9, float_10)](Texture)|Draws a screen-space texture. Coordinates are in pixels.|✔
[void Triangle(Vector_1, Vector_2, Vector_3, int_4, int_5, int_6, int_7, bool_8, float_9)](Triangle)|Draws a filled triangle. Specify vertices in world space.|✔
[void UnitTestCycleOverlayRenderType()](UnitTestCycleOverlayRenderType)|Toggles the overlay render type, for unit tests|✔
[void VectorText3D(Vector_1, Quaternion_2, string_3, int_4, int_5, int_6, int_7, bool_8, float_9)](VectorText3D)|Draws 3D text. Specify origin + orientation in world space.|✔
[void VertArrow(Vector_1, Vector_2, float_3, int_4, int_5, int_6, int_7, bool_8, float_9)](VertArrow)|Draws a vertical arrow. Specify endpoints in world space.|✔
[void YawArrow(Vector_1, float_2, float_3, float_4, int_5, int_6, int_7, int_8, bool_9, float_10)](YawArrow)|Draws a arrow associated with a specific yaw. Specify endpoints in world space.|✔
