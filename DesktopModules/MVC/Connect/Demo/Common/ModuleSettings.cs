using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Modules.Settings;

namespace Connect.DNN.Modules.Demo.Common
{
    public class ModuleSettings
    {
        [ModuleSetting]
        public string View { get; set; } = "Index";

        [PortalSetting(Prefix = "ConnectDemo_")]
        public string MySetting { get; set; } = "Foo";

        public static ModuleSettings GetSettings(ModuleInfo module)
        {
            var repo = new ModuleSettingsRepository();
            return repo.GetSettings(module);
        }

        public void SaveSettings(ModuleInfo module)
        {
            var repo = new ModuleSettingsRepository();
            repo.SaveSettings(module, this);
        }
    }
    public class ModuleSettingsRepository : SettingsRepository<ModuleSettings>
    {
    }
}