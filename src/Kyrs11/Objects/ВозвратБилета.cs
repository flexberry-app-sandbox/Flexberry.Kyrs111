﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kyrs11
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Возврат билета.
    /// </summary>
    // *** Start programmer edit section *** (ВозвратБилета CustomAttributes)

    // *** End programmer edit section *** (ВозвратБилета CustomAttributes)
    [AutoAltered()]
    [Caption("Возврат билета")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ВозвратБилетаE", new string[] {
            "Покупатель as \'Покупатель\'",
            "Покупатель.БанковскийСчет as \'Банковский счет\'",
            "ДатаПокупки as \'Дата покупки\'",
            "ПричинаВозв as \'Причина Возврата\'"})]
    [MasterViewDefineAttribute("ВозвратБилетаE", "Покупатель", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    public class ВозвратБилета : ICSSoft.STORMNET.DataObject
    {
        
        private string fПричинаВозв;
        
        private System.DateTime fДатаПокупки;
        
        private IIS.Kyrs11.Покупатель fПокупатель;
        
        private IIS.Kyrs11.ПокупИлиВозвБ fПокупИлиВозвБ;
        
        // *** Start programmer edit section *** (ВозвратБилета CustomMembers)

        // *** End programmer edit section *** (ВозвратБилета CustomMembers)

        
        /// <summary>
        /// ДатаПокупки.
        /// </summary>
        // *** Start programmer edit section *** (ВозвратБилета.ДатаПокупки CustomAttributes)

        // *** End programmer edit section *** (ВозвратБилета.ДатаПокупки CustomAttributes)
        public virtual System.DateTime ДатаПокупки
        {
            get
            {
                // *** Start programmer edit section *** (ВозвратБилета.ДатаПокупки Get start)

                // *** End programmer edit section *** (ВозвратБилета.ДатаПокупки Get start)
                System.DateTime result = this.fДатаПокупки;
                // *** Start programmer edit section *** (ВозвратБилета.ДатаПокупки Get end)

                // *** End programmer edit section *** (ВозвратБилета.ДатаПокупки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВозвратБилета.ДатаПокупки Set start)

                // *** End programmer edit section *** (ВозвратБилета.ДатаПокупки Set start)
                this.fДатаПокупки = value;
                // *** Start programmer edit section *** (ВозвратБилета.ДатаПокупки Set end)

                // *** End programmer edit section *** (ВозвратБилета.ДатаПокупки Set end)
            }
        }
        
        /// <summary>
        /// ПричинаВозв.
        /// </summary>
        // *** Start programmer edit section *** (ВозвратБилета.ПричинаВозв CustomAttributes)

        // *** End programmer edit section *** (ВозвратБилета.ПричинаВозв CustomAttributes)
        [StrLen(255)]
        public virtual string ПричинаВозв
        {
            get
            {
                // *** Start programmer edit section *** (ВозвратБилета.ПричинаВозв Get start)

                // *** End programmer edit section *** (ВозвратБилета.ПричинаВозв Get start)
                string result = this.fПричинаВозв;
                // *** Start programmer edit section *** (ВозвратБилета.ПричинаВозв Get end)

                // *** End programmer edit section *** (ВозвратБилета.ПричинаВозв Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВозвратБилета.ПричинаВозв Set start)

                // *** End programmer edit section *** (ВозвратБилета.ПричинаВозв Set start)
                this.fПричинаВозв = value;
                // *** Start programmer edit section *** (ВозвратБилета.ПричинаВозв Set end)

                // *** End programmer edit section *** (ВозвратБилета.ПричинаВозв Set end)
            }
        }
        
        /// <summary>
        /// Возврат билета.
        /// </summary>
        // *** Start programmer edit section *** (ВозвратБилета.Покупатель CustomAttributes)

        // *** End programmer edit section *** (ВозвратБилета.Покупатель CustomAttributes)
        [PropertyStorage(new string[] {
                "Покупатель"})]
        [NotNull()]
        public virtual IIS.Kyrs11.Покупатель Покупатель
        {
            get
            {
                // *** Start programmer edit section *** (ВозвратБилета.Покупатель Get start)

                // *** End programmer edit section *** (ВозвратБилета.Покупатель Get start)
                IIS.Kyrs11.Покупатель result = this.fПокупатель;
                // *** Start programmer edit section *** (ВозвратБилета.Покупатель Get end)

                // *** End programmer edit section *** (ВозвратБилета.Покупатель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВозвратБилета.Покупатель Set start)

                // *** End programmer edit section *** (ВозвратБилета.Покупатель Set start)
                this.fПокупатель = value;
                // *** Start programmer edit section *** (ВозвратБилета.Покупатель Set end)

                // *** End programmer edit section *** (ВозвратБилета.Покупатель Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Kyrs11.ПокупИлиВозвБ.
        /// </summary>
        // *** Start programmer edit section *** (ВозвратБилета.ПокупИлиВозвБ CustomAttributes)

        // *** End programmer edit section *** (ВозвратБилета.ПокупИлиВозвБ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ПокупИлиВозвБ"})]
        public virtual IIS.Kyrs11.ПокупИлиВозвБ ПокупИлиВозвБ
        {
            get
            {
                // *** Start programmer edit section *** (ВозвратБилета.ПокупИлиВозвБ Get start)

                // *** End programmer edit section *** (ВозвратБилета.ПокупИлиВозвБ Get start)
                IIS.Kyrs11.ПокупИлиВозвБ result = this.fПокупИлиВозвБ;
                // *** Start programmer edit section *** (ВозвратБилета.ПокупИлиВозвБ Get end)

                // *** End programmer edit section *** (ВозвратБилета.ПокупИлиВозвБ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВозвратБилета.ПокупИлиВозвБ Set start)

                // *** End programmer edit section *** (ВозвратБилета.ПокупИлиВозвБ Set start)
                this.fПокупИлиВозвБ = value;
                // *** Start programmer edit section *** (ВозвратБилета.ПокупИлиВозвБ Set end)

                // *** End programmer edit section *** (ВозвратБилета.ПокупИлиВозвБ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ВозвратБилетаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВозвратБилетаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВозвратБилетаE", typeof(IIS.Kyrs11.ВозвратБилета));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ВозвратБилета.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfВозвратБилета CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfВозвратБилета CustomAttributes)
    public class DetailArrayOfВозвратБилета : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Kyrs11.DetailArrayOfВозвратБилета members)

        // *** End programmer edit section *** (IIS.Kyrs11.DetailArrayOfВозвратБилета members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ВозвратБилета by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ВозвратБилета.
        /// </summary>
        public DetailArrayOfВозвратБилета(IIS.Kyrs11.ПокупИлиВозвБ fПокупИлиВозвБ) : 
                base(typeof(ВозвратБилета), ((ICSSoft.STORMNET.DataObject)(fПокупИлиВозвБ)))
        {
        }
        
        public IIS.Kyrs11.ВозвратБилета this[int index]
        {
            get
            {
                return ((IIS.Kyrs11.ВозвратБилета)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Kyrs11.ВозвратБилета dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
